class ChatbotData {

  constructor() { }

  static getSpecialImageWithText() {
    var data = `{
      "model": "CB-ChatbotDanmu-SpecialImageByText",
      "type": "data",
      "version": "1.0",
      "author": "cikepaokei",
      "created": "20200823",
      "description": "",
      "config": {
          "defaultImage": "./img/extend_icon_default.png",
          "defaultImageStyle": "textToImg"
      },
      "data": [
          {
              "name": "晚上好",
              "imageUrl": "./img/Niko_Cheering.gif",
              "imageStyle": "textToImg",
              "danmuStyle": ""
          },
          {
              "name": "下午好",
              "imageUrl": "./img/Niko_Cheering.gif",
              "imageStyle": "textToImg",
              "danmuStyle": ""
          },
          {
              "name": "新年好",
              "imageUrl": "./img/NY2023.gif",
              "imageStyle": "",
              "danmuStyle": ""
          },
          {
            "name": "新年快乐",
            "imageUrl": "./img/NY2023.gif",
            "imageStyle": "",
            "danmuStyle": ""
          },
          {
              "name": "哔哩哔哩",
              "imageUrl": "./img/bilibili.jpg",
              "imageStyle": "textToImg",
              "danmuStyle": ""
          },
          {
              "name": ":RED",
              "imageUrl": "./img/part-Red-x5.png",
              "imageStyle": "textToIcon",
              "danmuStyle": ""
          },
          {
              "name": ":ORANGE",
              "imageUrl": "./img/part-Orange-x5.png",
              "imageStyle": "textToIcon",
              "danmuStyle": ""
          },
          {
              "name": ":YELLOW",
              "imageUrl": "./img/part-Yellow-x5.png",
              "imageStyle": "textToIcon",
              "danmuStyle": ""
          },
          {
              "name": ":GREEN",
              "imageUrl": "./img/part-Green-x5.png",
              "imageStyle": "textToIcon",
              "danmuStyle": ""
          },
          {
              "name": ":JADE",
              "imageUrl": "./img/part-Jade-x5.png",
              "imageStyle": "textToIcon",
              "danmuStyle": ""
          },
          {
              "name": ":EGGPLANT",
              "imageUrl": "./img/part-Eggplant-x5.png",
              "imageStyle": "textToIcon",
              "danmuStyle": ""
          },
          {
              "name": ":BLUE",
              "imageUrl": "./img/part-Blue-x5.png",
              "imageStyle": "textToIcon",
              "danmuStyle": ""
          },
          {
            "name": ":BADGE",
            "imageUrl": "./img/Badge.png",
            "imageStyle": "textToIcon",
            "danmuStyle": ""
          },
          {
            "name": "哈",
            "imageUrl": "./img/lol.gif",
            "imageStyle": "textToEmoji",
            "danmuStyle": ""
          },
          {
            "name": "赞",
            "imageUrl": "./img/small_2022022220818175.gif",
            "imageStyle": "textToEmoji",
            "danmuStyle": ""
          },
          {
            "name": "谢谢",
            "imageUrl": "./img/Departure_Niko.gif",
            "imageStyle": "textToImg",
            "danmuStyle": ""
          },
          {
            "name": "来了",
            "imageUrl": "./img/Gratien.webp",
            "imageStyle": "textToImg",
            "danmuStyle": ""
          },
          {
            "name": "晚安",
            "imageUrl": "./img/Niko_Cheering.gif",
            "imageStyle": "textToImg",
            "danmuStyle": ""
          },
          {
            "name": "加油",
            "imageUrl": "./img/Hi.png",
            "imageStyle": "textToEmoji",
            "danmuStyle": ""
          }
      ]
    }`;

    return data;
  }

  static getArchievementList() {
    var data = `{
      "model": "CB-ChatbotDanmu-ArchievementList",
      "type": "data",
      "version": "1.0",
      "author": "cikepaokei",
      "created": "20220519",
      "description": "",
      "config": {
          "defaultImage": "./img/extend_icon_default.png",
          "defaultImageStyle": "textToImg"
      },
      "data": [
          {
            "danmu_count": "2",
            "archievement": "一字千金",
            "description": "开播期间发送2条弹幕",
            "imageUrl": "./img/1362-melting-cat.png"
          },
          {
            "danmu_count": "5",
            "archievement": "金玉良言",
            "description": "开播期间发送5条弹幕",
            "imageUrl": ""
          },
          {
            "danmu_count": "20",
            "archievement": "甘字少一横 ,廿怎么读?",
            "description": "开播期间发送20条弹幕",
            "imageUrl": ""
          }
      ]
    }`;

    return data;
  }

  static get ReplaceTextToImageList() {
    return {
      "model": "CB-ChatbotDanmu-ReplaceTextToImageList",
      "type": "data",
      "version": "1.0",
      "author": "cikepaokei",
      "created": "20230123",
      "description": "",
      "config": {
        "defaultImage": "./img/PlaceHolder.png",
        "defaultImageStyle": "badge-icon",
        "imageRootPath": ""
      },
      "data": [
        {
          "text": "[dog]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/4428c84e694fbf4e0ef6c06e958d9352c3582740.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[花]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/7dd2ef03e13998575e4d8a803c6e12909f94e72b.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[妙]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/08f735d950a0fba267dda140673c9ab2edf6410d.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[哇]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/650c3e22c06edcbca9756365754d38952fc019c3.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[爱]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/1daaa5d284dafaa16c51409447da851ff1ec557f.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[手机]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/b159f90431148a973824f596288e7ad6a8db014b.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[撇嘴]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/4255ce6ed5d15b60311728a803d03dd9a24366b2.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[委屈]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/69312e99a00d1db2de34ef2db9220c5686643a3f.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[抓狂]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/a7feb260bb5b15f97d7119b444fc698e82516b9f.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[比心]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/4e029593562283f00d39b99e0557878c4199c71d.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[赞]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/2dd666d3651bafe8683acf770b7f4163a5f49809.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[滑稽]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/8624fd172037573c8600b2597e3731ef0e5ea983.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[吃瓜]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/ffb53c252b085d042173379ac724694ce3196194.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[笑哭]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/c5436c6806c32b28d471bb23d42f0f8f164a187a.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[捂脸]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/e6073c6849f735ae6cb7af3a20ff7dcec962b4c5.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[喝彩]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/b51824125d09923a4ca064f0c0b49fc97d3fab79.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[偷笑]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/e2ba16f947a23179cdc00420b71cc1d627d8ae25.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[大笑]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/e2589d086df0db8a7b5ca2b1273c02d31d4433d4.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[惊喜]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/9c75761c5b6e1ff59b29577deb8e6ad996b86bd7.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[傲娇]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/b5b44f099059a1bafb2c2722cfe9a6f62c1dc531.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[疼]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/492b10d03545b7863919033db7d1ae3ef342df2f.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[吓]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/c6bed64ffb78c97c93a83fbd22f6fdf951400f31.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[阴险]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/a4df45c035b0ca0c58f162b5fb5058cf273d0d09.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[惊讶]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/bc26f29f62340091737c82109b8b91f32e6675ad.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[生病]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/84c92239591e5ece0f986c75a39050a5c61c803c.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[嘘]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/b6226219384befa5da1d437cb2ff4ba06c303844.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[奸笑]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/5935e6a4103d024955f749d428311f39e120a58a.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[囧]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/204413d3cf330e122230dcc99d29056f2a60e6f2.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[捂脸2]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/a2ad0cc7e390a303f6d243821479452d31902a5f.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[出窍]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/bb8e95fa54512ffea07023ea4f2abee4a163e7a0.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[吐了啊]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/2b6b4cc33be42c3257dc1f6ef3a39d666b6b4b1a.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[鼻子]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/f4ed20a70d0cb85a22c0c59c628aedfe30566b37.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[调皮]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/84fe12ecde5d3875e1090d83ac9027cb7d7fba9f.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[酸]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/98fd92c6115b0d305f544b209c78ec322e4bb4ff.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[冷]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/b804118a1bdb8f3bec67d9b108d5ade6e3aa93a9.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[OK]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/86268b09e35fbe4215815a28ef3cf25ec71c124f.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[微笑]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/f605dd8229fa0115e57d2f16cb019da28545452b.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[藏狐]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/05ef7849e7313e9c32887df922613a7c1ad27f12.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[龇牙]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/8b99266ea7b9e86cf9d25c3d1151d80c5ba5c9a1.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[防护]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/17435e60dcc28ce306762103a2a646046ff10b0a.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[笑]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/a91a27f83c38b5576f4cd08d4e11a2880de78918.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[一般]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/8d436de0c3701d87e4ca9c1be01c01b199ac198e.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[嫌弃]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/c409425ba1ad2c6534f0df7de350ba83a9c949e5.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[无语]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/4781a77be9c8f0d4658274eb4e3012c47a159f23.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[哈欠]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/6e496946725cd66e7ff1b53021bf1cc0fc240288.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[可怜]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/8e88e6a137463703e96d4f27629f878efa323456.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[歪嘴笑]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/bea1f0497888f3e9056d3ce14ba452885a485c02.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[亲亲]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/10662d9c0d6ddb3203ecf50e77788b959d4d1928.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[问号]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/a0c456b6d9e3187399327828a9783901323bfdb5.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[波吉]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/57dee478868ed9f1ce3cf25a36bc50bde489c404.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[OH]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/0d5123cddf389302df6f605087189fd10919dc3c.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[再见]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/f408e2af700adcc2baeca15510ef620bed8d4c43.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[白眼]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/7fa907ae85fa6327a0466e123aee1ac32d7c85f7.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[鼓掌]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/d581d0bc30c8f9712b46ec02303579840c72c42d.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[大哭]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/816402551e6ce30d08b37a917f76dea8851fe529.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[呆]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/179c7e2d232cd74f30b672e12fc728f8f62be9ec.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[流汗]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/b00e2e02904096377061ec5f93bf0dd3321f1964.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[生气]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/2c69dad2e5c0f72f01b92746bc9d148aee1993b2.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[加油]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/fbc3c8bc4152a65bbf4a9fd5a5d27710fbff2119.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[害羞]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/d8ce9b05c0e40cec61a15ba1979c8517edd270bf.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[虎年]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/a51af0d7d9e60ce24f139c468a3853f9ba9bb184.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[doge2]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/f547cc853cf43e70f1e39095d9b3b5ac1bf70a8d.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[金钱豹]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/b6e8131897a9a718ee280f2510bfa92f1d84429b.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[瓜子]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/fd35718ac5a278fd05fe5287ebd41de40a59259d.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[墨镜]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/5e01c237642c8b662a69e21b8e0fbe6e7dbc2aa1.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[难过]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/5776481e380648c0fb3d4ad6173475f69f1ce149.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[抱抱]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/abddb0b621b389fc8c2322b1cfcf122d8936ba91.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[跪了]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/4f2155b108047d60c1fa9dccdc4d7abba18379a0.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[摊手]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/1e0a2baf088a34d56e2cc226b2de36a5f8d6c926.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[热]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/6df760280b17a6cbac8c1874d357298f982ba4cf.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[三星堆]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/0a1ab3f0f2f2e29de35c702ac1ecfec7f90e325d.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[鼠]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/98f842994035505c728e32e32045d649e371ecd6.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[汤圆]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/23ae12d3a71b9d7a22c8773343969fcbb94b20d0.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[泼水]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/29533893115c4609a4af336f49060ea13173ca78.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[鬼魂]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/5d86d55ba9a2f99856b523d8311cf75cfdcccdbc.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[不行]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/607f74ccf5eec7d2b17d91b9bb36be61a5dd196b.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[响指]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/3b2fedf09b0ac79679b5a47f5eb3e8a38e702387.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[牛]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/5e61223561203c50340b4c9b41ba7e4b05e48ae2.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[保佑]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/241b13adb4933e38b7ea6f5204e0648725e76fbf.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[抱拳]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/3f170894dd08827ee293afcb5a3d2b60aecdb5b1.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[给力]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/d1ba5f4c54332a21ed2ca0dcecaedd2add587839.png@65w.webp",
          "imageStyle": "badge-icon"
        },
        {
          "text": "[耶]",
          "imageUrl": "http://i0.hdslb.com/bfs/live/eb2d84ba623e2335a48f73fb5bef87bcf53c1239.png@65w.webp",
          "imageStyle": "badge-icon"
        }
      ]
    };
  }

  static get RandomCloudmusicIDList() {
    return {
      "model": "CB-ChatbotDanmu-RandomCloudmusicIDList",
      "type": "data",
      "version": "1.0",
      "author": "cikepaokei",
      "created": "20230123",
      "description": "",
      "config": {
        "defaultID": 1923036618,
      },
      "data": [
        {
          "id": 1923036618,
          "title": "追",
          "artist": "彭尘",
          "description": "",
        },
        {
          "id": 432698934,
          "title": "忘れじの言の葉（铭刻心中的话语）",
          "artist": "安次嶺希和子",
          "description": "",
        },
        {
          "id": 1301536019,
          "title": "Air (From Neon Genesis Evangelion)",
          "artist": "RMaster",
          "description": "",
        },
        {
          "id": 1341964346,
          "title": "你的酒馆对我打了烊",
          "artist": "陈雪凝",
          "description": "",
        },
        {
          "id": 496869422,
          "title": "打上花火",
          "artist": "Daoko / 米津玄師",
          "description": "",
        }
      ]
    };
  }


}

class ChatbotDanmu {
  danmu;
  username;
  message;
  profilephoto;
  // 【不可用】经典 弹幕样式 --------------------
  // danmu_style = "bar-classic";
  // username_style = "name-classic";
  // message_style = "msg-classic";
  // 动物森友会 弹幕样式 ---------------
  danmu_style = "bar-3";
  username_style = "name-3";
  message_style = "msg-3";
  profilephoto_style = "profilephoto-3";
  // ----------------------------------
  time_id;
  hash_id;
  /*
   * 总消息计数，包括弹幕，礼物，访客，喜欢，醒目弹幕等
   *【注意】必须调用 setHashids/setHashidsWithName 才会被计数
   */
  static count = 0;
  static lastDanmuDate = 0;
  static username_colour_map = new Map();
  static username_bgcolour_map = new Map();
  static username_danmucount_map = new Map();
  static username_giftcount_map = new Map(); // Gold gift
  static username_silvergiftcount_map = new Map();
  static username_profilephoto_map = new Map();
  static username_like_map = new Map();
  static top3rank_username_map = new Map();
  username_text;
  static isShowVisitorDanmu = true;
  static isShowGiftDanmu = true;
  static isShowLikeNotice = true;
  static toggleAutoDestory = false;
  static _isShowFollow = true;
  static _isShowShare = true;
  static _isShowSuperchat = true;
  static _isShowEntry = true;
  static isShowUserface = true;
  static isShowTop3Rank = false;
  

  static get isShowFollow() {
    return ChatbotDanmu._isShowFollow;
  }
  static set isShowFollow(value) {
    ChatbotDanmu._isShowFollow = value;
  }
  static get isShowShare() {
    return ChatbotDanmu._isShowShare;
  }
  static set isShowShare(value) {
    ChatbotDanmu._isShowShare = value;
  }
  static get isShowSuperchat() {
    return ChatbotDanmu._isShowSuperchat;
  }
  static set isShowSuperchat(value) {
    ChatbotDanmu._isShowSuperchat = value;
  }
  static get isShowEntry() {
    return ChatbotDanmu._isShowEntry;
  }
  static set isShowEntry(value) {
    ChatbotDanmu._isShowEntry = value;
  }

  // Chat Bot 应用池定义
  appframe;
  appframe_giftdisplay;
  static appframe_giftdisplay_id = "cb-app-gift-display";
  appframe_visitorqueuedisplay;
  static appframe_visitorqueuedisplay_id = "cb-app-visitor-queue-display";
  appframe_likedisplay;
  static appframe_likedisplay_id = "cb-app-like-display";
  appframe_cloudmusicplayer;
  static appframe_cloudmusicplayer_id = "cb-app-cloudmusic-player";
  appframe_debug_display;
  static appframe_debug_display_id = "cb-app-debug_display";


