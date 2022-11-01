"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var beginGame = document.querySelector("#begin"),
      menuIcon = document.querySelectorAll(".menu-icon"),
      btnBegin = document.querySelector(".btn-primary"),
      menu = document.querySelector("#menu"),
      startGame = document.querySelector(".btn-outline-primary"),
      settingsGame = document.querySelector(".btn-outline-warning"),
      exitGame = document.querySelector(".fa-arrow-right-from-bracket"),
      settings = document.querySelector(".container"),
      start = document.querySelector("#start"),
      cancel = document.querySelector(".fa-xmark"),
      car = document.querySelector(".car"),
      left = document.querySelector(".fa-angle-left"),
      right = document.querySelector(".fa-angle-right"),
      setting = document.querySelector(".fa-pause"),
      controllers = document.querySelector("#controllers"),
      controllSet = document.querySelector(".service-controll"),
      pauseServe = document.querySelector(".pause-service");
  cancel.addEventListener("click", function () {
    settings.style.display = "none";
  });
  setting.addEventListener("click", function () {
    pauseServe.style.display = "flex";
    pauseServe.style.position = "relative";
  });
  settingsGame.addEventListener("click", function () {
    settings.style.display = "flex";
    settings.style.position = "absolute";
  });
  btnBegin.addEventListener('click', function () {
    menu.style.display = "flex";
    beginGame.style.display = "none";
    beginGame.style.transition = ".5s";
  });
  startGame.addEventListener("click", function () {
    start.style.display = "flex";
    start.style.position = "absolute";
    controllSet.style.display = "flex";
    controllers.style.display = "flex";
    menu.style.display = "none";
  });
  exitGame.addEventListener("click", function () {
    beginGame.style.display = "flex";
    menu.style.display = "none";
    start.style.display = "none";
    pauseServe.style.display = "none";
    controllers.style.display = "none";
    controllSet.style.display = "none";
    btnBegin.style.position = "relative";
    btnBegin.style.top = 350 + "px";
  });
});