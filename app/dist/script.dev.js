"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var menuIcon = document.querySelectorAll(".menu-icon"),
      btnBegin = document.querySelector(".btn-primary");
  btnBegin.addEventListener('click', function () {
    menu.style.display = "flex";
    beginGame.style.display = "none";
    beginGame.style.transition = ".5s";
    controllSer.style.display = "none";
  });
});