/////actors image
let $ = document
let image = $.querySelector(".img-slider")
let prevBtn = $.querySelector(".prev")
let nextBtn = $.querySelector(".next")
let imgSrc = ['/images/Robert-Downey-Jr.-Smile.jpg', '/images/sandra.jpg', '/images/bradPittjpg.jpg', '/images/cate.jpg', '/images/keanu.webp', '/images/anne.webp', '/images/Benedict.png']
let imgIndex = 0
let actorsNameArray = ['Robert Downey Jr.', 'Sandra Bullock', 'Brad Pitt', 'Cate Blanchett', 'Keanu Reeves', 'Anne Hathaway', 'Benedict Cumberbatch']
let actorsName = $.querySelector(".txt p")

function prevImage() {
    imgIndex--
    if (imgIndex < 0) {
        imgIndex = imgSrc.length - 1
    }
    console.log("prev");
    image.setAttribute("src", imgSrc[imgIndex])
    actorsName.innerHTML = actorsNameArray[imgIndex]
}

function nextImage() {
    console.log("next");
    imgIndex++
    if (imgIndex > imgSrc.length - 1) {
        imgIndex = 0
    }
    image.setAttribute("src", imgSrc[imgIndex])
    actorsName.innerHTML = actorsNameArray[imgIndex]
}
setInterval(nextImage, 5000)
prevBtn.addEventListener("click", prevImage)
nextBtn.addEventListener("click", nextImage)


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
