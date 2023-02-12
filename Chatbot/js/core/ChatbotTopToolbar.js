
export class ChatbotTopToolbar {
  id = "toptoolbar";
  toptoolbar;
  icon;
  panel;
  toptoolbar_style_class = "toolbar";
  icon_style_class = "toolbar-icon";
  icon_image_style_class = "toolbar-icon-img";
  panel_style_class = "toolbar-panel";

  constructor() { }

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

  setCustomIcon() { }

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
