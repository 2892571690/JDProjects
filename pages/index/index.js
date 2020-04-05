//index.js
//获取应用实例
const app = getApp()
Page({
  data:{
    cunindex:0,
    items:[
      {
        "icon": "iconfont icon-shouye",
        "text":"首页"
      },
      {
        "icon": "iconfont icon-fenlei",
        "text": "分类"
      },
      {
        "icon": "iconfont icon-faxian",
        "text": "发现"
      },
      {
        "icon": "iconfont icon-gouwuche2",
         "text" :"购物车"
      },
      {
        "icon": "iconfont icon-wode",
        "text": "我的"
      }
    ],
    componenthome:null,
    componentcar:null,
    componentfind:null,
    judge:false

  },
  active(e){
    this.setData({
      cunindex: e.currentTarget.dataset.index
    })
  },
  onReady(){
    this.setData({
      componenthome: this.selectComponent("#componenthome"),
      componentcar: this.selectComponent("#componentcar"),
      componentfind: this.selectComponent("#componentfind")
    })
  },
  onReachBottom(){
    if (this.data.cunindex === 0){
      this.data.componenthome.onReachBottom()
    } else if (this.data.cunindex === 3){
      this.data.componentcar.onReachBottom()
    } else if (this.data.cunindex === 2){
      this.data.componentfind.onReachBottom()
    }
  },
  onPageScroll: function (e) {
    if (e.scrollTop > 2000){
      this.setData({
        judge:true
      })
    }else{
      this.setData({
        judge: false
      })
    }
  },
  totop(){
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  }
})

  
    