window.addEventListener('DOMContentLoaded', function() {
    const beginGame = document.querySelector("#begin"),
        menuIcon = document.querySelectorAll(".menu-icon"),
        btnBegin = document.querySelector(".btn-primary"),
        menu = document.querySelector("#menu"),
        startGame = document.querySelector(".btn-outline-primary"),
        settingsGame = document.querySelector(".btn-outline-warning"),
        exitGame = document.querySelector(".btn-outline-danger"),
        settings = document.querySelector(".container"),
        start = document.querySelector("#start"),
        cancel = document.querySelector(".fa-xmark"),
        car = document.querySelector(".car"),
        left = document.querySelector(".fa-angle-left"),
        right = document.querySelector(".fa-angle-right"),
        setting = document.querySelector(".fa-gear"),
        controllers = document.querySelector("#controllers"),
        controllSet = document.querySelector(".content");


    cancel.addEventListener("click", () => {
        settings.style.display = "none"

    })
    setting.addEventListener("click", () => {
        controllSet.style.display = "flex"

    })
    settingsGame.addEventListener("click", () => {
        settings.style.display = "flex"
        settings.style.position = "relative"

    })
    btnBegin.addEventListener('click', () => {
        menu.style.display = "flex"
        beginGame.style.display = "none"
        beginGame.style.transition = ".5s"
    })
    startGame.addEventListener("click", () => {
        start.style.display = "flex"
        start.style.position = "absolute"
        menu.style.display = "none"
        controllers.style.display = "flex"
    });

    exitGame.addEventListener("click", () => {
        beginGame.style.display = "flex"
        menu.style.display = "none"

    })








})