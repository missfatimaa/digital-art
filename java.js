let $ = document
let morfyGif = $.querySelector("#oppenheimer")
let clone = $.querySelector("#clone")
let camp = $.querySelector("#camp")
let email = $.querySelector("#Email")
let subscribe = $.querySelector("#subBtn")
let emailSec = $.querySelector(".email-input")

morfyGif.addEventListener('mouseenter', function () {
    morfyGif.src = "/images/morphy3.webp"
})

morfyGif.addEventListener('mouseleave', function () {
    morfyGif.src = "/images/morphy2.jpg"
})

clone.addEventListener('mouseenter', function () {
    clone.src = "/images/cloned.gif"
})
clone.addEventListener('mouseleave', function () {
    clone.src = "/images/cloned.png"
})

camp.addEventListener('mouseenter', function () {
    camp.src = "/images/camp.gif"
})
camp.addEventListener('mouseleave', function () {
    camp.src = "/images/camp.jpg"
})
email.addEventListener("focus", function () {
    emailSec.classList.add("box-shadow")
})
email.addEventListener("focusout", function () {
    emailSec.classList.remove("box-shadow")
    emailSec.classList.remove("warning-shadow")

})

subscribe.addEventListener("click", function (event) {
    event.preventDefault()
    console.log(email.value);
    if (email.value === '') {
        email.placeholder = "Please Enter Email First !!"
        emailSec.classList.add("warning-shadow")
        email.addEventListener("focus", function () {
            emailSec.classList.remove("warning-shadow")
        })
    }
    else {
        alert(`Dear ${email.value},\rGlad to have you here 🥰🔥`)
        email.value = ""
    }
})

// rangeSliderPart
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
        $.documentElement.style.setProperty("--second-color", res)
    })
})