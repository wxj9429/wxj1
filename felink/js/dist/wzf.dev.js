"use strict";

window.onresize = function add() {
  var iw = window.innerWidth;
  var fs = iw * 100 / 1200;
  document.getElementsByTagName("html")[0].style.fontSize = fs + "px";
};

window.onresize();
$(function () {
  $(".a9").click(function () {
    $(this).css("background", "rgb(0, 107, 126)");
  }).mouseenter(function () {
    $(this).css("background", "#2A3A48");
  });
  $(".a8").children("li").mouseenter(function () {
    $(this).css("background", "rgb(0, 107, 126)");
  }).mouseleave(function () {
    $(this).css("background", "#2A3A48");
  });
  $(".a7").mouseenter(function () {
    $(this).css("background", "#2a3a48");
  }).mouseleave(function () {
    $(this).css("background", "#2A3A48");
  });
  var a = 1;
  $("#btn").click(function () {
    if (a) {
      $(".a11").animate({
        "left": "-460px"
      }, 500);
      a = 0;
    } else {
      $(".a11").animate({
        "left": "-630px"
      }, 500);
      a = 1;
    }
  });
});