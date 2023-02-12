import { ChatbotDanmu } from "./ChatbotDanmu.js";


export class ChatbotDebug {
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
