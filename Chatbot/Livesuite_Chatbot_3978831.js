/*
 * @Author: Cikepaokei
 * @Date: 2020-05-15 20:06:16
 * @LastEditTime: 2022-08-21 01:48:22
 * @LastEditors: Cikepaokei
 * @Description: In User Settings Edit
 * @FilePath: \live\live - 220621.js
 */

class ChatbotDanmu {
  danmu;
  username;
  message;
  profilephoto;
  danmu_style    = "bar-3";
  username_style = "name-3";
  message_style  = "msg-3";
  profilephoto_style = "profilephoto-3";
  time_id;
  hash_id;
  static count   = 0;
  static username_colour_map = new Map();
  static username_bgcolour_map = new Map();
  static username_danmucount_map = new Map();
  static username_giftcount_map = new Map(); // Gold gift
  static username_silvergiftcount_map = new Map();
  static username_profilephoto_map = new Map();
  username_text;
  static isShowVisitorDanmu = true;
  static isShowGiftDanmu = true;
  static isShowLikeNotice = true;
  // Chat Bot 应用池定义
  appframe;
  appframe_giftdisplay;
  static appframe_giftdisplay_id = "cb-app-gift-display";
  appframe_visitorqueuedisplay;
  static appframe_visitorqueuedisplay_id = "cb-app-visitor-queue-display";

  constructor() {
    // 样式一
    this.danmu = document.createElement("div");
    this.username = document.createElement("span");
    this.message = document.createElement("span");
    this.profilephoto = document.createElement("img")

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

  }

  // 设置 Hashids（为消息赋予唯一标识） e.g. XYo1B401y
  setHashids() {
    const hashids = new Hashids.default("chotbot", 8);
    hashids.min_length = 7;
    this.time_id = hashids.encode(new Date().valueOf() + ChatbotDanmu.count);  // Hashids时间戳
    this.hash_id = this.time_id;
    this.danmu.setAttribute("id", this.hash_id);
    ChatbotDanmu.count++;  // 消息计数，为时间戳加入值，避免Hashids不唯一
    console.log(ChatbotDanmu.count);  // 调试 输出消息计数
  }

  // 设置 带名称的Hashids（为消息赋予唯一标识） e.g. cb-msg-XYo1B401y  msg is a name.
  setHashidsWithName(name) {
    const hashids = new Hashids.default("chotbot", 8);
    hashids.min_length = 7;
    this.time_id = hashids.encode(new Date().valueOf() + ChatbotDanmu.count);  // Hashids时间戳
    this.hash_id = "cb-" + name + "-" + this.time_id;
    this.danmu.setAttribute("id", this.hash_id);
    ChatbotDanmu.count++;  // 消息计数，为时间戳加入值，避免Hashids不唯一
    console.log(ChatbotDanmu.count);  // 调试 输出消息计数
  }

  // 创建 消息通用弹幕
  createDanmu() {
    switch (arguments.length) {
      case 1:
        break;
      case 2:
        var username_text = document.createTextNode(arguments[0]);
        // var message_text  = document.createTextNode(`: ${arguments[1]}`);
        var message_text  = document.createTextNode(`${arguments[1]}`);
        this.username_text = username_text;

        // arguments[1].replace("", " ");
        this.username.appendChild(username_text);
        this.message.appendChild(message_text);

        return 1;
        break;
      case 3:
      var username_text = document.createTextNode(arguments[0]);
      // var message_text  = document.createTextNode(`: ${arguments[1]}`);
      var message_text  = document.createTextNode(`${arguments[1]}`);
      this.username_text = username_text;
      this.profilephoto.setAttribute("src", arguments[2])

      // arguments[1].replace("", " ");
      this.username.appendChild(username_text);
      this.message.appendChild(message_text);

      return 1;
      break;
      default:
        return 0;
        break;
    }
  }

  // 创建 系统通知弹幕
  createSystemDanmu(message) {
    var title = "小助手 ";
    var title_text, message_text;
    // var danmu_style_class = "QA-frame",
    //     title_style_class = "QA-title",
    //     message_style_class = "QA-question";
    var danmu_style_class = "QA-frame-2",
        title_style_class = "QA-title-2",
        message_style_class = "QA-question-2";

    title_text   = document.createTextNode(title);
    message_text = document.createTextNode(`: ${message}`);

    this.username.appendChild(title_text); // 添加文字节点
    this.message.appendChild(message_text); // 添加文字节点

    this.danmu.setAttribute("class", danmu_style_class);
    this.username.setAttribute("class", title_style_class);
    this.message.setAttribute("class", message_style_class);
  }

  // 创建 造访者弹幕信息
  createVisitorDanmu(message) {
    var visitor_style_class = "visitor-2",  // 造访者弹幕样式
        visitorname_style_class = "visitor-name-2",
        visitorcontent_style_class = "visitor-content-2";  // 造访者名字样式
    // var visitor = document.createElement("div"),
    //     visitorname = document.createElement("span");
    // var visitor = document.createElement("div"),
    //     visitorname = document.createElement("div");
    var visitor = document.createElement("div"),
        visitorname = document.createElement("div"),
        visitorcontent = document.createElement("div");
    var visitorname_text = document.createTextNode("WELCOME VISITOR");
    var visitorcontent_text = document.createTextNode(message);

    visitorname.appendChild(visitorname_text); // 添加文字
    visitorcontent.appendChild(visitorcontent_text);
    visitor.appendChild(visitorname);
    visitor.appendChild(visitorcontent);
    visitor.setAttribute("class", visitor_style_class);
    visitorname.setAttribute("class", visitorname_style_class);
    visitorcontent.setAttribute("class", visitorcontent_style_class);

    // var svg = document.createElement("svg");
    // var bg = document.createElement("path");

    // svg.setAttribute("width", "100%");
    // svg.setAttribute("height", "100%");
    // svg.setAttribute("style", "");
    // bg.setAttribute("class", "visitor-bg");
    // svg.appendChild(bg);

    return (this.danmu = visitor);
    // return (this.danmu = svg);
  }