  constructor() {
    // 样式一
    this.danmu = document.createElement("div");
    this.username = document.createElement("span");
    this.message = document.createElement("span");
    this.profilephoto = document.createElement("img");

    this.danmu.appendChild(this.username);
    this.danmu.appendChild(this.message);
    this.danmu.appendChild(this.profilephoto);

    this.danmu.setAttribute("class", this.danmu_style);
    this.username.setAttribute("class", this.username_style);
    this.message.setAttribute("class", this.message_style);
    this.profilephoto.setAttribute("class", this.profilephoto_style);

    // 定义 Chat bot 应用池位置
    this.appframe = document.getElementsByClassName("app")[0];
    this.appframe_giftdisplay = document.getElementById(ChatbotDanmu.appframe_giftdisplay_id);
    this.appframe_visitorqueuedisplay = document.getElementById(ChatbotDanmu.appframe_visitorqueuedisplay_id);
    this.appframe_likedisplay = document.getElementById(ChatbotDanmu.appframe_likedisplay_id);
    this.appframe_debug_display = document.getElementById(ChatbotDanmu.appframe_debug_display_id);

  }

  // 设置 Hashids（为消息赋予唯一标识） e.g. XYo1B401y
  setHashids() {
    const hashids = new Hashids.default("chotbot", 8);
    hashids.min_length = 7;
    this.time_id = hashids.encode(new Date().valueOf() + ChatbotDanmu.count); // Hashids时间戳
    this.hash_id = this.time_id;
    this.danmu.setAttribute("id", this.hash_id);
    ChatbotDanmu.lastDanmuDate = Date.now();
    ChatbotDanmu.count++; // 消息计数，为时间戳加入值，避免Hashids不唯一
    console.log(ChatbotDanmu.count); // 调试 输出消息计数
  }

  // 设置 带名称的Hashids（为消息赋予唯一标识） e.g. cb-msg-XYo1B401y  msg is a name.
  setHashidsWithName(name) {
    const hashids = new Hashids.default("chotbot", 8);
    hashids.min_length = 7;
    this.time_id = hashids.encode(new Date().valueOf() + ChatbotDanmu.count); // Hashids时间戳
    this.hash_id = "cb-" + name + "-" + this.time_id;
    this.danmu.setAttribute("id", this.hash_id);
    ChatbotDanmu.lastDanmuDate = Date.now();
    ChatbotDanmu.count++; // 消息计数，为时间戳加入值，避免Hashids不唯一
    console.log(ChatbotDanmu.count); // 调试 输出消息计数
  }

  // 创建 消息通用弹幕
  createDanmu() {
    switch (arguments.length) {
      case 2:
        var username_text = document.createTextNode(arguments[0]);
        var message_text = document.createTextNode(`${arguments[1]}`);

        this.username_text = username_text;
        this.username.appendChild(username_text);
        this.message.appendChild(message_text);

        return this.danmu;
      case 3:
        var username_text = document.createTextNode(arguments[0]);
        var message_text = document.createTextNode(`${arguments[1]}`);

        this.username_text = username_text;
        this.profilephoto.setAttribute("src", arguments[2]);
        this.username.appendChild(username_text);
        this.message.appendChild(message_text);

        return this.danmu;
      default:
        console.error("【缺失参数或多余】无法创建弹幕");
        break;
    }
  }

  // 创建 系统通知弹幕
  createSystemDanmu(message) {
    var title = "NIKO ";
    var title_text, message_text;
    var danmu_style_class = "QA-frame-2", title_style_class = "QA-title-2", message_style_class = "QA-question-2";

    title_text = document.createTextNode(title);
    message_text = document.createTextNode(`: ${message}`);

    this.username.appendChild(title_text);
    this.message.appendChild(message_text);

    this.danmu.setAttribute("class", danmu_style_class);
    this.username.setAttribute("class", title_style_class);
    this.message.setAttribute("class", message_style_class);

    return this.danmu;
  }

  // 创建 造访者弹幕信息
  createVisitorDanmu(message) {
    var visitor_style_class = "visitor-2", // 造访者弹幕样式
      visitorname_style_class = "visitor-name-2", visitorcontent_style_class = "visitor-content-2"; // 造访者名字样式
    var visitor = document.createElement("div"), visitorname = document.createElement("div"), visitorcontent = document.createElement("div");
    var visitorname_text = document.createTextNode("WELCOME VISITOR");
    var visitorcontent_text = document.createTextNode(message);

    visitorname.appendChild(visitorname_text);
    visitorcontent.appendChild(visitorcontent_text);
    visitor.appendChild(visitorname);
    visitor.appendChild(visitorcontent);
    visitor.setAttribute("class", visitor_style_class);
    visitorname.setAttribute("class", visitorname_style_class);
    visitorcontent.setAttribute("class", visitorcontent_style_class);

    return (this.danmu = visitor);
  }

  // 创建 造访者弹幕信息 V2
  createVisitorDanmuV2(message) {
    var visitor_style_class = "visitor-christmas", // 造访者弹幕样式
      visitorname_style_class = "visitor-name-christmas", visitorcontent_style_class = "visitor-content-christmas"; // 造访者名字样式
    var visitor = document.createElement("div"), visitorname = document.createElement("div"), visitorcontent = document.createElement("div");
    var visitorname_text = document.createTextNode("WELCOME VISITOR");
    var visitorcontent_text = document.createTextNode(message);

    visitorname.appendChild(visitorname_text); // 添加文字
    visitorcontent.appendChild(visitorcontent_text);
    visitor.appendChild(visitorname);
    visitor.appendChild(visitorcontent);
    visitor.setAttribute("class", visitor_style_class);
    visitorname.setAttribute("class", visitorname_style_class);
    visitorcontent.setAttribute("class", visitorcontent_style_class);

    return (this.danmu = visitor);
  }

  // 创建 造访者弹幕信息 V3
  createVisitorDanmuV3(imgsrc) {
    var visitor_style_class = "visitor-queue-display-profile"; // 造访者弹幕样式
    var visitor = document.createElement("img");

    visitor.setAttribute("class", visitor_style_class);
    visitor.setAttribute("src", imgsrc);
    this.profilephoto = visitor;

    return (this.danmu = visitor);
  }

  // 创建 造访者弹幕信息 V4, 增加需要给用户名，以查找并赋予用户静态颜色
  createVisitorDanmuV4(imgsrc, username) {
    var visitor_style_class = "visitor-queue-display-profile"; // 造访者弹幕样式
    var visitor = document.createElement("img");

    visitor.setAttribute("class", visitor_style_class);
    visitor.setAttribute("src", imgsrc);
    this.profilephoto = visitor;

    this.username_text = document.createTextNode(username);

    return (this.danmu = visitor);
  }

  // 创建 获得成就弹幕
  createAchievementDanmu() {
    switch (arguments.length) {
      case 2:
        var title = arguments[0];
        var message = arguments[1];
        var title_text, message_text;
        var danmu_style_class = "QA-frame", title_style_class = "QA-title", message_style_class = "QA-question";

        title_text = document.createTextNode(title);
        message_text = document.createTextNode(message);

        this.username.appendChild(title_text); // 添加文字节点
        this.message.appendChild(message_text); // 添加文字节点

        this.danmu.setAttribute("class", danmu_style_class);
        this.username.setAttribute("class", title_style_class);
        this.message.setAttribute("class", message_style_class);

        this.username.setAttribute("style", "font-size: 1em;width: 100%;display: block;color: #eee");
        this.message.setAttribute("style", "font-size: .7em;width: 100%;display: block;color: #4e4e4e;text-shadow: unset;");

        var imagestyle = "textToImg";
        var img = document.createElement("img");
        img.setAttribute("class", imagestyle);
        img.setAttribute("style", "float: left;width: 3em;height: 3em;");
        img.setAttribute("src", "./img/Badge.png");

        this.danmu.insertBefore(img, this.username);
        break;
      case 3:
        var title = arguments[0];
        var message = arguments[1];
        var imgurl = arguments[2];
        var title_text, message_text;
        var danmu_style_class = "QA-frame", title_style_class = "QA-title", message_style_class = "QA-question";

        title_text = document.createTextNode(title);
        message_text = document.createTextNode(message);

        this.username.appendChild(title_text); // 添加文字节点
        this.message.appendChild(message_text); // 添加文字节点

        this.danmu.setAttribute("class", danmu_style_class);
        this.username.setAttribute("class", title_style_class);
        this.message.setAttribute("class", message_style_class);

        this.username.setAttribute("style", "font-size: 1em;width: 100%;display: block;color: #eee");
        this.message.setAttribute("style", "font-size: .7em;width: 100%;display: block;color: #4e4e4e;text-shadow: unset;");

        var imagestyle = "textToImg";
        var img = document.createElement("img");
        img.setAttribute("class", imagestyle);
        img.setAttribute("style", "float: left;width: 3em;height: 3em;");
        img.setAttribute("src", imgurl);

        this.danmu.insertBefore(img, this.username);
        break;
      default:
        return 0;
    }
  }

  // 【不可用】创建 测试消息通用弹幕
  createTestDanmu() {
    var username_text = document.createTextNode("USERNAME");
    var message_text = document.createTextNode(`: “Be yourself; everyone else is already taken.” ― Oscar Wilde`);
    this.username_text = username_text;

    this.username.appendChild(username_text);
    this.message.appendChild(message_text);
  }

  // 创建 收到礼物提醒弹幕
  createGiftNoticeDanmu(uname, action, num, giftName, iconSrc) {
    var bar_style_class = "bar-breaktime";
    var name_style_class = "breaktime-name";
    var msg_style_class = "name-2";
    var icon_style_class = "info-icon";
    var iconimg_style_class = "info-icon-img";

    var iconImg2Data = ["part-Red-x5.png",
      "part-Orange-x5.png",
      "part-Yellow-x5.png",
      "part-Green-x5.png",
      "part-Jade-x5.png",
      "part-Blue-x5.png",
      "part-Eggplant-x5.png"];
    var value = `./img/${iconImg2Data[Math.round(Math.random() * (iconImg2Data.length - 1))]}`; //随机抽取一个值

    var bar = document.createElement("div"); // 创建 收到礼物弹幕框
    var name = document.createElement("span"); // 创建 收到礼物用户名
    var icon = document.createElement("span"); // 创建 头像图片框
    var iconImg = document.createElement("img"); // 创建 头像图片
    var nameText = document.createTextNode(
      `${uname} ${action} ${num} 个 ${giftName}`
    );
    var br = document.createElement("br");

    bar.setAttribute("class", bar_style_class);
    name.setAttribute("class", name_style_class);
    icon.setAttribute("class", icon_style_class);
    iconImg.setAttribute("class", iconimg_style_class);

    iconImg.setAttribute(
      "style",
      "width: 2em; height: 2em; border-radius: 0.2em;"
    );

    if (iconSrc != "#") {
      iconImg.setAttribute("src", iconSrc);
    } else {
      iconImg.setAttribute("src", "./img/gift-icon.png");
    }

    icon.appendChild(iconImg);
    bar.appendChild(icon);
    name.appendChild(nameText);
    bar.appendChild(name);
    bar.appendChild(br);

    var msg = document.createElement("marquee");
    msg.setAttribute("behavior", "alternate");
    msg.setAttribute("class", msg_style_class);
    msg.setAttribute(
      "style",
      `animation: 1s lv-2, 0.8s msg-2 ease 0.2s, 1s name-2 ease-in-out 7s;`
    );
    var msgText = document.createTextNode("QWQ");
    msg.appendChild(msgText);

    var iconImg2 = document.createElement("img");
    iconImg2.setAttribute("src", value);
    iconImg2.setAttribute("class", "info-icon-img");
    iconImg2.setAttribute("style", "display: inline-block");
    msg.appendChild(iconImg2);
    bar.appendChild(msg);
    this.danmu = bar;

    return bar;
  }

  // 销毁信息方法 8000 + 动画用时（0.4s = 400）= 8400
  destoryDanmu(timeout) {
    var danmu = document.getElementById(this.hash_id);

    setTimeout(function () {
      try {
        danmu.parentNode.removeChild(danmu);
      } catch (e) {
        console.error(e.message);
        return 0;
      }
    }, timeout);

    return 1;
  }

  // 获取 弹幕消息对象
  getDanmu() {
    return this.danmu;
  }

  // 添加 弹幕到指定应用池
  addDanmu() {
    switch (arguments.length) {
      // 不带参数， 默认添加到Chatbot应用池(APP)
      case 0:
        var appframe = this.appframe;
        try {
          appframe.insertBefore(this.danmu, appframe.childNodes[0]);
        } catch (e) {
          console.error(e.message);
          return 0;
        }
        break;
      // 带参数
      // 1 - 指定Chatbot应用池
      case 1:
        var appframe = arguments[0];
        try {
          appframe.insertBefore(this.danmu, appframe.childNodes[0]);
        } catch (e) {
          console.error(e.message);
          return 0;
        }
        // return 1;
        break;
      default:
        console.error("【缺失参数或多余】无法添加弹幕");
        break;
    }


  }

  setDanmuStyle(styleName) {
    return this.danmu.setAttribute("class", styleName);
  }

  addClass(name) {
    return this.danmu.classList.add(name);
  }

  setUsernameStyle() { }

  setMessageStyle(styleName) {
    return this.message.setAttribute("class", styleName);
  }

  setProfilePhotoStyle(styleName) {
    return this.profilephoto.setAttribute("class", styleName);
  }

  // 随机生成十六进制颜色
  getRandomColour() {
    var colour = [
      "#b82b1d",
      "#eb8c11",
      "#f7eb29",
      "#abeb3c",
      "#43b0a7",
      "#5670F5",
      "#a928b1",
      "#6d6d6d",
      "#E0E0E0",
    ];
    var value;
    var min = Math.ceil(0); // 数组的最小索引
    var max = Math.floor(colour.length); // 数组的最大索引，不含最大值所以加一

    value = colour[Math.floor(Math.random() * (max - min)) + min]; //不含最大值，含最小值

    return value;
  }

  // 随机生成十六进制颜色
  getRandomColour2() {
    var colour = [
      "#00A54A",
      "#FFDF4A",
      "#26b9b3",
      "#613829",
      "#5663D3",
      "#d57c2a",
      "#ef3e79",
    ];
    var value;
    var min = Math.ceil(0); // 数组的最小索引
    var max = Math.floor(colour.length); // 数组的最大索引，不含最大值所以加一

    value = colour[Math.floor(Math.random() * (max - min)) + min]; //不含最大值，含最小值

    return value;
  }

  // 随机生成十六进制配色方案
  getRandomColourSchemes() {
    var colour = [
      ["#75DE5E", "#278444"],
      ["#FFDF4A", "#9d1200"],
      ["#00D1BC", "#e0e7ed"],
      ["#a22b10", "#e0be6c"],
      ["#5663D3", "#d2d3d2"],
      ["#d57c2a", "#82000a"],
      ["#ef3e79", "#ffffff"],
      ["#5FD5FB", "#DEF4F7"],
      ["#A26BCF", "#EEE5F0"]
    ];
    // var colour = [
    //   ["#00A54A", "#d2d3d2"],
    //   ["#FFDF4A", "#9d1200"],
    //   ["#00D1BC", "#e0e7ed"],
    //   ["#a22b10", "#e0be6c"],
    //   ["#5663D3", "#d2d3d2"],
    //   ["#d57c2a", "#82000a"],
    //   ["#ef3e79", "#ffffff"],
    //   ["#767D3A", "#E5E7B0"],
    //   ["#A26BCF", "#EEE5F0"],
    //   ["#FEFA8E", "#F1AF42"],
    //   ["#75DE5E", "#278444"],
    //   ["#5FD5FB", "#DEF4F7"],
    //   ["#FFFFFF", "#9F9F9F"],
    //   ["#D65B5A", "#F6E7D8"]
    // ];
    var value;
    var min = Math.ceil(0); // 数组的最小索引
    var max = Math.floor(colour.length); // 数组的最大索引，不含最大值所以加一

    value = colour[Math.floor(Math.random() * (max - min)) + min]; //不含最大值，含最小值

    return value;
  }

  // 设置 用户名字颜色
  setUsernameColour(colour) {
    this.username.style.color = colour;

    return 1;
  }

  // 设置 用户名字颜色（记录用户名字、随机颜色代码。以分配固定颜色）
  setStaticUsernameColour(colour) {
    if (!ChatbotDanmu.username_colour_map.has(this.username_text.textContent)) {
      ChatbotDanmu.username_colour_map.set(this.username_text.textContent, colour);
      this.username.style.color = colour;
      return colour;
    } else {
      this.username.style.color = ChatbotDanmu.username_colour_map.get(this.username_text.textContent);
    }

  }

