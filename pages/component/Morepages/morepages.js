Page({
  data:{
    Bannerimg:'',
    Urlid:'',
    httpParams: {
      "url": "http://www.xiongmaoyouxuan.com/api/column/3183/items?start=",
      "type": "formatitem"
    }
  },
  onLoad(option){
    let httpParamsUrl = "httpParams.url"
    this.setData({
      Urlid: option.dataurlid,
      [httpParamsUrl]: `http://www.xiongmaoyouxuan.com/api/column/${option.dataurlid}/items?start=`
    })
  },
  onReady(){
    this.imgbanner()
  },
  imgbanner(){
    wx.request({
      url: `http://www.xiongmaoyouxuan.com/api/column/${this.data.Urlid}`,
      header: {},
      method: 'GET',
      success: (res) =>{
        this.setData({
          Bannerimg: res.data.data.share.imageUrl
        })
      },
    })
  }
})