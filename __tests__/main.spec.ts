import { Main } from "../src/index"

const ins = new Main({
  outputDir: "",
  fileName: "",
})

test("Main.getPathWords 从路径中拼取函数名", () => {
  expect(ins.getPathWords("/api/user/update", 1)).toBe("user_update")
  expect(ins.getPathWords("/api/user/update/", 1)).toBe("user_update")
  expect(ins.getPathWords("api/user/update", 1)).toBe("user_update")
  expect(ins.getPathWords("api/user/update/", 1)).toBe("user_update")
  expect(ins.getPathWords("http://host.com/api/user/update/", 1)).toBe("user_update")
})
