// pages/component/home/home.js
let app = getApp()
Component({
  /* 开启全局样式设置 */
  options: {
    addGlobalClass: true,
  },
  /* 组件的属性列表 */
  properties: {
    name: {
      type: String,
      value: 'Home'
    }
  },
  data: {
    infinitelyzoned:null,
    ImgUrl: [],
    Hotsearch:["食品","小米","水果","服装"],
    httpParams: {
      "url": "http://www.xiongmaoyouxuan.com/api/tab/1/feeds?start=",
      "type": "formatitem"
    },
    // httpParams:'qweqeewq',
    listone:[
      {
        "image":"/pages/image/supermarket.png",
        "title":"京东超市"
      },
      {
        "image": "/pages/image/digital.png",
        "title": "数码电器"
      },
      {
        "image": "/pages/image/clothing.png",
        "title": "京东服装"
      },
      {
        "image": "/pages/image/fresh.png",
        "title": "京东生鲜"
      },
      {
        "image": "/pages/image/ranking.png",
        "title": "排行榜"
      },
      {
        "image": "/pages/image/recharge.png",
        "title": "充值缴费"
      },
      {
        "image": "/pages/image/spellpurchase.png",
        "title": "9.9元拼"
      },
      {
        "image": "/pages/image/volume.png",
        "title": "领卷"
      },
      {
        "image": "/pages/image/money.png",
        "title": "赚钱"
      },
      {
        "image": "/pages/image/member.png",
        "title": "会员"
      }
    ],
    listtwo:[
      {
        "image": "/pages/image/international.png",
        "title": "京东国际"
      },
      {
        "image": "/pages/image/auction.png",
        "title": "京东拍卖"
      },
      {
        "image": "/pages/image/weipinhui.png",
        "title": "唯品会"
      },
      {
        "image": "/pages/image/phone.jpg",
        "title": "玩3C"
      },
      {
        "image": "/pages/image/woerma.png",
        "title": "沃尔玛"
      },
      {
        "image": "/pages/image/beautymakeup.png",
        "title": "美妆馆"
      },
      {
        "image": "/pages/image/travel.png",
        "title": "京东旅行"
      },
      {
        "image": "/pages/image/secondhand.png",
        "title": "拍拍二手"
      },
      {
        "image": "/pages/image/logistics.png",
        "title": "物流查询"
      },
      {
        "image": "/pages/image/whole.png",
        "title": "全部"
      },
    ]
  },
  created () {
    wx.request({
      url: 'http://www.xiongmaoyouxuan.com/api/tab/1?start=0',
      data: '',
      header: { 'content-type': 'application/json' },
      method: 'GET',
      responseType: 'text',
      success: (res) => {
        // console.log(res.data.data.banners)
        this.setData({
          ImgUrl: res.data.data.banners
        })
      }
    })
  },
  ready(){
    this.setData({
      infinitelyzoned: this.selectComponent("#infinitelyzoned")
      })
  },
  methods:{
    onReachBottom(){
      this.data.infinitelyzoned.onReachBottom()
      
    }
  }
})