const isURL = require("validator/lib/isURL")
const fs = require("fs-extra")
const axios = require("axios")
const path = require("path")
const prettier = require("prettier")
const chalk = require("chalk")

const log = console.log
const { isFile, findPackageJsonDir, getPkgJson } = require("./helper")

interface MainConstructor{
  new (options: {
    outputDir: string
  }): MainInterface
} 
interface MainInterface{
  handleSrouce(): void
} 

class Main implements MainInterface {

  options: object

  constructor (options: object) {
    this.options = options
  }

  /**
 * 主要处理函数
 * @param {array} source yapi源数据
 */
  handleSrouce () {
  // log(`┗|｀O′|┛ 先清一波旧数据 ${this.options.outputDir}`)
    let url = ""
    const gen = (source: string) => {
      fs.ensureDir(this.options.outputDir, () => {
        fs.writeFile(
        `${this.options.outputDir}/${this.options.fileName}.js`,
        prettier.format(this.generateJsApiContent(source), { parser: "babel" })
        )
        log(`┗|｀O′|┛ 写入 ${path.resolve(this.options.outputDir, this.options.fileName)}.js `)
      })
    }
    
    if (this.options.localFilePath) {
      url = path.join(findPackageJsonDir(), this.options.localFilePath)
      if (!isFile(url)) {
        log(chalk.red(`ERR! package.json yapi.localFilePath is not a file. path.resolve: ${url}. `))
        process.exit()
      }

      const result = JSON.parse(fs.readFileSync(url, "utf8"))
      const source = result.data
      gen(source)
    } else {
      url = `${this.options.host}${this.options.path}?token=${this.options.token}`
      log(`┗|｀O′|┛ ${url}`)
      axios
        .get(url)
        .then((res) => {
          // 可参考 ./listMenu.json
          const result = res.data
          const source = result.data
          gen( source)
        })
    }
  }

  /**
 * 拼接内容
 * @param {array} list yapi数组
 */
  generateJsApiContent (source) {
  // 生成一段
    const genrSingleConent = function (list) {
      let result = ""
      list.forEach((item) => {
      // 函数名最少由两个词组成， 上不封顶
      // const funcNameWordNum = item.path.split("/").length <= 3 ? -2 : 2
        const funcName = this.reservedWord(this.getPathWords(item.path, 1))
        result += `
          // ${item.title}
          // doc: ${this.options.host}/project/${item.project_id}/interface/api/${item._id}
          {
            funcName: "${funcName}",
            method: "${item.method}",
            url: "${item.path}",
          },
      `
      })
      return result
    }

    /**
     * 防止多个
     */
    const symbolSource = {}
    source.forEach((module) => {
      if (module.list.length === 0) return
      module.list.forEach(item => {
        const firstPath = item.path
        const fileName = this.getPathWords(firstPath, "1,2")
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
      ${genrSingleConent.call(this, module.list)}
    `
    }
    fileContent += "]"
    return fileContent
  }

  /**
 * 防止与保留字冲突
 * @param {string} word 单词
 */
  reservedWord (word) {
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
  getPathWords (path, sliceIdx, divider = "_") {
  // 如果带域名，就截取后面的路径
    if (isURL(path)) {
      path = path.replace(/.*\/\/.*?\//, "")
    }

    // 统一成方便处理的模样 /v1/Advise/update => v1/Advise/update
    path = path[0] === "/" ? path.substr(1) : path
    // 统一成方便处理的模样 v1/Advise/update/ => v1/Advise/update
    path = path[path.length - 1] === "/" ? path.substr(0, path.length - 1) : path
    const arr = path.split("/")
    let startIndex = sliceIdx
    let endIndex = arr.length
    if (isNaN(sliceIdx)) {
    // 3,4 => startIndex = 3 , endIndex = 4
      ;[startIndex, endIndex] = sliceIdx.split(",")
    }
    return arr.slice(startIndex, endIndex).join(divider)
  }
}

function run (pkgFieldYapi) {
  const pkgJsonDir = findPackageJsonDir()
  const pkgJson = getPkgJson()

  pkgFieldYapi = pkgFieldYapi || pkgJson.yapi

  // yapi options 的数据格式化
  const yapiOptionsFormat = function (aYapi) {
    let mode = {}
    if (aYapi.localFilePath) {
      mode = {
        // 直接使用数据文件。如果有该字段，会直接使用， 不再请求 yapi 接口。
        // 数据文件地址, 相对于 package.json
        localFilePath: aYapi.localFilePath || null,
      }
    } else {
      mode = {
        // host 是 yapi 的地址
        host: (function () {
          if (!isURL(String(aYapi.host))) {
            log(chalk.red(`YAPI ERR! package.json invalid host：${aYapi.host}`))
            log(chalk.red(`${JSON.stringify(aYapi, null, 2)} `))
            process.exit()
          }
          return aYapi.host
        }()),

        // 获取新项目接口一般就是改 token，
        token: (function () {
          if (!aYapi.token) {
            log(chalk.red(`YAPI ERR! package.json token required：${aYapi.token}`))
            log(chalk.red(`${JSON.stringify(aYapi, null, 2)} `))
            process.exit()
          }
          return aYapi.token
        }()),

        path: aYapi.path || "/api/interface/list_menu",
      }
    }
    return {
      // 相对于 package.json，默认生成到 pkg 同级目录下
      outputDir: (function () {
        if (aYapi.outputDir) {
          return path.join(pkgJsonDir, aYapi.outputDir)
        } else {
          return path.join(pkgJsonDir, "./")
        }
      }()),
      fileName: aYapi.fileName || "apiConfig",

      ...mode,
    }
  }

  if (Array.isArray(pkgFieldYapi)) {
    pkgFieldYapi.forEach(yapiOptions => {
      const r = new Main(yapiOptionsFormat(yapiOptions))
      r.handleSrouce()
    })
  } else {
    const r = new Main(yapiOptionsFormat(pkgFieldYapi))
    r.handleSrouce()
  }
}

exports.Main = Main
exports.run = run
