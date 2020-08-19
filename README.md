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

`$ npm install --save-dev yapi-to-config`

使用 yarn:

`$ yarn add --save-dev yapi-to-config`

## 配置

```jsonc
// packge.json
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

- [ ] 增加 `ts` 智能提示
- [ ] 现在我的做法是导出数组，再循环一一适配好 `http`  后导出。 这样会有一个问题：适配 `http` 的部分是运行时执行的。  
  - [ ] 适配 `http` 的部分改成动态适配
  - [ ] 配置导出成 JSON ， 函数名做 key
  - [ ] 缺点： 函数名只能当成参数传入