  // 创建 造访者弹幕信息 V2
  createVisitorDanmuV2(message) {
    var visitor_style_class = "visitor-christmas",  // 造访者弹幕样式
        visitorname_style_class = "visitor-name-christmas",
        visitorcontent_style_class = "visitor-content-christmas";  // 造访者名字样式
    // var visitor = document.createElement("div"),
    //     visitorname = document.createElement("span");
    // var visitor = document.createElement("div"),
    //     visitorname = document.createElement("div");
    var visitor = document.createElement("div"),
        visitorname = document.createElement("div"),
        visitorcontent = document.createElement("div");
    var visitorname_text = document.createTextNode("WELCOME VISITOR");
    var visitorcontent_text = document.createTextNode(message);

    visitorname.appendChild(visitorname_text); // 添加文字
    visitorcontent.appendChild(visitorcontent_text);
    visitor.appendChild(visitorname);
    visitor.appendChild(visitorcontent);
    visitor.setAttribute("class", visitor_style_class);
    visitorname.setAttribute("class", visitorname_style_class);
    visitorcontent.setAttribute("class", visitorcontent_style_class);

    // var svg = document.createElement("svg");
    // var bg = document.createElement("path");

    // svg.setAttribute("width", "100%");
    // svg.setAttribute("height", "100%");
    // svg.setAttribute("style", "");
    // bg.setAttribute("class", "visitor-bg");
    // svg.appendChild(bg);

    return (this.danmu = visitor);
    // return (this.danmu = svg);
  }

  // 创建 造访者弹幕信息 V3
  createVisitorDanmuV3(imgsrc) {
    var visitor_style_class = "visitor-queue-display-profile";  // 造访者弹幕样式

    var visitor = document.createElement("img");

    visitor.setAttribute("class", visitor_style_class);
    visitor.setAttribute("src", imgsrc);
    this.profilephoto = visitor;

    return (this.danmu = visitor);
  }

  // 创建 获得成就弹幕
  createAchievementDanmu() {
    switch (arguments.length) {
      case 2:
        var title = arguments[0];
        var message = arguments[1];
        var title_text, message_text;
        var danmu_style_class = "QA-frame",
            title_style_class = "QA-title",
            message_style_class = "QA-question";

        title_text   = document.createTextNode(title);
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
        img.setAttribute("src", "./Badge.png");

        this.danmu.insertBefore(img, this.username);
        break;
      case 3:
        var title = arguments[0];
        var message = arguments[1];
        var imgurl = arguments[2];
        var title_text, message_text;
        var danmu_style_class = "QA-frame",
            title_style_class = "QA-title",
            message_style_class = "QA-question";

        title_text   = document.createTextNode(title);
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
        break;
    }
    

  }

  // 创建 测试消息通用弹幕
  createTestDanmu() {
      var username_text = document.createTextNode("USERNAME");
      var message_text  = document.createTextNode(`: “Be yourself; everyone else is already taken.” ― Oscar Wilde`);
      this.username_text = username_text;

      // arguments[1].replace("", " ");
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

    var string =
      "part-Red-x5.png, part-Orange-x5.png, part-Yellow-x5.png, part-Green-x5.png, part-Jade-x5.png, part-Blue-x5.png, part-Eggplant-x5.png"; //原始数据
    var array = string.split(","); //转化为数组
    var value = array[Math.round(Math.random() * (array.length - 1))]; //随机抽取一个值

    var bar = document.createElement("div");     // 创建 收到礼物弹幕框
    var name = document.createElement("span");   // 创建 收到礼物用户名
    var icon = document.createElement("span");   // 创建 头像图片框
    var iconImg = document.createElement("img"); // 创建 头像图片
    var nameText = document.createTextNode(      // 创建 收到礼物提醒 文字节点
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
      iconImg.setAttribute("src", "gift-icon.png");
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
    // iconImg2.setAttribute("style", "position: relative");
    msg.appendChild(iconImg2);

    // var textToImg = document.createElement("img");
    // textToImg.setAttribute("src", "GreedyGloriousDuck-max-1mb.gif");
    // textToImg.setAttribute("class", "textToImg");
    // msg.appendChild(textToImg);
    bar.appendChild(msg);

    // var app = document.querySelector("#cb-app-gift-display");
    // app.insertBefore(bar, app.childNodes[0]);
    return (this.danmu = bar)
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
      case 0:
        var appframe = this.appframe
        try {
          appframe.insertBefore(this.danmu, appframe.childNodes[0]);
        } catch (e) {
          console.error(e.message);
          return 0;
        }
        break;
      case 1:
        var appframe = arguments[0]
        try {
          appframe.insertBefore(this.danmu, appframe.childNodes[0]);
        } catch (e) {
          console.error(e.message);
          return 0;
        }
        // return 1;
        break;
      default:
        break;
    }

    
  }

  setDanmuStyle() {}

  setUsernameStyle() {}

  setMessageStyle() {}

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

    // console.log(`颜色索引：${Math.floor(Math.random() * (max - min)) + min}`);
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

    // console.log(`颜色索引：${Math.floor(Math.random() * (max - min)) + min}`);
    value = colour[Math.floor(Math.random() * (max - min)) + min]; //不含最大值，含最小值

