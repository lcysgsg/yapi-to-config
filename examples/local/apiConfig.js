/* eslint-disable */
export default [
  /**
   * ==================================================
   *  资讯
   *  资讯模块
   * ==================================================
   */

  // 【列表】获取资讯列表
  // doc: undefined/project/141/interface/api/10355
  {
    funcName: "Article_query",
    method: "GET",
    url: "/v1/Article/query",
  },

  // 带域名的接口
  // doc: undefined/project/141/interface/api/10355
  {
    funcName: "Article_query",
    method: "GET",
    url: "https://baidu.com/v1/Article/query",
  },

  // 【列表】获取资讯列表
  // doc: undefined/project/141/interface/api/10397
  {
    funcName: "Article_query_category",
    method: "GET",
    url: "/v1/Article/query_category",
  },

  /**
   * ==================================================
   *  浏览历史
   *  浏览历史模块
   * ==================================================
   */

  // 【列表】获取浏览历史列表
  // doc: undefined/project/141/interface/api/10439
  {
    funcName: "History_query",
    method: "GET",
    url: "/v1/History/query",
  },

  /**
   * ==================================================
   *  泊车
   *  泊车
   * ==================================================
   */

  // 【查看】查看泊车员信息
  // doc: undefined/project/141/interface/api/13565
  {
    funcName: "Valet_User_read",
    method: "POST",
    url: "/v1/Valet/User/read",
  },
];