  // 设置 用户名字背景颜色（记录用户名字、随机颜色代码。以分配固定颜色）
  setStaticUsernameBackgroundColour(colour) {
    if (!ChatbotDanmu.username_bgcolour_map.has(this.username_text.textContent)) {
      ChatbotDanmu.username_bgcolour_map.set(this.username_text.textContent, colour);
      this.username.style.backgroundColor = colour;
      return colour;
    } else {
      this.username.style.backgroundColor = ChatbotDanmu.username_bgcolour_map.get(this.username_text.textContent);
    }

  }

  // 设置 用户等级显示
  setUserLevel(message) {
    var lv = document.createElement("span");
    lv.setAttribute("class", "lv");
    var lvText = document.createTextNode(message);
    lv.appendChild(lvText);
    this.danmu.insertBefore(lv, this.username);

  }

  // 【不可用】设置 指定粉丝勋章显示
  setFanBadgeByName(userbadge, name) {
    if (userbadge == name) {
      var fanbadge = document.createElement("img");

      fanbadge.setAttribute("class", "fanImg");
      fanbadge.setAttribute("src", "./img/Nycan_Cat.gif");
      bar.appendChild(fan);
    }
  }

  // 查找 通用弹幕消息是否存在指定文字 
  // 通过 指定文字和图片方式
  // 如果存在，添加一张图片。否则，不添加
  addSpecialImageByText(danmumsg, text, imageurl) {
    var imagestyle = "textToImg";

    if (danmumsg.indexOf(text) != -1) {
      var img = document.createElement("img");
      // 设置 图片样式 
      img.setAttribute("class", imagestyle);
      // 设置 图片地址
      img.setAttribute("src", imageurl);
      // 添加 图片
      this.danmu.appendChild(img);
    }
  }

  // 查找 通用弹幕消息是否存在数据清单中的指定文字
  // 通过 预先定义好的”指定文字"和“图片地址“数据清单
  // 遍历数据清单，如果存在，添加图片。否则，不添加
  addSpecialImageByData(danmumsg) {
    var jsonstring = ChatbotData.getSpecialImageWithText();
    var jsonobject = JSON.parse(jsonstring);
    var data = jsonobject.data;
    var config = jsonobject.config;

    // 遍历数据清单 获取所有可用的”指定文字"和“图片地址“
    // 为符合条件通用弹幕消息添加图片
    for (let i = 0; i < data.length; i++) {
      var name = data[i].name, // 指定文字
        imageurl = data[i].imageUrl, // 图片地址
        imagestyle = data[i].imageStyle; // 图片样式



      // console.log(name + "" + imageurl);
      // 检查 图片地址是否存在，不存在赋予默认图片
      if (imageurl == "" || imageurl == "#") {
        imageurl = config.defaultImage;
      }

      // 检查 图片样式是否存在，不存在赋予默认样式
      if (imagestyle == "" || imagestyle == "#") {
        imagestyle = config.defaultImageStyle;
      }

      // 查找 通用弹幕消息是否存在”指定文字“
      if (danmumsg.indexOf(name) != -1) {
        var img = document.createElement("img");
        // 设置 图片样式 
        img.setAttribute("class", imagestyle);
        // 设置 图片地址
        img.setAttribute("src", imageurl);
        // this.danmu.style.backgroundColor = "#049DD7";
        // 添加 图片到弹幕
        this.danmu.appendChild(img);
      }
    }
  }


  addCustomImage(target, classname, url) {
    var img = document.createElement("img");
    // 设置 图片样式 
    img.setAttribute("class", classname);
    // 设置 图片地址
    img.setAttribute("src", url);
    // 添加 图片
    target.appendChild(img);

  }

  // 添加颜色圆圈到弹幕末端， 通过给定的十六进制颜色代码
  addColourCircleByHexcode(Hexcode) {
    var circle = document.createElement("span");
    circle.setAttribute("style", `width: 1em; height: 1em; border-radius: 1em; display: inline-block; transform: translate(4px, 4px);`);
    circle.style.backgroundColor = Hexcode;
    this.danmu.appendChild(circle);

  }

  createDanmu2() {
    // 清空变量
    this.danmu = null;
    this.username = null;
    this.message = null;
    this.danmu_style = null;
    this.username_style = null;
    this.message_style = null;

    // 元素定义
    this.danmu = document.createElement("div");
    this.username = document.createElement("span");
    this.message = document.createElement("span");
    var danmutop = document.createElement("div"), danmubottom = document.createElement("div");
    // 样式定义
    this.danmu_style = "bar-3";
    this.username_style = "name-3";
    this.message_style = "msg-3";
    var danmutop_style = "chatbot-bar-top", danmubottom_style = "chatbot-bar-bottom";


    this.danmu.setAttribute("class", this.danmu_style);
    danmutop.setAttribute("class", danmutop_style);
    danmubottom.setAttribute("class", danmubottom_style);
    this.username.setAttribute("class", this.username_style);
    this.message.setAttribute("class", this.message_style);

    this.danmu.appendChild(danmutop);
    this.danmu.appendChild(danmubottom);
    danmutop.appendChild(this.username);
    danmubottom.appendChild(this.message);

    switch (arguments.length) {
      case 2:
        var username_text = document.createTextNode(arguments[0]);
        var message_text = document.createTextNode(`: ${arguments[1]}`);
        this.username_text = username_text;

        this.username.appendChild(username_text);
        this.message.appendChild(message_text);

        return 1;
      default:
        return 0;
    }
  }

  static getVisitorDanmuDisplay() {
    return this.isShowVisitorDanmu;
  }

  static toggleVisitorDanmuDisplay() {
    if (this.isShowVisitorDanmu == true) {
      this.isShowVisitorDanmu = false;
      console.log("🔴已禁用 造访者显示");

    } else {
      this.isShowVisitorDanmu = true;
      console.log("🟢已启用 造访者显示");
    }

  }

  static getGiftDanmuDisplay() {
    return this.isShowGiftDanmu;
  }

  static getLikeNoticeDisplay() {
    return this.isShowLikeNotice;
  }

  static toggleGiftDanmuDisplay() {
    if (this.isShowGiftDanmu == true) {
      this.isShowGiftDanmu = false;
      console.log("🔴已禁用 礼物显示");

    } else {
      this.isShowGiftDanmu = true;
      console.log("🟢已启用 礼物显示");
    }

  }

  updateDanmuCount() {
    if (ChatbotDanmu.username_danmucount_map.has(this.username_text.textContent) != 1) {
      ChatbotDanmu.username_danmucount_map.set(this.username_text.textContent, 1);
      return 1;

    } else {
      let count = ChatbotDanmu.username_danmucount_map.get(this.username_text.textContent);
      let new_count = count + 1;
      ChatbotDanmu.username_danmucount_map.set(this.username_text.textContent, new_count);
      return new_count;

    }
  }

  static updateGiftCountByUsername(username, num) {
    if (ChatbotDanmu.username_giftcount_map.has(username) != 1) {
      ChatbotDanmu.username_giftcount_map.set(username, num);
      return num;

    } else {
      let count = ChatbotDanmu.username_giftcount_map.get(username);
      let new_count = count + num;
      ChatbotDanmu.username_giftcount_map.set(username, new_count);
      return new_count;

    }
  }

  static getGiftCountByUsername(username) {
    var num = ChatbotDanmu.username_giftcount_map.has(username);
    if (num != 1) {
      return 0;
    } else {
      return num;
    }
  }

  static updateSilverGiftCountByUsername(username, num) {
    if (ChatbotDanmu.username_silvergiftcount_map.has(username) != 1) {
      ChatbotDanmu.username_silvergiftcount_map.set(username, num);
      return num;

    } else {
      let count = ChatbotDanmu.username_silvergiftcount_map.get(username);
      let new_count = count + num;
      ChatbotDanmu.username_silvergiftcount_map.set(username, new_count);
      return new_count;

    }
  }

  static getSilverGiftCountByUsername(username) {
    var num = ChatbotDanmu.username_silvergiftcount_map.has(username);
    if (num != 1) {
      return 0;
    } else {
      return num;
    }
  }

  static updateLikeCountByUsername(username, num) {
    if (ChatbotDanmu.username_like_map.has(username) != 1) {
      ChatbotDanmu.username_like_map.set(username, num);
      return num;

    } else {
      let count = ChatbotDanmu.username_like_map.get(username);
      let new_count = count + num;
      ChatbotDanmu.username_like_map.set(username, new_count);
      return new_count;

    }
  }

  static getLikeCountByUsername(username) {
    var num = ChatbotDanmu.username_like_map.has(username);
    if (num != 1) {
      return 0;
    } else {
      return num;
    }
  }

  setProfilePhoto(src) {
    this.profilephoto.setAttribute("src", src);

  }

  setProfilePhotoBackgroundColor(colour) {
    if (!ChatbotDanmu.username_bgcolour_map.has(this.username_text.textContent)) {
      ChatbotDanmu.username_bgcolour_map.set(this.username_text.textContent, colour);
      this.profilephoto.style.backgroundColor = colour;
      return colour;
    } else {
      this.profilephoto.style.backgroundColor = ChatbotDanmu.username_bgcolour_map.get(this.username_text.textContent);
    }

  }

  static updateProfilephotoSrcByUsername(username, src) {
    ChatbotDanmu.username_profilephoto_map.set(username, src);

  }

  static getProfilephotoSrcByUsername(username) {
    var src = ChatbotDanmu.username_profilephoto_map.has(username);
    if (src == true) {
      return ChatbotDanmu.username_profilephoto_map.get(username);

    } else {
      return false;
    }
  }

  addTimeLabel(time) {
    let text = document.createTextNode(time);
    let label = document.createElement("span");
    label.classList.add("time");
    label.appendChild(text);

    return this.danmu.appendChild(label);
  }

  replaceMsgSpecialTextToImage(text) {
    let data = ChatbotData.ReplaceTextToImageList.data;
    let replacementList = [];
    let imageRootPath = ChatbotData.ReplaceTextToImageList.config.imageRootPath;
    data.forEach((currentItem) => {
      if (text.indexOf(currentItem.text) != -1) {
        replacementList.push([
          currentItem.text,
          currentItem.imageUrl,
          currentItem.imageStyle
        ]);
      }
    });

    if (replacementList.length != 0) {
      replacementList.forEach((currentItem) => {
        let reg = new RegExp(`\\${currentItem[0]}`, "g");
        let replaceText = `<img class="${currentItem[2]}" src="${imageRootPath + currentItem[1]}">`;
        text = text.replace(reg, replaceText);
      });
      return text;
    }
    return text;
  }

}

class ChatbotDebug {
  static logTable = [];
  static isDisplayLog = true;
  static debugMode = false;
  // static debugMode = true;



  constructor() { }

  // 记录日志
  static log(log) {
    if (ChatbotDebug.debugMode == true) {
      // let time = new Date(Date.now()).toJSON();
      let date = new Date();
      let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      log = `${time} ${log}`;
      ChatbotDebug.logTable.push(log);
      console.log(log);
    }
  }

  static display(log) {
    let debugLabel = document.getElementById(ChatbotDanmu.appframe_debug_display_id);

    return debugLabel.innerHTML = log;
  }

}

class ChatbotUtil {
  static AJAX_MAX_RATE_LIMIT = 100; // 每分钟请求次数
  static ajaxRequestCount = 0;
  static ajaxLocker = false;
  static isAjaxLocked = false;
  static ajaxUnlockTime = 0;
  static ajaxLastUnlockedTime = 0;
  static ajaxLastLockedTime = 0;
  static ajaxLockedInARow = 0;
  static #LOCKER_WAIT = 30000;


  constructor() {
  }

  static ajaxUnlock() {
    ChatbotUtil.ajaxLastUnlockedTime = Date.now();
    let log = `${ChatbotUtil.getTime()} API请求已解锁`;
    console.log(log);
    ChatbotDebug.display(log);
    return ChatbotUtil.ajaxLocker = false;
  }