    return value;
  }

  // 随机生成十六进制配色方案
  getRandomColourSchemes () {
    var colour = [
      ["#00A54A", "#d2d3d2"],
      ["#FFDF4A", "#9d1200"],
      ["#26b9b3", "#e0e7ed"],
      ["#a22b10", "#e0be6c"],
      ["#5663D3", "#d2d3d2"],
      ["#d57c2a", "#82000a"],
      ["#ef3e79", "#ffffff"],
    ];
    var value;
    var min = Math.ceil(0); // 数组的最小索引
    var max = Math.floor(colour.length); // 数组的最大索引，不含最大值所以加一

    // console.log(`颜色索引：${Math.floor(Math.random() * (max - min)) + min}`);
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
    if (ChatbotDanmu.username_colour_map.has(this.username_text.textContent) != 1) {
      ChatbotDanmu.username_colour_map.set(this.username_text.textContent, colour);
      this.username.style.color = colour;
      return colour;
    }else{
      this.username.style.color = ChatbotDanmu.username_colour_map.get(this.username_text.textContent);
    }
    
  }

  // 设置 用户名字背景颜色（记录用户名字、随机颜色代码。以分配固定颜色）
  setStaticUsernameBackgroundColour(colour) {  
    if (ChatbotDanmu.username_bgcolour_map.has(this.username_text.textContent) != 1) {
      ChatbotDanmu.username_bgcolour_map.set(this.username_text.textContent, colour);
      this.username.style.backgroundColor = colour;
      return colour;
    }else{
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
      fanbadge.setAttribute("src", "Nycan_Cat.gif");
      bar.appendChild(fan);

      // var fan = document.createElement("span");
      // fan.setAttribute("class", "fan");
      // var fanText = document.createTextNode(`粉丝团`);
      // fan.appendChild(fanText);
      // bar.appendChild(fan);
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
          imageurl = data[i].imageUrl,  // 图片地址
          imagestyle = data[i].imageStyle;  // 图片样式
          // console.log(name + "" + imageurl);

          // 检查 图片地址是否存在，不存在赋予默认图片
          if (imageurl == "" || imageurl == "#" ) {
            imageurl = config.defaultImage;
          }

          // 检查 图片样式是否存在，不存在赋予默认样式
          if (imagestyle == "" || imagestyle == "#" ) {
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
    this.danmu          = null;
    this.username       = null;
    this.message        = null;
    this.danmu_style    = null;
    this.username_style = null;
    this.message_style  = null;

    // 元素定义
    this.danmu      = document.createElement("div");
    this.username   = document.createElement("span");
    this.message    = document.createElement("span");
    var danmutop    = document.createElement("div"),
        danmubottom = document.createElement("div");
    // 样式定义
    this.danmu_style      = "bar-3";
    this.username_style   = "name-3";
    this.message_style    = "msg-3";
    var danmutop_style    = "chatbot-bar-top",
        danmubottom_style = "chatbot-bar-bottom";


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
        var message_text  = document.createTextNode(`: ${arguments[1]}`);
        this.username_text = username_text;

        this.username.appendChild(username_text);
        this.message.appendChild(message_text);

        return 1;
        break;
      default:
        return 0;
        break;
    }
  }

  static getVisitorDanmuDisplay() {
    return this.isShowVisitorDanmu
  }

  static toggleVisitorDanmuDisplay() {
    if(this.isShowVisitorDanmu == true) {
      this.isShowVisitorDanmu = false
      console.log("🔴已禁用 造访者显示")

    }else{
      this.isShowVisitorDanmu = true
      console.log("🟢已启用 造访者显示")
    }

  }

  static getGiftDanmuDisplay() {
    return this.isShowGiftDanmu
  }

  static getLikeNoticeDisplay() {
    return this.isShowLikeNotice
  }

  static toggleGiftDanmuDisplay() {
    if(this.isShowGiftDanmu == true) {
      this.isShowGiftDanmu = false
      console.log("🔴已禁用 礼物显示")

    }else{
      this.isShowGiftDanmu = true
      console.log("🟢已启用 礼物显示")
    }

  }

  updateDanmuCount() {
    if (ChatbotDanmu.username_danmucount_map.has(this.username_text.textContent) != 1) {
      ChatbotDanmu.username_danmucount_map.set(this.username_text.textContent, 1);
      return 1;

    }else{
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

    }else{
      let count = ChatbotDanmu.username_giftcount_map.get(username);
      let new_count = count + num;
      ChatbotDanmu.username_giftcount_map.set(username, new_count);
      return new_count;

    }
  }

  static getGiftCountByUsername(username) {
    var num = ChatbotDanmu.username_giftcount_map.has(username);
    if(num != 1) {
      return 0;
    }else{
      return num;
    }
  }

  static updateSilverGiftCountByUsername(username, num) {
    if (ChatbotDanmu.username_silvergiftcount_map.has(username) != 1) {
      ChatbotDanmu.username_silvergiftcount_map.set(username, num);
      return num;

    }else{
      let count = ChatbotDanmu.username_silvergiftcount_map.get(username);
      let new_count = count + num;
      ChatbotDanmu.username_silvergiftcount_map.set(username, new_count);
      return new_count;

    }
  }

  static getSilverGiftCountByUsername(username) {
    var num = ChatbotDanmu.username_silvergiftcount_map.has(username);
    if(num != 1) {
      return 0;
    }else{
      return num;
    }
  }

  setProfilePhoto(src) {
    this.profilephoto.setAttribute("src", src);

  }

  setProfilePhotoBackgroundColor(colorcode) {
    this.profilephoto.style.backgroundColor = colorcode;

  }

  static updateProfilephotoSrcByUsername(username, src) {
      ChatbotDanmu.username_profilephoto_map.set(username, src);
      
  }

  static getProfilephotoSrcByUsername(username) {
    var src = ChatbotDanmu.username_profilephoto_map.has(username);
    if(src == true) {
      return ChatbotDanmu.username_profilephoto_map.get(username);

    }else{
      return false;
    }
  }

}

