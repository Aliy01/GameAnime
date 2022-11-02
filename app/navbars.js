const controllSer = document.querySelector(".service-controll"),
    setting = document.querySelector(".fa-pause"),
    pauseServe = document.querySelector(".pause-service"),
    gameSet = document.querySelector(".setting");

setting.addEventListener("click", () => {

    gameSet.style.display = "flex"
    pauseServe.style.display = "flex"
    pauseServe.style.flexDirection = "column"
    pauseServe.style.position = "absolute"
    pauseServe.style.marginTop = 250 + "px"

})