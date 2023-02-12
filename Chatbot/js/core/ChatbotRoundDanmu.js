import { ChatbotDanmu } from "./ChatbotDanmu.js";
import { ChatbotDebug } from "./ChatbotDebug.js";
import { ChatbotUtil } from "./ChatbotUtil.js";

export class ChatbotRoundDanmu {
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

      let app = document.getElementById(data["appFrame"]);

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
