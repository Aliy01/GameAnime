"use strict";

var controllSer = document.querySelector(".service-controll"),
    setting = document.querySelector(".fa-pause"),
    pauseServe = document.querySelector(".pause-service"),
    gameSet = document.querySelector(".setting");
setting.addEventListener("click", function () {
  gameSet.style.display = "fixed";
});