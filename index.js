const fs = require("fs-extra")
const axios = require("axios")
const path = require("path")
const prettier = require("prettier")
const chalk = require("chalk")
const log = console.log

function isFile (path) {
  return fs.existsSync(path) && fs.statSync(path).isFile()
}

/**
 * Find the closest package.json file, starting at process.cwd (by default),
 * and working up to root.
 * @param   {string} [startDir=process.cwd()] Starting directory
 * @returns {string}                          Absolute path to closest package.json file
 */
function findPackageJson (startDir) {
  let dir = path.resolve(startDir || process.cwd())

  do {
    const pkgFile = path.join(dir, "package.json")

    if (!fs.existsSync(pkgFile) || !fs.statSync(pkgFile).isFile()) {
      dir = path.join(dir, "..")
      continue
    }
    return pkgFile
  } while (dir !== path.resolve(dir, ".."))
  return null
}

/**
  * fork from findPackageJson，get package.json dir
  * @returns {string}  Absolute path to closest package.json file dir
  */
function findPackageJsonDir (startDir) {
  let dir = path.resolve(startDir || process.cwd())

  do {
    const pkgFile = path.join(dir, "package.json")

    if (!fs.existsSync(pkgFile) || !fs.statSync(pkgFile).isFile()) {
      dir = path.join(dir, "..")
      continue
    }
    return dir
  } while (dir !== path.resolve(dir, ".."))
  return null
}

/**
 * get a object from package.json
 * @param   {Object}  opt                 Options Object
 * @param   {boolean} opt.startdir        Directory to begin searching from
 * @returns {Object}                      A object from package.json
 */
function getPkgJson (opt) {
  const pkgJson = opt ? findPackageJson(opt.startDir) : findPackageJson()
  let fileJson

  if (!pkgJson) {
    throw new Error(
      "Could not find a package.json file. Run 'npm init' to create one."
    )
  }

  try {
    fileJson = JSON.parse(fs.readFileSync(pkgJson, "utf8"))
  } catch (e) {
    const error = new Error(e)

    error.messageTemplate = "failed-to-read-json"
    error.messageData = {
      path: pkgJson,
      message: e.message,
    }
    throw error
  }

  if (!fileJson.yapi) {
    throw new Error(
      "Could not find field `yapi` in package.json file. Check it."
    )
  }

  return fileJson
}

const pkgJsonDir = findPackageJsonDir()
const pkgJson = getPkgJson()

const OPTIONS = {
  // host 是 yapi 的地址
  host: pkgJson.yapi.host,
  // 获取新项目接口一般就是改 token，
  token: pkgJson.yapi.token,
  path: pkgJson.yapi.path || "/api/interface/list_menu",

  // 直接使用数据文件。如果有该字段，会直接使用， 不再请求 yapi 接口。
  // 数据文件地址, 相对于 package.json
  localFilePath: pkgJson.yapi.localFilePath || null,

  // 相对于 package.json，默认生成到 pkg 同级目录下
  outputDir: (function () {
    if (pkgJson.yapi.outputDir) {
      return path.join(pkgJsonDir, pkgJson.yapi.outputDir)
    } else {
      return path.join(pkgJsonDir, "./")
    }
  }()),
  fileName: pkgJson.yapi.fileName || "apiConfig",
}

handleSrouce()

/**
 * 主要处理函数
 * @param {array} source yapi源数据
 */
function handleSrouce () {
  // log(`┗|｀O′|┛ 先清一波旧数据 ${OPTIONS.outputDir}`)
  let url = ""
  const gen = function (source) {
    fs.ensureDir(OPTIONS.outputDir, function () {
      fs.writeFile(
        `${OPTIONS.outputDir}/${OPTIONS.fileName}.js`,
        prettier.format(generateJsApiContent(source), { parser: "babel" })
      )
      log(`┗|｀O′|┛ 写入 ${path.resolve(OPTIONS.outputDir, OPTIONS.fileName)}.js `)
    })
  }
  if (OPTIONS.localFilePath) {
    url = path.join(pkgJsonDir, OPTIONS.localFilePath)
    if (!isFile(url)) {
      log(chalk.red(`ERR! package.json yapi.localFilePath is not a file. path.resolve: ${url}. `))
      return false
    }

    const result = JSON.parse(fs.readFileSync(url, "utf8"))
    const source = result.data
    gen(source)
  } else {
    url = `${OPTIONS.host}${OPTIONS.path}?token=${OPTIONS.token}`
    log(`┗|｀O′|┛  ${url}`)
    axios
      .get(url)
      .then((res) => {
      // 可参考 ./listMenu.json
        const result = res.data
        const source = result.data
        gen(source)
      })
  }
}

/**
 * 拼接内容
 * @param {array} list yapi数组
 */
function generateJsApiContent (source) {
  // 生成一段
  const genrSingleConent = function (list) {
    let result = ""
    list.forEach((item) => {
      // 函数名最少由两个词组成， 上不封顶
      // const funcNameWordNum = item.path.split("/").length <= 3 ? -2 : 2
      const funcName = reservedWord(getPathWords(item.path, 1))
      result += `
          // ${item.title}
          // doc: ${OPTIONS.host}/project/${item.project_id}/interface/api/${item._id}
          {
            funcName: "${funcName}",
            method: "${item.method}",
            url: "${item.path}",
          },
      `
    })
    return result
  }

  const symbolSource = {}
  source.forEach((module) => {
    if (module.list.length === 0) return
    module.list.forEach(item => {
      const firstPath = item.path
      const fileName = getPathWords(firstPath, "1,2")
      if (symbolSource[fileName]) {
        symbolSource[fileName].list.push(item)
      } else {
        symbolSource[fileName] = {
          name: module.name,
          desc: module.desc,
          list: [item],
        }
      }
    })
  })

  let fileContent = `
      /* eslint-disable */
        export default [
    `
  for (const fileName in symbolSource) {
    const module = symbolSource[fileName]

    if (module.list.length === 0) return
    // "/api/Advise/update" => "Advise"
    // const firstPath = module.list[0].path
    // const fileName = getPathWords(firstPath, "1,2")
    fileContent += `
      /**
       * ==================================================
       *  ${module.name}
       *  ${module.desc}
       * ==================================================
       */
      ${genrSingleConent(module.list)}
    `
  }
  fileContent += "]"
  return fileContent
}

/**
 * 防止与保留字冲突
 * @param {string} word 单词
 */
function reservedWord (word) {
  switch (word) {
    case "delete":
      return "del"

    default:
      return word
  }
}

/**
 * 根据位置取路径上的单词
 *   - getPathWords('/v1/Advise/update', 1) => 'Advise_update'
 * @param {string} path 路径
 * @param {string|number} sliceIdx 同 Array.prototype.splice(index)
 * @param {string} divider 链接函数名的符号
 */
function getPathWords (path, sliceIdx, divider = "_") {
  // 统一成方便处理的模样 => v1/Advise/update
  path = path[0] === "/" ? path.replace("/", "") : path
  const arr = path.split("/")
  let startIndex = sliceIdx
  let endIndex = arr.length
  if (isNaN(sliceIdx)) {
    // 3,4 => startIndex = 3 , endIndex = 4
    ;[startIndex, endIndex] = sliceIdx.split(",")
  }
  return arr.slice(startIndex, endIndex).join(divider)
}

module.exports = handleSrouce
