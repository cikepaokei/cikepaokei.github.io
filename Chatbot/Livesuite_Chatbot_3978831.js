/*
 * @Author: your name
 * @Date: 2020-05-15 20:06:16
 * @LastEditTime: 2020-07-26 15:40:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */

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
              
              console.log(result);
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
ws.onopen = function () {
  ws.send(encode(JSON.stringify({
    "roomid": 3978831
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
      document.write(`<title>Chat bot</title>`);
      document.write(
        `<link rel="stylesheet" href="./bar-BlackY-v3.css?v=${Date.now()}"></head>`
      );
      document.write(`<body></body>`);

      // 添加breaktime js
      var head = document.getElementsByTagName("head")[0];
      var breaktime_js = document.createElement("script");
      breaktime_js.setAttribute("src", `./breaktime.js?v=${Date.now()}`);
      head.appendChild(breaktime_js);

      var body = document.getElementsByTagName("body")[0];

      // 添加工具栏
      var toolbar = document.createElement("div");
      toolbar.setAttribute("class", "toolbar");
      body.appendChild(toolbar);

      // 添加Notepad
      // var notepad = document.createElement("iframe");
      // notepad.setAttribute("id", "iframe-notepad");
      // notepad.setAttribute("src", "./Test/Notepad.html");
      // notepad.setAttribute("frameborder", "0");
      // notepad.setAttribute("scrolling", "no");
      // notepad.setAttribute("onload", "this.height=this.contentWindow.document.body.scrollHeight");
      // body.appendChild(notepad);

      //添加工具栏图标

      for (var i = 0; i < 3; i = i + 1) {
        var icon = document.createElement("div");
        icon.setAttribute("class", "toolbar-icon");
        toolbar.appendChild(icon);
      }

      //添加图标功能
      var app_1 = toolbar.childNodes[0];
      app_1_img = document.createElement("img");
      app_1_img.setAttribute("src", "./img/star.gif");
      app_1_img.setAttribute("class", "toolbar-icon-img");
      app_1_img.setAttribute("onclick", "breakTime()");
      app_1.appendChild(app_1_img);

      //添加人气显示框
      // var countBar = document.createElement("div");
      // countBar.setAttribute("id", "countBar");
      // countBar.setAttribute("class", "bar-2");
      // body.appendChild(countBar);

      //添加Chat bot应用框(应用池)
      var app = document.createElement("div");
      app.setAttribute("class", "app");
      body.appendChild(app);

      //添加弹幕框
      var mainpage = document.createElement("div");
      mainpage.setAttribute("id", "mainpage");
      body.appendChild(mainpage);

      var audio = document.createElement("audio");
      audio.setAttribute("id", "sfx");
      audio.setAttribute("src", "#");
      audio.setAttribute("autoplay", "autoplay");
      body.appendChild(audio);

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
            // 随机生成十六进制颜色
            var string =
              "#b82b1d, #eb8c11, #f7eb29, #abeb3c, #43b0a7, #5670F5, #a928b1, #6d6d6d, #E0E0E0FF"; //原始数据
            var array = string.split(","); //转化为数组
            var value = array[Math.round(Math.random() * (array.length - 1))]; //随机抽取一个值

            console.log(`${body.info[2][1]}: ${body.info[1]}`);

            var userInfoURL = "http://api.bilibili.com/x/space/acc/info?mid=" + body.info[2][0];

            function getImageURL(userInfoURL)
            {
              var xmlhttp;
              var jsonObject;
              var imageURL;
              if (window.XMLHttpRequest)
              {
                // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                xmlhttp=new XMLHttpRequest();
              }
              else
              {
                // IE6, IE5 浏览器执行代码
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
              }
              xmlhttp.onreadystatechange=function()
              {
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                  jsonObject = JSON.parse(xmlhttp.responseText);
                  console.log(jsonObject);
                  console.log(jsonObject.data.face);
                }
              }
              xmlhttp.open("GET",userInfoURL,true);
              xmlhttp.setRequestHeader("Origin","Access-Control-Allow-Origin");
              xmlhttp.send();
            }

            // getImageURL(userInfoURL);

            // var image = document.createElement("img");
            // image.setAttribute("src", imageURL);
            // document.getElementsByTagName("body")[0].appendChild(image);

            // 样式三
            var bar = document.createElement("div");
            bar.setAttribute("class", "bar-2");
            document.getElementsByTagName("body")[0].appendChild(bar);

            // 粉丝勋章检测
            if (body.info[3][1] == "跑尅") {
              var fan = document.createElement("img");
              fan.setAttribute("class", "fanImg");
              fan.setAttribute("src", "./img/Nycan_Cat.gif");
              bar.appendChild(fan);

              // var fan = document.createElement("span");
              // fan.setAttribute("class", "fan");
              // var fanText = document.createTextNode(`粉丝团`);
              // fan.appendChild(fanText);
              // bar.appendChild(fan);
            }

            // 用户等级显示
            // var lv = document.createElement("span");
            // lv.setAttribute("class", "lv");
            // var lvText = document.createTextNode(body.info[4][0]);
            // lv.appendChild(lvText);
            // bar.appendChild(lv);

            var name = document.createElement("span");
            name.setAttribute("class", "name-2");
            name.setAttribute("style", `color: ${value};`);
            var nameText = document.createTextNode(body.info[2][1]);
            name.appendChild(nameText);
            bar.appendChild(name);

            var msg = document.createElement("span");
            msg.setAttribute("class", "msg-2");
            msgStr = body.info[1];
            msgStr.replace("", " ");
            var msgText = document.createTextNode(`: ${msgStr}`);
            msg.appendChild(msgText);

            var str = body.info[1];
            // console.log(str.indexOf("！") != -1);
            if (str.indexOf("晚上好") != -1) {
              var img = document.createElement("img");
              img.setAttribute("src", "./img/donut.gif");
              msg.appendChild(img);
            }

            if (str.indexOf("下午好") != -1) {
              var img = document.createElement("img");
              img.setAttribute("class", "textToImg");
              img.setAttribute("src", "./img/giphy.gif");
              msg.appendChild(img);
            }

            if (str.indexOf("新年好") != -1) {
              var img = document.createElement("img");
              img.setAttribute("src", "./img/NY2020-200px.png");
              msg.appendChild(img);
            }

            if (str.indexOf(":RED") != -1) {
              var img = document.createElement("img");
              img.setAttribute("class", "textToIcon");
              img.setAttribute("src", "./img/part-Red-x5.png");
              msg.appendChild(img);
            }

            if (str.indexOf(":ORANGE") != -1) {
              var img = document.createElement("img");
              img.setAttribute("class", "textToIcon");
              img.setAttribute("src", "./img/part-Orange-x5.png");
              msg.appendChild(img);
            }

            if (str.indexOf(":YELLOW") != -1) {
              var img = document.createElement("img");
              img.setAttribute("class", "textToIcon");
              img.setAttribute("src", "./img/part-Yellow-x5.png");
              msg.appendChild(img);
            }

            if (str.indexOf(":GREEN") != -1) {
              var img = document.createElement("img");
              img.setAttribute("class", "textToIcon");
              img.setAttribute("src", "./img/part-Green-x5.png");
              msg.appendChild(img);
            }

            if (str.indexOf(":JADE") != -1) {
              var img = document.createElement("img");
              img.setAttribute("class", "textToIcon");
              img.setAttribute("src", "./img/part-Jade-x5.png");
              msg.appendChild(img);
            }

            if (str.indexOf(":EGGPLANT") != -1) {
              var img = document.createElement("img");
              img.setAttribute("class", "textToIcon");
              img.setAttribute("src", "./img/part-Eggplant-x5.png");
              msg.appendChild(img);
            }

            if (str.indexOf(":BLUE") != -1) {
              var img = document.createElement("img");
              img.setAttribute("class", "textToIcon");
              img.setAttribute("src", "./img/part-Blue-x5.png");
              msg.appendChild(img);
            }

            bar.appendChild(msg);

            var mainpage = document.getElementById("mainpage");
            mainpage.insertBefore(bar, mainpage.childNodes[0]);

            // 销毁信息方法 3000+动画用时（0.4s = 400）
            function destroyMsg(s) {
              if (s == null) {
                s = 8400;
              }

              var mainpage = document.getElementById("mainpage");
              var allbar = document
                .getElementById("mainpage")
                .getElementsByClassName("bar-2");
              var count = allbar.length;
              console.log(count);
              if (count > 0) {
                setTimeout(function () {
                  mainpage.removeChild(mainpage.lastChild);
                }, s);
              } else {
              }
            }
            // 执行销毁
            destroyMsg(8400);

            // 样式二
            // var bar = document.createElement("div");
            // bar.setAttribute("class", "bar");
            // document.getElementsByTagName("body")[0].appendChild(bar);

            // var name = document.createElement("div");
            // name.setAttribute("class", "name");
            // name.setAttribute("style", `background-color: ${value};`);
            // var nameText = document.createTextNode(body.info[2][1]);
            // name.appendChild(nameText);
            // bar.appendChild(name);

            // var msg = document.createElement("div");
            // msg.setAttribute("class", "msg");
            // var msgText = document.createTextNode(body.info[1]);
            // msg.appendChild(msgText);
            // bar.appendChild(msg);

            // var mainpage = document.getElementById("mainpage");
            // mainpage.insertBefore(bar, mainpage.childNodes[0]);

            // 样式一
            // document.write(`<p><strong style="color: ${value};text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;">${body.info[2][1]}  </strong><strong style="color: #fff;text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;">${body.info[1]}</strong></p>`);

            break;
          case "SEND_GIFT":
            console.log(
              `${body.data.uname} ${body.data.action} ${body.data.num} 个 ${body.data.giftName}`
            );

            // 销毁信息方法 3000+动画用时（0.4s = 400）
            function destroyMsg2(s) {
              if (s == null) {
                s = 3400;
              }

              var app = document.getElementsByClassName("app")[0];
              var allbar = app.getElementsByClassName("bar-breaktime");
              var count = allbar.length;
              console.log(count);
              if (count > 0) {
                setTimeout(function () {
                  app.removeChild(app.lastChild);
                }, s);
              } else {
              }
            }

            function playSfx(src) {
              var player = document.getElementById("sfx");
              player.setAttribute("src", src);
            }

            //playSfx("sfx.wav");

            function giftNotice(uname, action, num, giftName) {
              var string =
                "part-Red-x5.png, part-Orange-x5.png, part-Yellow-x5.png, part-Green-x5.png, part-Jade-x5.png, part-Blue-x5.png, part-Eggplant-x5.png"; //原始数据
              var array = string.split(","); //转化为数组
              var value = array[Math.round(Math.random() * (array.length - 1))]; //随机抽取一个值

              var bar = document.createElement("div");
              bar.setAttribute("class", "bar-breaktime");

              // var closeWindow = document.createElement("input");
              // closeWindow.setAttribute("type", "button");
              // closeWindow.setAttribute("value", "X");
              // closeWindow.setAttribute("onclick", "closeWindow(this)");
              // closeWindow.setAttribute("class", "closewindow");
              // bar.appendChild(closeWindow);

              var icon = document.createElement("span");
              icon.setAttribute("class", "info-icon");
              var iconImg = document.createElement("img");
              iconImg.setAttribute("src", "gift-icon.png");
              iconImg.setAttribute("class", "info-icon-img");
              icon.appendChild(iconImg);
              bar.appendChild(icon);

              var name = document.createElement("span");
              name.setAttribute("class", "breaktime-name");
              // name.setAttribute("style", "display: inline-block; animation: 1s name-2 ease-in-out 3s;");
              // name.setAttribute("style", "display: inline-block; animation: 1s name-2 ease-in-out 7s;");
              var nameText = document.createTextNode(
                uname + "" + action + "" + num + "" + giftName
              );
              name.appendChild(nameText);
              bar.appendChild(name);

              var br = document.createElement("br");
              bar.appendChild(br);

              var msg = document.createElement("marquee");
              msg.setAttribute("behavior", "alternate");
              msg.setAttribute("class", "name-2");
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

              var app = document.getElementsByClassName("app")[0];
              app.insertBefore(bar, app.childNodes[0]);
            }

            giftNotice(
              body.data.uname,
              body.data.action,
              body.data.num,
              body.data.giftName
            );
            destroyMsg2(8400);
            break;
          case "WELCOME":
            console.log(`欢迎 ${body.data.uname}`);
            break;
          case "INTERACT_WORD":
            // 随机生成十六进制颜色
            var string =
              "#b82b1d, #eb8c11, #f7eb29, #abeb3c, #43b0a7, #5670F5, #a928b1, #6d6d6d, #E0E0E0FF"; //原始数据
            var array = string.split(","); //转化为数组
            var value = array[Math.round(Math.random() * (array.length - 1))]; //随机抽取一个值


            var bar = document.createElement("div");
            bar.setAttribute("class", "visitor");
            
            // 创建 观光造访文字
            // var title = document.createElement("span");
            // title.setAttribute("class", "visitor-name");
            // title.setAttribute("style", ``);
            // title.innerHTML = "观光造访"

            // 创建 造访者名字
            var name = document.createElement("span");
            name.setAttribute("class", "visitor-name");
            var nameText = document.createTextNode(`${body.data.uname}`);
            name.appendChild(nameText);

            // bar.appendChild(title);

            // 创建 动画图片
            // var image = document.createElement("img");
            // image.setAttribute("style", "width: 5em; height: 5em;position: absolute;transform: translate3d(150px, -40px, 0px);");
            // image.setAttribute("src", "./Package.png");

            var component = [name /* ,image */ /* ,title */];
            for (let i = 0; i < component.length; i++) {
              bar.appendChild(component[i]);
              
            }
            let app = document.getElementsByClassName("app")[0];
            app.insertBefore(bar, app.childNodes[0]);


            // 销毁信息方法 3000+动画用时（0.4s = 400）
            function destroyMsg3(s) {
              if (s == null) {
                s = 3400;
              }

              var app = document.getElementsByClassName("app")[0];
              var allbar = app.getElementsByClassName("visitor");
              var count = allbar.length;
              console.log(count);
              if (count > 0) {
                setTimeout(function () {
                  app.removeChild(app.lastChild);
                }, s);
              } else {
              }
            }
            // 执行销毁
            destroyMsg3(8400);

            
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



