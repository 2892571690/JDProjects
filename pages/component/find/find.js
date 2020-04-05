let app = getApp()
Component({
  options:{
    addGlobalClass: true,
  },
  properties:{
    name:{
      type: String,
      value: "find"
    }
  },
  data:{
    Titlelist: ['精选', '鞋包', '超市', '电脑', '美妆', '男装', '家电', '手机', '数码', '女装', '母婴', '家具'],
    httpParams: {
      "url": "http://www.xiongmaoyouxuan.com/api/category/2072/items?start=",
      "type": "fill"
    },
    Infinitelyzoned:null,
    ClickIndex:0
  },
  ready() {
    this.setData({
      Infinitelyzoned: this.selectComponent("#findid")
    })
  },
  methods:{
    onReachBottom(){
      this.data.Infinitelyzoned.onReachBottom()
    },
    clickitem(e){
      this.setData({
        ClickIndex: e.currentTarget.dataset.clickindex
      })
    }
  }
})