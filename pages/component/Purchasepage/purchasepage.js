Page({
  data:{
    Swiperimg:[],
    Title:'',
    Price:'',
    Salesvolume:'',
    Listimg:[],
    Ueldata:''
  },
  onLoad(option){
    this.setData({
      Ueldata: option.data1
    })
  },
  onReady(){
    this.requesturl()
  },
  requesturl(){
    wx.request({
      url: `http://www.xiongmaoyouxuan.com/api/detail?id=${this.data.Ueldata}&normal=1&sa=`,
      header: { 'content-type': 'application/json'},
      method: 'GET',
      success:(res) =>{
        // console.log(res)
        this.setData({
          Swiperimg: res.data.data.detail.photo,
          Title:res.data.data.share.title,
          Price: res.data.data.detail.price,
          Salesvolume: res.data.data.detail.saleNum,
          Listimg: res.data.data.detail.descContentList
        })
      },
    })
  }
})