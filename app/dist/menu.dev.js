"use strict";

var beginGame = document.querySelector("#begin"),
    menu = document.querySelector("#menu"),
    startGame = document.querySelector(".btn-outline-primary"),
    settingsGame = document.querySelector(".btn-outline-warning"),
    exitGame = document.querySelector(".fa-arrow-right-from-bracket"),
    settings = document.querySelector(".container"),
    cancel = document.querySelector(".fa-xmark");
cancel.addEventListener("click", function () {
  settings.style.display = "none";
});
settingsGame.addEventListener("click", function () {
  settings.style.display = "flex";
  settings.style.position = "absolute";
});
startGame.addEventListener("click", function () {
  start.style.display = "flex";
  start.style.position = "absolute";
  controllSer.style.display = "flex";
  controllers.style.display = "flex";
  menu.style.display = "none";
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