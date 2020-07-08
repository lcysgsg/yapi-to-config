export default {
  /**
   * ==================================================
   *  拼团部落
   *  拼团部落
   * ==================================================
   */
  Tour: [
    // 【订单-取消】取消拼团订单
    // doc: http://192.168.2.18:3000/project/141/interface/api/9401
    {
      funcName: "TourTuanOrder_cancel",
      method: "POST",
      url: "/v1/Tour/TourTuanOrder/cancel",
    },

    // 【列表】获取需求列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/8735
    {
      funcName: "Demand_query",
      method: "GET",
      url: "/v1/Tour/Demand/query",
    },

    // 【创建】创建拼团需求
    // doc: http://192.168.2.18:3000/project/141/interface/api/8765
    {
      funcName: "Demand_save",
      method: "POST",
      url: "/v1/Tour/Demand/save",
    },

    // 【详情】获取拼团需求详情
    // doc: http://192.168.2.18:3000/project/141/interface/api/8771
    {
      funcName: "Demand_read",
      method: "GET",
      url: "/v1/Tour/Demand/read",
    },

    // 【列表】拼团列表获取
    // doc: http://192.168.2.18:3000/project/141/interface/api/8873
    {
      funcName: "Tuan_query",
      method: "GET",
      url: "/v1/Tour/Tuan/query",
    },

    // 【详情】获取拼团详情
    // doc: http://192.168.2.18:3000/project/141/interface/api/8951
    {
      funcName: "Tuan_read",
      method: "GET",
      url: "/v1/Tour/Tuan/read",
    },

    // 【订单-确认】生成订单让用户确认
    // doc: http://192.168.2.18:3000/project/141/interface/api/9155
    {
      funcName: "TourTuanOrder_confirm",
      method: "POST",
      url: "/v1/Tour/TourTuanOrder/confirm",
    },

    // 【订单-下订单】生成订单让用户确认
    // doc: http://192.168.2.18:3000/project/141/interface/api/9161
    {
      funcName: "TourTuanOrder_commit",
      method: "POST",
      url: "/v1/Tour/TourTuanOrder/commit",
    },

    // 【订单-详情】查看订单详情
    // doc: http://192.168.2.18:3000/project/141/interface/api/9197
    {
      funcName: "TourTuanOrder_detail",
      method: "GET",
      url: "/v1/Tour/TourTuanOrder/detail",
    },

    // 【列表】拼团订单列表获取
    // doc: http://192.168.2.18:3000/project/141/interface/api/9341
    {
      funcName: "TourTuanOrder_query",
      method: "GET",
      url: "/v1/Tour/TourTuanOrder/query",
    },

    // 【列表】获取我的需求列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9209
    {
      funcName: "Demand_query_mine",
      method: "GET",
      url: "/v1/Tour/Demand/query_mine",
    },

    // 【订单-支付】支付拼团订单
    // doc: http://192.168.2.18:3000/project/141/interface/api/9347
    {
      funcName: "TourTuanOrder_pay",
      method: "POST",
      url: "/v1/Tour/TourTuanOrder/pay",
    },
  ],

  /**
   * ==================================================
   *  人人讲解
   *  人人讲解
   * ==================================================
   */
  Explains: [
    // 【列表】获取景区列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/8981
    {
      funcName: "Scenic_query",
      method: "GET",
      url: "/v1/Explains/Scenic/query",
    },

    // 【查看】查看指定景区
    // doc: http://192.168.2.18:3000/project/141/interface/api/8987
    {
      funcName: "Scenic_read",
      method: "GET",
      url: "/v1/Explains/Scenic/read",
    },

    // 【列表】获取景点列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/8999
    {
      funcName: "ScenicSpot_query",
      method: "GET",
      url: "/v1/Explains/ScenicSpot/query",
    },

    // 【查看】查看指定景点
    // doc: http://192.168.2.18:3000/project/141/interface/api/9005
    {
      funcName: "ScenicSpot_read",
      method: "GET",
      url: "/v1/Explains/ScenicSpot/read",
    },

    // 【列表】获取景点讲解音频列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9131
    {
      funcName: "ScenicSpotVoice_query",
      method: "GET",
      url: "/v1/Explains/ScenicSpotVoice/query",
    },

    // 【列表】获取我的讲解音频列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9137
    {
      funcName: "ScenicSpotVoice_query_mine",
      method: "GET",
      url: "/v1/Explains/ScenicSpotVoice/query_mine",
    },

    // 【查看】查看指定景点讲解音频
    // doc: http://192.168.2.18:3000/project/141/interface/api/9143
    {
      funcName: "ScenicSpotVoice_read",
      method: "GET",
      url: "/v1/Explains/ScenicSpotVoice/read",
    },

    // 【列表】获取首页banner广告列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9185
    {
      funcName: "Scenic_get_banner_ad",
      method: "GET",
      url: "/v1/Explains/Scenic/get_banner_ad",
    },

    // 【列表】获取景区的所有景点信息
    // doc: http://192.168.2.18:3000/project/141/interface/api/9485
    {
      funcName: "Scenic_get_subordinate_info",
      method: "GET",
      url: "/v1/Explains/Scenic/get_subordinate_info",
    },
  ],

  /**
   * ==================================================
   *  广告
   *  广告
   * ==================================================
   */
  Ad: [
    // 【列表】获取广告列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9179
    {
      funcName: "Ad_query",
      method: "GET",
      url: "/v1/Ad/query",
    },
  ],

  /**
   * ==================================================
   *  通用社交功能
   *  通用社交功能
   * ==================================================
   */
  Comment: [
    // 【评论-创建】创建评论接口
    // doc: http://192.168.2.18:3000/project/141/interface/api/8759
    {
      funcName: "Comment_save",
      method: "POST",
      url: "/v1/Comment/save",
    },

    // 【点赞-创建】点赞
    // doc: http://192.168.2.18:3000/project/141/interface/api/9407
    {
      funcName: "Like_save",
      method: "POST",
      url: "/v1/Like/save",
    },

    // 【点赞-删除】取消点赞
    // doc: http://192.168.2.18:3000/project/141/interface/api/9413
    {
      funcName: "Like_delete",
      method: "POST",
      url: "/v1/Like/delete",
    },

    // 【评论-列表】获取评论列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9419
    {
      funcName: "Comment_query",
      method: "GET",
      url: "/v1/Comment/query",
    },

    // 【旅行社评论-列表】获取旅行社评论的列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9425
    {
      funcName: "CompanyComment_query",
      method: "GET",
      url: "/v1/CompanyComment/query",
    },

    // 【认证】用户实名认证
    // doc: http://192.168.2.18:3000/project/141/interface/api/9605
    {
      funcName: "UserCertification_auth",
      method: "POST",
      url: "/v1/UserCertification/auth",
    },

    // 【评论-创建】创建旅行社评论接口
    // doc: http://192.168.2.18:3000/project/141/interface/api/9623
    {
      funcName: "CompanyComment_save",
      method: "POST",
      url: "/v1/biz/CompanyComment/save",
    },
  ],

  /**
   * ==================================================
   *  用户登录
   *  用户登录
   * ==================================================
   */
  api: [
    // 微信、支付宝等三方账号授权登录接口
    // doc: http://192.168.2.18:3000/project/141/interface/api/9431
    {
      funcName: "api_login3rd",
      method: "POST",
      url: "/v1/api/login3rd",
    },

    // 获取短信验证码
    // doc: http://192.168.2.18:3000/project/141/interface/api/9437
    {
      funcName: "api_send_verify_code",
      method: "POST",
      url: "/v1/api/send_verify_code",
    },

    // 三方账号绑定手机号接口
    // doc: http://192.168.2.18:3000/project/141/interface/api/9443
    {
      funcName: "api_bind_account",
      method: "POST",
      url: "/v1/api/bind_account",
    },

    // token刷新接口
    // doc: http://192.168.2.18:3000/project/141/interface/api/9449
    {
      funcName: "api_refresh_token",
      method: "POST",
      url: "/v1/api/refresh_token",
    },

    // 后台用户登录小程序端
    // doc: http://192.168.2.18:3000/project/141/interface/api/9569
    {
      funcName: "api_loginSystem",
      method: "POST",
      url: "/v1/api/loginSystem",
    },
  ],

  /**
   * ==================================================
   *  一图一码
   *  一图一码
   * ==================================================
   */
  One: [
    // 【列表】获取酒店列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9491
    {
      funcName: "Hotel_query",
      method: "GET",
      url: "/v1/One/Hotel/query",
    },

    // 【详情】获取酒店详情
    // doc: http://192.168.2.18:3000/project/141/interface/api/9497
    {
      funcName: "Hotel_read",
      method: "GET",
      url: "/v1/One/Hotel/read",
    },

    // 【列表】获取场馆列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9503
    {
      funcName: "Venue_query",
      method: "GET",
      url: "/v1/One/Venue/query",
    },

    // 【详情】获取场馆详情
    // doc: http://192.168.2.18:3000/project/141/interface/api/9509
    {
      funcName: "Venue_read",
      method: "GET",
      url: "/v1/One/Venue/read",
    },

    // 【列表】获取场地列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9515
    {
      funcName: "VenuePlace_query",
      method: "GET",
      url: "/v1/One/VenuePlace/query",
    },

    // 【详情】获取场地详情
    // doc: http://192.168.2.18:3000/project/141/interface/api/9521
    {
      funcName: "VenuePlace_read",
      method: "GET",
      url: "/v1/One/VenuePlace/read",
    },

    // 【列表】获取景区列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9527
    {
      funcName: "Scenic_query",
      method: "GET",
      url: "/v1/One/Scenic/query",
    },

    // 【查看】查看指定景区
    // doc: http://192.168.2.18:3000/project/141/interface/api/9533
    {
      funcName: "Scenic_read",
      method: "GET",
      url: "/v1/One/Scenic/read",
    },

    // 【列表】获取景点列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9539
    {
      funcName: "ScenicSpot_query",
      method: "GET",
      url: "/v1/One/ScenicSpot/query",
    },

    // 【查看】查看指定景点
    // doc: http://192.168.2.18:3000/project/141/interface/api/9545
    {
      funcName: "ScenicSpot_read",
      method: "GET",
      url: "/v1/One/ScenicSpot/read",
    },

    // 【列表】获取停车场列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9551
    {
      funcName: "Parking_query",
      method: "GET",
      url: "/v1/One/Parking/query",
    },

    // 【列表】获取餐厅列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9587
    {
      funcName: "Restaurant_query",
      method: "GET",
      url: "/v1/One/Restaurant/query",
    },

    // 【详情】获取餐厅详情
    // doc: http://192.168.2.18:3000/project/141/interface/api/9593
    {
      funcName: "Restaurant_read",
      method: "GET",
      url: "/v1/One/Restaurant/read",
    },
  ],

  /**
   * ==================================================
   *  投诉
   *  投诉
   * ==================================================
   */
  Complain: [
    // 【列表】查询自己的投诉列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9611
    {
      funcName: "Complain_query",
      method: "GET",
      url: "/v1/Complain/query",
    },

    // 【创建】投诉
    // doc: http://192.168.2.18:3000/project/141/interface/api/9617
    {
      funcName: "Complain_save",
      method: "POST",
      url: "/v1/Complain/save",
    },

    // 【取消】取消投诉
    // doc: http://192.168.2.18:3000/project/141/interface/api/9665
    {
      funcName: "Complain_cancel",
      method: "POST",
      url: "/v1/Complain/cancel",
    },

    // 【详情】查看指定投诉的详情
    // doc: http://192.168.2.18:3000/project/141/interface/api/9671
    {
      funcName: "Complain_read",
      method: "GET",
      url: "/v1/Complain/read",
    },
  ],

  /**
   * ==================================================
   *  拼团部落(商家端)
   *  拼团部落(商家端)
   * ==================================================
   */
  biz: [
    // 【列表】旅游产品列表获取
    // doc: http://192.168.2.18:3000/project/141/interface/api/9629
    {
      funcName: "Product_query",
      method: "GET",
      url: "/v1/biz/Tour/Product/query",
    },

    // 【注册】注册创建一个商家
    // doc: http://192.168.2.18:3000/project/141/interface/api/9737
    {
      funcName: "Company_save",
      method: "POST",
      url: "/v1/biz/Company/save",
    },

    // 【编辑】编辑一个商家
    // doc: http://192.168.2.18:3000/project/141/interface/api/9899
    {
      funcName: "Company_update",
      method: "POST",
      url: "/v1/biz/Company/update",
    },

    // 【详情】获取旅游产品详情
    // doc: http://192.168.2.18:3000/project/141/interface/api/9641
    {
      funcName: "Product_read",
      method: "GET",
      url: "/v1/biz/Tour/Product/read",
    },

    // 【发起拼团】发起拼团接口
    // doc: http://192.168.2.18:3000/project/141/interface/api/9683
    {
      funcName: "Product_startTuan",
      method: "POST",
      url: "/v1/biz/Tour/Product/startTuan",
    },

    // 【列表】拼团列表获取(带审核)
    // doc: http://192.168.2.18:3000/project/141/interface/api/9707
    {
      funcName: "TourTuan_query",
      method: "GET",
      url: "/v1/biz/TourTuan/query",
    },

    // 【详情】获取拼团详情
    // doc: http://192.168.2.18:3000/project/141/interface/api/9713
    {
      funcName: "TourTuan_read",
      method: "GET",
      url: "/v1/biz/TourTuan/read",
    },

    // 【列表】拼团列表获取(按规格)
    // doc: http://192.168.2.18:3000/project/141/interface/api/9725
    {
      funcName: "TourTuanSpecPrice_query",
      method: "GET",
      url: "/v1/biz/TourTuanSpecPrice/query",
    },

    // 【列表】拼团订单列表获取
    // doc: http://192.168.2.18:3000/project/141/interface/api/9719
    {
      funcName: "TourTuanOrder_query",
      method: "GET",
      url: "/v1/biz/Tour/TourTuanOrder/query",
    },
  ],

  /**
   * ==================================================
   *  用户
   *  null
   * ==================================================
   */
  user: [
    // 获取身份码
    // doc: http://192.168.2.18:3000/project/141/interface/api/9659
    {
      funcName: "user_get_id_code",
      method: "POST",
      url: "/v1/user/get_id_code",
    },

    // 获取商家用户信息
    // doc: http://192.168.2.18:3000/project/141/interface/api/9923
    {
      funcName: "api_system_user_info",
      method: "GET",
      url: "/v1/api/system_user_info",
    },

    // 获取会员用户信息
    // doc: http://192.168.2.18:3000/project/141/interface/api/9929
    {
      funcName: "api_user_info",
      method: "GET",
      url: "/v1/api/user_info",
    },
  ],

  /**
   * ==================================================
   *  Web桌面
   *  Web桌面
   * ==================================================
   */
  manage: [
    // 【列表】 桌面应用列表
    // doc: http://192.168.2.18:3000/project/141/interface/api/9947
    {
      funcName: "Api_getApps",
      method: "GET",
      url: "/v1/manage/Api/getApps",
    },

    // 【新建】新建桌面应用
    // doc: http://192.168.2.18:3000/project/141/interface/api/9953
    {
      funcName: "desktop_save",
      method: "POST",
      url: "/v1/manage/desktop/save",
    },

    // 【编辑】编辑桌面应用
    // doc: http://192.168.2.18:3000/project/141/interface/api/9959
    {
      funcName: "desktop_update",
      method: "POST",
      url: "/v1/manage/desktop/update",
    },
  ],
}
