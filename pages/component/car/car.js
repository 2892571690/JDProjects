let app = getApp()
Component({
  options:{
    addGlobalClass: true,
  },
  properties: {
    name: {
      type: String,
      value: "car"
    }
  },
  data:{
    Infinitelyzoned:null,
    httpParams: {
      "url": "http://www.xiongmaoyouxuan.com/api/column/3183/items?start=",
      "type": "formatitem"
    }
  },
  ready(){
    this.setData({
      Infinitelyzoned: this.selectComponent("#Infinitelyzoned")
    })
  },
  methods:{
    onReachBottom(){
      this.data.Infinitelyzoned.onReachBottom()
    }
  }
})