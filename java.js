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
        email.value=""
    }
})