# yapi-to-config

利用 _yapi_ 提供的接口，生成一份 _.js_ 导出一个对象。

这样做的目的是：通用性。

_uni-app_、*js* 两种项目都可以导出对象，进行处理，最后生成 `http` 对象。

```js
export default {
  /**
   * ==================================================
   *  资讯
   *  资讯
   * ==================================================
   */
  Article: [
    // 【列表】获取资讯列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/10355
    {
      funcName: 'Article_query',
      method: "GET",
      url: "/v1/Article/query",
    }
  ]
}
```



## 安装

使用 npm:

`$ npm install --save-dev yapi-to-config`

使用 yarn:

`$ yarn add --save-dev yapi-to-config`

### 配置

```json
// packge.json
{
    // ...,
    "yapi": {
        // 必填：yapi 服务器地址
        "host": "YAPI_HOST",
        // 必填：yapi 接口 token
        "token": "YAPI_TOKEN",

        // 执行后输出到哪里，根据执行时的目录定位
        "outputDir": "./",
        // 默认文件名
        "fileName": "apiConfig"
    }
}
```

### 跑命令

```
$ yarn yapi
```

or 

```
$ npm run yapi
```

