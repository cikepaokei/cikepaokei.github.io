export class ChatbotData {

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
