import { ChatbotDanmu } from "./ChatbotDanmu.js";
import { ChatbotUtil } from "./ChatbotUtil.js";
import ColorThief from "../3rdparty/color-thief.js";


export class ChatbotCloudMusic {
  #apiURL = 'https://tenapi.cn/v2/songinfo?id=';
  #id = "";
  #musicURL = "";
  #song = "";
  #artist = "";
  #album = "";
  #coverURL = "";
  static #lastPlayedID = 0;
  static #playlist = 0;
  static isEnable = false;

  constructor() {
  }

  play(id) {
    if (typeof id !== "number") {
      console.log("ID不正确");
      return null;
    }

    this.setLoadingGUI();

    this.#id = id;
    this.#apiURL = this.#apiURL + this.#id;

    ChatbotUtil.doAjaxGetRL(this.#apiURL)
      .then((response) => {
        let responseData = JSON.parse(response);

        if (responseData.code == 200) {
          this.#musicURL = responseData.data.url;
          this.#song = responseData.data.songs;
          this.#artist = responseData.data.sings;
          this.#album = responseData.data.album;
          this.#coverURL = responseData.data.cover;

          let musicplayer = document.querySelector("#sfx");
          musicplayer.src = this.#musicURL;
          ChatbotCloudMusic.#lastPlayedID = id;
          console.log("请求成功！");
          this.updateGUI();
          this.setTimeLabel('[ --:-- / --:-- ]');
          return {
            id: this.#id,
            musicURL: this.#musicURL,
            song: this.#song,
            artist: this.#artist,
            album: this.#album,
            coverURL: this.#coverURL
          };
        } else if (responseData.code == 201) {
          console.log(`获取失败，请求已锁定！`);
          ChatbotUtil.ajaxLock();
          setTimeout(ChatbotUtil.ajaxUnlock, 30000);
          return null;
        }

      }, (Error) => {
        console.log(Error);
      });
  }

  updateGUI() {
    if (document.querySelector(`#${ChatbotDanmu.appframe_cloudmusicplayer_id}`)) {
      let cover = document.getElementsByClassName("cloudmusic-player-cover")[0];
      let info = document.getElementsByClassName("cloudmusic-player-marquee")[0];
      let player = document.getElementById("cb-app-cloudmusic-player");

      cover.src = this.#coverURL;
      info.childNodes.forEach(item => {
        if (item.nodeType == 3) {
          item.textContent = `${this.#artist} - ${this.#song} - 《${this.#album}》`;
        }
      });

      // let palette = this.colorThief.getPalette(cover);
      // console.log(palette);
      let colorThief = new ColorThief();
      let setColor = () => {
        let palette = colorThief.getPalette(cover, 2);
        lightColor = palette[0];
        darkColor = palette[1];
        player.style.backgroundColor = `rgb(${lightColor[0]}, ${lightColor[1]}, ${lightColor[2]})`;
        info.style.color = `rgb(${darkColor[0]}, ${darkColor[1]}, ${darkColor[2]})`;
      };
      let lightColor, darkColor;
      if (cover.complete) {
        setColor();
      } else {
        cover.addEventListener('load', function() {
          setColor();
        });
      }
    }
  }

  setLoadingGUI() {
    let info = document.getElementsByClassName("cloudmusic-player-marquee")[0];
    info.childNodes.forEach(item => {
      if (item.nodeType == 3) {
        item.textContent = `Loading...`;  
      }
    });

    let time = document.getElementsByClassName("cloudmusic-info-time")[0];

    time.childNodes.forEach(item => {
      if (item.nodeType == 3) {
        item.textContent = '';
      }
    });
  }

  setTimeLabel(value){
    let time = document.getElementsByClassName("cloudmusic-info-time")[0];

    time.childNodes.forEach(item => {
      if (item.nodeType == 3) {
        item.textContent = value;
      }
    });
  }

  setArtist(artist) {
    this.#artist = artist;
  }

  static get lastPlayedID() {
    return ChatbotCloudMusic.#lastPlayedID;
  }

  static getPlaylist(id) {
    let apiURL = `https://music.163.com/api/playlist/detail?id=` + id;

    ChatbotUtil.doAjaxGetRL(apiURL)
      .then((response) => {
        if (response.code == 200) {
          let result = response.result;
          let tracks = result.tracks;

          return ChatbotCloudMusic.#playlist = tracks;
        }
        return console.log(`歌单请求失败，状态码为：` + response.code);
      }, (Error) => {
        console.log(Error);
      });
  }

  static get playlist() {
    return ChatbotCloudMusic.#playlist;
  }

}
