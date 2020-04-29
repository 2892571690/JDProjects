let app = getApp()

Component({
  behaviors:[],
  properties: {
    "httpParams": {
      type: Object
    }
  },
  data:{
    List:[],
    start:0,
    isEnd:false
  },
  ready(){
    this.httplodel()
  },
  methods:{
    onReachBottom() {
      if (this.data.isEnd === true){
          wx.stopPullDownRefresh()
      }else{
        this.httplodel()
      }
    },
    httplodel(){
      wx.request({
        url:this.properties.httpParams.url+this.data.start,
        header: { 'content-type': 'application/json' },
        method: 'GET',
        success: (res) => {
          if (this.properties.httpParams.type === "fill"){
            var list = this.data.List.concat(res.data.data.items.list)
            var start = res.data.data.items.nextIndex
            var isEnd = res.data.data.items.isEnd
          } else if (this.properties.httpParams.type === "formatitem"){
            var list = this.data.List.concat(res.data.data.list)
            var start = res.data.data.nextIndex
            var isEnd = res.data.data.isEnd
          }
          this.setData({
            List: list,
            start: start,
            isEnd: isEnd
          })
        }
      })
    },
    clicklist(e){
      // console.log(e.currentTarget.dataset.itemid)
      // let a = e.currentTarget.dataset.itemid
      // console.log(e.currentTarget.dataset.itemurl)
      let a = e.currentTarget.dataset.itemurl
      let Urlid = a.substr(-4)
      if (e.currentTarget.dataset.itemtype === 1){
        wx.navigateTo({
          url: '/pages/component/Purchasepage/purchasepage?data1=' + e.currentTarget.dataset.itemid,
        })
      } else if (e.currentTarget.dataset.itemtype === 2){
        wx.navigateTo({
          url: '/pages/component/Morepages/morepages?dataurlid=' + Urlid,
        })
      }
    }
  }
})