class ChatbotUtil {

  constructor() {

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
    
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log("Ajax Successed!");

        return xmlhttp.responseText;
      }
    }
    // 地址为 url加时间戳 防止加载缓存数据  e.g. url?t=
      // xmlhttp.open("GET", `${url}?t=${new Date().getTime()}`);
      xmlhttp.open("GET", `${url}`, true);
      xmlhttp.send();

  }

  static playSfx(src) {
    switch (arguments.length) {
      case 1:
        var player = document.getElementById("sfx");
        player.setAttribute("src", src);
        break;
      case 2:
        var src = arguments[0];
        var channel = arguments[1];

        if(document.querySelector(`#sfx-${channel}`) == undefined) {
          var body = document.getElementsByTagName("body")[0];
          var audio = document.createElement("audio");
          audio.setAttribute("id", `sfx-${channel}`);
          audio.setAttribute("src", src);
          audio.setAttribute("autoplay", "autoplay");
          body.appendChild(audio);
          break;
        }

        var audio = document.querySelector(`#sfx-${channel}`);
        audio.setAttribute("src", src);
        break;
      default:
        break;
    }

  }




}

class ChatbotData {

  constructor() {

  }

  static getSpecialImageWithText() {
    var data = `{
      "model": "CB-ChatbotDanmu-SpecialImageByText",
      "type": "data",
      "version": "1.0",
      "author": "cikepaokei",
      "created": "20200823",
      "description": "",
      "config": {
          "defaultImage": "./extend_icon_default.png",
          "defaultImageStyle": "textToImg"
      },
      "data": [
          {
              "name": "晚上好",
              "imageUrl": "./donut.gif",
              "imageStyle": "",
              "danmuStyle": ""
          },
          {
              "name": "下午好",
              "imageUrl": "./giphy.gif",
              "imageStyle": "",
              "danmuStyle": ""
          },
          {
              "name": "新年好",
              "imageUrl": "./NY2020-200px.png",
              "imageStyle": "",
              "danmuStyle": ""
          },
          {
              "name": "哔哩哔哩",
              "imageUrl": "./bilibili.jpg",
              "imageStyle": "textToImg",
              "danmuStyle": ""
          },
          {
              "name": ":RED",
              "imageUrl": "./part-Red-x5.png",
              "imageStyle": "textToIcon",
              "danmuStyle": ""
          },
          {
              "name": ":ORANGE",
              "imageUrl": "./part-Orange-x5.png",
              "imageStyle": "textToIcon",
              "danmuStyle": ""
          },
          {
              "name": ":YELLOW",
              "imageUrl": "./part-Yellow-x5.png",
              "imageStyle": "textToIcon",
              "danmuStyle": ""
          },
          {
              "name": ":GREEN",
              "imageUrl": "./part-Green-x5.png",
              "imageStyle": "textToIcon",
              "danmuStyle": ""
          },
          {
              "name": ":JADE",
              "imageUrl": "./part-Jade-x5.png",
              "imageStyle": "textToIcon",
              "danmuStyle": ""
          },
          {
              "name": ":EGGPLANT",
              "imageUrl": "./part-Eggplant-x5.png",
              "imageStyle": "textToIcon",
              "danmuStyle": ""
          },
          {
              "name": ":BLUE",
              "imageUrl": "./part-Blue-x5.png",
              "imageStyle": "textToIcon",
              "danmuStyle": ""
          },
          {
            "name": ":BADGE",
            "imageUrl": "./Badge.png",
            "imageStyle": "textToIcon",
            "danmuStyle": ""
          },
          {
            "name": "哈",
            "imageUrl": "./lol.gif",
            "imageStyle": "textToEmoji",
            "danmuStyle": ""
          },
          {
            "name": "赞",
            "imageUrl": "./small_2022022220818175.gif",
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
          "defaultImage": "./extend_icon_default.png",
          "defaultImageStyle": "textToImg"
      },
      "data": [
          {
            "danmu_count": "2",
            "archievement": "一字千金",
            "description": "开播期间发送2条弹幕",
            "imageUrl": "1362-melting-cat.png"
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


}

class ChatbotBreakTime {

  constructor() {

  }

  createBreaktime() {}


}

class ChatbotTopToolbar {
  id = "toptoolbar";
  toptoolbar;
  icon;
  panel;
  toptoolbar_style_class = "toolbar";
  icon_style_class       = "toolbar-icon";
  icon_image_style_class = "toolbar-icon-img";
  panel_style_class      = "toolbar-panel";

  constructor() {
    
  }

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

  setCustomIcon() {}

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


class ChatbotGiftNotice extends ChatbotDanmu {

}








const textEncoder = new TextEncoder('utf-8');
const textDecoder = new TextDecoder('utf-8');

const readInt = function(buffer,start,len){
  let result = 0
  for(let i=len - 1;i >= 0;i--){
    result += Math.pow(256,len - i - 1) * buffer[start + i]
  }
  return result
}

const writeInt = function(buffer,start,len,value){
  let i=0
  while(i<len){
    buffer[start + i] = value/Math.pow(256,len - i - 1)
    i++
  }
}

const encode = function(str,op){
  let data = textEncoder.encode(str);
  let packetLen = 16 + data.byteLength;
  let header = [0,0,0,0,0,16,0,1,0,0,0,op,0,0,0,1]
  writeInt(header,0,4,packetLen)
  return (new Uint8Array(header.concat(...data))).buffer
}
const decode = function(blob){
  return new Promise(function(resolve, reject) {
    let reader = new FileReader();
    reader.onload = function (e){
      let buffer = new Uint8Array(e.target.result)
      let result = {}
      result.packetLen = readInt(buffer,0,4)
      result.headerLen = readInt(buffer,4,2)
      result.ver = readInt(buffer,6,2)
      result.op = readInt(buffer,8,4)
      result.seq = readInt(buffer,12,4)
      if(result.op === 5){
        result.body = []
        let offset = 0;
        while(offset < buffer.length){
          let packetLen = readInt(buffer,offset + 0,4)
          let headerLen = 16// readInt(buffer,offset + 4,4)
          let data = buffer.slice(offset + headerLen, offset + packetLen);

          let body = textDecoder.decode(pako.inflate(data));

          let indexArrayA = [];
          let indexArrayB = [];
          let indexArrayC = [];
          let indexArrayD = [];
          let indexArrayE = [];

          // 分割 JSON 消息 获得 “{”和“}”的序列和索引
          for (let i = 0; i < body.length; i++) {
            if (body.charAt(i) == "{")
            {
              indexArrayA.push(i); 
              indexArrayC.push(0);
              indexArrayD.push(i);
              
            }

            if (body.charAt(i) == "}")
            {
              indexArrayB.push(i+1);
              indexArrayC.push(1);
              indexArrayD.push(i+1);
            }
            
          }

          // 找出 各个消息的开头和结尾索引
          let count_0 = 0;
          let count_1 = 0;
          let temp_0 = [];
          let before = 1;
          let after = 0;
          for (let i = 0; i < indexArrayC.length; i++) {
            if (indexArrayC[i] == 0)
            {
              if (before == 1) 
              {
                if (count_0 == count_1)
                {
                  indexArrayE.push(indexArrayD[i]);
                }
                
              }
              count_0 += 1;
                 
              before = 0;
            }

            if (indexArrayC[i] == 1)
            {
              count_1 += 1;
              if (i == (indexArrayC.length - 1))
              {
                if (count_0 == count_1)
                {
                  indexArrayE.push(indexArrayD[i]);
                  count_0 = count_1 = 0;

                }  
              }else{
                if (indexArrayC[i+1] == 0)
                {
                  if (count_0 == count_1)
                  {
                    indexArrayE.push(indexArrayD[i]);
                    count_0 = count_1 = 0;
                  }
                
                }
              }
              before = 1;
            }
            
          }

          var jsonArray = [];
          for (let i = 0; i < indexArrayE.length; i+=2) 
          {
              jsonArray.push(body.substring(indexArrayE[i], indexArrayE[i+1]));
            
          }


          // console.log(body.length);
          // console.log(indexArrayA);
          // console.log(indexArrayB);
          // console.log(indexArrayC);
          // console.log(indexArrayD);
          // console.log(indexArrayE);
          // console.log(jsonArray);
          // console.log(jsonString);
          // console.log(body.charAt(indexArrayE[indexArrayE.length - 1]));
              
          if (body) {
            for (let i = 0; i < jsonArray.length; i++) {
              result.body.push(JSON.parse(jsonArray[i].toString()));
            }
          }

          offset += packetLen;
        }
      }else if(result.op === 3){
        result.body = {
          count: readInt(buffer,16,4)
        };
      }
      resolve(result)
    }
    reader.readAsArrayBuffer(blob);
  });
}

const ws = new WebSocket('wss://broadcastlv.chat.bilibili.com:2245/sub');
const roomid = 3978831;

ws.onopen = function () {
  ws.send(encode(JSON.stringify({
"roomid": roomid
  }), 7));
};
// 如果使用的是控制台，这两句一定要一起执行，否侧onopen不会被触发

setInterval(function () {
  ws.send(encode('', 2));
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
      document.write(`<title>Chatbot</title>`);
      document.write(
        `<link rel="stylesheet" href="./bar-animalcrossing-v1.css?v=${Date.now()}">`
      );
      document.write(`</head>`);
      document.write(`<body></body>`);
      // document.write(`<script>document.body.parentNode.style.overflow = "hidden";</script>`);


      // 添加breaktime js
      var head = document.getElementsByTagName("head")[0];
      var breaktime_js = document.createElement("script");
      breaktime_js.setAttribute("src", `./breaktime.js?v=${Date.now()}`);
      head.appendChild(breaktime_js);

      var body = document.getElementsByTagName("body")[0];

      // 添加工具栏
      var toptoolbar = new ChatbotTopToolbar();
      toptoolbar.createTopToolbar(3);
      toptoolbar.setIcon(0, "star.gif", "breakTime()");
      toptoolbar.setIcon(1, "part-Slice 5-10x.png", "ChatbotDanmu.toggleVisitorDanmuDisplay()");
      toptoolbar.setIcon(2, "part-Slice 5-10x.png", "ChatbotDanmu.toggleGiftDanmuDisplay()");
      toptoolbar.addTopToolbar(body);


      // 添加人气显示框
      // var countBar = document.createElement("div");
      // countBar.setAttribute("id", "countBar");
      // countBar.setAttribute("class", "bar-2");
      // body.appendChild(countBar);

      //添加Chat bot应用框(应用池)
      var app = document.createElement("div");
      app.setAttribute("class", "app");
      body.appendChild(app);

      //添加Chat bot应用(礼物显示应用)
      var app_gift_display = document.createElement("div");
      app_gift_display.setAttribute("id", ChatbotDanmu.appframe_giftdisplay_id);
      app.appendChild(app_gift_display);

      //添加Chat bot应用(造访者队列显示应用)
      var app_visitor_queue_display = document.createElement("div");
      app_visitor_queue_display.setAttribute("id", ChatbotDanmu.appframe_visitorqueuedisplay_id);
      app.appendChild(app_visitor_queue_display);

      //添加弹幕框
      var mainpage = document.createElement("div");
      mainpage.setAttribute("id", "mainpage");
      body.appendChild(mainpage);

      var audio = document.createElement("audio");
      audio.setAttribute("id", "sfx");
      audio.setAttribute("src", "#");
      audio.setAttribute("autoplay", "autoplay");
      body.appendChild(audio);

      // 添加一条系统通知
      // var system_message = new ChatbotDanmu();
      
      // system_message.createDanmu("Infomation", "Current version: V20200730");
      // system_message.setHashids();
      // system_message.addDanmu(mainpage);
      // system_message.destoryDanmu(8400);

      // 添加一条系统通知 用系统通知方法
      var system_message_new = new ChatbotDanmu();
      system_message_new.createSystemDanmu("当前版本: V20221222");
      // system_message_new.setHashids();  // 不带标识的Hashid
      system_message_new.setHashidsWithName("sysmsg");  // 设置带标识的Hashid
      system_message_new.addDanmu(mainpage);  // 添加弹幕到指定应用池
      system_message_new.destoryDanmu(8400);  // 执行销毁弹幕，在8400ms后

      // 添加一条系统通知 用系统通知方法
      var system_message_roomid = new ChatbotDanmu();
      system_message_roomid.createSystemDanmu(`房间号: ${roomid}`);
      // system_message_new.setHashids();  // 不带标识的Hashid
      system_message_roomid.setHashidsWithName("sysmsg");  // 设置带标识的Hashid
      system_message_roomid.addDanmu(mainpage);  // 添加弹幕到指定应用池
      system_message_roomid.destoryDanmu(8400);  // 执行销毁弹幕，在8400ms后

      

      break;
    case 3:
      const count = packet.body.count;

      //添加人气显示数据
      // var countSpan = document.createElement("span");
      // var countBar = document.getElementById("countBar");
      // countSpan.setAttribute("class", "lv");
      // countSpan.innerHTML = "人气：" + count;
      // countBar.appendChild(countSpan);

      console.log(`人气：${count}`);
      break;
    case 5:
      packet.body.forEach((body) => {
        switch (body.cmd) {
          case "DANMU_MSG":
            var time = new Date();
            console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${body.info[2][1]}: ${body.info[1]}`);