  static ajaxLock() {
    let wait = ChatbotUtil.#LOCKER_WAIT;

    ChatbotUtil.isAjaxLocked = true;
    ChatbotUtil.ajaxLocker = true;
    ChatbotUtil.ajaxLastLockedTime = Date.now();
    let interval = ChatbotUtil.ajaxLastLockedTime - ChatbotUtil.ajaxLastUnlockedTime;
    if (interval < ChatbotUtil.#LOCKER_WAIT) {
      ChatbotUtil.ajaxLockedInARow++;
    } else if (interval > ChatbotUtil.#LOCKER_WAIT) {
      ChatbotUtil.ajaxLockedInARow = 0;
    }
    if (ChatbotUtil.ajaxLockedInARow >= 1) {
      wait = ChatbotUtil.#LOCKER_WAIT * ChatbotUtil.ajaxLockedInARow;
      ChatbotUtil.ajaxUnlockTime = Date.now() + wait;
    } else {
      ChatbotUtil.ajaxUnlockTime = Date.now() + wait;
    }
    console.log(`解锁时间：${new Date(ChatbotUtil.ajaxUnlockTime).toLocaleString()}`);
    setTimeout(function () {
      ChatbotUtil.isAjaxLocked = false;
    }, 2000);
    return ChatbotUtil.ajaxUnlockTime;
  }


  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
  }

  // 创建AJAX对象 通过GET方法获取数据 不带参数
  // url: 获取数据的资源地址
  // 返回 响应数据
  static doAjaxGet(url) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log("Ajax Successed!");

        return xmlhttp.responseText;
      }
    };
    // 地址为 url加时间戳 防止加载缓存数据  e.g. url?t=
    // xmlhttp.open("GET", `${url}?t=${new Date().getTime()}`);
    xmlhttp.open("GET", `${url}`, true);
    xmlhttp.send();

  }

  // 创建AJAX对象 通过GET方法获取数据 不带参数
  // url: 获取数据的资源地址
  // 返回 响应数据
  static doAjaxGetV2(url) {
    // Create new promise with the Promise() constructor;
    // This has as its argument a function
    // with two parameters, resolve and reject
    return new Promise(function (resolve, reject) {
      // Standard XHR to load an image
      var request = new XMLHttpRequest();
      request.open('GET', url);
      // request.responseType = 'blob';
      // When the request loads, check whether it was successful
      request.onload = function () {
        if (request.status === 200) {
          // If successful, resolve the promise by passing back the request response
          resolve(request.response);
        } else {
          // If it fails, reject the promise with a error message
          reject(Error('Data didn\'t load successfully; error code:' + request.statusText));
        }
      };
      request.onerror = function () {
        // Also deal with the case when the entire request fails to begin with
        // This is probably a network error, so reject the promise with an appropriate message
        reject(Error('There was a network error.'));
      };
      // Send the request
      request.send();
    });

  }

  // 创建AJAX对象 通过GET方法获取数据 不带参数
  // url: 获取数据的资源地址
  // 返回 响应数据
  // RL: Rate Limiting 带速率限制的AJAX
  static doAjaxGetRL(url) {
    // Create new promise with the Promise() constructor;
    // This has as its argument a function
    // with two parameters, resolve and reject
    return new Promise(function (resolve, reject) {
      // Standard XHR to load an image
      var request = new XMLHttpRequest();
      request.open('GET', url);
      // request.responseType = 'blob';
      // When the request loads, check whether it was successful
      request.onload = function () {
        if (request.status === 200) {
          // If successful, resolve the promise by passing back the request response
          resolve(request.response);
        } else {
          // If it fails, reject the promise with a error message
          reject(Error('Data didn\'t load successfully; error code:' + request.statusText));
        }

      };
      request.onerror = function () {
        // Also deal with the case when the entire request fails to begin with
        // This is probably a network error, so reject the promise with an appropriate message
        reject(Error('There was a network error.'));
      };
      // 发送请求计数
      // Send the request
      if (ChatbotUtil.ajaxRequestCount <= ChatbotUtil.AJAX_MAX_RATE_LIMIT) {
        if (ChatbotUtil.ajaxLocker == false) {
          request.send();
          ChatbotUtil.ajaxRequestCount++;
        }
      } else {
        if (ChatbotUtil.isAjaxLocked == false) {
          ChatbotUtil.ajaxLock();

          let log = `${ChatbotUtil.getTime()} 请求已锁定, AJAX已超出最大每分钟请求次数 ${ChatbotUtil.ajaxRequestCount} / ${ChatbotUtil.AJAX_MAX_RATE_LIMIT}`;
          ChatbotDebug.display(log);
          console.log(log);
        }
      }
    });

  }

  // 创建AJAX对象 通过POST方法获取数据 不带参数
  // url: 获取数据的资源地址
  // 返回 响应数据
  // RL: Rate Limiting 带速率限制的AJAX
  static doAjaxPostRL(url, body) {
    body = body || null;
    // Create new promise with the Promise() constructor;
    // This has as its argument a function
    // with two parameters, resolve and reject
    return new Promise(function (resolve, reject) {
      // Standard XHR to load an image
      var request = new XMLHttpRequest();
      request.open('POST', url);
      //发送合适的请求头信息
      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      // request.responseType = 'blob';
      // When the request loads, check whether it was successful
      request.onload = function () {
        if (request.status === 200) {
          // If successful, resolve the promise by passing back the request response
          resolve(request.response);
        } else {
          // If it fails, reject the promise with a error message
          reject(Error('Data didn\'t load successfully; error code:' + request.statusText));
        }

      };
      request.onerror = function () {
        // Also deal with the case when the entire request fails to begin with
        // This is probably a network error, so reject the promise with an appropriate message
        reject(Error('There was a network error.'));
      };
      // 发送请求计数
      // Send the request
      if (ChatbotUtil.ajaxRequestCount <= ChatbotUtil.AJAX_MAX_RATE_LIMIT) {
        if (ChatbotUtil.ajaxLocker == false) {
          request.send(body);
          ChatbotUtil.ajaxRequestCount++;
        }
      } else {
        if (ChatbotUtil.isAjaxLocked == false) {
          ChatbotUtil.ajaxLock();

          let log = `${ChatbotUtil.getTime()} 请求已锁定, AJAX已超出最大每分钟请求次数 ${ChatbotUtil.ajaxRequestCount} / ${ChatbotUtil.AJAX_MAX_RATE_LIMIT}`;
          ChatbotDebug.display(log);
          console.log(log);
        }
      }
    });

  }

  static emptyAjaxRequestCount() {
    console.log(`${ChatbotUtil.getTime()} AJAX请求已重置`);
    return ChatbotUtil.ajaxRequestCount = 0;
  }

  static getTime() {
    let date = new Date();
    let h, m, s;
    if (date.getHours() < 10) {
      h = `0${date.getHours()}`;
    } else {
      h = date.getHours();
    }
    if (date.getMinutes() < 10) {
      m = `0${date.getMinutes()}`;
    } else {
      m = date.getMinutes();
    }
    if (date.getSeconds() < 10) {
      s = `0${date.getSeconds()}`;
    } else {
      s = date.getSeconds();
    }
    let time = `${h}:${m}:${s}`;
    return time;
  }

  static getTimeWithoutSecond() {
    let date = new Date();
    let h, m;
    if (date.getHours() < 10) {
      h = `0${date.getHours()}`;
    } else {
      h = date.getHours();
    }
    if (date.getMinutes() < 10) {
      m = `0${date.getMinutes()}`;
    } else {
      m = date.getMinutes();
    }
    if (date.getSeconds() < 10) {
      `0${date.getSeconds()}`;
    } else {
      date.getSeconds();
    }
    let time = `${h}:${m}`;
    return time;
  }

  static getWeekday() {
    let date = new Date();
    var weekday = new Array(7);
    weekday[0]= "日";
    weekday[1]= "一";
    weekday[2]= "二";
    weekday[3]= "三";
    weekday[4]= "四";
    weekday[5]= "五";
    weekday[6]= "六";

    return weekday[date.getDay()];
  }

  static getHours12() { 
    let date = new Date();
    let h, m;
    h = (date.getHours() + 24) % 12 || 12; 
    if (date.getMinutes() < 10) {
      m = `0${date.getMinutes()}`;
    } else {
      m = date.getMinutes();
    }
    return `${h}:${m}`;
  }

  static getDaynight() {
    let date = new Date();
    if (date.getHours() < 12) {
      return "AM";
    }else { return "PM"; }
  }

  static getTimestamp() {
    return Date.now();
  }

  static getDate() {
    let date = new Date();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    return `${m}月${d}日`;
  }

  // 【不可用】定时销毁
  static timerDestory(timestamp) {
    return new Promise(function (resolve) {

    });
  }

  // 播放音效
  static playSfx(src) {
    switch (arguments.length) {
      case 1:
        var player = document.getElementById("sfx");
        player.setAttribute("src", src);
        break;
      case 2:
        var src = arguments[0];
        var channel = arguments[1];

        if (document.querySelector(`#sfx-${channel}`) == undefined) {
          var body = document.getElementsByTagName("body")[0];
          var audio = document.createElement("audio");
          audio.setAttribute("id", `sfx-${channel}`);
          audio.setAttribute("src", src);
          audio.setAttribute("autoplay", "autoplay");
          body.appendChild(audio);
          return audio;
        }

        var audio = document.querySelector(`#sfx-${channel}`);
        audio.setAttribute("src", src);
        break;
    }
  }

  // 随机从数组中选择一个
  static getRandomItemFromArray(array) {
    let value;
    let min = Math.ceil(0); // 数组的最小索引
    let max = Math.floor(array.length); // 数组的最大索引，不含最大值所以加一

    value = array[Math.floor(Math.random() * (max - min)) + min]; //不含最大值，含最小值

    return value;
  }

  static formatSeconds(value) {
    let second = parseInt(value);
    let minute = 0;

    if (second >= 60) {
      minute = parseInt(second / 60);
      second = parseInt(second % 60);
      if (minute >= 60) {
        minute = parseInt(minute % 60);
      }
    }

    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    let res = minute + ":" + second;
    return res;
  }

}

class ChatbotTopToolbar {
  id = "toptoolbar";
  toptoolbar;
  icon;
  panel;
  toptoolbar_style_class = "toolbar";
  icon_style_class = "toolbar-icon";
  icon_image_style_class = "toolbar-icon-img";
  panel_style_class = "toolbar-panel";

  constructor() { }

  createTopToolbar(icon_number) {
    // 创建工具栏
    this.toptoolbar = document.createElement("div");
    this.toptoolbar.setAttribute("class", this.toptoolbar_style_class);
    this.toptoolbar.setAttribute("id", this.id);

    // 创建工具栏图标
    for (let i = 0; i < icon_number; i++) {
      this.icon = document.createElement("div");
      this.icon.setAttribute("class", this.icon_style_class);
      this.toptoolbar.appendChild(this.icon);
    }
  }

  getTopTollbar() {
    try {
      return document.getElementById(this.id);
    } catch (e) {
      console.error(e.message);
    }
  }

  // 添加 图标功能
  setIcon(index, image_src, method) {
    var icon = this.toptoolbar.childNodes[index];
    var image = document.createElement("img");

    image.setAttribute("src", image_src);
    image.setAttribute("class", this.icon_image_style_class);
    image.setAttribute("onclick", method);
    icon.appendChild(image);
  }

  setCustomIcon() { }

  // 添加 顶部工具栏到指定应用池
  addTopToolbar(appframe) {
    try {
      appframe.insertBefore(this.toptoolbar, appframe.childNodes[0]);
    } catch (e) {
      console.error(e.message);
      return 0;
    }

    return 1;
  }

  createPanel() {
    this.panel = document.createElement("div");
    this.panel.setAttribute("class", panel_style_class);
  }

  addPanel(appframe) {
    try {
      appframe.insertBefore(this.panel, appframe.childNodes[0]);
    } catch (e) {
      console.error(e.message);
      return 0;
    }

    return 1;
  }
}

class ChatbotRoundDanmu {
  appFrame = {

  };
  gui = {
    danmu: {},
    username: {},
    message: {},
    createdTime: {},
    topFrame: {},
    bottomFrame: {},
    statusFrame: {}
  };
  style = {
    danmu: "bar-round",
    username: "name-round",
    message: "msg-round",
    createdTime: "time-round",
    topFrame: "top-round",
    bottomFrame: "bottom-round",
    statusFrame: "time-round"
  };
  timeId;
  hashId;

  constructor() {
    let danmu, topFrame, bottomFrame, 
        statusFrame, username, message, 
        createdTime;

    danmu = document.createElement("div");
    danmu.className = this.style.danmu;

    topFrame = document.createElement("div");
    topFrame.className = this.style.topFrame;

    bottomFrame = document.createElement("div");
    bottomFrame.className = this.style.bottomFrame;

    statusFrame = document.createElement("div");
    statusFrame.className = this.style.statusFrame;

    username = document.createElement("span");
    username.className = this.style.username;

    message = document.createElement("span");
    message.className = this.style.message;

    createdTime = document.createElement("span");
    createdTime.className = this.style.createdTime;

    danmu.appendChild(topFrame);
    danmu.appendChild(bottomFrame);
    danmu.appendChild(statusFrame);
    topFrame.appendChild(username);
    bottomFrame.appendChild(message);
    statusFrame.appendChild(createdTime);

    this.gui.danmu = danmu;
    this.gui.topFrame = topFrame;
    this.gui.bottomFrame = bottomFrame;
    this.gui.statusFrame = statusFrame;
    this.gui.username = username;
    this.gui.message = message;
    this.gui.createdTime = createdTime;

  }

  create(data) {
    if ("username" in data) {
      let usernameText = document.createTextNode(data["username"]);
      this.gui.username.appendChild(usernameText);
    }

    if ("message" in data) {
      let messageText = document.createTextNode(data["message"]);
      this.gui.message.appendChild(messageText);
    }

    this.addCurrentTime(); // 添加时间戳

    let app = document.getElementById("mainpage");
    try {
      app.insertBefore(this.gui.danmu, app.childNodes[0]);
      this.setHashidsWithName("danmumsg");
    } catch (e) {
      console.error(e.message);
    }
  }

  createList(data) {
    if ("title" in data) {
      let titleText = document.createTextNode(data["title"]);
      this.gui.username.appendChild(titleText);
    }

    if ("content" in data) {
      let list = document.createElement("ul");
      list.style.listStyleType = "none";
      list.style.paddingLeft = "1em";

      if (data["content"].length > 0) {
        data["content"].forEach(element => {
          let item = document.createElement("li");
          let itemText = document.createTextNode(element.toString());
          item.appendChild(itemText);
          list.appendChild(item);
        });
      }
      this.gui.message.appendChild(list);
    }

    this.addCurrentTime(); // 添加时间戳

    let app = document.getElementById("mainpage");
    try {
      app.insertBefore(this.gui.danmu, app.childNodes[0]);
      this.setHashidsWithName("danmumsg");
    } catch (e) {
      console.error(e.message);
    }
  }

  addCurrentTime() {
    let time = ChatbotUtil.getTimeWithoutSecond();
    time = document.createTextNode(time);
    this.gui.createdTime.appendChild(time);
  }

  createToAppFrame(data) {
    if ("username" in data) {
      let usernameText = document.createTextNode(data["username"]);
      this.gui.username.appendChild(usernameText);
    }

    if ("message" in data) {
      let messageText = document.createTextNode(data["message"]);
      this.gui.message.appendChild(messageText);
    }

    if ("appFrame" in data) {
      this.addCurrentTime(); // 添加时间戳

      let app = document.getElementsByTagName("body")[0];
      if (document.getElementById(data["appFrame"])) {
        app = document.getElementById(data["appFrame"]);
      }
      
      try {
        app.insertBefore(this.gui.danmu, app.childNodes[0]);
        this.setHashidsWithName("danmumsg");
      } catch (e) {
        console.error(e.message);
      }
    }
  }

  destory(timeout) {
    let danmu = document.getElementById(this.hash_id);

    setTimeout(function () {
      try {
        danmu.parentNode.removeChild(danmu);
      } catch (e) {
        console.error(e.message);
      }
    }, timeout);
  }

  // 设置 带名称的Hashids（为消息赋予唯一标识） e.g. cb-msg-XYo1B401y  msg is a name.
  setHashidsWithName(name) {
    const hashids = new Hashids.default("chotbot", 8);
    hashids.min_length = 7;
    this.time_id = hashids.encode(new Date().valueOf() + ChatbotDanmu.count); // Hashids时间戳
    this.hash_id = "cb-" + name + "-" + this.time_id;
    this.gui.danmu.setAttribute("id", this.hash_id);
    ChatbotDanmu.lastDanmuDate = Date.now();
    ChatbotDanmu.count++; // 消息计数，为时间戳加入值，避免Hashids不唯一
    ChatbotDebug.log(ChatbotDanmu.count); // 调试 输出消息计数
  }

}

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

var objectToString = Object.prototype.toString;
var isArray = Array.isArray || function isArrayPolyfill (object) {
  return objectToString.call(object) === '[object Array]';
};

function isFunction (object) {
  return typeof object === 'function';
}

/**
 * More correct typeof string handling array
 * which normally returns typeof 'object'
 */
function typeStr (obj) {
  return isArray(obj) ? 'array' : typeof obj;
}

function escapeRegExp (string) {
  return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}

/**
 * Null safe way of checking whether or not an object,
 * including its prototype, has a given property
 */
function hasProperty (obj, propName) {
  return obj != null && typeof obj === 'object' && (propName in obj);
}

/**
 * Safe way of detecting whether or not the given thing is a primitive and
 * whether it has the given property
 */
function primitiveHasOwnProperty (primitive, propName) {
  return (
    primitive != null
    && typeof primitive !== 'object'
    && primitive.hasOwnProperty
    && primitive.hasOwnProperty(propName)
  );
}

// Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
// See https://github.com/janl/mustache.js/issues/189
var regExpTest = RegExp.prototype.test;
function testRegExp (re, string) {
  return regExpTest.call(re, string);
}

var nonSpaceRe = /\S/;
function isWhitespace (string) {
  return !testRegExp(nonSpaceRe, string);
}

var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml (string) {
  return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
    return entityMap[s];
  });
}

var whiteRe = /\s*/;
var spaceRe = /\s+/;
var equalsRe = /\s*=/;
var curlyRe = /\s*\}/;
var tagRe = /#|\^|\/|>|\{|&|=|!/;

/**
 * Breaks up the given `template` string into a tree of tokens. If the `tags`
 * argument is given here it must be an array with two string values: the
 * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
 * course, the default is to use mustaches (i.e. mustache.tags).
 *
 * A token is an array with at least 4 elements. The first element is the
 * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
 * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
 * all text that appears outside a symbol this element is "text".
 *
 * The second element of a token is its "value". For mustache tags this is
 * whatever else was inside the tag besides the opening symbol. For text tokens
 * this is the text itself.
 *
 * The third and fourth elements of the token are the start and end indices,
 * respectively, of the token in the original template.
 *
 * Tokens that are the root node of a subtree contain two more elements: 1) an
 * array of tokens in the subtree and 2) the index in the original template at
 * which the closing tag for that section begins.
 *
 * Tokens for partials also contain two more elements: 1) a string value of
 * indendation prior to that tag and 2) the index of that tag on that line -
 * eg a value of 2 indicates the partial is the third tag on this line.
 */
