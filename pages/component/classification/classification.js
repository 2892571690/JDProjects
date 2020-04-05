// pages/component/classification/classification.js
var app = getApp()
Component({
  options:{
    addGlobalClass: true,
  },
  properties:{
    name:{
      type:String,
      value:'classification'
    }
  },
  data:{
    list: ['热门推荐', '手机数码', '家用电器', '电脑办公', '计生情趣', '美妆护肤', '个护清洁', '汽车生活', '京东超市', '男装',
      '男鞋', '女装', '女鞋', '母婴童装', '图书音像', '户外运动', '内衣配饰', '食品新鲜', '酒水饮料', '家居家装',
      '家具厨具', '箱包手袋', '钟表宝珠', '玩具乐器', '医药保健', '宠物生活', '礼品鲜花', '农资绿植', '生活旅行', '奢侈品',
      '京东国际', '艺术邮币', '二手商品', '特产管', '京东金融', '国际名牌', '拍卖', '房产', '工业品'
    ],
    ClickIndex:0
  },
  methods:{
    clickactive(e){
      this.setData({
        ClickIndex: e.target.dataset.indexkey
      })
    }
  }
})