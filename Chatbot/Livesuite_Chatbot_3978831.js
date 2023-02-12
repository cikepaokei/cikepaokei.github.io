/*
 * @Author: Cikepaokei
 * @Date: 2020-05-15 20:06:16
 * @LastEditTime: 2022-08-21 01:48:22
 * @LastEditors: Cikepaokei
 * @Description: In User Settings Edit
 * @FilePath: \live\live - 220621.js
 */

import { ChatbotCloudMusic } from "./js/core/ChatbotCloudMusic.js";
import { ChatbotDanmu } from "./js/core/ChatbotDanmu.js";
import { ChatbotDebug } from "./js/core/ChatbotDebug.js";
import { ChatbotTopToolbar } from "./js/core/ChatbotTopToolbar.js";
import { ChatbotUtil } from "./js/core/ChatbotUtil.js";
// import { ChatbotCloudMusicData } from "./js/ChatbotCloudMusicData.class.js";
import { ChatbotRoundDanmu } from "./js/core/ChatbotRoundDanmu.js";

window.ChatbotDanmu = ChatbotDanmu;

class ChatbotAppFrame {
  constructor() {}
}

class ChatbotGiftNotice extends ChatbotDanmu {}


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

          let body = textDecoder.decode(pako.inflate(data));
          // let reader = new FileReader();
          // let result = '';
          // reader.readAsBinaryString(data);
          // reader.onload = function() {
          //   result = JSON.parse(pako.inflate(reader, result, {to: 'string'}));
          //   console.log(result);
          // }

          let indexArrayA = [];
          let indexArrayB = [];
          let indexArrayC = [];
          let indexArrayD = [];
          let indexArrayE = [];

          // 分割 JSON 消息 获得 “{”和“}”的序列和索引
          for (let i = 0; i < body.length; i++) {
            if (body.charAt(i) == "{") {
              indexArrayA.push(i);
              indexArrayC.push(0);
              indexArrayD.push(i);
            }

            if (body.charAt(i) == "}") {
              indexArrayB.push(i + 1);
              indexArrayC.push(1);
              indexArrayD.push(i + 1);
            }
          }

          // 找出 各个消息的开头和结尾索引
          let count_0 = 0;
          let count_1 = 0;
          let temp_0 = [];
          let before = 1;
          let after = 0;
          for (let i = 0; i < indexArrayC.length; i++) {
            if (indexArrayC[i] == 0) {
              if (before == 1) {
                if (count_0 == count_1) {
                  indexArrayE.push(indexArrayD[i]);
                }
              }
              count_0 += 1;

              before = 0;
            }

            if (indexArrayC[i] == 1) {
              count_1 += 1;
              if (i == indexArrayC.length - 1) {
                if (count_0 == count_1) {
                  indexArrayE.push(indexArrayD[i]);
                  count_0 = count_1 = 0;
                }
              } else {
                if (indexArrayC[i + 1] == 0) {
                  if (count_0 == count_1) {
                    indexArrayE.push(indexArrayD[i]);
                    count_0 = count_1 = 0;
                  }
                }
              }
              before = 1;
            }
          }

          var jsonArray = [];
          for (let i = 0; i < indexArrayE.length; i += 2) {
            jsonArray.push(body.substring(indexArrayE[i], indexArrayE[i + 1]));
          }

          if (body) {
            for (let i = 0; i < jsonArray.length; i++) {
              result.body.push(JSON.parse(jsonArray[i].toString()));
            }
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
// const roomid = 407149;
const roomid = 3978831;

ws.onopen = function () {
  ws.send(encode(
      JSON.stringify({
        roomid: roomid,
      }), 7
    )
  );
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
        "当前版本: V20230115 | Dev: Cikepaokei"
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
        if (ChatbotCloudMusic.isEnable) {
          silenceDetectStatus = "静默音乐：🟢";
        } else {
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
      var ajax_request_timer = setInterval(function () {
        ChatbotUtil.emptyAjaxRequestCount();
      }, 60000);

      // 启动 AJAX请求解锁定时清空 计时器
      var ajax_unlock_timer = setInterval(function () {
        // console.log(Date.now() + " | " + ChatbotUtil.ajaxUnlockTime);
        if (ChatbotUtil.ajaxLocker == true) {
          if (Date.now() >= ChatbotUtil.ajaxUnlockTime) {
            ChatbotUtil.ajaxUnlock();
          }
        }
      }, 1000);

      if (ChatbotDebug.debugMode) {
        var danmu_rate_counter_oldcount = 0;
        var danmu_rate_counter_timer = setInterval(function () {
          let oldCount = danmu_rate_counter_oldcount;
          let newCount = ChatbotDanmu.count;
  
          let rate = newCount - oldCount;
          ChatbotDebug.display(`总消息速率：${rate.toFixed(0)}条/5s | 总消息数：${newCount}`);
          danmu_rate_counter_oldcount = newCount;
        }, 5000);
      } 
      
      const MAX_SLIENCE_WAIT = 3000;
      const MAX_AUDIOEMPTY_WAIT = 5000;
      let audioEmptyWait = 0; // Default: 3000
      var slienceLocker = false;
      let cloudmusicApp = document.getElementById(
        ChatbotDanmu.appframe_cloudmusicplayer_id
      );
      // let musicList = ChatbotData.RandomCloudmusicIDList;
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
      // let CLOUDMUSIC_PLAYLIST = ChatbotCloudMusic.getPlaylist(164525929);
      let cloudmusic = new ChatbotCloudMusic();
      var playCloudMusic = () => {
        let cloudmusic = new ChatbotCloudMusic();
        // // 自定义歌单
        // let song = ChatbotUtil.getRandomItemFromArray(musicList.data);

        // // 网络获取歌单
        // let song = ChatbotUtil.getRandomItemFromArray(CLOUDMUSIC_PLAYLIST);

        // 离线喜欢的自定义歌单
        let song = ChatbotUtil.getRandomItemFromArray(musicList);

        let songID = song.id;
        while (songID == ChatbotCloudMusic.lastPlayedID) {
          // // 自定义歌单
          // song = ChatbotUtil.getRandomItemFromArray(musicList.data);

          // // 网络获取歌单
          // song = ChatbotUtil.getRandomItemFromArray(CLOUDMUSIC_PLAYLIST);

          // 离线喜欢的自定义歌单
          song = ChatbotUtil.getRandomItemFromArray(musicList);

          songID = song.id;
          console.log("与上首歌ID相同，已重新随机！");
        }
        cloudmusic.play(songID);
      };

      // 静默检测，超时后播放音乐
      var slience_detector_timer = setInterval(function () {
        if (ChatbotCloudMusic.isEnable) {
          let lastDate = ChatbotDanmu.lastDanmuDate;
          if (Date.now() - lastDate > MAX_SLIENCE_WAIT && !slienceLocker) {
            slienceLocker = true;

            if (audio.paused || audio.currentTime == 0 ||
                audio.currentTime == audio.duration
            ) {
              cloudmusicApp.setAttribute("style", "");
              cloudmusicApp.setAttribute("class", "fade-in");
              playCloudMusic();
              app_cloudmusic_cover.classList.toggle("cover-flip");
              app_cloudmusic_cover.classList.toggle("cover-flip-revert");
            }
          } else if (
            Date.now() - lastDate < MAX_SLIENCE_WAIT &&
            slienceLocker
          ) {
            slienceLocker = false;
          } else if ( Date.now() - lastDate > MAX_SLIENCE_WAIT &&
            audioEmptyWait > MAX_AUDIOEMPTY_WAIT && slienceLocker) {
            if (audio.paused || audio.currentTime == 0 ||
              audio.currentTime == audio.duration
            ) {
              cloudmusic.setLoadingGUI();
              playCloudMusic();
              app_cloudmusic_cover.classList.toggle("cover-flip");
              app_cloudmusic_cover.classList.toggle("cover-flip-revert");
              audioEmptyWait = 0;
            }
          }

          if (audio.readyState == 0) {
            audioEmptyWait = audioEmptyWait + 1000;
          }
        }

        // console.log(audio.readyState);
      }, 1000);

      audio.addEventListener("ended", (event) => {
        if (ChatbotCloudMusic.isEnable) {
          let lastDate = ChatbotDanmu.lastDanmuDate;
          if (Date.now() - lastDate > MAX_SLIENCE_WAIT) {
            playCloudMusic();
            app_cloudmusic_cover.classList.toggle("cover-flip");
            app_cloudmusic_cover.classList.toggle("cover-flip-revert");

          } else {
            audio.pause();
            cloudmusicApp.setAttribute("class", "fade-out");
            setTimeout(() => {
              cloudmusicApp.setAttribute("style", "display: none;");
              cloudmusic.setLoadingGUI();
              app_cloudmusic_cover.src =
                "./img/Animal_Crossing_Leaf_White_01.png";
            }, 1000);
          }
        }
      });

      var cloudmusic_timelabel_timer = setInterval(function () {
        if (ChatbotCloudMusic.isEnable) {
          let currentTime = audio.currentTime;
          let duration = audio.duration;
          if (!isNaN(duration) && !audio.ended) {
            currentTime = ChatbotUtil.formatSeconds(currentTime);
            duration = ChatbotUtil.formatSeconds(duration);
            let res = `[ ${currentTime} / ${duration} ]`;
            cloudmusic.setTimeLabel(res);
          } else if (isNaN(duration)) {
            cloudmusic.setTimeLabel("");
          }
        }
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
            var time = new Date();
            // console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${body.info[2][1]}: ${body.info[1]}`);
            ChatbotDebug.log(`${body.info[2][1]}: ${body.info[1]}`);

            var mainpage = document.getElementById("mainpage");

            var username = body.info[2][1],
              message = body.info[1];
            var fanbadge = body.info[3][1];
            var uid = body.info[2][0];
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

            // 获取并设置 用户头像
            // 如果 【用户头像表】存在此用户，设置用户头像
            // 如果，不存在，从API通过UID获取用户头像，并设置用户头像和记录到【用户头像表】
            if (ChatbotDanmu.getProfilephotoSrcByUsername(username) != false) {
              danmu.setProfilePhoto(
                ChatbotDanmu.getProfilephotoSrcByUsername(username)
              );
            } else {
              let ajaxurl = `https://tenapi.cn/v2/biliinfo?uid=${profilephoto}`;
              if (ChatbotUtil.ajaxLocker == false) {
                ChatbotUtil.doAjaxGetRL(ajaxurl).then(
                  (response) => {
                    let data = JSON.parse(response);
                    if (data.code == 200) {
                      let profilePhoto = data.data.avatar;
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
                        log =
                          log +
                          ` | 解锁时间：${new Date(
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
              } else {
              }
            }

            var randomColour = danmu.getRandomColourSchemes();
            var randomLightColour = randomColour[0];
            var randomDarkColour = randomColour[1];
            var staticUsernameColour =
              danmu.setStaticUsernameBackgroundColour(randomLightColour);
            var staticUserProfilePhotoColour =
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
            danmu.addTimeLabel(ChatbotUtil.getTimeWithoutSecond());

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
            var app = document.getElementsByClassName("app")[0];
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
                    let time = new Date();
                
                    danmu.createVisitorDanmuV3(
                      "./img/Animal_Crossing_Leaf_White_01.png"
                    );
                    var randomColour = danmu.getRandomColour2();
                    var staticUserProfilePhotoColour =
                      danmu.setProfilePhotoBackgroundColor(randomColour);

                    // 获取并设置 用户头像
                    // 如果 【用户头像表】存在此用户，设置用户头像
                    // 如果，不存在，从API通过UID获取用户头像，并设置用户头像和记录到【用户头像表】
                    if (
                      ChatbotDanmu.getProfilephotoSrcByUsername(username) != false
                    ) {
                      danmu.setProfilePhoto(
                        ChatbotDanmu.getProfilephotoSrcByUsername(username)
                      );
                    } else {
                      let ajaxurl = `https://tenapi.cn/v2/biliinfo?uid=${profilephoto}`;
                      ChatbotUtil.doAjaxGetRL(ajaxurl)
                        .then((response) => {
                          let data = JSON.parse(response);
                          if (data.code == 200) {
                            let profilePhoto = data.data.avatar;
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
                              log += ` | 解锁时间：${new Date(ChatbotUtil.ajaxUnlockTime
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
              

            // // 创建 造访者弹幕消息V3(带显示开关控制)，通过类方法
            // if (
            //   ChatbotDanmu.getVisitorDanmuDisplay() == true &&
            //   interactType == 1
            // ) {
            //   var visitor_danmu = new ChatbotDanmu();
            //   var username = body.data.uname;
            //   var profilephoto = body.data.uid;
            //   var time = new Date();
            //   // console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${body.data.uname}`);

            //   visitor_danmu.createVisitorDanmuV3(
            //     "./img/Animal_Crossing_Leaf_White_01.png"
            //   );
            //   var randomColour = visitor_danmu.getRandomColour2();
            //   var staticUserProfilePhotoColour =
            //     visitor_danmu.setProfilePhotoBackgroundColor(randomColour);

            //   // 获取并设置 用户头像
            //   // 如果 【用户头像表】存在此用户，设置用户头像
            //   // 如果，不存在，从API通过UID获取用户头像，并设置用户头像和记录到【用户头像表】
            //   if (
            //     ChatbotDanmu.getProfilephotoSrcByUsername(username) != false
            //   ) {
            //     visitor_danmu.setProfilePhoto(
            //       ChatbotDanmu.getProfilephotoSrcByUsername(username)
            //     );
            //   } else {
            //     let ajaxurl = `https://tenapi.cn/v2/biliinfo?uid=${profilephoto}`;
            //     ChatbotUtil.doAjaxGetRL(ajaxurl).then(
            //       (response) => {
            //         let data = JSON.parse(response);
            //         if (data.code == 200) {
            //           let profilePhoto = data.data.avatar;
            //           if (profilePhoto != null) {
            //             ChatbotDanmu.updateProfilephotoSrcByUsername(
            //               username,
            //               profilePhoto
            //             );
            //             visitor_danmu.setProfilePhoto(profilePhoto);
            //           }
            //         } else if (data.code == 201) {
            //           if (ChatbotUtil.isAjaxLocked == false) {
            //             ChatbotUtil.ajaxLock();

            //             let log = `${ChatbotUtil.getTime()} API获取失败，请求已锁定`;
            //             log =
            //               log +
            //               ` | 解锁时间：${new Date(
            //                 ChatbotUtil.ajaxUnlockTime
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

            //   visitor_danmu.setHashidsWithName("visitor"); //设置带名称的唯一标识 Hashid
            //   visitor_danmu.addDanmu(
            //     visitor_danmu.appframe_visitorqueuedisplay
            //   );
            //   visitor_danmu.destoryDanmu(8400);
            // }

            break;
          case "LIKE_INFO_V3_CLICK":
            if (ChatbotDanmu.getLikeNoticeDisplay == true) {
              var like_uname = body.data.uname;
              var like_text = body.data.like_text;
              var like_icon = body.data.like_icon;

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
              var super_chat_face = body.data.user_info.face;
              var super_chat_price = body.data.price;
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
              var super_chat_jpn_face = body.data.user_info.face;
              var super_chat_jpn_price = body.data.price;
              var super_chat_jpn_time = body.data.time;
  
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
              var entry_face = body.data.face;

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
