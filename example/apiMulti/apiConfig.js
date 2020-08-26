/* eslint-disable */
export default [
  /**
   * ==================================================
   *  公共分类
   *  公共分类
   * ==================================================
   */

  // 广告轮播图片
  // doc: http://192.168.2.18:3000/project/47/interface/api/252
  {
    funcName: "Common_getAdvertsPic",
    method: "GET",
    url: "/Api/Common/getAdvertsPic",
  },

  // 收藏列表
  // doc: http://192.168.2.18:3000/project/47/interface/api/158
  {
    funcName: "Common_collectList",
    method: "GET",
    url: "/Api/Common/collectList",
  },

  // 添加收藏
  // doc: http://192.168.2.18:3000/project/47/interface/api/184
  {
    funcName: "Common_collect",
    method: "POST",
    url: "/Api/Common/collect",
  },

  // 取消收藏
  // doc: http://192.168.2.18:3000/project/47/interface/api/185
  {
    funcName: "Common_cancelCollect",
    method: "POST",
    url: "/Api/Common/cancelCollect",
  },

  // 公共配置接口
  // doc: http://192.168.2.18:3000/project/47/interface/api/256
  {
    funcName: "Common_CommonConfig",
    method: "GET",
    url: "/Api/Common/CommonConfig",
  },

  /**
   * ==================================================
   *  首页
   *  null
   * ==================================================
   */

  // 首页数据
  // doc: http://192.168.2.18:3000/project/47/interface/api/135
  {
    funcName: "home_",
    method: "GET",
    url: "/Api/Home/home/",
  },

  /**
   * ==================================================
   *  首页
   *  null
   * ==================================================
   */

  // 获得地址名称
  // doc: http://192.168.2.18:3000/project/47/interface/api/243
  {
    funcName: "Home_getLocationName",
    method: "GET",
    url: "/Api/Home/getLocationName",
  },

  // 搜索周边
  // doc: http://192.168.2.18:3000/project/47/interface/api/244
  {
    funcName: "Home_seekHelp",
    method: "POST",
    url: "/Api/Home/seekHelp",
  },

  // 热门搜索
  // doc: http://192.168.2.18:3000/project/47/interface/api/245
  {
    funcName: "Home_hotSelect",
    method: "GET",
    url: "/Api/Home/hotSelect",
  },

  // 首页搜索
  // doc: http://192.168.2.18:3000/project/47/interface/api/189
  {
    funcName: "Home_Select",
    method: "POST",
    url: "/Api/Home/Select",
  },

  // 租车筛选类型接口
  // doc: http://192.168.2.18:3000/project/47/interface/api/213
  {
    funcName: "Home_getCarType",
    method: "GET",
    url: "/Api/Home/getCarType",
  },

  // 租车列表
  // doc: http://192.168.2.18:3000/project/47/interface/api/173
  {
    funcName: "Home_rentCarList",
    method: "GET",
    url: "/Api/Home/rentCarList",
  },

  // 租车详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/174
  {
    funcName: "Home_rentCarDetail",
    method: "GET",
    url: "/Api/Home/rentCarDetail",
  },

  // 导游列表
  // doc: http://192.168.2.18:3000/project/47/interface/api/180
  {
    funcName: "Home_guideList",
    method: "GET",
    url: "/Api/Home/guideList",
  },

  // 导游详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/181
  {
    funcName: "Home_guideDetail",
    method: "GET",
    url: "/Api/Home/guideDetail",
  },

  // 获得酒店,娱乐,美食tag类型
  // doc: http://192.168.2.18:3000/project/47/interface/api/246
  {
    funcName: "Home_getHotelTag",
    method: "GET",
    url: "/Api/Home/getHotelTag",
  },

  // 酒店（娱乐，美食）列表
  // doc: http://192.168.2.18:3000/project/47/interface/api/136
  {
    funcName: "Home_circumList",
    method: "GET",
    url: "/Api/Home/circumList",
  },

  // 酒店（娱乐，美食）详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/137
  {
    funcName: "Home_circumDetail",
    method: "GET",
    url: "/Api/Home/circumDetail",
  },

  // 酒店（娱乐，美食）图集列表
  // doc: http://192.168.2.18:3000/project/47/interface/api/140
  {
    funcName: "Home_imgList",
    method: "GET",
    url: "/Api/Home/imgList",
  },

  // 房型详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/138
  {
    funcName: "Home_room",
    method: "GET",
    url: "/Api/Home/room",
  },

  // 酒店预订
  // doc: http://192.168.2.18:3000/project/47/interface/api/139
  {
    funcName: "Home_reserveHotel",
    method: "POST",
    url: "/Api/Home/reserveHotel",
  },

  // 导游预订
  // doc: http://192.168.2.18:3000/project/47/interface/api/182
  {
    funcName: "Home_reserveGuide",
    method: "POST",
    url: "/Api/Home/reserveGuide",
  },

  // 餐饮预订
  // doc: http://192.168.2.18:3000/project/47/interface/api/170
  {
    funcName: "Home_reserveDine",
    method: "POST",
    url: "/Api/Home/reserveDine",
  },

  // 租车预订
  // doc: http://192.168.2.18:3000/project/47/interface/api/178
  {
    funcName: "Home_reserveCar",
    method: "POST",
    url: "/Api/Home/reserveCar",
  },

  // 娱乐预订
  // doc: http://192.168.2.18:3000/project/47/interface/api/171
  {
    funcName: "Home_reservePlay",
    method: "POST",
    url: "/Api/Home/reservePlay",
  },

  // 投诉
  // doc: http://192.168.2.18:3000/project/47/interface/api/147
  {
    funcName: "Home_complain",
    method: "POST",
    url: "/Api/Home/complain",
  },

  // 景区新闻，通知公告，热门活动 列表
  // doc: http://192.168.2.18:3000/project/47/interface/api/218
  {
    funcName: "Home_newsList",
    method: "GET",
    url: "/Api/Home/newsList",
  },

  // 热门活动（路线推荐，风情民宿，特色美食，休闲娱乐）列表
  // doc: http://192.168.2.18:3000/project/47/interface/api/148
  {
    funcName: "Home_strategyList",
    method: "GET",
    url: "/Api/Home/strategyList",
  },

  // 交通指南，游玩贴士
  // doc: http://192.168.2.18:3000/project/47/interface/api/172
  {
    funcName: "Home_alonePage",
    method: "GET",
    url: "/Api/Home/alonePage",
  },

  // 热门活动（路线推荐，风情民宿，特色美食，休闲娱乐，景区新闻，通知公告 ）详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/149
  {
    funcName: "Home_newDetail",
    method: "GET",
    url: "/Api/Home/newDetail",
  },

  // 寻人启事（失物招领，寻物启事）列表
  // doc: http://192.168.2.18:3000/project/47/interface/api/150
  {
    funcName: "Home_foundList",
    method: "GET",
    url: "/Api/Home/foundList",
  },

  // 寻人启事（失物招领，寻物启事）详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/151
  {
    funcName: "Home_foundDetail",
    method: "GET",
    url: "/Api/Home/foundDetail",
  },

  // 景点列表
  // doc: http://192.168.2.18:3000/project/47/interface/api/152
  {
    funcName: "Home_snicList",
    method: "GET",
    url: "/Api/Home/snicList",
  },

  // 景点详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/153
  {
    funcName: "Home_snicDetail",
    method: "GET",
    url: "/Api/Home/snicDetail",
  },

  // 图集列表
  // doc: http://192.168.2.18:3000/project/47/interface/api/154
  {
    funcName: "Home_snicImgList",
    method: "GET",
    url: "/Api/Home/snicImgList",
  },

  // 预约详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/156
  {
    funcName: "Home_userReserveDetail",
    method: "GET",
    url: "/Api/Home/userReserveDetail",
  },

  // 取消预约
  // doc: http://192.168.2.18:3000/project/47/interface/api/157
  {
    funcName: "Home_cancelReserve",
    method: "POST",
    url: "/Api/Home/cancelReserve",
  },

  // 撤销投诉
  // doc: http://192.168.2.18:3000/project/47/interface/api/161
  {
    funcName: "Home_cancelComplain",
    method: "POST",
    url: "/Api/Home/cancelComplain",
  },

  // 问题场景列表
  // doc: http://192.168.2.18:3000/project/47/interface/api/163
  {
    funcName: "Home_advisePlace",
    method: "GET",
    url: "/Api/Home/advisePlace",
  },

  // 提交反馈
  // doc: http://192.168.2.18:3000/project/47/interface/api/164
  {
    funcName: "Home_postAdvise",
    method: "POST",
    url: "/Api/Home/postAdvise",
  },

  /**
   * ==================================================
   *  我的
   *  null
   * ==================================================
   */

  // 预约列表
  // doc: http://192.168.2.18:3000/project/47/interface/api/155
  {
    funcName: "UserCenter_userReserve",
    method: "GET",
    url: "/Api/UserCenter/userReserve",
  },

  // 我的投诉
  // doc: http://192.168.2.18:3000/project/47/interface/api/159
  {
    funcName: "UserCenter_complainList",
    method: "GET",
    url: "/Api/UserCenter/complainList",
  },

  // 投诉详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/160
  {
    funcName: "UserCenter_userComplainDetail",
    method: "GET",
    url: "/Api/UserCenter/userComplainDetail",
  },

  // 意见反馈列表
  // doc: http://192.168.2.18:3000/project/47/interface/api/162
  {
    funcName: "UserCenter_adviseList",
    method: "GET",
    url: "/Api/UserCenter/adviseList",
  },

  // 用户信息
  // doc: http://192.168.2.18:3000/project/47/interface/api/215
  {
    funcName: "UserCenter_userInfo",
    method: "GET",
    url: "/Api/UserCenter/userInfo",
  },

  // 上传头像
  // doc: http://192.168.2.18:3000/project/47/interface/api/216
  {
    funcName: "UserCenter_avatar",
    method: "POST",
    url: "/Api/UserCenter/avatar",
  },

  // 修改昵称
  // doc: http://192.168.2.18:3000/project/47/interface/api/217
  {
    funcName: "UserCenter_editName",
    method: "POST",
    url: "/Api/UserCenter/editName",
  },

  // 美食预约详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/247
  {
    funcName: "UserCenter_userReserveDineDetail",
    method: "GET",
    url: "/Api/UserCenter/userReserveDineDetail",
  },

  // 酒店预约详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/248
  {
    funcName: "UserCenter_userReserveHotelsDetail",
    method: "GET",
    url: "/Api/UserCenter/userReserveHotelsDetail",
  },

  // 娱乐预约详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/249
  {
    funcName: "UserCenter_userReservePlayDetail",
    method: "GET",
    url: "/Api/UserCenter/userReservePlayDetail",
  },

  // 租车预约详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/250
  {
    funcName: "UserCenter_userReserveCarDetail",
    method: "GET",
    url: "/Api/UserCenter/userReserveCarDetail",
  },

  // 导游预约详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/251
  {
    funcName: "UserCenter_userReserveGuideDetail",
    method: "GET",
    url: "/Api/UserCenter/userReserveGuideDetail",
  },

  /**
   * ==================================================
   *  我的
   *  null
   * ==================================================
   */

  // 意见反馈列表_copy
  // doc: http://192.168.2.18:3000/project/47/interface/api/190
  {
    funcName: "api_adviseList_1552457816767",
    method: "GET",
    url: "/v1/api/adviseList_1552457816767",
  },

  /**
   * ==================================================
   *  购物
   *  null
   * ==================================================
   */

  // 特产列表
  // doc: http://192.168.2.18:3000/project/47/interface/api/210
  {
    funcName: "Specialty_specialtyList",
    method: "GET",
    url: "/Api/Specialty/specialtyList",
  },

  // 特产详情
  // doc: http://192.168.2.18:3000/project/47/interface/api/211
  {
    funcName: "Specialty_specialtyDetail",
    method: "GET",
    url: "/Api/Specialty/specialtyDetail",
  },

  // 特产类别
  // doc: http://192.168.2.18:3000/project/47/interface/api/212
  {
    funcName: "Specialty_specialtyType",
    method: "GET",
    url: "/Api/Specialty/specialtyType",
  },
];
