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
  static username_like_map = new Map();
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
  appframe_likedisplay;
  static appframe_likedisplay_id = "cb-app-like-display";

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
    this.appframe_likedisplay = document.getElementById(ChatbotDanmu.appframe_likedisplay_id);

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
      case 2:
        var username_text = document.createTextNode(arguments[0]);
        var message_text  = document.createTextNode(`${arguments[1]}`);

        this.username_text = username_text;
        this.username.appendChild(username_text);
        this.message.appendChild(message_text);

        return this.danmu;
        break;
      case 3:
        var username_text = document.createTextNode(arguments[0]);
        var message_text  = document.createTextNode(`${arguments[1]}`);

        this.username_text = username_text;
        this.profilephoto.setAttribute("src", arguments[2])
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
    var danmu_style_class = "QA-frame-2",
        title_style_class = "QA-title-2",
        message_style_class = "QA-question-2";

    title_text   = document.createTextNode(title);
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
    var visitor_style_class = "visitor-2",  // 造访者弹幕样式
        visitorname_style_class = "visitor-name-2",
        visitorcontent_style_class = "visitor-content-2";  // 造访者名字样式
    var visitor = document.createElement("div"),
        visitorname = document.createElement("div"),
        visitorcontent = document.createElement("div");
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
    var visitor_style_class = "visitor-christmas",  // 造访者弹幕样式
        visitorname_style_class = "visitor-name-christmas",
        visitorcontent_style_class = "visitor-content-christmas";  // 造访者名字样式
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

    return (this.danmu = visitor);
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
        img.setAttribute("src", "./img/Badge.png");

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

  // 【不可用】创建 测试消息通用弹幕
  createTestDanmu() {
      var username_text = document.createTextNode("USERNAME");
      var message_text  = document.createTextNode(`: “Be yourself; everyone else is already taken.” ― Oscar Wilde`);
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

    var iconImg2Data =
      ["part-Red-x5.png", 
       "part-Orange-x5.png", 
       "part-Yellow-x5.png", 
       "part-Green-x5.png", 
       "part-Jade-x5.png", 
       "part-Blue-x5.png", 
       "part-Eggplant-x5.png"];
    var value = `./img/${iconImg2Data[Math.round(Math.random() * (iconImg2Data.length - 1))]}`; //随机抽取一个值

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
        var appframe = this.appframe
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

  setUsernameStyle() {}

  setMessageStyle() {}

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

  static updateLikeCountByUsername(username, num) {
    if (ChatbotDanmu.username_like_map.has(username) != 1) {
      ChatbotDanmu.username_like_map.set(username, num);
      return num;

    }else{
      let count = ChatbotDanmu.username_like_map.get(username);
      let new_count = count + num;
      ChatbotDanmu.username_like_map.set(username, new_count);
      return new_count;

    }
  }

  static getLikeCountByUsername(username) {
    var num = ChatbotDanmu.username_like_map.has(username);
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

  // 创建AJAX对象 通过GET方法获取数据 不带参数
  // url: 获取数据的资源地址
  // 返回 响应数据
  static doAjaxGetV2(url) {
    // Create new promise with the Promise() constructor;
    // This has as its argument a function
    // with two parameters, resolve and reject
    return new Promise(function(resolve, reject) {
      // Standard XHR to load an image
      var request = new XMLHttpRequest();
      request.open('GET', url);
      // request.responseType = 'blob';
      // When the request loads, check whether it was successful
      request.onload = function() {
        if (request.status === 200) {
        // If successful, resolve the promise by passing back the request response
          resolve(request.response);
        } else {
        // If it fails, reject the promise with a error message
          reject(Error('Data didn\'t load successfully; error code:' + request.statusText));
        }
      };
      request.onerror = function() {
      // Also deal with the case when the entire request fails to begin with
      // This is probably a network error, so reject the promise with an appropriate message
          reject(Error('There was a network error.'));
      };
      // Send the request
      request.send();
    });

  }

  // 【不可用】定时销毁
  static timerDestory(timestamp) {
    return new Promise(function(resolve) {
      let time = Date.now();
      
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

class ChatbotDebug {
  static logTable = [];
  static isDisplayLog = true;
  static debugMode = true

  constructor() {}

  // 记录日志
  static log(log) {
    if (ChatbotDebug.debugMode == true && 
        ChatbotDebug.isDisplayLog == true) {
      let time = new Date(Date.now()).toJSON();
      log = `${time} ${log}`;

      ChatbotDebug.logTable.push(log);
      console.log(log);
    }
  }

}



  
class ChatbotData {

  constructor() {}

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
              "imageUrl": "./img/NY2020-200px.png",
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


}

class ChatbotBreakTime {

  constructor() {}

  static create() {
    var bar = document.createElement("div");
    bar.setAttribute("class", "bar-breaktime");

    var closeWindow = document.createElement("input");
    closeWindow.setAttribute("type", "button");
    closeWindow.setAttribute("value", "X");
    closeWindow.setAttribute("onclick", "ChatbotBreakTime.destory(this)");
    closeWindow.setAttribute("class", "closewindow");
    bar.appendChild(closeWindow);

    var icon = document.createElement("span");
    icon.setAttribute("class", "info-icon");
    var iconImg = document.createElement("img");
    iconImg.setAttribute("src", "./img/tea-pot.png");
    iconImg.setAttribute("class", "info-icon-img");
    icon.appendChild(iconImg);
    bar.appendChild(icon);

    var name = document.createElement("span");
    name.setAttribute("class", "breaktime-name");
    var nameText = document.createTextNode("喝茶时间");
    name.appendChild(nameText);
    bar.appendChild(name);

    var br = document.createElement("br");
    bar.appendChild(br);

    var msg = document.createElement("span");
    msg.setAttribute("class", "breaktime-msg");
    var msgText = document.createTextNode("休息会儿~");
    msg.appendChild(msgText);
    var textToImg = document.createElement("img");
    textToImg.setAttribute("src", "./img/GreedyGloriousDuck-max-1mb.gif");
    textToImg.setAttribute("class", "textToImg");
    msg.appendChild(textToImg);
    bar.appendChild(msg);

    document.getElementsByClassName("app")[0].appendChild(bar);
  }

  static destory(Obj) {
    Obj.parentNode.setAttribute("style", "animation: 1s breaktime-out");
    setTimeout(function() {
        Obj.parentNode.parentNode.removeChild(Obj.parentNode);
    }, 1000);
  }

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

  constructor() {}

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


class ChatbotGiftNotice extends ChatbotDanmu {}








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
const roomid = 1569975;

ws.onopen = function () {
  ws.send(encode(JSON.stringify({
"roomid": roomid
  }), 7));
};

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
      document.write(`<title>Chatbot | By Cikepaokei</title>`);
      document.write(
        `<link rel="stylesheet" href="./bar-animalcrossing-v2.css?v=${Date.now()}">`
      );
      document.write(`</head>`);
      document.write(`<style>`);
      document.write(`@import url('https://fonts.googleapis.com/css2?family=Denk+One&family=Fredoka+One&display=swap');`);
      document.write(`</style>`);
      document.write(`<body></body>`);

      // 添加breaktime js
      var head = document.getElementsByTagName("head")[0];
      var breaktime_js = document.createElement("script");
      breaktime_js.setAttribute("src", `./js/breaktime.js?v=${Date.now()}`);
      head.appendChild(breaktime_js);

      var body = document.getElementsByTagName("body")[0];

      // 添加工具栏
      var toptoolbar = new ChatbotTopToolbar();
      toptoolbar.createTopToolbar(3);
      toptoolbar.setIcon(0, "./img/star.gif", "ChatbotBreakTime.create()");
      toptoolbar.setIcon(1, "./img/part-Slice 5-10x.png", "ChatbotDanmu.toggleVisitorDanmuDisplay()");
      toptoolbar.setIcon(2, "./img/part-Slice 5-10x.png", "ChatbotDanmu.toggleGiftDanmuDisplay()");
      toptoolbar.addTopToolbar(body);

      //添加Chat bot应用框(应用池)
      var app = document.createElement("div");
      app.setAttribute("class", "app");
      body.appendChild(app);

      //添加Chat bot应用(礼物显示应用)
      var app_gift_display = document.createElement("div");
      app_gift_display.setAttribute("id", ChatbotDanmu.appframe_giftdisplay_id);
      app.appendChild(app_gift_display);

      //添加Chat bot应用(点赞显示应用)
      var app_like_display = document.createElement("div");
      app_like_display.setAttribute("id", ChatbotDanmu.appframe_likedisplay_id);
      app.appendChild(app_like_display);

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

      // 添加一条系统通知 用系统通知方法
      var system_message_new = new ChatbotDanmu();
      system_message_new.createSystemDanmu("当前版本: V20230115 | Dev: Cikepaokei");
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
      console.log(`人气：${count}`);

      break;
    case 5:
      packet.body.forEach((body) => {
        switch (body.cmd) {
          case "DANMU_MSG":
            var time = new Date();
            // console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${body.info[2][1]}: ${body.info[1]}`);
            ChatbotDebug.log(`${body.info[2][1]}: ${body.info[1]}`);

            var mainpage = document.getElementById("mainpage");
            
            var username = body.info[2][1],
                message  = body.info[1];
            var fanbadge = body.info[3][1];   
            var uid = body.info[2][0];
            var profilephoto = body.info[2][0];

            var danmu = new ChatbotDanmu();

            danmu.createDanmu(username, message, "./img/Animal_Crossing_Leaf_White_01.png");

            // 粉丝勋章检测V2
            if (body.info[3][1] == "爱雪") {
              danmu.addCustomImage(danmu.username, "badge-icon", "./img/Niko_Icon.webp");
            }
            
            // 获取并设置 用户头像
            // 如果 【用户头像表】存在此用户，设置用户头像
            // 如果，不存在，从API通过UID获取用户头像，并设置用户头像和记录到【用户头像表】
            if (ChatbotDanmu.getProfilephotoSrcByUsername(username) != false) {
              danmu.setProfilePhoto(
                ChatbotDanmu.getProfilephotoSrcByUsername(username)
                );
            } else {
              let ajaxurl = `https://tenapi.cn/bilibili/?uid=${profilephoto}`;
              ChatbotUtil.doAjaxGetV2(ajaxurl)
              .then(function(response) {
                let data = JSON.parse(response);
                let profilePhoto = data.data.avatar;
                if (profilePhoto != null) {
                  ChatbotDanmu.updateProfilephotoSrcByUsername(username, profilePhoto);
                  danmu.setProfilePhoto(profilePhoto);
                }
              }, function(Error) {
                console.log(Error);
              });
            }

            var randomColour = danmu.getRandomColourSchemes();
            var randomLightColour = randomColour[0];
            var randomDarkColour = randomColour[1];
            var staticUsernameColour = danmu.setStaticUsernameBackgroundColour(randomLightColour);
            var staticUserProfilePhotoColour = danmu.setProfilePhotoBackgroundColor(randomLightColour);
            danmu.setStaticUsernameColour(randomDarkColour);

            // 用户弹幕计数星标系统
            var userdanmucount = danmu.updateDanmuCount();
            if (userdanmucount >= 5 && userdanmucount < 10) {
              danmu.addCustomImage(danmu.username, "badge-icon", "./img/Animal_Crossing_Leaf_5.png");
            } else if (userdanmucount >= 10 && userdanmucount < 20) {
              danmu.addCustomImage(danmu.username, "badge-icon", "./img/Animal_Crossing_Leaf_10.png");
            } else if (userdanmucount >= 20 && userdanmucount < 50) {
              danmu.addCustomImage(danmu.username, "badge-icon", "./img/Animal_Crossing_Leaf_20.png");
            } else if (userdanmucount >= 50 && userdanmucount < 100) {
              danmu.addCustomImage(danmu.username, "badge-icon", "./img/Animal_Crossing_Leaf_50.png");
            } else if (userdanmucount >= 100) {
              danmu.addCustomImage(danmu.username, "badge-icon", "./img/Animal_Crossing_Leaf_100_Plus.png");
            }

            // 礼物计数星标系统
            var giftcount = ChatbotDanmu.getGiftCountByUsername(username);
            if(giftcount >= 1) {
              danmu.addCustomImage(danmu.username, "badge-icon", "./img/NH-Inventory_Icon-Coin.webp");
            }
            var silvergiftcount = ChatbotDanmu.getSilverGiftCountByUsername(username);
            if(silvergiftcount >= 1) {
              danmu.addCustomImage(danmu.username, "badge-icon", "./img/Present_NH_Inv_Icon.png");
            }

            // 点赞计数星标系统
            var likecount = ChatbotDanmu.getLikeCountByUsername(username);
            if(likecount >= 1) {
              danmu.addCustomImage(danmu.username, "badge-icon", "./img/emojisky.com-599683.png");
            }

            danmu.setHashidsWithName("danmumsg");  //设置带名称的唯一标识 Hashid
            danmu.addSpecialImageByData(message);
            danmu.addDanmu(mainpage);
            ChatbotUtil.playSfx("./audio/Pop-up-text-notification.mp3", "danmu");
            danmu.destoryDanmu(8400);

            break;
          case "SEND_GIFT":
            var uname = body.data.uname;
            var action = body.data.action;
            var num = body.data.num;
            var giftName = body.data.giftName;
            var face = body.data.face;
            var coinType = body.data.coin_type;
            var timeout = 8400;

            console.log(
              `${uname} ${action} ${num} 个 ${giftName}`
            );

            // 判断 礼物类型并计数
            if(coinType == "gold") {
              ChatbotDanmu.updateGiftCountByUsername(uname, num);
            }
            if(coinType == "silver") {
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
              ChatbotUtil.playSfx("./audio/snapchat.mp3", "gift");
              gift_danmu.destoryDanmu(timeout);
              
            }
            break;
          case "WELCOME":
            console.log(`欢迎 ${body.data.uname}`);
            break;
          case "INTERACT_WORD":
            var app = document.getElementsByClassName("app")[0];

            // 创建 造访者弹幕消息V3(带显示开关控制)，通过类方法
            if(ChatbotDanmu.getVisitorDanmuDisplay() == true) {
              var visitor_danmu = new ChatbotDanmu();
              var username = body.data.uname;
              var profilephoto = body.data.uid;
              var time = new Date();
              console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${body.data.uname}`);

              visitor_danmu.createVisitorDanmuV3("./img/Animal_Crossing_Leaf_White_01.png");
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
                xmlhttp.send();
              }

              visitor_danmu.setHashidsWithName("visitor");  //设置带名称的唯一标识 Hashid
              visitor_danmu.addDanmu(visitor_danmu.appframe_visitorqueuedisplay);
              visitor_danmu.destoryDanmu(8400);
            }
   
            break;
          case "LIKE_INFO_V3_CLICK":
            // if(ChatbotDanmu.getLikeNoticeDisplay == true) {
              var like_uname = body.data.uname;
              var like_text = body.data.like_text;
              var like_icon = body.data.like_icon;

              console.log(like_uname + like_text);

              // 点赞计数
              ChatbotDanmu.updateLikeCountByUsername(like_uname, 1);

              // 添加一条系统通知 用系统通知方法
              var like_danmu = new ChatbotDanmu();
              like_danmu.createSystemDanmu(like_uname + " 为你点赞啦");
              like_danmu.setDanmuStyle("QA-frame-2-vip");
              like_danmu.addCustomImage(like_danmu.username, "textToIcon", "./img/Niko_Cheering.gif");
              like_danmu.setProfilePhoto("./img/giphy (1).gif");
              like_danmu.setProfilePhotoStyle("profilephoto-3-vip");
              
              like_danmu.setHashidsWithName("like");  // 设置带标识的Hashid
              like_danmu.addDanmu(like_danmu.appframe_likedisplay);  // 添加弹幕到指定应用池
              ChatbotUtil.playSfx("./audio/button hover.mp3", "like");
              like_danmu.destoryDanmu(8400);  // 执行销毁弹幕，在8400ms后
            // }
            break;
          case "SUPER_CHAT_MESSAGE":
            var super_chat_uname = body.data.user_info.uname;
            var super_chat_msg = body.data.message;
            var super_chat_face = body.data.user_info.face;
            var super_chat_price = body.data.price;
            var super_chat_time = body.data.time;

            console.log(`${super_chat_uname}: ${super_chat_msg}`);

            // 添加一条系统通知 用系统通知方法
            var super_chat_danmu = new ChatbotDanmu();
            super_chat_danmu.createSystemDanmu(`${super_chat_uname}: ${super_chat_msg}`);
            super_chat_danmu.setHashidsWithName("superchat");  // 设置带标识的Hashid
            super_chat_danmu.addDanmu();  // 添加弹幕到指定应用池
            ChatbotUtil.playSfx("./audio/button hover.mp3", "superchat");
            super_chat_danmu.destoryDanmu(super_chat_time * 1000);  // 执行销毁弹幕，在8400ms后

            break;
          case "SUPER_CHAT_MESSAGE_JPN":
            var super_chat_jpn_uname = body.data.user_info.uname;
            var super_chat_jpn_msg = body.data.message;
            var super_chat_jpn_face = body.data.user_info.face;
            var super_chat_jpn_price = body.data.price;
            var super_chat_jpn_time = body.data.time;

            // 添加一条系统通知 用系统通知方法
            var super_chat_jpn_danmu = new ChatbotDanmu();
            super_chat_jpn_danmu.createSystemDanmu(`${super_chat_jpn_uname}: ${super_chat_jpn_msg}`);
            super_chat_jpn_danmu.setHashidsWithName("superchat");  // 设置带标识的Hashid
            super_chat_jpn_danmu.addDanmu();  // 添加弹幕到指定应用池
            ChatbotUtil.playSfx("./audio/button hover.mp3", "superchat");
            super_chat_jpn_danmu.destoryDanmu(super_chat_time * 1000);  // 执行销毁弹幕，在8400ms后
            break;
          case "ENTRY_EFFECT":
            // if(ChatbotDanmu.getLikeNoticeDisplay == true) {
              var entry_msg = body.data.copy_writing;
              var reg = new RegExp("<%");
              entry_msg = entry_msg.replace(reg, "");
              reg = new RegExp("%>");
              entry_msg = entry_msg.replace(reg, "");
              var entry_face = body.data.face;

              console.log(entry_msg);

              // 添加一条系统通知 用系统通知方法
              var entry_danmu = new ChatbotDanmu();
              entry_danmu.createSystemDanmu(entry_msg);
              entry_danmu.setProfilePhoto("./img/AS001112_01.gif");
              entry_danmu.setProfilePhotoStyle("profilephoto-3-vip");
              entry_danmu.setHashidsWithName("entry");  // 设置带标识的Hashid
              entry_danmu.addDanmu();  // 添加弹幕到指定应用池
              ChatbotUtil.playSfx("./audio/instagram.m4a", "entry");
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