function parseTemplate (template, tags) {
  if (!template)
    return [];
  var lineHasNonSpace = false;
  var sections = [];     // Stack to hold section tokens
  var tokens = [];       // Buffer to hold the tokens
  var spaces = [];       // Indices of whitespace tokens on the current line
  var hasTag = false;    // Is there a {{tag}} on the current line?
  var nonSpace = false;  // Is there a non-space char on the current line?
  var indentation = '';  // Tracks indentation for tags that use it
  var tagIndex = 0;      // Stores a count of number of tags encountered on a line

  // Strips all whitespace tokens array for the current line
  // if there was a {{#tag}} on it and otherwise only space.
  function stripSpace () {
    if (hasTag && !nonSpace) {
      while (spaces.length)
        delete tokens[spaces.pop()];
    } else {
      spaces = [];
    }

    hasTag = false;
    nonSpace = false;
  }

  var openingTagRe, closingTagRe, closingCurlyRe;
  function compileTags (tagsToCompile) {
    if (typeof tagsToCompile === 'string')
      tagsToCompile = tagsToCompile.split(spaceRe, 2);

    if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
      throw new Error('Invalid tags: ' + tagsToCompile);

    openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
    closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
    closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
  }

  compileTags(tags || mustache.tags);

  var scanner = new Scanner(template);

  var start, type, value, chr, token, openSection;
  while (!scanner.eos()) {
    start = scanner.pos;

    // Match any text between tags.
    value = scanner.scanUntil(openingTagRe);

    if (value) {
      for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
        chr = value.charAt(i);

        if (isWhitespace(chr)) {
          spaces.push(tokens.length);
          indentation += chr;
        } else {
          nonSpace = true;
          lineHasNonSpace = true;
          indentation += ' ';
        }

        tokens.push([ 'text', chr, start, start + 1 ]);
        start += 1;

        // Check for whitespace on the current line.
        if (chr === '\n') {
          stripSpace();
          indentation = '';
          tagIndex = 0;
          lineHasNonSpace = false;
        }
      }
    }

    // Match the opening tag.
    if (!scanner.scan(openingTagRe))
      break;

    hasTag = true;

    // Get the tag type.
    type = scanner.scan(tagRe) || 'name';
    scanner.scan(whiteRe);

    // Get the tag value.
    if (type === '=') {
      value = scanner.scanUntil(equalsRe);
      scanner.scan(equalsRe);
      scanner.scanUntil(closingTagRe);
    } else if (type === '{') {
      value = scanner.scanUntil(closingCurlyRe);
      scanner.scan(curlyRe);
      scanner.scanUntil(closingTagRe);
      type = '&';
    } else {
      value = scanner.scanUntil(closingTagRe);
    }

    // Match the closing tag.
    if (!scanner.scan(closingTagRe))
      throw new Error('Unclosed tag at ' + scanner.pos);

    if (type == '>') {
      token = [ type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace ];
    } else {
      token = [ type, value, start, scanner.pos ];
    }
    tagIndex++;
    tokens.push(token);

    if (type === '#' || type === '^') {
      sections.push(token);
    } else if (type === '/') {
      // Check section nesting.
      openSection = sections.pop();

      if (!openSection)
        throw new Error('Unopened section "' + value + '" at ' + start);

      if (openSection[1] !== value)
        throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
    } else if (type === 'name' || type === '{' || type === '&') {
      nonSpace = true;
    } else if (type === '=') {
      // Set the tags for the next time around.
      compileTags(value);
    }
  }

  stripSpace();

  // Make sure there are no open sections when we're done.
  openSection = sections.pop();

  if (openSection)
    throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

  return nestTokens(squashTokens(tokens));
}

/**
 * Combines the values of consecutive text tokens in the given `tokens` array
 * to a single token.
 */
function squashTokens (tokens) {
  var squashedTokens = [];

  var token, lastToken;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];

    if (token) {
      if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
        lastToken[1] += token[1];
        lastToken[3] = token[3];
      } else {
        squashedTokens.push(token);
        lastToken = token;
      }
    }
  }

  return squashedTokens;
}

/**
 * Forms the given array of `tokens` into a nested tree structure where
 * tokens that represent a section have two additional items: 1) an array of
 * all tokens that appear in that section and 2) the index in the original
 * template that represents the end of that section.
 */
function nestTokens (tokens) {
  var nestedTokens = [];
  var collector = nestedTokens;
  var sections = [];

  var token, section;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];

    switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
    }
  }

  return nestedTokens;
}

/**
 * A simple string scanner that is used by the template parser to find
 * tokens in template strings.
 */
function Scanner (string) {
  this.string = string;
  this.tail = string;
  this.pos = 0;
}

/**
 * Returns `true` if the tail is empty (end of string).
 */
Scanner.prototype.eos = function eos () {
  return this.tail === '';
};

/**
 * Tries to match the given regular expression at the current position.
 * Returns the matched text if it can match, the empty string otherwise.
 */
Scanner.prototype.scan = function scan (re) {
  var match = this.tail.match(re);

  if (!match || match.index !== 0)
    return '';

  var string = match[0];

  this.tail = this.tail.substring(string.length);
  this.pos += string.length;

  return string;
};

/**
 * Skips all text until the given regular expression can be matched. Returns
 * the skipped string, which is the entire tail if no match can be made.
 */
Scanner.prototype.scanUntil = function scanUntil (re) {
  var index = this.tail.search(re), match;

  switch (index) {
    case -1:
      match = this.tail;
      this.tail = '';
      break;
    case 0:
      match = '';
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
  }

  this.pos += match.length;

  return match;
};

/**
 * Represents a rendering context by wrapping a view object and
 * maintaining a reference to the parent context.
 */
function Context (view, parentContext) {
  this.view = view;
  this.cache = { '.': this.view };
  this.parent = parentContext;
}

/**
 * Creates a new context using the given view with this context
 * as the parent.
 */
Context.prototype.push = function push (view) {
  return new Context(view, this);
};

/**
 * Returns the value of the given name in this context, traversing
 * up the context hierarchy if the value is absent in this context's view.
 */
Context.prototype.lookup = function lookup (name) {
  var cache = this.cache;

  var value;
  if (cache.hasOwnProperty(name)) {
    value = cache[name];
  } else {
    var context = this, intermediateValue, names, index, lookupHit = false;

    while (context) {
      if (name.indexOf('.') > 0) {
        intermediateValue = context.view;
        names = name.split('.');
        index = 0;

        /**
         * Using the dot notion path in `name`, we descend through the
         * nested objects.
         *
         * To be certain that the lookup has been successful, we have to
         * check if the last object in the path actually has the property
         * we are looking for. We store the result in `lookupHit`.
         *
         * This is specially necessary for when the value has been set to
         * `undefined` and we want to avoid looking up parent contexts.
         *
         * In the case where dot notation is used, we consider the lookup
         * to be successful even if the last "object" in the path is
         * not actually an object but a primitive (e.g., a string, or an
         * integer), because it is sometimes useful to access a property
         * of an autoboxed primitive, such as the length of a string.
         **/
        while (intermediateValue != null && index < names.length) {
          if (index === names.length - 1)
            lookupHit = (
              hasProperty(intermediateValue, names[index])
              || primitiveHasOwnProperty(intermediateValue, names[index])
            );

          intermediateValue = intermediateValue[names[index++]];
        }
      } else {
        intermediateValue = context.view[name];

        /**
         * Only checking against `hasProperty`, which always returns `false` if
         * `context.view` is not an object. Deliberately omitting the check
         * against `primitiveHasOwnProperty` if dot notation is not used.
         *
         * Consider this example:
         * ```
         * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
         * ```
         *
         * If we were to check also against `primitiveHasOwnProperty`, as we do
         * in the dot notation case, then render call would return:
         *
         * "The length of a football field is 9."
         *
         * rather than the expected:
         *
         * "The length of a football field is 100 yards."
         **/
        lookupHit = hasProperty(context.view, name);
      }

      if (lookupHit) {
        value = intermediateValue;
        break;
      }

      context = context.parent;
    }

    cache[name] = value;
  }

  if (isFunction(value))
    value = value.call(this.view);

  return value;
};

/**
 * A Writer knows how to take a stream of tokens and render them to a
 * string, given a context. It also maintains a cache of templates to
 * avoid the need to parse the same template twice.
 */
function Writer () {
  this.templateCache = {
    _cache: {},
    set: function set (key, value) {
      this._cache[key] = value;
    },
    get: function get (key) {
      return this._cache[key];
    },
    clear: function clear () {
      this._cache = {};
    }
  };
}

/**
 * Clears all cached templates in this writer.
 */
Writer.prototype.clearCache = function clearCache () {
  if (typeof this.templateCache !== 'undefined') {
    this.templateCache.clear();
  }
};

/**
 * Parses and caches the given `template` according to the given `tags` or
 * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
 * that is generated from the parse.
 */
Writer.prototype.parse = function parse (template, tags) {
  var cache = this.templateCache;
  var cacheKey = template + ':' + (tags || mustache.tags).join(':');
  var isCacheEnabled = typeof cache !== 'undefined';
  var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;

  if (tokens == undefined) {
    tokens = parseTemplate(template, tags);
    isCacheEnabled && cache.set(cacheKey, tokens);
  }
  return tokens;
};

/**
 * High-level method that is used to render the given `template` with
 * the given `view`.
 *
 * The optional `partials` argument may be an object that contains the
 * names and templates of partials that are used in the template. It may
 * also be a function that is used to load partial templates on the fly
 * that takes a single argument: the name of the partial.
 *
 * If the optional `config` argument is given here, then it should be an
 * object with a `tags` attribute or an `escape` attribute or both.
 * If an array is passed, then it will be interpreted the same way as
 * a `tags` attribute on a `config` object.
 *
 * The `tags` attribute of a `config` object must be an array with two
 * string values: the opening and closing tags used in the template (e.g.
 * [ "<%", "%>" ]). The default is to mustache.tags.
 *
 * The `escape` attribute of a `config` object must be a function which
 * accepts a string as input and outputs a safely escaped string.
 * If an `escape` function is not provided, then an HTML-safe string
 * escaping function is used as the default.
 */
Writer.prototype.render = function render (template, view, partials, config) {
  var tags = this.getConfigTags(config);
  var tokens = this.parse(template, tags);
  var context = (view instanceof Context) ? view : new Context(view, undefined);
  return this.renderTokens(tokens, context, partials, template, config);
};

/**
 * Low-level method that renders the given array of `tokens` using
 * the given `context` and `partials`.
 *
 * Note: The `originalTemplate` is only ever used to extract the portion
 * of the original template that was contained in a higher-order section.
 * If the template doesn't use higher-order sections, this argument may
 * be omitted.
 */
Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, config) {
  var buffer = '';

  var token, symbol, value;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    value = undefined;
    token = tokens[i];
    symbol = token[0];

    if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate, config);
    else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate, config);
    else if (symbol === '>') value = this.renderPartial(token, context, partials, config);
    else if (symbol === '&') value = this.unescapedValue(token, context);
    else if (symbol === 'name') value = this.escapedValue(token, context, config);
    else if (symbol === 'text') value = this.rawValue(token);

    if (value !== undefined)
      buffer += value;
  }

  return buffer;
};

Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate, config) {
  var self = this;
  var buffer = '';
  var value = context.lookup(token[1]);

  // This function is used to render an arbitrary template
  // in the current context by higher-order sections.
  function subRender (template) {
    return self.render(template, context, partials, config);
  }

  if (!value) return;

  if (isArray(value)) {
    for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
      buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
    }
  } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
    buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
  } else if (isFunction(value)) {
    if (typeof originalTemplate !== 'string')
      throw new Error('Cannot use higher-order sections without the original template');

    // Extract the portion of the original template that the section contains.
    value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

    if (value != null)
      buffer += value;
  } else {
    buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
  }
  return buffer;
};

Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate, config) {
  var value = context.lookup(token[1]);

  // Use JavaScript's definition of falsy. Include empty arrays.
  // See https://github.com/janl/mustache.js/issues/186
  if (!value || (isArray(value) && value.length === 0))
    return this.renderTokens(token[4], context, partials, originalTemplate, config);
};

Writer.prototype.indentPartial = function indentPartial (partial, indentation, lineHasNonSpace) {
  var filteredIndentation = indentation.replace(/[^ \t]/g, '');
  var partialByNl = partial.split('\n');
  for (var i = 0; i < partialByNl.length; i++) {
    if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
      partialByNl[i] = filteredIndentation + partialByNl[i];
    }
  }
  return partialByNl.join('\n');
};

Writer.prototype.renderPartial = function renderPartial (token, context, partials, config) {
  if (!partials) return;
  var tags = this.getConfigTags(config);

  var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
  if (value != null) {
    var lineHasNonSpace = token[6];
    var tagIndex = token[5];
    var indentation = token[4];
    var indentedValue = value;
    if (tagIndex == 0 && indentation) {
      indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
    }
    var tokens = this.parse(indentedValue, tags);
    return this.renderTokens(tokens, context, partials, indentedValue, config);
  }
};

Writer.prototype.unescapedValue = function unescapedValue (token, context) {
  var value = context.lookup(token[1]);
  if (value != null)
    return value;
};

Writer.prototype.escapedValue = function escapedValue (token, context, config) {
  var escape = this.getConfigEscape(config) || mustache.escape;
  var value = context.lookup(token[1]);
  if (value != null)
    return (typeof value === 'number' && escape === mustache.escape) ? String(value) : escape(value);
};

Writer.prototype.rawValue = function rawValue (token) {
  return token[1];
};

Writer.prototype.getConfigTags = function getConfigTags (config) {
  if (isArray(config)) {
    return config;
  }
  else if (config && typeof config === 'object') {
    return config.tags;
  }
  else {
    return undefined;
  }
};

Writer.prototype.getConfigEscape = function getConfigEscape (config) {
  if (config && typeof config === 'object' && !isArray(config)) {
    return config.escape;
  }
  else {
    return undefined;
  }
};

var mustache = {
  name: 'mustache.js',
  version: '4.2.0',
  tags: [ '{{', '}}' ],
  clearCache: undefined,
  escape: undefined,
  parse: undefined,
  render: undefined,
  Scanner: undefined,
  Context: undefined,
  Writer: undefined,
  /**
   * Allows a user to override the default caching strategy, by providing an
   * object with set, get and clear methods. This can also be used to disable
   * the cache by setting it to the literal `undefined`.
   */
  set templateCache (cache) {
    defaultWriter.templateCache = cache;
  },
  /**
   * Gets the default or overridden caching object from the default writer.
   */
  get templateCache () {
    return defaultWriter.templateCache;
  }
};

// All high-level mustache.* functions use this writer.
var defaultWriter = new Writer();

/**
 * Clears all cached templates in the default writer.
 */
mustache.clearCache = function clearCache () {
  return defaultWriter.clearCache();
};

/**
 * Parses and caches the given template in the default writer and returns the
 * array of tokens it contains. Doing this ahead of time avoids the need to
 * parse templates on the fly as they are rendered.
 */
mustache.parse = function parse (template, tags) {
  return defaultWriter.parse(template, tags);
};

/**
 * Renders the `template` with the given `view`, `partials`, and `config`
 * using the default writer.
 */
mustache.render = function render (template, view, partials, config) {
  if (typeof template !== 'string') {
    throw new TypeError('Invalid template! Template should be a "string" ' +
                        'but "' + typeStr(template) + '" was given as the first ' +
                        'argument for mustache#render(template, view, partials)');
  }

  return defaultWriter.render(template, view, partials, config);
};

// Export the escaping function so that the user may override it.
// See https://github.com/janl/mustache.js/issues/244
mustache.escape = escapeHtml;

// Export these mainly for testing, but also for advanced usage.
mustache.Scanner = Scanner;
mustache.Context = Context;
mustache.Writer = Writer;

let nanoid=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"");

class ChatbotLoading {
    static _DESTORY_TIMEOUT = 10000;

    template = `
        <div id="{{id}}" class="loading-frame loading-frame-in">
            <div id="{{note_id}}" class="col-10 loading-note hidden">Please wait...</div>
            <div class="col col-3">
                <img id="{{iconsrc_id}}" class="col-10 loading-sandwatch" src="{{iconsrc}}" alt="Loading..."/>
            </div>
            <div class="col col-7">
                <span id="{{message_id}}" class="QA-question-2" style="font-style: italic;">{{message}}</span>
            </div>
        </div>
    `;
    view = {
        id: nanoid(6), 
        note_id: nanoid(6), 
        message: "NULL", 
        message_id: nanoid(6), 
        iconsrc: "../../img/Untitled-1.png", 
        iconsrc_id: nanoid(6)
    };
    html;

    static get DESTORY_TIMEOUT() {
        return ChatbotLoading._DESTORY_TIMEOUT;
    }
    static set DESTORY_TIMEOUT(value) {
        ChatbotLoading._DESTORY_TIMEOUT = value;
    }

    constructor() {
    
    }

    create(data) {
        let dataList = [
            "message", 
            "iconsrc"
        ];

        if (data) {
            dataList.forEach(element => {
                if (element in data) {
                    this.view[element] = data[element];
                }
            });
        } else {
            console.error("无法创建Loading, 参数缺失");
        }

        const htmlString = mustache.render(this.template, this.view);
        const parser = new DOMParser();
        const html = parser.parseFromString(htmlString, 'text/html');
        this.html = html;
        console.log(this.html);
          
        console.log(html.body.firstChild);
        return html.body.firstChild;
    }

