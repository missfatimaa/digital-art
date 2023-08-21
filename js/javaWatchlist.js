let $ = document
let heartIcon = $.querySelectorAll(".fa-heart")
let heartLike = $.querySelectorAll(".watchlist-box div a")






window.addEventListener("DOMContentLoaded", function () {
    $.documentElement.style.setProperty("--second-color", localStorage.getItem("color"))
})

let flag = 0
function firstClick(item) {
    item.firstChild.classList.remove("far")
    item.firstChild.classList.add("fa")
    flag = 1
}
function secondClick(item) {
    item.firstChild.classList.remove("fa")
    item.firstChild.classList.add("far")
    flag = 0
}
heartLike.forEach(function (item) {
    item.addEventListener("click", function (event) {
        event.preventDefault()
        if (flag === 1) {
            secondClick(item)
        } else if (flag === 0) {
            firstClick(item)
        }
    })
})

/////brightness
let rangeItem = $.getElementById("range")
rangeItem.addEventListener("change", changeHandler)
let zero = $.querySelector(".far")
let hundred = $.querySelector(".fas")
let brightnessFilter = $.querySelector(".brightnessFilter")
let brightnessBox = $.querySelector(".brightness-box")

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
// themes color
let themesBtn = $.querySelectorAll(".themes-btn")

themesBtn.forEach(function (item) {
    item.addEventListener('click', function (event) {
        let res = event.target.dataset.color
        localStorage.setItem("color", res)
        $.documentElement.style.setProperty("--second-color", localStorage.getItem("color"))
    })
})