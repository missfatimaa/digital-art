/////actors image
let $ = document
let image = $.querySelector(".img-slider")
let prevBtn = $.querySelector(".prev")
let nextBtn = $.querySelector(".next")
let imgSrc = ['/images/Robert-Downey-Jr.-Smile.jpg', '/images/sandra.jpg', '/images/bradPittjpg.jpg','/images/cate.jpg']
let imgIndex = 0


function prevImage() {
    imgIndex--
    if (imgIndex < 0) {
        imgIndex = imgSrc.length - 1
    }
    console.log("prev");
    image.setAttribute("src", imgSrc[imgIndex])
}

function nextImage() {
    console.log("next");
    imgIndex++
    if (imgIndex > imgSrc.length - 1) {
        imgIndex = 0
    }
    image.setAttribute("src", imgSrc[imgIndex])

}
setInterval(nextImage, 3000)
prevBtn.addEventListener("click", prevImage)
nextBtn.addEventListener("click", nextImage)


