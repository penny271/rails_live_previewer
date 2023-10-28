// ! NG 別ページから移動して下記を実行しようとしても発火しない
// $(function () {
// $(".logo-mark").on("click", function () {
// console.log("abc");
// // $("#sidebar").toggle("hidden");
// $("#sidebar").toggle("lg:hidden");
// });
// });
import $ from "jquery";

//- 青木 ★要更新 - 20231015
// ¥ turbo:loadイベントは、Turboがページを読み込むたびに発生します。
document.addEventListener("DOMContentLoaded", function () {
  const htmlInput = document.getElementById("live_htmlInput");
  const cssInput = document.getElementById("live_cssInput");
  const updateBtn = document.getElementById("live_updatePreview");
  const previewFrame = document.getElementById("live_previewFrame");

  updateBtn.addEventListener("click", function () {
    const htmlContent = htmlInput.value;
    const cssContent = `<style>${cssInput.value}</style>`;

    const finalContent = `${htmlContent}${cssContent}`;

    previewFrame.contentWindow.document.open();
    previewFrame.contentWindow.document.write(finalContent);
    previewFrame.contentWindow.document.close();
  });
});
