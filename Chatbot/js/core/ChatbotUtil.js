import { ChatbotDebug } from "./ChatbotDebug.js";

export class ChatbotUtil {
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
          let unlockTime = ChatbotUtil.ajaxLock();

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
    let time = `${h}:${m}`;
    return time;
  }

  static getTimestamp() {
    return Date.now();
  }

  // 【不可用】定时销毁
  static timerDestory(timestamp) {
    return new Promise(function (resolve) {
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

        if (document.querySelector(`#sfx-${channel}`) == undefined) {
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
