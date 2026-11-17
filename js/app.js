/* 页面启动入口 */
document.addEventListener("DOMContentLoaded", function () {
  if (window.GESP_LEVEL && window.Gesp) {
    window.Gesp.boot(window.GESP_LEVEL);
  }
});
