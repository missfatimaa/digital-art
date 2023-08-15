let $ = document
let rangeItem = $.getElementById("range")
rangeItem.addEventListener("change", changeHandler)
let zero = $.querySelector(".dark")
let hundred = $.querySelector(".light")
let brightnessFilter = $.querySelector(".brightnessFilter")
let brightnessBox = $.querySelector(".brightness-box")
let video = $.querySelector("#video")
let playerIcon = $.querySelector(".video-icon")
let volumeUp = $.querySelector(".volume-up i")
let mute = $.querySelector(".mute i")
let videoSrc = ['/video/Oppenheimer.mp4', '/video/jumanji.mp4', '/images/bradPittjpg.jpg', '/images/cate.jpg', '/images/keanu.webp', '/images/anne.webp', '/images/Benedict.png','/images/Golshifteh Farahani.jpg']
let videoIndex = 0


window.addEventListener("DOMContentLoaded", function () {
    $.documentElement.style.setProperty("--second-color", localStorage.getItem("color"))
    video.muted = true;
})
window.addEventListener("load", function () {
    video.play()

})

function changeHandler(event) {
    brightnessFilter.style.filter = "brightness(" + event.target.value + "%)"
}
zero.addEventListener("click", zeroHandler)
hundred.addEventListener("click", hundredHandler)

function zeroHandler() {
    brightnessFilter.style.filter = "brightness(30%)"
}
function hundredHandler() {
    brightnessFilter.style.filter = "brightness(100%)"

}
rangeItem.classList.add("unscaled")

brightnessBox.addEventListener("mouseenter", function () {
    rangeItem.classList.remove("unscaled")
    rangeItem.classList.add("scaled")
    zero.style.transform = "translateX(0)"
    hundred.style.transform = "translateX(0)"
})
brightnessBox.addEventListener("mouseleave", function () {
    rangeItem.classList.remove("scaled")
    rangeItem.classList.add("unscaled")
    zero.style.transform = "translateX(100px)"
    hundred.style.transform = "translateX(-160px)"
})

/////////////////video
playerIcon.addEventListener("click", function (event) {
    event.preventDefault()
    if (playerIcon.id === "play-icon") {
        playerIcon.classList.remove("fa-play-circle")
        playerIcon.classList.add("fa-pause-circle")
        playerIcon.id = "pause-icon"
        video.play()
    } else if (playerIcon.id === "pause-icon") {
        playerIcon.classList.remove("fa-pause-circle")
        playerIcon.classList.add("fa-play-circle")
        playerIcon.id = "play-icon"
        video.pause()
    }
})
///////////////////////video volume
volumeUp.addEventListener("click", function (event) {
    event.preventDefault()
    video.muted = false;
    volumeUp.classList.remove("volume-inactive")
    volumeUp.classList.add("volume-active")
    mute.classList.remove("volume-active")
    mute.classList.add("volume-inactive")
})
mute.addEventListener("click", function (event) {
    event.preventDefault()
    video.muted = true;
    volumeUp.classList.remove("volume-active")
    volumeUp.classList.add("volume-inactive")
    mute.classList.remove("volume-inactive")
    mute.classList.add("volume-active")
})