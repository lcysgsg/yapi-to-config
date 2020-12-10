import fs from "fs-extra"
import path from "path"

export function isFile(path: string): boolean {
    return fs.existsSync(path) && fs.statSync(path).isFile()
}

/**
 * Find the closest package.json file, starting at process.cwd (by default),
 * and working up to root.
 * @param   {string} [startDir=process.cwd()] Starting directory
 * @returns {string}                          Absolute path to closest package.json file
 */
export function findPackageJson(startDir = process.cwd()): string | null {
    let dir = path.resolve(startDir)

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
export function findPackageJsonDir(startDir = process.cwd()): string {
    let dir = path.resolve(startDir)

    do {
        const pkgFile = path.join(dir, "package.json")

        if (!fs.existsSync(pkgFile) || !fs.statSync(pkgFile).isFile()) {
            dir = path.join(dir, "..")
            continue
        }
        return dir
    } while (dir !== path.resolve(dir, ".."))
    throw new Error("can not find package.json");
}

/**
 * get a object from package.json
 * @param   {Object}  opt                 Options Object
 * @param   {boolean} opt.startdir        Directory to begin searching from
 * @returns {Object}                      A object from package.json
 */
export function getPkgJson(opt?: { [key: string]: string }): { [key: string]: string } {
    const pkgJsonDir = opt ? findPackageJson(opt.startDir) : findPackageJson()
    let fileJson

    if (!pkgJsonDir) {
        throw new Error(
            "Could not find a package.json file. Run 'npm init' to create one."
        )
    }

    try {
        fileJson = JSON.parse(fs.readFileSync(pkgJsonDir, "utf8"))
    } catch (e) {
        const error = new Error(e)
        throw error
    }

    if (!fileJson.yapi) {
        throw new Error(
            "Could not find field `yapi` in package.json file. Check it."
        )
    }

    return fileJson
}