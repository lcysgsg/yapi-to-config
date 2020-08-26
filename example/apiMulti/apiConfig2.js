/* eslint-disable */
export default [
  /**
   * ==================================================
   *  问题上报
   *  null
   * ==================================================
   */

  // 提交问题
  // doc: http://192.168.2.18:3000/project/104/interface/api/1954
  {
    funcName: "fault_commit",
    method: "POST",
    url: "/v1/fault/commit",
  },

  // 列出所有问题
  // doc: http://192.168.2.18:3000/project/104/interface/api/1958
  {
    funcName: "fault_index",
    method: "GET",
    url: "/v1/fault/index",
  },

  // 获取问题详情
  // doc: http://192.168.2.18:3000/project/104/interface/api/1962
  {
    funcName: "fault_info",
    method: "GET",
    url: "/v1/fault/info",
  },

  /**
   * ==================================================
   *  问题上报分类
   *  null
   * ==================================================
   */

  // 问题分类
  // doc: http://192.168.2.18:3000/project/104/interface/api/1966
  {
    funcName: "faultCategory_index",
    method: "GET",
    url: "/v1/faultCategory/index",
  },
];