    destory(timeout) {
        let danmu = document.getElementById(this.view.id);

        setTimeout(function () {
        try {
            danmu.parentNode.removeChild(danmu);
        } catch (e) {
            console.error(e.message);
        }
        }, timeout);
    }

    getId() {
        return this.view.id;
    }

    clearAnimations() {
        document.getElementById(this.view.id).classList.remove("loading-frame-out");
        document.getElementById(this.view.id).classList.remove("loading-frame-in");
    }

    popup() {
        this.clearAnimations();
        document.getElementById(this.view.id).classList.add("loading-frame-in");
    }

    popout() {
        this.clearAnimations();
        document.getElementById(this.view.id).classList.add("loading-frame-out");
    }

    setIcon(src) {
        document.getElementById(this.view.iconsrc_id).setAttribute(
            "src", 
            src
        );
    }

    setMessage(message) {
        document.getElementById(this.view.message_id).textContent = message;
    }

    setUpdatedStatus() {
        this.setIcon("./img/verified-verificado.gif");
        this.setMessage("您已是最新的版本");
    }

    createCountdownProgress() {
        let note = document.getElementById(this.view.note_id);
        note.classList.remove("hidden");

        let bar = document.createElement("progress");
        bar.style.accentColor = "tomato";
        bar.style.width = "90%";
        bar.max = 10;
        bar.value = 10;
        note.innerHTML = '';
        note.appendChild(bar);
        let timeleft = 10;
        let timer = setInterval(function(){
            bar.value = timeleft;
            if(timeleft <= 0){
                clearInterval(timer);
                note.classList.add("hidden");
            }
            timeleft -= 1;
            }, 1000);    
    }

    toggleIconCircling() {
        document.getElementById(this.view.iconsrc_id).classList.toggle("loading-sandwatch");
    }

    
        
}

/*
 * @Author: Cikepaokei
 * @Date: 2020-05-15 20:06:16
 * @LastEditTime: 2022-08-21 01:48:22
 * @LastEditors: Cikepaokei
 * @Description: In User Settings Edit
 * @FilePath: \live\live - 220621.js
 */

window.ChatbotDanmu = ChatbotDanmu;
window.ChatbotDebug = ChatbotDebug;
window.ChatbotData = ChatbotData;
window.ChatbotUtil = ChatbotUtil;
window.ChatbotRoundDanmu = ChatbotRoundDanmu;



class ChatbotClock {
  appframe_clock;
  static appframe_clock_id = "cb-app-clock";
  static toggle = true;

  gui = {
    clock: {},
    top: {},
    middle: {},
    bottom: {},
    time: {},
    daynight: {},
    line: {}, 
    date: {}, 
    day: {}
  };
  style = {
    clock: "app-clock",
    top: "app-clock-top",
    middle: "app-clock-middle",
    bottom: "app-clock-bottom",
    time: "app-clock-top-time",
    daynight: "app-clock-top-daynight",
    line: "app-clock-middle-line", 
    date: "app-clock-bottom-date", 
    day: "app-clock-bottom-day"
  };
  
  constructor() {
    let gui = this.gui;

    for (const key in gui) {
      gui[key] = document.createElement("div");
      gui[key].className = this.style[key];
    }
    
    gui.clock.appendChild(gui.top);
    gui.clock.appendChild(gui.middle);
    gui.clock.appendChild(gui.bottom);
    gui.top.appendChild(gui.time);
    gui.top.appendChild(gui.daynight);
    gui.middle.appendChild(gui.line);
    gui.bottom.appendChild(gui.date);
    gui.bottom.appendChild(gui.day);

    this.appframe_clock = document.getElementById(ChatbotClock.appframe_clock_id);
    this.appframe_clock.appendChild(gui.clock);

    // gui.time.innerHTML = "9:48";
    // gui.daynight.innerHTML = "AM";
    // gui.date.innerHTML = "Feb 24";
    // gui.day.innerHTML = "Fri.";
    this.setTime({
      time: ChatbotUtil.getHours12(), 
      daynight: ChatbotUtil.getDaynight(), 
      date: ChatbotUtil.getDate(), 
      week: ChatbotUtil.getWeekday()
    });
  }

  setTime(data) {
    this.gui.time.innerHTML = "--:--";
    this.gui.daynight.innerHTML = "AM";
    this.gui.date.innerHTML = "N/A";
    this.gui.day.innerHTML = "-";

    if ("time" in data) {
      document.createTextNode(data["time"]);
      this.gui.time.innerHTML = data["time"];
    }
    if ("daynight" in data) {
      document.createTextNode(data["daynight"]);
      this.gui.daynight.innerHTML = data["daynight"];
    }
    if ("date" in data) {
      document.createTextNode(data["date"]);
      this.gui.date.innerHTML = data["date"];
    }
    if ("week" in data) {
      document.createTextNode(data["week"]);
      this.gui.day.innerHTML = data["week"];
    }
  }
}


const textEncoder = new TextEncoder("utf-8");
const textDecoder = new TextDecoder("utf-8");

const readInt = function (buffer, start, len) {
  let result = 0;
  for (let i = len - 1; i >= 0; i--) {
    result += Math.pow(256, len - i - 1) * buffer[start + i];
  }
  return result;
};

const writeInt = function (buffer, start, len, value) {
  let i = 0;
  while (i < len) {
    buffer[start + i] = value / Math.pow(256, len - i - 1);
    i++;
  }
};

const encode = function (str, op) {
  let data = textEncoder.encode(str);
  let packetLen = 16 + data.byteLength;
  let header = [0, 0, 0, 0, 0, 16, 0, 1, 0, 0, 0, op, 0, 0, 0, 1];
  writeInt(header, 0, 4, packetLen);
  return new Uint8Array(header.concat(...data)).buffer;
};
const decode = function (blob) {
  return new Promise(function (resolve, reject) {
    let reader = new FileReader();
    reader.onload = function (e) {
      let buffer = new Uint8Array(e.target.result);
      let result = {};
      result.packetLen = readInt(buffer, 0, 4);
      result.headerLen = readInt(buffer, 4, 2);
      result.ver = readInt(buffer, 6, 2);
      result.op = readInt(buffer, 8, 4);
      result.seq = readInt(buffer, 12, 4);
      if (result.op === 5) {
        result.body = [];
        let offset = 0;
        while (offset < buffer.length) {
          let packetLen = readInt(buffer, offset + 0, 4);
          let headerLen = 16; // readInt(buffer,offset + 4,4)
          let data = buffer.slice(offset + headerLen, offset + packetLen);

          let body = '';
          try {
              // pako可能无法解压
              body = textDecoder.decode(pako.inflate(data));
          }
          catch (e){
             body = textDecoder.decode(data);
          }

          if (body) {
              // 同一条 message 中可能存在多条信息，用正则筛出来
              const group = body.split(/[\x00-\x1f]+/);
              group.forEach(item => {
                try {
                  const parsedItem = JSON.parse(item);
                  if (typeof parsedItem === 'object') {
                      result.body.push(parsedItem);
                  } else {
                      // 这里item可能会解析出number
                      // 此时可以尝试重新用pako解压data（携带转换参数）
                      // const newBody = textDecoder.decode(pako.inflate(data, {to: 'String'}))
                      // 重复上面的逻辑，筛选可能存在的多条信息
                      // 初步验证，这里可以解析到INTERACT_WORD、DANMU_MSG、ONLINE_RANK_COUNT
                      // SEND_GIFT、SUPER_CHAT_MESSAGE
                  }
                }
                catch(e) {
                  // 忽略非 JSON 字符串，通常情况下为分隔符
                }
              });
          }

          offset += packetLen;
        }
      } else if (result.op === 3) {
        result.body = {
          count: readInt(buffer, 16, 4),
        };
      }
      resolve(result);
    };
    reader.readAsArrayBuffer(blob);
  });
};

const ws = new WebSocket("wss://broadcastlv.chat.bilibili.com:2245/sub");
const roomid = 3978831;

ws.onopen = function () {
  ws.send(encode(
      JSON.stringify({
        roomid: roomid,
      }), 7
    )
  );
};

ws.onclose = function () {
  if (ChatbotDanmu.isShowShare == true) {
    let danmu = new ChatbotRoundDanmu();
    danmu.createToAppFrame({
      username: "通知",
      message: `弹幕连接已断开，请刷新页面`, 
      appFrame: ChatbotDanmu.appframe_likedisplay_id
    });
    ChatbotUtil.playSfx("./audio/stop-13692.mp3", "sys");
    // danmu.destory(8400);
  }  
};

ws.onerror = function () {
  if (ChatbotDanmu.isShowShare == true) {
    let danmu = new ChatbotRoundDanmu();
    danmu.createToAppFrame({
      username: "通知",
      message: `网络错误，请检查网络`, 
      appFrame: ChatbotDanmu.appframe_likedisplay_id
    });
    ChatbotUtil.playSfx("./audio/stop-13692.mp3", "sys");
    // danmu.destory(8400);
    let body = document.getElementsByTagName("body")[0];
    body.style.position = "fixed";
    body.style.top = "20%";
  }  
};

setInterval(function () {
  ws.send(encode("", 2));
}, 30000);

