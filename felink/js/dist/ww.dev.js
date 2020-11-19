"use strict";

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
        "left": "-360px"
      }, 500);
      a = 0;
    } else {
      $(".a11").animate({
        "left": "-520px"
      }, 500);
      a = 1;
    }
  });
});