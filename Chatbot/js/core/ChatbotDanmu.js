import { ChatbotData } from "./ChatbotData.js";


export class ChatbotDanmu {
  danmu;
  username;
  message;
  profilephoto;
  danmu_style = "bar-3";
  username_style = "name-3";
  message_style = "msg-3";
  profilephoto_style = "profilephoto-3";
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
  username_text;
  static isShowVisitorDanmu = true;
  static isShowGiftDanmu = true;
  static isShowLikeNotice = true;
  static toggleAutoDestory = false;
  static _isShowFollow = true;
  static _isShowShare = true;
  static _isShowSuperchat = true;
  static _isShowEntry = true;
  

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
        break;
      case 3:
        var username_text = document.createTextNode(arguments[0]);
        var message_text = document.createTextNode(`${arguments[1]}`);

        this.username_text = username_text;
        this.profilephoto.setAttribute("src", arguments[2]);
        this.username.appendChild(username_text);
        this.message.appendChild(message_text);

        return this.danmu;
        break;
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
        break;
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
    } else {
      this.username.style.color = ChatbotDanmu.username_colour_map.get(this.username_text.textContent);
    }

  }

  // 设置 用户名字背景颜色（记录用户名字、随机颜色代码。以分配固定颜色）
  setStaticUsernameBackgroundColour(colour) {
    if (ChatbotDanmu.username_bgcolour_map.has(this.username_text.textContent) != 1) {
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
        break;
      default:
        return 0;
        break;
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

  setProfilePhotoBackgroundColor(colorcode) {
    this.profilephoto.style.backgroundColor = colorcode;

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
