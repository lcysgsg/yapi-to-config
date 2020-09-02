
try {
  var fileJson = JSON.parse(fs.readFileSync(pkgJsonDir, "utf8"))
} catch (e) {
  console.log("e :>> ", e.name)
  console.log("e :>> ", e.message)
  const error = new Error(e)

  error.name = e.name
  error.message = e.message
  error.messageTemplate = "failed-to-read-json"
  error.messageData = {
    path: "path",
    message: e.message,
  }
  throw error
}