ws.onmessage = async function (msgEvent) {
  const packet = await decode(msgEvent.data);

  console.log(packet);

  switch (packet.op) {
    case 8:
      console.log("加入房间");
      document.write(`<!DOCTYPE html>`);
      document.write(
        `<head><meta name="viewport" content="width=device-width, initial-scale=1.0">`
      );
      document.write(`<title>Chatbot | By Cikepaokei</title>`);
      document.write(
        `<link rel="stylesheet" href="./bar-animalcrossing-v2.css?v=${Date.now()}">`
      );
      document.write(`</head>`);
      document.write(`<style>`);
      document.write(
        `@import url('https://fonts.googleapis.com/css2?family=Denk+One&family=Fredoka+One&family=M+PLUS+Rounded+1c:wght@500&display=swap');`
      );
      document.write(`</style>`);
      document.write(`</body>`);
      // document.write(`<div class="toptoolbar-window"><div class="toptoolbar-frame"><span class="toptoolbar-label">显示开关</span>
      // <span class="toptoolbar-icon toptoolbar-tooltip-sign-enable"><div class="toolbar-icon "><img src="./img/part-Slice 5-10x.png" class="toolbar-icon-img" onclick="ChatbotDanmu.toggleVisitorDanmuDisplay()" style=""><div class="toptoolbar-sign
      //     " style="
      //     width: 100%;
      //     height: 100%;
      //     display: inline-block;
      //     background-color: #1b8e9b;
      // "></div></div></span><span class="toptoolbar-icon toptoolbar-tooltip-sign-disable"><div class="toolbar-icon "><img src="./img/part-Slice 5-10x.png" class="toolbar-icon-img" onclick="ChatbotDanmu.toggleVisitorDanmuDisplay()" style="
      // "></div></span><span class="toptoolbar-tooltip" style="
      //     background-color: #1b8e9b;
      // ">观众弹幕</span></div>
      // </div>`);
      document.write(`</body>`);


      // // 添加breaktime js
      // // 【已弃用】已移转到 ChatbotBreakTime 类里
      // var head = document.getElementsByTagName("head")[0];
      // var breaktime_js = document.createElement("script");
      // breaktime_js.setAttribute("src", `./js/breaktime.js?v=${Date.now()}`);
      // head.appendChild(breaktime_js);

      var body = document.getElementsByTagName("body")[0];

      // 添加工具栏
      var toptoolbar = new ChatbotTopToolbar();
      toptoolbar.createTopToolbar(3);
      toptoolbar.setIcon(0, "./img/star.gif", "ChatbotBreakTime.create()");
      toptoolbar.setIcon(
        1,
        "./img/part-Slice 5-10x.png",
        "ChatbotDanmu.toggleVisitorDanmuDisplay()"
      );
      toptoolbar.setIcon(
        2,
        "./img/part-Slice 5-10x.png",
        "ChatbotDanmu.toggleGiftDanmuDisplay()"
      );
      toptoolbar.addTopToolbar(body);

      //添加Chat bot应用框(应用池)
      var app = document.createElement("div");
      app.setAttribute("class", "app");
      body.appendChild(app);

      //添加Chat bot应用(Debug显示应用)
      var app_debug_display = document.createElement("div");
      app_debug_display.setAttribute(
        "id",
        ChatbotDanmu.appframe_debug_display_id
      );
      if (ChatbotDebug.debugMode) {
        app_debug_display.style.display = "block";
      }
      app.appendChild(app_debug_display);

      // 添加Chat bot应用(弹幕点歌应用)
      var app_cloudmusic_player = document.createElement("div");
      app_cloudmusic_player.setAttribute(
        "id",
        ChatbotDanmu.appframe_cloudmusicplayer_id
      );
      // 创建 歌曲封面
      var app_cloudmusic_cover = document.createElement("img");
      app_cloudmusic_cover.setAttribute("class", "cloudmusic-player-cover cover-flip");
      app_cloudmusic_cover.src = "./img/Animal_Crossing_Leaf_White_01.png";
      app_cloudmusic_cover.alt = "Cover Loading...";
      app_cloudmusic_cover.crossOrigin = "Anonymous";
      // 创建 歌曲信息栏
      var app_cloudmusic_info = document.createElement("div");
      app_cloudmusic_info.setAttribute("class", "cloudmusic-player-info");
      app_cloudmusic_player.appendChild(app_cloudmusic_cover);
      app_cloudmusic_player.appendChild(app_cloudmusic_info);
      app_cloudmusic_player.setAttribute("style", "display: none;");
      // 创建 信息滚动条
      var app_cloudmusic_info_marquee = document.createElement("span");
      app_cloudmusic_info_marquee.setAttribute(
        "class",
        "cloudmusic-player-marquee"
      );
      app_cloudmusic_info_marquee.innerText = "Loading...";
      // 创建 时间栏
      var app_cloudmusic_info_time = document.createElement("p");
      app_cloudmusic_info_time.setAttribute("class", "cloudmusic-info-time");
      app_cloudmusic_info_time.setAttribute("style", "display: contents;");
      app_cloudmusic_info_time.innerText = "Loading...";
      app_cloudmusic_info_marquee.appendChild(app_cloudmusic_info_time);
      app_cloudmusic_info.appendChild(app_cloudmusic_info_marquee);
      app.appendChild(app_cloudmusic_player);

      //添加Chat bot应用(礼物显示应用)
      var app_gift_display = document.createElement("div");
      app_gift_display.setAttribute("id", ChatbotDanmu.appframe_giftdisplay_id);
      app.appendChild(app_gift_display);

      // 添加Chat bot应用(时钟应用)
      var app_clock = document.createElement("div");
      app_clock.setAttribute(
        "id",
        ChatbotClock.appframe_clock_id
      );
      app.appendChild(app_clock);

      //添加Chat bot应用(点赞显示应用)
      var app_like_display = document.createElement("div");
      app_like_display.setAttribute("id", ChatbotDanmu.appframe_likedisplay_id);
      app.appendChild(app_like_display);

      //添加Chat bot应用(造访者队列显示应用)
      var app_visitor_queue_display = document.createElement("div");
      app_visitor_queue_display.setAttribute(
        "id",
        ChatbotDanmu.appframe_visitorqueuedisplay_id
      );
      app.appendChild(app_visitor_queue_display);

      //添加弹幕框
      var mainpage = document.createElement("div");
      mainpage.setAttribute("id", "mainpage");
      body.appendChild(mainpage);

      // let cloudmusic = new ChatbotCloudMusic();
      // cloudmusic.play(1923036618);
      // 添加 SFX
      var audio = document.createElement("audio");
      audio.setAttribute("id", "sfx");
      audio.setAttribute("src", "#");
      audio.setAttribute("autoplay", "autoplay");
      if (ChatbotDebug.debugMode) {
        audio.setAttribute("controls", "controls");
      }
      // audio.addEventListener('timeupdate', (event) => {
      //   cloudmusic.setArtist(`${audio.currentTime.toFixed(0)} / ${audio.duration.toFixed(0)}`);
      //   cloudmusic.updateGUI();
      // });

      body.appendChild(audio);

      // 添加一条系统通知 用系统通知方法
      var system_message_new = new ChatbotDanmu();
      system_message_new.createSystemDanmu(
        "当前版本: V20230503 | Dev: Cikepaokei"
      );
      // system_message_new.setHashids();  // 不带标识的Hashid
      system_message_new.setHashidsWithName("sysmsg"); // 设置带标识的Hashid
      system_message_new.addDanmu(mainpage); // 添加弹幕到指定应用池
      system_message_new.destoryDanmu(8400); // 执行销毁弹幕，在8400ms后

      // 添加一条系统通知 用系统通知方法
      var system_message_roomid = new ChatbotDanmu();
      system_message_roomid.createSystemDanmu(`房间号: ${roomid}`);
      // system_message_new.setHashids();  // 不带标识的Hashid
      system_message_roomid.setHashidsWithName("sysmsg"); // 设置带标识的Hashid
      system_message_roomid.addDanmu(mainpage); // 添加弹幕到指定应用池
      system_message_roomid.destoryDanmu(8400); // 执行销毁弹幕，在8400ms后

      var loading = new ChatbotLoading();
      var loading_element = loading.create({
        message: `检查更新...`,
        iconsrc: "../../img/icons8-sand-watch-96.png"
      });
      document.getElementById(ChatbotDanmu.appframe_giftdisplay_id).appendChild(loading_element);
      loading.popup();
      // ChatbotUtil.playSfx("./audio/177560__festivus31__airplane-pa-sound-2.wav", "sys");
      loading.createCountdownProgress();
      document.getElementById(loading.getId()).addEventListener("animationend", (event) => {
        switch (event.animationName) {
          case "msg-2":
            setTimeout(function() {
              ChatbotUtil.playSfx(
                "./audio/notification-sound-7062.mp3", 
                "sys"
              );
              loading.toggleIconCircling();
              loading.setIcon("./img/verified-verificado.gif");
              loading.setMessage("您已是最新的版本");
              setTimeout(function() {
                loading.popout();
              }, 2000);
            }, ChatbotLoading.DESTORY_TIMEOUT);
            break; 

          case "loading-frame-out":
            loading.destory();
            break;
        }
        console.log(event);
      });


      if (ChatbotDebug.debugMode) {
        let visitorStatus, giftStatus,
            likeStatus, autoDestoryStatus,
            silenceDetectStatus, followStatus,
            shareStatus, superchatStatus, entryStatus;
        if (ChatbotDanmu.isShowVisitorDanmu) {
          visitorStatus = "访客显示：🟢";
        } else {
          visitorStatus = "访客显示：🔴";
        }
        if (ChatbotDanmu.isShowGiftDanmu) {
          giftStatus = "礼物显示：🟢";
        } else {
          giftStatus = "礼物显示：🔴";
        }
        if (ChatbotDanmu.isShowLikeNotice) {
          likeStatus = "点赞显示：🟢";
        } else {
          likeStatus = "点赞显示：🔴";
        }
        if (ChatbotDanmu.toggleAutoDestory) {
          autoDestoryStatus = "弹幕自动销毁：🟢";
        } else {
          autoDestoryStatus = "弹幕自动销毁：🔴";
        }
        {
          silenceDetectStatus = "静默音乐：🔴";
        }
        if (ChatbotDanmu.isShowFollow) {
          followStatus = "关注提示：🟢";
        } else {
          followStatus = "关注提示：🔴";
        }
        if (ChatbotDanmu.isShowShare) {
          shareStatus = "分享提示：🟢";
        } else {
          shareStatus = "分享提示：🔴";
        }
        if (ChatbotDanmu.isShowSuperchat) {
          superchatStatus = "醒目留言：🟢";
        } else {
          superchatStatus = "醒目留言：🔴";
        }
        if (ChatbotDanmu.isShowEntry) {
          entryStatus = "舰长或榜前进入提醒：🟢";
        } else {
          entryStatus = "舰长或榜前进入提醒：🔴";
        }

        let danmu = new ChatbotRoundDanmu();
        danmu.create({
          username: "Username",
          message: "Message"
        });
        danmu.destory(8400);

        let danmu2 = new ChatbotRoundDanmu();
        danmu2.createList({
          title: "状态", 
          content: [
            visitorStatus, 
            giftStatus,
            likeStatus, 
            autoDestoryStatus, 
            silenceDetectStatus, 
            followStatus, 
            shareStatus, 
            superchatStatus, 
            entryStatus
          ]
        });
        // danmu2.destory(8400);
      }


      // 启动 AJAX请求计数定时清空 计时器
      setInterval(function () {
        ChatbotUtil.emptyAjaxRequestCount();
      }, 60000);

      // 启动 AJAX请求解锁定时清空 计时器
      setInterval(function () {
        // console.log(Date.now() + " | " + ChatbotUtil.ajaxUnlockTime);
        if (ChatbotUtil.ajaxLocker == true) {
          if (Date.now() >= ChatbotUtil.ajaxUnlockTime) {
            ChatbotUtil.ajaxUnlock();
          }
        }
      }, 1000);

      if (ChatbotDebug.debugMode) {
        var danmu_rate_counter_oldcount = 0;
        setInterval(function () {
          let oldCount = danmu_rate_counter_oldcount;
          let newCount = ChatbotDanmu.count;
  
          let rate = newCount - oldCount;
          ChatbotDebug.display(`总消息速率：${rate.toFixed(0)}条/5s | 总消息数：${newCount}`);
          danmu_rate_counter_oldcount = newCount;
        }, 5000);
      } 
      document.getElementById(
        ChatbotDanmu.appframe_cloudmusicplayer_id
      );
      // // 自定义歌单
      // let musicList = ChatbotData.RandomCloudmusicIDList;
      // 离线喜欢的自定义歌单
      // let musicList = ChatbotCloudMusicData.myFavoritePlaylist;
      let musicList = "";
      // fetch("./ChatbotCloudMusicData.json")
      fetch("./RB_Playlist.json")
        .then((response) => response.json())
        .then((json) => { 
          musicList = json;
          // musicList = musicList.result.tracks;
          musicList = musicList.playlist.tracks;
        })
        .catch((err) => "Request Failed" + err);

      // 静默检测，超时后播放音乐
      setInterval(function () {

        // console.log(audio.readyState);
      }, 1000);

      audio.addEventListener("ended", (event) => {
      });

      setInterval(function () {
      }, 1000);


      var app_clock_instance = new ChatbotClock();
      setInterval(function () {
        // 12小时制时间
        // app_clock_instance.setTime({
        //   time: ChatbotUtil.getHours12(), 
        //   daynight: ChatbotUtil.getDaynight(), 
        //   date: ChatbotUtil.getDate(), 
        //   week: ChatbotUtil.getWeekday()
        // });

        // 24小时制时间
        let date = new Date();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let daynight = "";
        if (minutes == 14 || minutes == 29 
          || minutes == 44 || minutes == 59) {
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
          daynight = seconds;
        }
        app_clock_instance.setTime({
          time: ChatbotUtil.getTimeWithoutSecond(), 
          daynight: daynight, 
          date: ChatbotUtil.getDate(), 
          week: ChatbotUtil.getWeekday()
        });

      }, 1000);
      

      break;
    case 3:
      const count = packet.body.count;
      console.log(`人气：${count}`);

      break;
    case 5:
      packet.body.forEach((body) => {
        switch (body.cmd) {
          case "DANMU_MSG":
            // console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${body.info[2][1]}: ${body.info[1]}`);
            ChatbotDebug.log(`${body.info[2][1]}: ${body.info[1]}`);

            var mainpage = document.getElementById("mainpage");

            var username = body.info[2][1],
              message = body.info[1];
            body.info[3][1];
            body.info[2][0];
            var profilephoto = body.info[2][0];
            var isAdmin = body.info[2][2]; // 0 - 非管理员，1 - 管理员

            var danmu = new ChatbotDanmu();

            danmu.createDanmu(
              username,
              message,
              "./img/Animal_Crossing_Leaf_White_01.png"
            );

            // 设置 弹幕表情包
            if (body.info[0][13]["url"]) {
              let url = body.info[0][13]["url"];
              danmu.message.innerHTML = "";
              danmu.addCustomImage(danmu.message, "badge-icon", url);
            } else {
              // 替换 特殊文字为表情
              danmu.message.innerHTML =
                danmu.replaceMsgSpecialTextToImage(message);
            }

            // // 设置 2023 新年消息样式
            // danmu.setMessageStyle("msg-3-2023");

            // ADDED 2023.02.26
            // 开发者检测，并设置开发者标识
            let developer_list = [
              "刺客跑尅"
            ];
            developer_list.forEach(developer => {
              if (username == developer) {
                danmu.addCustomImage(
                  danmu.username,
                  "badge-icon",
                  "./img/Toolbox_(Red)_NH_Icon.png"
                );
              }
            });
            

            // 管理员检测，并设置管理员标识和特殊弹幕样式
            if (isAdmin == 1) {
              danmu.addCustomImage(
                danmu.username,
                "badge-icon",
                "./img/Silver-Shield.png"
              );
              danmu.setMessageStyle("msg-3-admin");
            }

            // 粉丝勋章检测V2
            if (body.info[3][1] == "爱雪") {
              danmu.addCustomImage(
                danmu.username,
                "badge-icon",
                "./img/Niko_Icon.webp"
              );
            }

            // ADDED: 2023.03.07 20:46
            // 【不可用】Top3排行榜检测，依次分配沙发，板凳，地板图标。
            if (ChatbotDanmu.isShowTop3Rank) {
              let map = ChatbotDanmu.top3rank_username_map;
              for (let i = 1; i <= 3; i++) {
                const element = map.get(i.toString());
                if (element == danmu.username) {
                  danmu.addCustomImage(
                    danmu.username,
                    "badge-icon",
                    "./img/NH-Furniture-Rattan_armchair_29.webp"
                  );
                }
              }
            }


            // 获取并设置 用户头像
            // 如果 【用户头像表】存在此用户，设置用户头像
            // 如果，不存在，从API通过UID获取用户头像，并设置用户头像和记录到【用户头像表】
            if (ChatbotDanmu.isShowUserface) {
              if (ChatbotDanmu.getProfilephotoSrcByUsername(username) != false) {
                danmu.setProfilePhoto(
                  ChatbotDanmu.getProfilephotoSrcByUsername(username)
                );
              } else {
                // let ajaxurl = `https://tenapi.cn/v2/biliinfo?uid=${profilephoto}`;
                let ajaxurl = `https://api.obfs.dev/api/bilibili/v3/user_info?uid=${profilephoto}`;
                if (ChatbotUtil.ajaxLocker == false) {
                  ChatbotUtil.doAjaxGetRL(ajaxurl).then(
                    (response) => {
                      let data = JSON.parse(response);
                      if (data.code == 200 || data.code == 0) {
                        // let profilePhoto = data.data.avatar;
                        let profilePhoto = data.data.card.face;
                        console.log(profilePhoto);
                        if (profilePhoto != null) {
                          ChatbotDanmu.updateProfilephotoSrcByUsername(
                            username,
                            profilePhoto
                          );
                          danmu.setProfilePhoto(profilePhoto);
                        }
                      } else if (data.code == 201) {
                        if (ChatbotUtil.isAjaxLocked == false) {
                          ChatbotUtil.ajaxLock();
  
                          let log = `${ChatbotUtil.getTime()} API获取失败，请求已锁定`;
                          log += ` | 解锁时间：${new Date(
                              ChatbotUtil.ajaxUnlockTime
                            ).toLocaleString()}`;
                          ChatbotDebug.display(log);
                          console.log(log);
                        }
                      }
                    },
                    (Error) => {
                      console.log(Error);
                    }
                  );
                }
              }
            }

            // // 获取随机头像
            // if (ChatbotDanmu.isShowUserface) {
            //   if (ChatbotDanmu.getProfilephotoSrcByUsername(username) != false) {
            //     danmu.setProfilePhoto(
            //       ChatbotDanmu.getProfilephotoSrcByUsername(username)
            //     );
            //   } else {
            //     let profilePhoto = `https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${profilephoto}`;
            //     ChatbotDanmu.updateProfilephotoSrcByUsername(
            //       username,
            //       profilePhoto
            //     );
            //     danmu.setProfilePhoto(profilePhoto);
            //   }
            // }
            

            
            // // 获取并设置 用户头像 V2 (POST)
            // // 如果 【用户头像表】存在此用户，设置用户头像
            // // 如果，不存在，从API通过UID获取用户头像，并设置用户头像和记录到【用户头像表】
            // if (ChatbotDanmu.isShowUserface) {
            //   if (ChatbotDanmu.getProfilephotoSrcByUsername(username) != false) {
            //     danmu.setProfilePhoto(
            //       ChatbotDanmu.getProfilephotoSrcByUsername(username)
            //     );
            //   } else {
            //     let ajaxurl = `https://tenapi.cn/v2/biliinfo`;
            //     if (ChatbotUtil.ajaxLocker == false) {
            //       ChatbotUtil.doAjaxPostRL(ajaxurl, `uid=${profilephoto}`).then(
            //         (response) => {
            //           let data = JSON.parse(response);
            //           if (data.code == 200) {
            //             let profilePhoto = data.data.avatar;
            //             if (profilePhoto != null) {
            //               ChatbotDanmu.updateProfilephotoSrcByUsername(
            //                 username,
            //                 profilePhoto
            //               );
            //               danmu.setProfilePhoto(profilePhoto);
            //             }
            //           } else if (data.code == 201) {
            //             if (ChatbotUtil.isAjaxLocked == false) {
            //               ChatbotUtil.ajaxLock();
  
            //               let log = `${ChatbotUtil.getTime()} API获取失败，请求已锁定`;
            //               log += ` | 解锁时间：${new Date(
            //                   ChatbotUtil.ajaxUnlockTime
            //                 ).toLocaleString()}`;
            //               ChatbotDebug.display(log);
            //               console.log(log);
            //             }
            //           }
            //         },
            //         (Error) => {
            //           console.log(Error);
            //         }
            //       );
            //     }
            //   }
            // }        

            var randomColour = danmu.getRandomColourSchemes();
            var randomLightColour = randomColour[0];
            var randomDarkColour = randomColour[1];
            danmu.setStaticUsernameBackgroundColour(randomLightColour);
            danmu.setProfilePhotoBackgroundColor(randomLightColour);
            danmu.setStaticUsernameColour(randomDarkColour);

            // 用户弹幕计数星标系统
            var userdanmucount = danmu.updateDanmuCount();
            if (userdanmucount >= 5 && userdanmucount < 10) {
              danmu.addCustomImage(
                danmu.username,
                "badge-icon",
                "./img/Animal_Crossing_Leaf_5.png"
              );
            } else if (userdanmucount >= 10 && userdanmucount < 20) {
              danmu.addCustomImage(
                danmu.username,
                "badge-icon",
                "./img/Animal_Crossing_Leaf_10.png"
              );
            } else if (userdanmucount >= 20 && userdanmucount < 50) {
              danmu.addCustomImage(
                danmu.username,
                "badge-icon",
                "./img/Animal_Crossing_Leaf_20.png"
              );
            } else if (userdanmucount >= 50 && userdanmucount < 100) {
              danmu.addCustomImage(
                danmu.username,
                "badge-icon",
                "./img/Animal_Crossing_Leaf_50.png"
              );
            } else if (userdanmucount >= 100) {
              danmu.addCustomImage(
                danmu.username,
                "badge-icon",
                "./img/Animal_Crossing_Leaf_100_Plus.png"
              );
            }

            // 礼物计数星标系统
            var giftcount = ChatbotDanmu.getGiftCountByUsername(username);
            if (giftcount >= 1) {
              danmu.addCustomImage(
                danmu.username,
                "badge-icon",
                "./img/NH-Inventory_Icon-Coin.webp"
              );
            }
            var silvergiftcount =
              ChatbotDanmu.getSilverGiftCountByUsername(username);
            if (silvergiftcount >= 1) {
              danmu.addCustomImage(
                danmu.username,
                "badge-icon",
                "./img/Present_NH_Inv_Icon.png"
              );
            }

            // 点赞计数星标系统
            var likecount = ChatbotDanmu.getLikeCountByUsername(username);
            if (likecount >= 1) {
              danmu.addCustomImage(
                danmu.username,
                "badge-icon",
                "./img/emojisky.com-599683.png"
              );
            }
            
            // 添加时间标签
            // 24时小时制
            danmu.addTimeLabel(ChatbotUtil.getTimeWithoutSecond());
            // 12时小时制
            // danmu.addTimeLabel(
            //   `${ChatbotUtil.getHours12()} ${ChatbotUtil.getDaynight()}`
            // );


            danmu.setHashidsWithName("danmumsg"); //设置带名称的唯一标识 Hashid
            danmu.addSpecialImageByData(message);
            if (!ChatbotDanmu.toggleAutoDestory) {
              danmu.setDanmuStyle("bar-3-onlyin");
              if (mainpage.children.length >= 5) {
                mainpage.removeChild(mainpage.lastChild);
              }
            }
            danmu.addDanmu(mainpage);
            ChatbotUtil.playSfx(
              "./audio/Pop-up-text-notification.mp3",
              "danmu"
            );
            if (ChatbotDanmu.toggleAutoDestory) {
              danmu.destoryDanmu(8400);
            }

            // var loading = new ChatbotLoading();
            // var loading_element = loading.create();
            // document.getElementById(ChatbotDanmu.appframe_debug_display_id).appendChild(loading_element);
            // loading.destory(8400);


            // let rounddanmu = new ChatbotRoundDanmu();
            // rounddanmu.create({
            //   username: username,
            //   message: message
            // });
            // rounddanmu.destory(8400);

            break;
          case "SEND_GIFT":
            let uname = body.data.uname;
            let action = body.data.action;
            let num = body.data.num;
            let giftName = body.data.giftName;
            let face = body.data.face;
            let coinType = body.data.coin_type;
            let price = body.data.price;
            let timeout = 8400;

            ChatbotDebug.log(`${uname} ${action} ${num} 个 ${giftName}`);

            // 判断 礼物类型并计数
            if (coinType == "gold") {
              ChatbotDanmu.updateGiftCountByUsername(uname, num);
            }
            if (coinType == "silver") {
              ChatbotDanmu.updateSilverGiftCountByUsername(uname, num);
            }

            if (ChatbotDanmu.getGiftDanmuDisplay() == true) {
              var gift_danmu = new ChatbotDanmu();
              gift_danmu.createGiftNoticeDanmu(
                uname,
                action,
                num,
                giftName,
                face
              );

              if (coinType == "gold") {
                timeout = 8400 + (price / 100) * 100;
                let timeout_second_2 = (timeout - 400) / 1000;
                let timeout_second_3 = (timeout - 400 - 1000) / 1000;

                let msg = `1s breaktime ease, 0.4s breaktime-2-out ease-in-out ${timeout_second_2}s, 0.8s padding-height-out ease ${timeout_second_2}s;`;
                gift_danmu
                  .getDanmu()
                  .setAttribute("style", "animation: " + msg);

                msg = gift_danmu
                  .getDanmu()
                  .children.item(3)
                  .getAttribute("style");
                reg = new RegExp("7s");
                msg = msg.replace(reg, `${timeout_second_3}s`);
                reg = new RegExp("animation:");
                msg = msg.replace(reg, "");
                gift_danmu
                  .getDanmu()
                  .children.item(3)
                  .setAttribute("style", "animation: " + msg);
              }

              if (coinType == "silver") {
                timeout = 2400;
                let timeout_second_2 = (timeout - 400) / 1000; //3000
                let timeout_second_3 = (timeout - 400 - 1000) / 1000; //2000

                let msg = `1s tab-content-name ease, 0.4s tab-content-name-out ease-in-out ${timeout_second_2}s, 0.8s padding-height-out ease ${timeout_second_2}s`;
                gift_danmu
                  .getDanmu()
                  .setAttribute("style", "animation: " + msg);

                msg = gift_danmu
                  .getDanmu()
                  .children.item(3)
                  .getAttribute("style");
                reg = new RegExp("7s");
                msg = msg.replace(reg, `${timeout_second_3}s`);
                reg = new RegExp("animation:");
                msg = msg.replace(reg, "");
                gift_danmu
                  .getDanmu()
                  .children.item(3)
                  .setAttribute("style", "animation: " + msg);
                // console.log(msg);
                gift_danmu.setDanmuStyle("tab-content");
              }

              gift_danmu.setHashidsWithName("gift");
              gift_danmu.addDanmu(gift_danmu.appframe_giftdisplay);
              ChatbotUtil.playSfx("./audio/snapchat.mp3", "gift");
              gift_danmu.destoryDanmu(timeout);
            }
            break;
          case "WELCOME":
            console.log(`欢迎 ${body.data.uname}`);
            break;
          case "INTERACT_WORD":
            document.getElementsByClassName("app")[0];
            var interactType = body.data.msg_type;

            ChatbotDebug.log(`${body.data.uname} 进入了直播间`);
            // if (interactType != 1) {
            //   console.log(body);
            // }

            // 创建 造访者弹幕消息V3(带显示开关控制)，通过类方法
            switch (interactType) {
              // 访客类型
              case 1:
                if (ChatbotDanmu.getVisitorDanmuDisplay() == true) {
                    let danmu = new ChatbotDanmu();
                    let username = body.data.uname;
                    let profilephoto = body.data.uid;
                
                    danmu.createVisitorDanmuV4(
                      "./img/Animal_Crossing_Leaf_White_01.png", 
                      username
                    );

                    let randomColour = danmu.getRandomColourSchemes();
                    let randomLightColour = randomColour[0];
                    let randomDarkColour = randomColour[1];
                    danmu.setStaticUsernameBackgroundColour(randomLightColour);
                    danmu.setProfilePhotoBackgroundColor(randomLightColour);
                    danmu.setStaticUsernameColour(randomDarkColour);

                    // // 获取并设置 用户头像
                    // // 如果 【用户头像表】存在此用户，设置用户头像
                    // // 如果，不存在，从API通过UID获取用户头像，并设置用户头像和记录到【用户头像表】
                    // if (ChatbotDanmu.isShowUserface) {
                    //   if (
                    //     ChatbotDanmu.getProfilephotoSrcByUsername(username) != false
                    //   ) {
                    //     danmu.setProfilePhoto(
                    //       ChatbotDanmu.getProfilephotoSrcByUsername(username)
                    //     );
                    //   } else {
                    //     let ajaxurl = `https://tenapi.cn/v2/biliinfo?uid=${profilephoto}`;
                    //     ChatbotUtil.doAjaxGetRL(ajaxurl)
                    //       .then((response) => {
                    //         let data = JSON.parse(response);
                    //         if (data.code == 200) {
                    //           let profilePhoto = data.data.avatar;
                    //           if (profilePhoto != null) {
                    //             ChatbotDanmu.updateProfilephotoSrcByUsername(
                    //               username,
                    //               profilePhoto
                    //             );
                    //             danmu.setProfilePhoto(profilePhoto);
                    //           }
                    //         } else if (data.code == 201) {
                    //           if (ChatbotUtil.isAjaxLocked == false) {
                    //             ChatbotUtil.ajaxLock();
                    //             let log = `${ChatbotUtil.getTime()} API获取失败，请求已锁定`;
                    //             log += ` | 解锁时间：${new Date(ChatbotUtil.ajaxUnlockTime
                    //               ).toLocaleString()}`;
                    //             ChatbotDebug.display(log);
                    //             console.log(log);
                    //           }
                    //         }
                    //       },
                    //       (Error) => {
                    //         console.log(Error);
                    //       }
                    //     );
                    //   }
                    // }

                    // 获取并设置 用户头像
                    // 如果 【用户头像表】存在此用户，设置用户头像
                    // 如果，不存在，从API通过UID获取用户头像，并设置用户头像和记录到【用户头像表】
                    if (ChatbotDanmu.isShowUserface) {
                      if (ChatbotDanmu.getProfilephotoSrcByUsername(username) != false) {
                        danmu.setProfilePhoto(
                          ChatbotDanmu.getProfilephotoSrcByUsername(username)
                        );
                      } else {
                        // let ajaxurl = `https://tenapi.cn/v2/biliinfo?uid=${profilephoto}`;
                        let ajaxurl = `https://api.obfs.dev/api/bilibili/v3/user_info?uid=${profilephoto}`;
                        if (ChatbotUtil.ajaxLocker == false) {
                          ChatbotUtil.doAjaxGetRL(ajaxurl).then(
                            (response) => {
                              let data = JSON.parse(response);
                              if (data.code == 200 || data.code == 0) {
                                // let profilePhoto = data.data.avatar;
                                let profilePhoto = data.data.card.face;
                                console.log(profilePhoto);
                                if (profilePhoto != null) {
                                  ChatbotDanmu.updateProfilephotoSrcByUsername(
                                    username,
                                    profilePhoto
                                  );
                                  danmu.setProfilePhoto(profilePhoto);
                                }
                              } else if (data.code == 201) {
                                if (ChatbotUtil.isAjaxLocked == false) {
                                  ChatbotUtil.ajaxLock();
          
                                  let log = `${ChatbotUtil.getTime()} API获取失败，请求已锁定`;
                                  log += ` | 解锁时间：${new Date(
                                      ChatbotUtil.ajaxUnlockTime
                                    ).toLocaleString()}`;
                                  ChatbotDebug.display(log);
                                  console.log(log);
                                }
                              }
                            },
                            (Error) => {
                              console.log(Error);
                            }
                          );
                        }
                      }
                    }
                    
                    danmu.setHashidsWithName("visitor"); //设置带名称的唯一标识 Hashid
                    danmu.addDanmu(danmu.appframe_visitorqueuedisplay);
                    danmu.destoryDanmu(8400);
                }
                break;
              // 关注
              case 2:
                if (ChatbotDanmu.isShowFollow == true) {
                  let username = body.data.uname;
                  let danmu = new ChatbotRoundDanmu();
                  danmu.createToAppFrame({
                    username: "NIKO",
                    message: `${username} 关注了你！`, 
                    appFrame: ChatbotDanmu.appframe_likedisplay_id
                  });
                  ChatbotUtil.playSfx("./audio/mixkit-fairy-bells-583.wav", "follow");
                  danmu.destory(8400);
                }  
                break;
              // 分享直播间
              case 3:
                if (ChatbotDanmu.isShowShare == true) {
                  let username = body.data.uname;
                  let danmu = new ChatbotRoundDanmu();
                  danmu.createToAppFrame({
                    username: "NIKO",
                    message: `${username} 分享了直播间`, 
                    appFrame: ChatbotDanmu.appframe_likedisplay_id
                  });
                  ChatbotUtil.playSfx("./audio/mixkit-fairy-bells-583.wav", "share");
                  danmu.destory(8400);
                }  
                break;
              // 特别关注
              case 4:
                
              break;
              // 互相关注
              case 5:
                
                break;
              default:
                console.log(body);
                break;
            }
            break;
          case "LIKE_INFO_V3_CLICK":
            if (ChatbotDanmu.isShowLikeNotice) {
              var like_uname = body.data.uname;
              var like_text = body.data.like_text;
              body.data.like_icon;

              ChatbotDebug.log(`${like_uname} ${like_text}`);

              // 点赞计数
              ChatbotDanmu.updateLikeCountByUsername(like_uname, 1);

              // 添加一条系统通知 用系统通知方法
              var like_danmu = new ChatbotDanmu();
              like_danmu.createSystemDanmu(like_uname + " 为你点赞啦");
              like_danmu.setDanmuStyle("QA-frame-2-vip");
              like_danmu.addCustomImage(
                like_danmu.username,
                "textToIcon",
                "./img/Niko_Cheering.gif"
              );
              like_danmu.setProfilePhoto("./img/giphy (1).gif");
              like_danmu.setProfilePhotoStyle("profilephoto-3-vip");

              like_danmu.setHashidsWithName("like"); // 设置带标识的Hashid
              like_danmu.addDanmu(like_danmu.appframe_likedisplay); // 添加弹幕到指定应用池
              ChatbotUtil.playSfx("./audio/button hover.mp3", "like");
              like_danmu.destoryDanmu(8400); // 执行销毁弹幕，在8400ms后
            }
            break;
          case "SUPER_CHAT_MESSAGE":
            if(ChatbotDanmu.isShowSuperchat) {
              var super_chat_uname = body.data.user_info.uname;
              var super_chat_msg = body.data.message;
              body.data.user_info.face;
              body.data.price;
              var super_chat_time = body.data.time;

              ChatbotDebug.log(`${super_chat_uname}: ${super_chat_msg}`);

              // 添加一条系统通知 用系统通知方法
              var super_chat_danmu = new ChatbotDanmu();
              super_chat_danmu.createSystemDanmu(
                `${super_chat_uname}: ${super_chat_msg}`
              );
              super_chat_danmu.setHashidsWithName("superchat"); // 设置带标识的Hashid
              super_chat_danmu.addDanmu(); // 添加弹幕到指定应用池
              ChatbotUtil.playSfx("./audio/button hover.mp3", "superchat");
              super_chat_danmu.destoryDanmu(super_chat_time * 1000); // 执行销毁弹幕，在8400ms后
            }
            break;
          case "SUPER_CHAT_MESSAGE_JPN":
            if(ChatbotDanmu.isShowSuperchat) {
              var super_chat_jpn_uname = body.data.user_info.uname;
              var super_chat_jpn_msg = body.data.message;
              body.data.user_info.face;
              body.data.price;
              body.data.time;
  
              // 添加一条系统通知 用系统通知方法
              var super_chat_jpn_danmu = new ChatbotDanmu();
              super_chat_jpn_danmu.createSystemDanmu(
                `${super_chat_jpn_uname}: ${super_chat_jpn_msg}`
              );
              super_chat_jpn_danmu.setHashidsWithName("superchat"); // 设置带标识的Hashid
              super_chat_jpn_danmu.addDanmu(); // 添加弹幕到指定应用池
              ChatbotUtil.playSfx("./audio/button hover.mp3", "superchat");
              super_chat_jpn_danmu.destoryDanmu(super_chat_time * 1000); // 执行销毁弹幕，在8400ms后
            }    
            break;
          case "ENTRY_EFFECT":
            if(ChatbotDanmu.isShowEntry) {
              var entry_msg = body.data.copy_writing;
              var reg = new RegExp("<%");
              entry_msg = entry_msg.replace(reg, "");
              reg = new RegExp("%>");
              entry_msg = entry_msg.replace(reg, "");
              body.data.face;

              ChatbotDebug.log(entry_msg);

              // 添加一条系统通知 用系统通知方法
              var entry_danmu = new ChatbotDanmu();
              entry_danmu.createSystemDanmu(entry_msg);
              entry_danmu.setProfilePhoto("./img/AS001112_01.gif");
              entry_danmu.setProfilePhotoStyle("profilephoto-3-vip");
              entry_danmu.setHashidsWithName("entry"); // 设置带标识的Hashid
              entry_danmu.addDanmu(); // 添加弹幕到指定应用池
              ChatbotUtil.playSfx("./audio/instagram.m4a", "entry");
              entry_danmu.destoryDanmu(8400); // 执行销毁弹幕，在8400ms后
            }
            break;
          case "ONLINE_RANK_V2":
            console.log(body);
            if (ChatbotDanmu.isShowTop3Rank) {
              let data = body.data;
              let list = data.list;
              let map = ChatbotDanmu.top3rank_username_map;

              switch (list.length) {
                case 1:
                  if (!map.has("1")) {
                    map.set("1", "None");
                  }
                  map.set("1", list[0]["uname"]);
                  break;
                case 2:
                  if (!map.has("1")) {
                    map.set("1", "None");
                  }
                  if (!map.has("2")) {
                    map.set("2", "None");
                  }
                  map.set("1", list[0]["uname"]);
                  map.set("2", list[1]["uname"]);
                  break;
                case 3:
                  if (!map.has("1")) {
                    map.set("1", "None");
                  }
                  if (!map.has("2")) {
                    map.set("2", "None");
                  }
                  if (!map.has("3")) {
                    map.set("3", "None");
                  }
                  map.set("1", list[0]["uname"]);
                  map.set("2", list[1]["uname"]);
                  map.set("3", list[2]["uname"]);
                  break;
              }

            }
            break;
          // 此处省略很多其他通知类型
          default:
            console.log(body);
        }
      });
      break;
    default:
      console.log(packet);
  }
};