            // 粉丝勋章检测
            // if (body.info[3][1] == "跑尅") {
            //   var fan = document.createElement("img");
            //   fan.setAttribute("class", "fanImg");
            //   fan.setAttribute("src", "Nycan_Cat.gif");
            //   bar.appendChild(fan);

            //   // var fan = document.createElement("span");
            //   // fan.setAttribute("class", "fan");
            //   // var fanText = document.createTextNode(`粉丝团`);
            //   // fan.appendChild(fanText);
            //   // bar.appendChild(fan);
            // }

            var str = body.info[1];
            // console.log(str.indexOf("！") != -1);
            var mainpage = document.getElementById("mainpage");
            
            
            
            var username = body.info[2][1],
                message  = body.info[1];
            var fanbadge = body.info[3][1];
            var danmu = new ChatbotDanmu();
            var uid = body.info[2][0];
            var profilephoto = body.info[2][0];

            // var face = ChatbotUtil.doAjaxGet(`https://api.bilibili.com/x/space/acc/info?mid=${uid}`);

            danmu.createDanmu(username, message, "Animal_Crossing_Leaf_White_01.png");

            // 设置 用户头像图片（Ajax获取，并记录地址，下次遇到相同的用户直接从Map中获取地址，减少API请求
            var xmlhttp = new XMLHttpRequest();
            var ajaxsrc = `https://tenapi.cn/bilibili/?uid=${profilephoto}`;
            xmlhttp.onreadystatechange = function() {
              if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                // console.log("Ajax Successed!");
                // console.log(xmlhttp.responseText);
                let data = JSON.parse(xmlhttp.responseText);
                if (data.data.avatar != null) {
                  ChatbotDanmu.updateProfilephotoSrcByUsername(username, data.data.avatar);
                  danmu.setProfilePhoto(data.data.avatar);
                }
              }
            }

            if (ChatbotDanmu.getProfilephotoSrcByUsername(username) != false) {
              danmu.setProfilePhoto(ChatbotDanmu.getProfilephotoSrcByUsername(username));
              
            }else{
              xmlhttp.open("GET", ajaxsrc, true);
              // console.log(ajaxsrc);
              xmlhttp.send();
            }
            

            // danmu.setUserLevel(body.info[4][0]);  // 设置用户等级显示
            // danmu.setHashids();  //设置唯一标识 Hashid
            danmu.setHashidsWithName("danmumsg");  //设置带名称的唯一标识 Hashid
            // danmu.setUsernameColour(danmu.getRandomColour()); 
            // 设定 用户静态颜色，通过指定颜色。（这里给定的颜色是通过随机颜色方法生成的）
            // 分配用户随机颜色。如果未分配，分配随机颜色，并发送弹幕提醒；如已分配，设置记录的颜色，不提醒。
            // var staticUsernameColour = danmu.setStaticUsernameColour(danmu.getRandomColour());

            // var randomColour = danmu.getRandomColour2();
            // var staticUsernameColour = danmu.setStaticUsernameBackgroundColour(randomColour);
            // var staticUserProfilePhotoColour = danmu.setProfilePhotoBackgroundColor(randomColour);
            var randomColour = danmu.getRandomColourSchemes();
            var randomLightColour = randomColour[0];
            var randomDarkColour = randomColour[1];
            var staticUsernameColour = danmu.setStaticUsernameBackgroundColour(randomLightColour);
            var staticUserProfilePhotoColour = danmu.setProfilePhotoBackgroundColor(randomLightColour);
            danmu.setStaticUsernameColour(randomDarkColour);
            
            // if(staticUsernameColour != undefined) {
            //   // 添加一条系统通知 用系统通知方法
            //   let system_message_roomid = new ChatbotDanmu();
            //   system_message_roomid.createSystemDanmu(`今天你获得的颜色是`);
            //   system_message_roomid.setHashidsWithName("sysmsg");
            //   system_message_roomid.addColourCircleByHexcode(staticUsernameColour);
            //   system_message_roomid.addDanmu(mainpage); 
            //   system_message_roomid.destoryDanmu(8400);
              
            //   ChatbotUtil.playSfx("instagram.m4a");

            //   // console.log(ChatbotDanmu.username_colour_map);
            // } 

            // 用户弹幕计数星标系统
            var userdanmucount = danmu.updateDanmuCount();
            if(userdanmucount >= 5 && userdanmucount < 10) {
              // danmu.addCustomImage(danmu.username, "badge-icon", "Badge.png");
              danmu.addCustomImage(danmu.username, "badge-icon", "Animal_Crossing_Leaf_5.png");
            }else if(userdanmucount >= 10 && userdanmucount < 20) {
              danmu.addCustomImage(danmu.username, "badge-icon", "Animal_Crossing_Leaf_10.png");
            }else if(userdanmucount >= 20 && userdanmucount < 50) {
              danmu.addCustomImage(danmu.username, "badge-icon", "Animal_Crossing_Leaf_20.png");
            }else if(userdanmucount >= 50 && userdanmucount < 100) {
              danmu.addCustomImage(danmu.username, "badge-icon", "Animal_Crossing_Leaf_50.png");
            }else if(userdanmucount >= 100) {
              danmu.addCustomImage(danmu.username, "badge-icon", "Animal_Crossing_Leaf_100_Plus.png");
            }
            // 用户弹幕计数成就系统
            // switch (userdanmucount) {
            //   case 2:
            //     // 添加一条获得成就通知 用获得成就通知方法
            //     let m1 = new ChatbotDanmu();
            //     m1.createAchievementDanmu("获得成就：一字千金", "开播期间发送2条弹幕", "1362-melting-cat.png")
            //     m1.setHashidsWithName("sysmsg");
            //     m1.addDanmu(mainpage); 
            //     m1.destoryDanmu(8400);

            //     ChatbotUtil.playSfx("instagram.m4a");
            //     break;
            //   case 5:
            //     // 添加一条获得成就通知 用获得成就通知方法
            //     let m2 = new ChatbotDanmu();
            //     m2.createAchievementDanmu("获得成就：金玉良言", "开播期间发送5条弹幕")
            //     m2.setHashidsWithName("sysmsg");
            //     m2.addDanmu(mainpage); 
            //     m2.destoryDanmu(8400);

            //     ChatbotUtil.playSfx("instagram.m4a");
            //     break;
            //   case 20:
            //     // 添加一条获得成就通知 用获得成就通知方法
            //     let m3 = new ChatbotDanmu();
            //     m3.createAchievementDanmu("获得成就：甘字少一横 ,廿怎么读?", "开播期间发送20条弹幕")
            //     m3.setHashidsWithName("sysmsg");
            //     m3.addDanmu(mainpage); 
            //     m3.destoryDanmu(8400);

            //     ChatbotUtil.playSfx("instagram.m4a");
            //     break;
            //   default:
            //     break;
            // }
            // 礼物计数星标系统
            var giftcount = ChatbotDanmu.getGiftCountByUsername(username);
            if(giftcount >= 1) {
              danmu.addCustomImage(danmu.username, "badge-icon", "star.gif");
            }
            var silvergiftcount = ChatbotDanmu.getSilverGiftCountByUsername(username);
            if(silvergiftcount >= 1) {
              danmu.addCustomImage(danmu.username, "badge-icon", "4493-pepe-crown-flip.gif");
            }

            danmu.addSpecialImageByData(message);
            // danmu.addSpecialImageByText(message, "哈", "./donut.gif");  //添加特殊文字图片
            danmu.addDanmu(mainpage);
            ChatbotUtil.playSfx("Pop-up-text-notification.mp3", "danmu");
            danmu.destoryDanmu(8400);

            break;
          case "SEND_GIFT":
            var uname = body.data.uname;
            var action = body.data.action;
            var num = body.data.num;
            var giftName = body.data.giftName;
            var face = body.data.face;

            console.log(
              `${uname} ${action} ${num} 个 ${giftName}`
            );

            // 判断 礼物类型并计数
            if(body.data.coin_type == "gold") {
              ChatbotDanmu.updateGiftCountByUsername(uname, num);
            }
            if(body.data.coin_type == "silver") {
              ChatbotDanmu.updateSilverGiftCountByUsername(uname, num);
            }

            if(ChatbotDanmu.getGiftDanmuDisplay() == true) {
              var gift_danmu = new ChatbotDanmu();
              gift_danmu.createGiftNoticeDanmu(
                uname, 
                action, 
                num, 
                giftName, 
                face
              );
              gift_danmu.setHashidsWithName("gift");
              gift_danmu.addDanmu(gift_danmu.appframe_giftdisplay);
              ChatbotUtil.playSfx("snapchat.mp3", "gift");
              gift_danmu.destoryDanmu(8400);
              
            }
            break;
          case "WELCOME":
            console.log(`欢迎 ${body.data.uname}`);
            break;
          case "INTERACT_WORD":
            // var bar = document.createElement("div");
            // bar.setAttribute("class", "visitor");
            
            // 创建 观光造访文字
            // var title = document.createElement("span");
            // title.setAttribute("class", "visitor-name");
            // title.setAttribute("style", ``);
            // title.innerHTML = "观光造访"

            // 创建 动画图片
            // var image = document.createElement("img");
            // image.setAttribute("style", "width: 5em; height: 5em;position: absolute;transform: translate3d(150px, -40px, 0px);");
            // image.setAttribute("src", "./Package.png");

            
            var app = document.getElementsByClassName("app")[0];

            // 创建 造访者弹幕消息，通过类方法
            // var visitor_danmu = new ChatbotDanmu();
            // var time = new Date();
            // console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${body.data.uname}`);
            // visitor_danmu.createVisitorDanmu(`${body.data.uname}`);
            // visitor_danmu.setHashids();
            // visitor_danmu.addDanmu(app);
            // visitor_danmu.destoryDanmu(8400);


            // 创建 造访者弹幕消息V2(带显示开关控制)，通过类方法
            // if(ChatbotDanmu.getVisitorDanmuDisplay() == true) {
            //   var visitor_danmu = new ChatbotDanmu();
            //   var time = new Date();
            //   console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${body.data.uname}`);
            //   visitor_danmu.createVisitorDanmuV2(`${body.data.uname}`);
            //   visitor_danmu.setHashidsWithName("visitor");  //设置带名称的唯一标识 Hashid
            //   visitor_danmu.addDanmu(visitor_danmu.appframe_visitorqueuedisplay);
            //   // ChatbotUtil.playSfx("Pop-up-bubble-notification.mp3", "visitor");
            //   visitor_danmu.destoryDanmu(8400);
            // }

            // 创建 造访者弹幕消息V3(带显示开关控制)，通过类方法
            if(ChatbotDanmu.getVisitorDanmuDisplay() == true) {
              var visitor_danmu = new ChatbotDanmu();
              var username = body.data.uname;
              var profilephoto = body.data.uid;
              var time = new Date();
              console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${body.data.uname}`);

              visitor_danmu.createVisitorDanmuV3("Animal_Crossing_Leaf_White_01.png");
              var randomColour = visitor_danmu.getRandomColour2();
              var staticUserProfilePhotoColour = visitor_danmu.setProfilePhotoBackgroundColor(randomColour);

              // 设置 用户头像图片（Ajax获取，并记录地址，下次遇到相同的用户直接从Map中获取地址，减少API请求
              var xmlhttp = new XMLHttpRequest();
              var ajaxsrc = `https://tenapi.cn/bilibili/?uid=${profilephoto}`;
              xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                  // console.log("Ajax Successed!");
                  // console.log(xmlhttp.responseText);
                  let data = JSON.parse(xmlhttp.responseText);
                  if (data.data.avatar != null) {
                    ChatbotDanmu.updateProfilephotoSrcByUsername(username, data.data.avatar);
                    visitor_danmu.setProfilePhoto(data.data.avatar);
                  }
                }
              }

              if (ChatbotDanmu.getProfilephotoSrcByUsername(username) != false) {
                visitor_danmu.createVisitorDanmuV3(ChatbotDanmu.getProfilephotoSrcByUsername(username));
                
              }else{
                xmlhttp.open("GET", ajaxsrc, true);
                // console.log(ajaxsrc);
                xmlhttp.send();
              }

              
              visitor_danmu.setHashidsWithName("visitor");  //设置带名称的唯一标识 Hashid
              visitor_danmu.addDanmu(visitor_danmu.appframe_visitorqueuedisplay);
              // ChatbotUtil.playSfx("Pop-up-bubble-notification.mp3", "visitor");
              visitor_danmu.destoryDanmu(8400);
            }

            
            break;
          case "LIKE_INFO_V3_CLICK":
            // if(ChatbotDanmu.getLikeNoticeDisplay == true) {
              var like_uname = body.data.uname;
              var like_text = body.data.like_text;

              console.log(like_uname + like_text);

              // 添加一条系统通知 用系统通知方法
              var like_danmu = new ChatbotDanmu();
              like_danmu.createSystemDanmu(like_uname + like_text);
              // system_message_new.setHashids();  // 不带标识的Hashid
              like_danmu.setHashidsWithName("like");  // 设置带标识的Hashid
              like_danmu.addDanmu();  // 添加弹幕到指定应用池
              ChatbotUtil.playSfx("button hover.mp3", "like");
              like_danmu.destoryDanmu(8400);  // 执行销毁弹幕，在8400ms后
            // }
            break;
          case "SUPER_CHAT_MESSAGE":
            var super_chat_uname = body.data.user_info.uname;
            var super_chat_msg = body.data.message;
            var super_chat_face = body.data.user_info.face;
            var super_chat_price = body.data.price;
            var super_chat_time = body.data.user_info.time;

            // 添加一条系统通知 用系统通知方法
            var super_chat_danmu = new ChatbotDanmu();
            super_chat_danmu.createSystemDanmu(super_chat_uname + ': ' + super_chat_msg);
            // system_message_new.setHashids();  // 不带标识的Hashid
            super_chat_danmu.setHashidsWithName("superchat");  // 设置带标识的Hashid
            super_chat_danmu.addDanmu();  // 添加弹幕到指定应用池
            ChatbotUtil.playSfx("button hover.mp3", "superchat");
            super_chat_danmu.destoryDanmu(super_chat_time * 100);  // 执行销毁弹幕，在8400ms后
            break;
          case "ENTRY_EFFECT":
            // if(ChatbotDanmu.getLikeNoticeDisplay == true) {
              var entry_msg = body.data.copy_writing;

              console.log(entry_msg);

              // 添加一条系统通知 用系统通知方法
              var entry_danmu = new ChatbotDanmu();
              entry_danmu.createSystemDanmu(entry_msg);
              // system_message_new.setHashids();  // 不带标识的Hashid
              entry_danmu.setHashidsWithName("entry");  // 设置带标识的Hashid
              entry_danmu.addDanmu();  // 添加弹幕到指定应用池
              ChatbotUtil.playSfx("button hover.mp3", "like");
              entry_danmu.destoryDanmu(8400);  // 执行销毁弹幕，在8400ms后
            // }
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


