let controllers = document.querySelector("#controllers"),
    left = document.querySelector(".fa-angle-left"),
    right = document.querySelector(".fa-angle-right"),
    feildWidth = getComputedStyle(start).width.slice(0, 4),
    carSize = getComputedStyle(car).fontSize.slice(0, 2);

let GoCount = 0;

if (carSize > feildWidth) {
    right.addEventListener("click", () => {
        start.style.position = "absolute"
        while (GoCount <= feildWidth) {
            car.style.left = GoCount + "px";
            GoCount = GoCount + 10;
            break;
        }
        console.log(GoCount);
    })
}
let BackCount = 10;
if (GoCount >= BackCount) {
    left.addEventListener("click", () => {
        start.style.position = "absolute"
        while (BackCount != 0) {
            console.log(GoCount);
            car.style.right = (BackCount + "px")
            GoCount = BackCount - 50;
            break;
        }
    })
}