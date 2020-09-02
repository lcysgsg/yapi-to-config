/* eslint-disable */
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
  },

  // 定位记录获取
  // doc: http://192.168.2.18:3000/project/141/interface/api/13721
  {
    funcName: "location_getGpsLocation",
    method: "GET",
    url: "/v1/location/getGpsLocation",
  },

  /**
   * ==================================================
   *  资讯
   *  资讯
   * ==================================================
   */

  // 【列表】获取资讯列表(按tag_id)
  // doc: http://192.168.2.18:3000/project/141/interface/api/10355
  {
    funcName: "Article_query",
    method: "GET",
    url: "/v1/Article/query",
  },

  // 【列表】获取资讯列表(按热推分类)
  // doc: http://192.168.2.18:3000/project/141/interface/api/10397
  {
    funcName: "Article_query_category",
    method: "GET",
    url: "/v1/Article/query_category",
  },

  // 【列表】获取热推分类列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/10403
  {
    funcName: "Article_query_category_list",
    method: "GET",
    url: "/v1/Article/query_category_list",
  },

  // 【列表】获取频道
  // doc: http://192.168.2.18:3000/project/141/interface/api/10409
  {
    funcName: "Article_query_tag_list",
    method: "GET",
    url: "/v1/Article/query_tag_list",
  },

  // 【列表】获取资讯详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/10421
  {
    funcName: "Article_read",
    method: "GET",
    url: "/v1/Article/read",
  },

  // 【列表】获取关注的频道资讯列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/10523
  {
    funcName: "Article_query_follow_tag",
    method: "GET",
    url: "/v1/Article/query_follow_tag",
  },

  // 【新增】关注频道
  // doc: http://192.168.2.18:3000/project/141/interface/api/10589
  {
    funcName: "Article_follow_tag",
    method: "POST",
    url: "/v1/Article/follow_tag",
  },

  // 【删除】取消关注频道
  // doc: http://192.168.2.18:3000/project/141/interface/api/10595
  {
    funcName: "Article_anti_follow_tag",
    method: "POST",
    url: "/v1/Article/anti_follow_tag",
  },

  // 【列表】获取已关注频道
  // doc: http://192.168.2.18:3000/project/141/interface/api/12335
  {
    funcName: "Article_query_followed_tag_list",
    method: "GET",
    url: "/v1/Article/query_followed_tag_list",
  },

  // 【列表】获取话题热榜
  // doc: http://192.168.2.18:3000/project/141/interface/api/14885
  {
    funcName: "Article_query_hot_topic",
    method: "GET",
    url: "/v1/Article/query_hot_topic",
  },

  /**
   * ==================================================
   *  浏览历史
   *  浏览历史
   * ==================================================
   */

  // 【列表】获取浏览历史列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/10439
  {
    funcName: "History_query",
    method: "GET",
    url: "/v1/History/query",
  },

  /**
   * ==================================================
   *  资讯-动态
   *  资讯-动态
   * ==================================================
   */

  // 【列表】获取用户动态列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/10685
  {
    funcName: "Feed_query_dynamic",
    method: "GET",
    url: "/v1/Feed/query_dynamic",
  },

  // 【列表】获取动态详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/10691
  {
    funcName: "Feed_read",
    method: "GET",
    url: "/v1/Feed/read",
  },

  // 【列表】获取我的发布
  // doc: http://192.168.2.18:3000/project/141/interface/api/10697
  {
    funcName: "Feed_query_my_feed",
    method: "GET",
    url: "/v1/Feed/query_my_feed",
  },

  // 【列表】获取我的关注
  // doc: http://192.168.2.18:3000/project/141/interface/api/10703
  {
    funcName: "Feed_query_follow_feed",
    method: "GET",
    url: "/v1/Feed/query_follow_feed",
  },

  // 【新增】发布动态
  // doc: http://192.168.2.18:3000/project/141/interface/api/10709
  {
    funcName: "Feed_push_feed",
    method: "POST",
    url: "/v1/Feed/push_feed",
  },

  // 【新增】关注用户
  // doc: http://192.168.2.18:3000/project/141/interface/api/10715
  {
    funcName: "Feed_follow_user",
    method: "POST",
    url: "/v1/Feed/follow_user",
  },

  // 【删除】取关用户
  // doc: http://192.168.2.18:3000/project/141/interface/api/10721
  {
    funcName: "Feed_anti_follow_user",
    method: "POST",
    url: "/v1/Feed/anti_follow_user",
  },

  /**
   * ==================================================
   *  文件管理
   *  文件管理
   * ==================================================
   */

  // 【上传】上传文件
  // doc: http://192.168.2.18:3000/project/141/interface/api/12317
  {
    funcName: "Api_upload",
    method: "POST",
    url: "/v1/Api/upload",
  },

  /**
   * ==================================================
   *  潇洒泊车（司机端）
   *  潇洒泊车（司机端）
   * ==================================================
   */

  // 【列表】泊车员获取自己的订单列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/13595
  {
    funcName: "biz_Valet_Order_valet_order",
    method: "GET",
    url: "/v1/biz/Valet/Order/valet_order",
  },

  // 【编辑】接收订单
  // doc: http://192.168.2.18:3000/project/141/interface/api/13601
  {
    funcName: "biz_Valet_Order_taking",
    method: "POST",
    url: "/v1/biz/Valet/Order/taking",
  },

  // 【编辑】泊车员取消接单
  // doc: http://192.168.2.18:3000/project/141/interface/api/13607
  {
    funcName: "biz_Valet_Order_cancel_taking",
    method: "POST",
    url: "/v1/biz/Valet/Order/cancel_taking",
  },

  // 【编辑】上传车况
  // doc: http://192.168.2.18:3000/project/141/interface/api/13613
  {
    funcName: "biz_Valet_Order_check_car",
    method: "POST",
    url: "/v1/biz/Valet/Order/check_car",
  },

  // 【编辑】取车员接单
  // doc: http://192.168.2.18:3000/project/141/interface/api/13619
  {
    funcName: "biz_Valet_Order_driving",
    method: "POST",
    url: "/v1/biz/Valet/Order/driving",
  },

  // 【编辑】取车员取消接单
  // doc: http://192.168.2.18:3000/project/141/interface/api/13625
  {
    funcName: "biz_Valet_Order_cancel_driving",
    method: "POST",
    url: "/v1/biz/Valet/Order/cancel_driving",
  },

  // 【编辑】确定完成停车
  // doc: http://192.168.2.18:3000/project/141/interface/api/13631
  {
    funcName: "biz_Valet_Order_parking_done",
    method: "POST",
    url: "/v1/biz/Valet/Order/parking_done",
  },

  // 【编辑】确认订单金额
  // doc: http://192.168.2.18:3000/project/141/interface/api/13643
  {
    funcName: "biz_Valet_Order_price_confirm",
    method: "POST",
    url: "/v1/biz/Valet/Order/price_confirm",
  },

  // 【详情】订单详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/13727
  {
    funcName: "biz_Valet_Order_read",
    method: "GET",
    url: "/v1/biz/Valet/Order/read",
  },

  // 【查看】查看泊车员信息
  // doc: http://192.168.2.18:3000/project/141/interface/api/13787
  {
    funcName: "biz_Valet_User_read",
    method: "GET",
    url: "/v1/biz/Valet/User/read",
  },

  // 【编辑】编辑泊车员信息
  // doc: http://192.168.2.18:3000/project/141/interface/api/13793
  {
    funcName: "biz_Valet_User_update",
    method: "POST",
    url: "/v1/biz/Valet/User/update",
  },

  // 【编辑】取车员还车成功
  // doc: http://192.168.2.18:3000/project/141/interface/api/14813
  {
    funcName: "biz_Valet_Order_driving_done",
    method: "POST",
    url: "/v1/biz/Valet/Order/driving_done",
  },

  // 【列表】获取用户的卡券列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/15557
  {
    funcName: "biz_Market_ProductOrder_query",
    method: "GET",
    url: "/v1/biz/Market/ProductOrder/query",
  },

  // 【核销】用户核销订单
  // doc: http://192.168.2.18:3000/project/141/interface/api/15563
  {
    funcName: "biz_Market_ProductOrderCheck_check",
    method: "POST",
    url: "/v1/biz/Market/ProductOrderCheck/check",
  },

  // 【列表】获取用户某个商品的可核销列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/15575
  {
    funcName: "biz_Market_ProductOrder_queryChild",
    method: "GET",
    url: "/v1/biz/Market/ProductOrder/queryChild",
  },

  // 【评论-创建】创建旅行社评论接口
  // doc: http://192.168.2.18:3000/project/141/interface/api/9623
  {
    funcName: "biz_CompanyComment_save",
    method: "POST",
    url: "/v1/biz/CompanyComment/save",
  },

  // 【列表】旅游产品列表获取
  // doc: http://192.168.2.18:3000/project/141/interface/api/9629
  {
    funcName: "biz_Tour_Product_query",
    method: "GET",
    url: "/v1/biz/Tour/Product/query",
  },

  // 【注册】注册创建一个商家
  // doc: http://192.168.2.18:3000/project/141/interface/api/9737
  {
    funcName: "biz_Company_save",
    method: "POST",
    url: "/v1/biz/Company/save",
  },

  // 【编辑】编辑一个商家
  // doc: http://192.168.2.18:3000/project/141/interface/api/9899
  {
    funcName: "biz_Company_update",
    method: "POST",
    url: "/v1/biz/Company/update",
  },

  // 【成团】确认成团
  // doc: http://192.168.2.18:3000/project/141/interface/api/10541
  {
    funcName: "biz_TourTuanSpecPrice_confirmTuanSuccess",
    method: "POST",
    url: "/v1/biz/TourTuanSpecPrice/confirmTuanSuccess",
  },

  // 【出行】确认出行
  // doc: http://192.168.2.18:3000/project/141/interface/api/10547
  {
    funcName: "biz_TourTuanSpecPrice_confirmTuanGo",
    method: "POST",
    url: "/v1/biz/TourTuanSpecPrice/confirmTuanGo",
  },

  // 【解散】解散拼团
  // doc: http://192.168.2.18:3000/project/141/interface/api/10601
  {
    funcName: "biz_TourTuanSpecPrice_confirmDisband",
    method: "POST",
    url: "/v1/biz/TourTuanSpecPrice/confirmDisband",
  },

  // 【核销】核销拼团
  // doc: http://192.168.2.18:3000/project/141/interface/api/10619
  {
    funcName: "biz_TourTuanSpecPrice_verifyQrCode",
    method: "POST",
    url: "/v1/biz/TourTuanSpecPrice/verifyQrCode",
  },

  // 【编辑】行程安排
  // doc: http://192.168.2.18:3000/project/141/interface/api/10727
  {
    funcName: "biz_TourTuanSpecPrice_planTuan",
    method: "POST",
    url: "/v1/biz/TourTuanSpecPrice/planTuan",
  },

  // 【提交】提交审核
  // doc: http://192.168.2.18:3000/project/141/interface/api/12527
  {
    funcName: "biz_TourTuan_audit",
    method: "POST",
    url: "/v1/biz/TourTuan/audit",
  },

  // 启用/禁用拼团
  // doc: http://192.168.2.18:3000/project/141/interface/api/12533
  {
    funcName: "biz_TourTuan_change",
    method: "POST",
    url: "/v1/biz/TourTuan/change",
  },

  // 【重新审核】重新提交审核
  // doc: http://192.168.2.18:3000/project/141/interface/api/12563
  {
    funcName: "biz_Company_recommit",
    method: "POST",
    url: "/v1/biz/Company/recommit",
  },

  // 【详情】获取旅游产品详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9641
  {
    funcName: "biz_Tour_Product_read",
    method: "GET",
    url: "/v1/biz/Tour/Product/read",
  },

  // 【发起拼团】发起拼团接口
  // doc: http://192.168.2.18:3000/project/141/interface/api/9683
  {
    funcName: "biz_Tour_Product_startTuan",
    method: "POST",
    url: "/v1/biz/Tour/Product/startTuan",
  },

  // 【列表】拼团列表获取(带审核)
  // doc: http://192.168.2.18:3000/project/141/interface/api/9707
  {
    funcName: "biz_TourTuan_query",
    method: "GET",
    url: "/v1/biz/TourTuan/query",
  },

  // 【详情】获取拼团详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9713
  {
    funcName: "biz_TourTuan_read",
    method: "GET",
    url: "/v1/biz/TourTuan/read",
  },

  // 【列表】拼团列表获取(按规格)
  // doc: http://192.168.2.18:3000/project/141/interface/api/9725
  {
    funcName: "biz_TourTuanSpecPrice_query",
    method: "GET",
    url: "/v1/biz/TourTuanSpecPrice/query",
  },

  // 【列表】拼团订单列表获取
  // doc: http://192.168.2.18:3000/project/141/interface/api/9719
  {
    funcName: "biz_Tour_TourTuanOrder_query",
    method: "GET",
    url: "/v1/biz/Tour/TourTuanOrder/query",
  },

  /**
   * ==================================================
   *  潇洒泊车（游客）
   *  潇洒泊车（游客）
   * ==================================================
   */

  // 【新增】下单
  // doc: http://192.168.2.18:3000/project/141/interface/api/13577
  {
    funcName: "Valet_Order_place_order",
    method: "POST",
    url: "/v1/Valet/Order/place_order",
  },

  // 【编辑】用户取消订单
  // doc: http://192.168.2.18:3000/project/141/interface/api/13583
  {
    funcName: "Valet_Order_cancel",
    method: "POST",
    url: "/v1/Valet/Order/cancel",
  },

  // 【编辑】用户发起取车
  // doc: http://192.168.2.18:3000/project/141/interface/api/13589
  {
    funcName: "Valet_Order_user_pick_car",
    method: "POST",
    url: "/v1/Valet/Order/user_pick_car",
  },

  // 【列表】获取服务点列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/13649
  {
    funcName: "Valet_Parking_query",
    method: "GET",
    url: "/v1/Valet/Parking/query",
  },

  // 【详情】查看服务点详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/13655
  {
    funcName: "Valet_Parking_read",
    method: "GET",
    url: "/v1/Valet/Parking/read",
  },

  // 【列表】获取游客车辆列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/13661
  {
    funcName: "Valet_UserCar_query",
    method: "GET",
    url: "/v1/Valet/UserCar/query",
  },

  // 【详情】获取游客车辆详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/13667
  {
    funcName: "Valet_UserCar_read",
    method: "GET",
    url: "/v1/Valet/UserCar/read",
  },

  // 【新增】新增游客车辆
  // doc: http://192.168.2.18:3000/project/141/interface/api/13673
  {
    funcName: "Valet_UserCar_add",
    method: "POST",
    url: "/v1/Valet/UserCar/add",
  },

  // 【删除】删除游客车辆
  // doc: http://192.168.2.18:3000/project/141/interface/api/13679
  {
    funcName: "Valet_UserCar_delete",
    method: "POST",
    url: "/v1/Valet/UserCar/delete",
  },

  // 【编辑】编辑游客车辆
  // doc: http://192.168.2.18:3000/project/141/interface/api/13685
  {
    funcName: "Valet_UserCar_update",
    method: "POST",
    url: "/v1/Valet/UserCar/update",
  },

  // 【编辑】设置默认游客车辆
  // doc: http://192.168.2.18:3000/project/141/interface/api/13691
  {
    funcName: "Valet_UserCar_set_default",
    method: "POST",
    url: "/v1/Valet/UserCar/set_default",
  },

  // 【新增】游客一键停车的记录
  // doc: http://192.168.2.18:3000/project/141/interface/api/13697
  {
    funcName: "Valet_UserParking_record",
    method: "POST",
    url: "/v1/Valet/UserParking/record",
  },

  // 【查看】获取预计花费
  // doc: http://192.168.2.18:3000/project/141/interface/api/13799
  {
    funcName: "Valet_Order_price_estimate",
    method: "GET",
    url: "/v1/Valet/Order/price_estimate",
  },

  // 【列表】获取停车场列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/13871
  {
    funcName: "Valet_One_Parking_query",
    method: "GET",
    url: "/v1/Valet/One/Parking/query",
  },

  // 【详情】获取停车场详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/13877
  {
    funcName: "Valet_One_Parking_read",
    method: "GET",
    url: "/v1/Valet/One/Parking/read",
  },

  // 【查看】查看游客停车记录（反向寻车）
  // doc: http://192.168.2.18:3000/project/141/interface/api/13895
  {
    funcName: "Valet_UserParking_read",
    method: "GET",
    url: "/v1/Valet/UserParking/read",
  },

  // 【清除】清除游客停车记录（反向寻车成功后）
  // doc: http://192.168.2.18:3000/project/141/interface/api/13901
  {
    funcName: "Valet_UserParking_clean",
    method: "GET",
    url: "/v1/Valet/UserParking/clean",
  },

  // 【列表】获取车辆品牌列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/13907
  {
    funcName: "Valet_CarBrand_query",
    method: "GET",
    url: "/v1/Valet/CarBrand/query",
  },

  // 【列表】游客获取自己的订单列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/13919
  {
    funcName: "Valet_Order_query",
    method: "GET",
    url: "/v1/Valet/Order/query",
  },

  // 【详情】订单详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/13925
  {
    funcName: "Valet_Order_read",
    method: "GET",
    url: "/v1/Valet/Order/read",
  },

  // 【订单】游客支付订单
  // doc: http://192.168.2.18:3000/project/141/interface/api/13937
  {
    funcName: "Valet_Order_pay",
    method: "POST",
    url: "/v1/Valet/Order/pay",
  },

  // 【列表】获取车辆系列列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/13949
  {
    funcName: "Valet_CarSeries_query",
    method: "GET",
    url: "/v1/Valet/CarSeries/query",
  },

  /**
   * ==================================================
   *  二维码服务接口
   *  二维码服务接口
   * ==================================================
   */

  // 创建静态码
  // doc: http://192.168.2.18:3000/project/141/interface/api/14741
  {
    funcName: "qr_auth_create_static_code",
    method: "POST",
    url: "/v1/qr_auth/create_static_code",
  },

  // 二次调整
  // doc: http://192.168.2.18:3000/project/141/interface/api/14771
  {
    funcName: "qr_auth_change",
    method: "POST",
    url: "/v1/qr_auth/change",
  },

  // 创建活码
  // doc: http://192.168.2.18:3000/project/141/interface/api/14747
  {
    funcName: "qr_auth_create_dynamic_code",
    method: "POST",
    url: "/v1/qr_auth/create_dynamic_code",
  },

  // 二维码解码
  // doc: http://192.168.2.18:3000/project/141/interface/api/14735
  {
    funcName: "qr_auth_decode",
    method: "POST",
    url: "/v1/qr_auth/decode",
  },

  // 批量创建静态码
  // doc: http://192.168.2.18:3000/project/141/interface/api/14753
  {
    funcName: "qr_auth_create_batch_static_code",
    method: "POST",
    url: "/v1/qr_auth/create_batch_static_code",
  },

  // 批量创建活码
  // doc: http://192.168.2.18:3000/project/141/interface/api/14759
  {
    funcName: "qr_auth_create_batch_dynamic_code",
    method: "POST",
    url: "/v1/qr_auth/create_batch_dynamic_code",
  },

  /**
   * ==================================================
   *  智慧营销
   *  智慧营销
   * ==================================================
   */

  // 【订单-确认】生成订单让用户确认
  // doc: http://192.168.2.18:3000/project/141/interface/api/15329
  {
    funcName: "Market_ProductOrder_confirm",
    method: "POST",
    url: "/v1/Market/ProductOrder/confirm",
  },

  // 【列表】获取营销产品列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/15407
  {
    funcName: "Market_Product_query",
    method: "GET",
    url: "/v1/Market/Product/query",
  },

  // 【详情】查看营销产品详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/15413
  {
    funcName: "Market_Product_read",
    method: "GET",
    url: "/v1/Market/Product/read",
  },

  // 【列表】获取卡券列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/15419
  {
    funcName: "Market_ProductOrder_query",
    method: "GET",
    url: "/v1/Market/ProductOrder/query",
  },

  // 【详情】查看卡券详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/15425
  {
    funcName: "Market_ProductOrder_read",
    method: "GET",
    url: "/v1/Market/ProductOrder/read",
  },

  // 【订单-提交】用户提交订单
  // doc: http://192.168.2.18:3000/project/141/interface/api/15431
  {
    funcName: "Market_ProductOrder_commit",
    method: "POST",
    url: "/v1/Market/ProductOrder/commit",
  },

  // 【列表】获取核销记录列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/15443
  {
    funcName: "Market_ProductOrderCheck_query",
    method: "GET",
    url: "/v1/Market/ProductOrderCheck/query",
  },

  // 【支付】用户支付订单
  // doc: http://192.168.2.18:3000/project/141/interface/api/15449
  {
    funcName: "Market_ProductOrder_pay",
    method: "POST",
    url: "/v1/Market/ProductOrder/pay",
  },

  /**
   * ==================================================
   *  拼团部落
   *  拼团部落
   * ==================================================
   */

  // 【订单-取消】取消拼团订单
  // doc: http://192.168.2.18:3000/project/141/interface/api/9401
  {
    funcName: "Tour_TourTuanOrder_cancel",
    method: "POST",
    url: "/v1/Tour/TourTuanOrder/cancel",
  },

  // 【申请退款】申请订单退款
  // doc: http://192.168.2.18:3000/project/141/interface/api/10427
  {
    funcName: "Tour_TourTuanOrder_applyRefund",
    method: "POST",
    url: "/v1/Tour/TourTuanOrder/applyRefund",
  },

  // 【评论】订单评论
  // doc: http://192.168.2.18:3000/project/141/interface/api/10625
  {
    funcName: "Tour_TourTuanOrder_comment",
    method: "POST",
    url: "/v1/Tour/TourTuanOrder/comment",
  },

  // 【列表】获取需求列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/8735
  {
    funcName: "Tour_Demand_query",
    method: "GET",
    url: "/v1/Tour/Demand/query",
  },

  // 【创建】创建拼团需求
  // doc: http://192.168.2.18:3000/project/141/interface/api/8765
  {
    funcName: "Tour_Demand_save",
    method: "POST",
    url: "/v1/Tour/Demand/save",
  },

  // 【详情】获取拼团需求详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/8771
  {
    funcName: "Tour_Demand_read",
    method: "GET",
    url: "/v1/Tour/Demand/read",
  },

  // 【列表】拼团列表获取
  // doc: http://192.168.2.18:3000/project/141/interface/api/8873
  {
    funcName: "Tour_Tuan_query",
    method: "GET",
    url: "/v1/Tour/Tuan/query",
  },

  // 【详情】获取拼团详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/8951
  {
    funcName: "Tour_Tuan_read",
    method: "GET",
    url: "/v1/Tour/Tuan/read",
  },

  // 【订单-确认】生成订单让用户确认
  // doc: http://192.168.2.18:3000/project/141/interface/api/9155
  {
    funcName: "Tour_TourTuanOrder_confirm",
    method: "POST",
    url: "/v1/Tour/TourTuanOrder/confirm",
  },

  // 【订单-下订单】生成订单让用户确认
  // doc: http://192.168.2.18:3000/project/141/interface/api/9161
  {
    funcName: "Tour_TourTuanOrder_commit",
    method: "POST",
    url: "/v1/Tour/TourTuanOrder/commit",
  },

  // 【订单-详情】查看订单详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9197
  {
    funcName: "Tour_TourTuanOrder_detail",
    method: "GET",
    url: "/v1/Tour/TourTuanOrder/detail",
  },

  // 【列表】拼团订单列表获取
  // doc: http://192.168.2.18:3000/project/141/interface/api/9341
  {
    funcName: "Tour_TourTuanOrder_query",
    method: "GET",
    url: "/v1/Tour/TourTuanOrder/query",
  },

  // 【列表】获取我的需求列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9209
  {
    funcName: "Tour_Demand_query_mine",
    method: "GET",
    url: "/v1/Tour/Demand/query_mine",
  },

  // 【订单-支付】支付拼团订单
  // doc: http://192.168.2.18:3000/project/141/interface/api/9347
  {
    funcName: "Tour_TourTuanOrder_pay",
    method: "POST",
    url: "/v1/Tour/TourTuanOrder/pay",
  },

  // 【列表】旅游线路列表获取
  // doc: http://192.168.2.18:3000/project/141/interface/api/10361
  {
    funcName: "Tour_TourLine_query",
    method: "GET",
    url: "/v1/Tour/TourLine/query",
  },

  /**
   * ==================================================
   *  人人讲解
   *  人人讲解
   * ==================================================
   */

  // 【列表】获取景区列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/8981
  {
    funcName: "Explains_Scenic_query",
    method: "GET",
    url: "/v1/Explains/Scenic/query",
  },

  // 【查看】查看指定景区
  // doc: http://192.168.2.18:3000/project/141/interface/api/8987
  {
    funcName: "Explains_Scenic_read",
    method: "GET",
    url: "/v1/Explains/Scenic/read",
  },

  // 【列表】获取景点列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/8999
  {
    funcName: "Explains_ScenicSpot_query",
    method: "GET",
    url: "/v1/Explains/ScenicSpot/query",
  },

  // 【查看】查看指定景点
  // doc: http://192.168.2.18:3000/project/141/interface/api/9005
  {
    funcName: "Explains_ScenicSpot_read",
    method: "GET",
    url: "/v1/Explains/ScenicSpot/read",
  },

  // 【列表】获取景点讲解音频列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9131
  {
    funcName: "Explains_ScenicSpotVoice_query",
    method: "GET",
    url: "/v1/Explains/ScenicSpotVoice/query",
  },

  // 【列表】获取我的讲解音频列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9137
  {
    funcName: "Explains_ScenicSpotVoice_query_mine",
    method: "GET",
    url: "/v1/Explains/ScenicSpotVoice/query_mine",
  },

  // 【查看】查看指定景点讲解音频
  // doc: http://192.168.2.18:3000/project/141/interface/api/9143
  {
    funcName: "Explains_ScenicSpotVoice_read",
    method: "GET",
    url: "/v1/Explains/ScenicSpotVoice/read",
  },

  // 【列表】获取首页banner广告列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9185
  {
    funcName: "Explains_Scenic_get_banner_ad",
    method: "GET",
    url: "/v1/Explains/Scenic/get_banner_ad",
  },

  // 【列表】获取景区的所有景点信息
  // doc: http://192.168.2.18:3000/project/141/interface/api/9485
  {
    funcName: "Explains_Scenic_get_subordinate_info",
    method: "GET",
    url: "/v1/Explains/Scenic/get_subordinate_info",
  },

  // 【上传】上传音频
  // doc: http://192.168.2.18:3000/project/141/interface/api/13829
  {
    funcName: "Explains_ScenicSpotVoice_upload",
    method: "POST",
    url: "/v1/Explains/ScenicSpotVoice/upload",
  },

  /**
   * ==================================================
   *  人人讲解
   *  人人讲解
   * ==================================================
   */

  // 【打赏】音频打赏
  // doc: http://192.168.2.18:3000/project/141/interface/api/12539
  {
    funcName: "Explain_ScenicSpotVoiceOrder_reward",
    method: "POST",
    url: "/v1/Explain/ScenicSpotVoiceOrder/reward",
  },

  /**
   * ==================================================
   *  广告
   *  广告
   * ==================================================
   */

  // 【列表】获取广告列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9179
  {
    funcName: "Ad_query",
    method: "GET",
    url: "/v1/Ad/query",
  },

  /**
   * ==================================================
   *  一图一码
   *  一图一码
   * ==================================================
   */

  // 【列表】获取酒店列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9491
  {
    funcName: "One_Hotel_query",
    method: "GET",
    url: "/v1/One/Hotel/query",
  },

  // 【详情】获取酒店详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9497
  {
    funcName: "One_Hotel_read",
    method: "GET",
    url: "/v1/One/Hotel/read",
  },

  // 【列表】获取场馆列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9503
  {
    funcName: "One_Venue_query",
    method: "GET",
    url: "/v1/One/Venue/query",
  },

  // 【详情】获取场馆详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9509
  {
    funcName: "One_Venue_read",
    method: "GET",
    url: "/v1/One/Venue/read",
  },

  // 【列表】获取场地列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9515
  {
    funcName: "One_VenuePlace_query",
    method: "GET",
    url: "/v1/One/VenuePlace/query",
  },

  // 【详情】获取场地详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9521
  {
    funcName: "One_VenuePlace_read",
    method: "GET",
    url: "/v1/One/VenuePlace/read",
  },

  // 【列表】获取景区列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9527
  {
    funcName: "One_Scenic_query",
    method: "GET",
    url: "/v1/One/Scenic/query",
  },

  // 【查看】查看指定景区
  // doc: http://192.168.2.18:3000/project/141/interface/api/9533
  {
    funcName: "One_Scenic_read",
    method: "GET",
    url: "/v1/One/Scenic/read",
  },

  // 【列表】获取景点列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9539
  {
    funcName: "One_ScenicSpot_query",
    method: "GET",
    url: "/v1/One/ScenicSpot/query",
  },

  // 【查看】查看指定景点
  // doc: http://192.168.2.18:3000/project/141/interface/api/9545
  {
    funcName: "One_ScenicSpot_read",
    method: "GET",
    url: "/v1/One/ScenicSpot/read",
  },

  // 【列表】获取停车场列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9551
  {
    funcName: "One_Parking_query",
    method: "GET",
    url: "/v1/One/Parking/query",
  },

  // 【列表】获取餐厅列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9587
  {
    funcName: "One_Restaurant_query",
    method: "GET",
    url: "/v1/One/Restaurant/query",
  },

  // 【详情】获取餐厅详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9593
  {
    funcName: "One_Restaurant_read",
    method: "GET",
    url: "/v1/One/Restaurant/read",
  },

  // 【列表】获取文化场馆分类列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/10001
  {
    funcName: "One_SiteCategory_query",
    method: "GET",
    url: "/v1/One/SiteCategory/query",
  },

  // 【列表】获取文化场馆列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/10037
  {
    funcName: "One_Site_query",
    method: "GET",
    url: "/v1/One/Site/query",
  },

  // 【详情】获取文化场馆详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/10043
  {
    funcName: "One_Site_read",
    method: "GET",
    url: "/v1/One/Site/read",
  },

  // 【列表】获取体育馆分类列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/10055
  {
    funcName: "One_VenueCategory_query",
    method: "GET",
    url: "/v1/One/VenueCategory/query",
  },

  // 【列表】获取旅游分类列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/10061
  {
    funcName: "One_TourCategory_query",
    method: "GET",
    url: "/v1/One/TourCategory/query",
  },

  // 【列表】旅游线路列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/10067
  {
    funcName: "One_TourRouteGuide_query",
    method: "GET",
    url: "/v1/One/TourRouteGuide/query",
  },

  // 【详情】获取旅游攻略详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/10079
  {
    funcName: "One_TourRouteGuide_detail",
    method: "GET",
    url: "/v1/One/TourRouteGuide/detail",
  },

  // 【统一】获取分类
  // doc: http://192.168.2.18:3000/project/141/interface/api/10085
  {
    funcName: "One_uniCategory_query",
    method: "GET",
    url: "/v1/One/uniCategory/query",
  },

  // 【统一】获取列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/10091
  {
    funcName: "One_uniList_query",
    method: "GET",
    url: "/v1/One/uniList/query",
  },

  // 【列表】获取酒店房型列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/10307
  {
    funcName: "One_HotelRoom_query",
    method: "GET",
    url: "/v1/One/HotelRoom/query",
  },

  // 【详情】获取酒店房型详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/10313
  {
    funcName: "One_HotelRoom_read",
    method: "GET",
    url: "/v1/One/HotelRoom/read",
  },

  // 【统一】获取搜索热词
  // doc: http://192.168.2.18:3000/project/141/interface/api/10319
  {
    funcName: "One_uniList_hot",
    method: "GET",
    url: "/v1/One/uniList/hot",
  },

  // 【列表】获取医务室列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/12545
  {
    funcName: "One_Clinic_query",
    method: "GET",
    url: "/v1/One/Clinic/query",
  },

  // 【列表】获取厕所列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/12551
  {
    funcName: "One_Toilet_query",
    method: "GET",
    url: "/v1/One/Toilet/query",
  },

  // 【详情】获取停车场详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/12713
  {
    funcName: "One_Parking_read",
    method: "GET",
    url: "/v1/One/Parking/read",
  },

  // 【列表】我的预定
  // doc: http://192.168.2.18:3000/project/141/interface/api/13991
  {
    funcName: "One_VenuePlaceOrder_query",
    method: "GET",
    url: "/v1/One/VenuePlaceOrder/query",
  },

  // 【详情】获取场地预订详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/13997
  {
    funcName: "One_VenuePlaceOrder_read",
    method: "GET",
    url: "/v1/One/VenuePlaceOrder/read",
  },

  // 【新增】新增预定
  // doc: http://192.168.2.18:3000/project/141/interface/api/14003
  {
    funcName: "One_VenuePlaceOrder_reserve",
    method: "POST",
    url: "/v1/One/VenuePlaceOrder/reserve",
  },

  // 【取消】取消预定
  // doc: http://192.168.2.18:3000/project/141/interface/api/14009
  {
    funcName: "One_VenuePlaceOrder_cancel",
    method: "POST",
    url: "/v1/One/VenuePlaceOrder/cancel",
  },

  // 【列表】我的预定酒店房型
  // doc: http://192.168.2.18:3000/project/141/interface/api/16535
  {
    funcName: "One_HotelRoomOrder_query",
    method: "GET",
    url: "/v1/One/HotelRoomOrder/query",
  },

  // 【详情】获取酒店房型预订详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/16541
  {
    funcName: "One_HotelRoomOrder_read",
    method: "GET",
    url: "/v1/One/HotelRoomOrder/read",
  },

  // 【新增】新增预定酒店房型
  // doc: http://192.168.2.18:3000/project/141/interface/api/16547
  {
    funcName: "One_HotelRoomOrder_reserve",
    method: "POST",
    url: "/v1/One/HotelRoomOrder/reserve",
  },

  // 【取消】取消预定酒店房型
  // doc: http://192.168.2.18:3000/project/141/interface/api/16553
  {
    funcName: "One_HotelRoomOrder_cancel",
    method: "POST",
    url: "/v1/One/HotelRoomOrder/cancel",
  },

  /**
   * ==================================================
   *  通用社交功能
   *  通用社交功能
   * ==================================================
   */

  // 【评论-创建】创建评论接口
  // doc: http://192.168.2.18:3000/project/141/interface/api/8759
  {
    funcName: "Comment_save",
    method: "POST",
    url: "/v1/Comment/save",
  },

  // 【评论-列表】获取评论列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9419
  {
    funcName: "Comment_query",
    method: "GET",
    url: "/v1/Comment/query",
  },

  /**
   * ==================================================
   *  通用社交功能
   *  通用社交功能
   * ==================================================
   */

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

  /**
   * ==================================================
   *  通用社交功能
   *  通用社交功能
   * ==================================================
   */

  // 【旅行社评论-列表】获取旅行社评论的列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9425
  {
    funcName: "CompanyComment_query",
    method: "GET",
    url: "/v1/CompanyComment/query",
  },

  /**
   * ==================================================
   *  通用社交功能
   *  通用社交功能
   * ==================================================
   */

  // 【认证】用户实名认证
  // doc: http://192.168.2.18:3000/project/141/interface/api/9605
  {
    funcName: "UserCertification_auth",
    method: "POST",
    url: "/v1/UserCertification/auth",
  },

  /**
   * ==================================================
   *  通用社交功能
   *  通用社交功能
   * ==================================================
   */

  // 【收藏-创建】收藏
  // doc: http://192.168.2.18:3000/project/141/interface/api/9983
  {
    funcName: "Collection_save",
    method: "POST",
    url: "/v1/Collection/save",
  },

  // 【收藏-删除】取消收藏
  // doc: http://192.168.2.18:3000/project/141/interface/api/9989
  {
    funcName: "Collection_delete",
    method: "POST",
    url: "/v1/Collection/delete",
  },

  // 【收藏-列表】获取收藏列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/12065
  {
    funcName: "Collection_query",
    method: "GET",
    url: "/v1/Collection/query",
  },

  /**
   * ==================================================
   *  通用社交功能
   *  通用社交功能
   * ==================================================
   */

  // 【认证】名人认证
  // doc: http://192.168.2.18:3000/project/141/interface/api/10349
  {
    funcName: "Celebrity_auth",
    method: "POST",
    url: "/v1/Celebrity/auth",
  },

  // 【详情】名人认证情况查看
  // doc: http://192.168.2.18:3000/project/141/interface/api/13751
  {
    funcName: "Celebrity_read",
    method: "GET",
    url: "/v1/Celebrity/read",
  },

  /**
   * ==================================================
   *  通用社交功能
   *  通用社交功能
   * ==================================================
   */

  // 【列表】查询所有通知
  // doc: http://192.168.2.18:3000/project/141/interface/api/10445
  {
    funcName: "Notification_query",
    method: "GET",
    url: "/v1/Notification/query",
  },

  // 【已读】将通知变为已读
  // doc: http://192.168.2.18:3000/project/141/interface/api/10451
  {
    funcName: "Notification_read",
    method: "GET",
    url: "/v1/Notification/read",
  },

  // 【列表】查询所有通知
  // doc: http://192.168.2.18:3000/project/141/interface/api/13805
  {
    funcName: "Notification_company_query",
    method: "GET",
    url: "/v1/Notification/company/query",
  },

  // 【已读】将通知变为已读
  // doc: http://192.168.2.18:3000/project/141/interface/api/13811
  {
    funcName: "Notification_company_read",
    method: "GET",
    url: "/v1/Notification/company/read",
  },

  /**
   * ==================================================
   *  用户登录
   *  用户登录
   * ==================================================
   */

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

  // 更新会员信息
  // doc: http://192.168.2.18:3000/project/141/interface/api/13823
  {
    funcName: "api_user_info_update",
    method: "POST",
    url: "/v1/api/user_info_update",
  },

  /**
   * ==================================================
   *  投诉
   *  投诉
   * ==================================================
   */

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

  /**
   * ==================================================
   *  用户
   *  null
   * ==================================================
   */

  // 获取身份码
  // doc: http://192.168.2.18:3000/project/141/interface/api/9659
  {
    funcName: "user_get_id_code",
    method: "POST",
    url: "/v1/user/get_id_code",
  },

  // 实人认证
  // doc: http://192.168.2.18:3000/project/141/interface/api/14765
  {
    funcName: "user_verifyFace",
    method: "POST",
    url: "/v1/user/verifyFace",
  },

  /**
   * ==================================================
   *  Web桌面
   *  Web桌面
   * ==================================================
   */

  // 【列表】 桌面应用列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9947
  {
    funcName: "manage_Api_getApps",
    method: "GET",
    url: "/v1/manage/Api/getApps",
  },

  // 【新建】新建桌面应用
  // doc: http://192.168.2.18:3000/project/141/interface/api/9953
  {
    funcName: "manage_desktop_save",
    method: "POST",
    url: "/v1/manage/desktop/save",
  },

  // 【编辑】编辑桌面应用
  // doc: http://192.168.2.18:3000/project/141/interface/api/9959
  {
    funcName: "manage_desktop_update",
    method: "POST",
    url: "/v1/manage/desktop/update",
  },

  // 【列表】 桌面应用池
  // doc: http://192.168.2.18:3000/project/141/interface/api/9995
  {
    funcName: "manage_Api_pool",
    method: "GET",
    url: "/v1/manage/Api/pool",
  },

  // 【设置】 获取桌面设置
  // doc: http://192.168.2.18:3000/project/141/interface/api/10013
  {
    funcName: "manage_desktop_setting",
    method: "GET",
    url: "/v1/manage/desktop/setting",
  },

  // 【登录】桌面应用平台登录
  // doc: http://192.168.2.18:3000/project/141/interface/api/10025
  {
    funcName: "manage_Api_doLogin",
    method: "POST",
    url: "/v1/manage/Api/doLogin",
  },

  // 【登出】桌面应用平台登出
  // doc: http://192.168.2.18:3000/project/141/interface/api/10031
  {
    funcName: "manage_Api_logout",
    method: "POST",
    url: "/v1/manage/Api/logout",
  },

  // 【排序】桌面应用排序
  // doc: http://192.168.2.18:3000/project/141/interface/api/10049
  {
    funcName: "manage_desktop_sort",
    method: "POST",
    url: "/v1/manage/desktop/sort",
  },

  // 【背景】【删除】删除桌面背景
  // doc: http://192.168.2.18:3000/project/141/interface/api/10127
  {
    funcName: "manage_desktop_deleteBg",
    method: "GET",
    url: "/v1/manage/desktop/deleteBg",
  },

  // 【背景】更换桌面背景
  // doc: http://192.168.2.18:3000/project/141/interface/api/10151
  {
    funcName: "manage_desktop_changeBg",
    method: "GET",
    url: "/v1/manage/desktop/changeBg",
  },

  // 【背景】新增桌面背景
  // doc: http://192.168.2.18:3000/project/141/interface/api/10157
  {
    funcName: "manage_desktop_addBg",
    method: "POST",
    url: "/v1/manage/desktop/addBg",
  },

  // 【删除】隐藏桌面应用
  // doc: http://192.168.2.18:3000/project/141/interface/api/10169
  {
    funcName: "manage_desktop_delete",
    method: "POST",
    url: "/v1/manage/desktop/delete",
  },

  // 【新建】新建自定义桌面应用
  // doc: http://192.168.2.18:3000/project/141/interface/api/10181
  {
    funcName: "manage_desktop_customSave",
    method: "POST",
    url: "/v1/manage/desktop/customSave",
  },

  // 【设置】更新设置桌面
  // doc: http://192.168.2.18:3000/project/141/interface/api/10199
  {
    funcName: "manage_desktop_changeSetting",
    method: "POST",
    url: "/v1/manage/desktop/changeSetting",
  },

  /**
   * ==================================================
   *  二维码信息获取
   *  二维码信息获取
   * ==================================================
   */

  // 获取二维码信息
  // doc: http://192.168.2.18:3000/project/141/interface/api/10139
  {
    funcName: "qr_get_info",
    method: "POST",
    url: "/v1/qr/get_info",
  },
];
