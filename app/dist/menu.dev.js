"use strict";

var beginGame = document.querySelector("#begin"),
    menu = document.querySelector("#menu"),
    menuIcon = document.querySelectorAll(".menu-icons"),
    startGame = document.querySelector(".btn-outline-primary"),
    settingsGame = document.querySelector(".btn-outline-warning"),
    exitGame = document.querySelectorAll(".fa-arrow-right-from-bracket"),
    settings = document.querySelector(".container"),
    cancel = document.querySelector(".fa-xmark");
cancel.addEventListener("click", function () {
  settings.style.display = "none";
  gameSet.style.display = "none";
});
settingsGame.addEventListener("click", function () {
  settings.style.display = "flex";
  settings.style.position = "absolute";
  menuIcon.style.position = "relative";
});
startGame.addEventListener("click", function () {
  start.style.display = "flex";
  start.style.position = "absolute";
  controllers.style.display = "flex";
  menu.style.display = "none";
  car.style.position = "relative";
  controllSer.style.display = "flex";
  controllSer.style.position = "relative";
});
exitGame.addEventListener("click", function () {
  beginGame.style.display = "flex";
  menu.style.display = "none";
  start.style.display = "none";
  pauseServe.style.display = "none";
  controllers.style.display = "none";
  controllSer.style.display = "none";
  btnBegin.style.position = "relative";
  btnBegin.style.top = 350 + "px";
});