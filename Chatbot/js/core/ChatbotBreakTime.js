export class ChatbotBreakTime {

  constructor() { }

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
    setTimeout(function () {
      Obj.parentNode.parentNode.removeChild(Obj.parentNode);
    }, 1000);
  }

}
