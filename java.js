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
})

subscribe.addEventListener("click", function (event) {
    event.preventDefault()
    console.log(email.value);
    Email.send({
        Host: "smtp.gmail.com",
        Username: "<sender’s email address>",
        Password: "<email password>",
        To: '<recipient’s email address>',
        From: "<sender’s email address>",
        Subject: "<email subject>",
        Body: "<email body>",
    }).then(
        message => alert("mail sent successfully")
    );
})