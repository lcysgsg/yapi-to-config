# yapi-to-config

利用 _yapi_ 提供的接口，生成一份 _.js_ 导出一个数组。

这样做的目的是：通用性。

_uni-app_、*js* 等项目都可以使用导出的对象，再处理。


```js
export default [
  /**
   * ==================================================
   *  公共分类
   *  公共分类
   * ==================================================
   */

  // 定位保存
  // doc: http://192.168.2.18:3000/project/141/interface/api/13715
  {
    funcName: "location_saveGpsLocation",
    method: "POST",
    url: "/v1/location/saveGpsLocation",
  }
]
```

## 安装

使用 npm:

`$ npm install -D yapi-to-config`

使用 yarn:

`$ yarn add -D yapi-to-config`

更新:

`$ yarn upgrade yapi-to-config --latest`

## 配置

```jsonc
// package.json
{
    // ...,
    "yapi": {
        // 必填：yapi 服务器地址
        "host": "YAPI_HOST",
        // 必填：yapi 接口 token
        "token": "YAPI_TOKEN",

        // 直接使用数据文件。如果有该字段，会直接使用， 不再请求 yapi 接口。
        // 数据文件地址, 相对于 package.json
        "localFilePath": "",

  		// 相对于 package.json，默认生成到 pkg 同级目录下
        "outputDir": "./",
        // 默认文件名
        "fileName": "apiConfig"
    }
}
```

## 跑命令

```
$ yarn yapi
```

or 

```
$ npm run yapi
```

## TODO
- [ ] 单元测试
- [ ] 增加 `ts` 智能提示
- [ ] 现在我的做法是导出数组，再循环一一适配好 `http`  后导出。 这样会有一个问题：适配 `http` 的部分是运行时执行的。  
  - [ ] 适配 `http` 的部分改成动态适配
  - [ ] 配置导出成 JSON ， 函数名做 key
  - [ ] 缺点： 函数名只能当成参数传入

## 更新日志

### v2.3.0

- 支持 yapi 多项目导入了，参考 [example/apiMulti](https://github.com/lcysgsg/yapi-to-config/tree/master/example/apiMulti)
- 重构了代码
- 修复了 [当 /\/$/ 时， funcName 拼接出了多余的下划线 issues#2](https://github.com/lcysgsg/yapi-to-config/issues/2)
- 现在 yapi 配置的 `url` 能传入完整的链接了

### v2.2.1

- 支持根据本地文件生成， 目录结构暂时仅支持类似 `/mock/listMenu.json`

- 增加示例
- 现在路径指向都以 `package.json` 为基准

### v2.0.0

为了减少约束，甚至在没有约束下，避免命名冲突。

所以，平铺了所有接口，拼接了域名下第二（可配置）个起的所有单词。

