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
let videoSrc = ['/video/Oppenheimer.mp4', '/video/jumanji.mp4', '/video/showing up.mp4', '/video/extraction.mp4']
let posters = ['/images/oppenheimer-movie-poster.jpg', '/images/jumanji.jpg', '/images/showing.jpg', '/images/extraction.jpg']
let imdbArray = ['⭐8.6', '⭐6.9', '⭐6.4', '⭐6.8']
let timeLineArray = ['3h', '1h 59m', '1h 48m', '1h 56m']
let genreArray = ['Drama, Thriller', 'Adventure, Comedy', 'Drama, Comedy', 'Action, Thriller']
let movieYearArray = ['2023', '2017', '2022', '2020']
let movieNameArray = ['Oppenheimer', 'Jumanji (Welcome To The Jungle)', 'Showing Up', 'Extraction']
const movieDesArray = [
    'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb.',
    'When four students play with a magical video game, they are drawn to the jungle world of Jumanji, where they are trapped as their avatars. To return to the real world, they must finish the game.',
    'Showing Up is a 2022 American comedy-drama film co-written and directed by Kelly Reichardt, in her fourth collaboration with actress Michelle Williams. The film follows a sculptor managing the competing attentions of her art, job, family, and friendships.',
    'A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord. But in the murky underworld of weapons dealers and drug traffickers, an already deadly mission approaches the impossible.'
];
let videoIndex = 0
let rightMovie = $.querySelector(".right-movie img")
let leftMovie = $.querySelector(".left-movie img")
let movieName = $.querySelector("#movie-name")
let movieNameMob = $.querySelector("#movie-name-mobile")
let posterIndex = 0
let imdb = $.querySelector(".movie-info :first-child")
let imdbMob = $.querySelector(".movie-info-mobile :first-child")
let timeLine = $.querySelector(".movie-info :nth-child(2)")
let timeLineMob = $.querySelector(".movie-info-mobile :nth-child(2)")
let genre = $.querySelector(".movie-info :nth-child(4)")
let genreMob = $.querySelector(".movie-info-mobile :nth-child(4)")
let movieYear = $.querySelector(".movie-info :nth-child(6)")
let movieYearMob = $.querySelector(".movie-info-mobile :nth-child(6)")
let leftArrow = $.querySelector(".fa-chevron-left")
let rightArrow = $.querySelector(".fa-chevron-right")
let movieDesMob = $.querySelector(".movie-info-box-mobile p")
let movieDes = $.querySelector(".movie-info-box p")

window.addEventListener("DOMContentLoaded", function () {
    $.documentElement.style.setProperty("--second-color", localStorage.getItem("color"))
    video.muted = true;
})
window.addEventListener("load", function () {
    video.setAttribute("src", videoSrc[videoIndex])
    video.play()
    rightMovie.setAttribute("src", posters[videoIndex + 1])
    leftMovie.setAttribute("src", posters[posters.length - 1])
})

function prevVideo(event) {
    event.preventDefault()
    playerIcon.classList.remove("fa-play-circle")
    playerIcon.classList.add("fa-pause-circle")
    playerIcon.id = "pause-icon"
    videoIndex--
    if (videoIndex < 0) {
        videoIndex = videoSrc.length - 1
    }
    console.log("prev");
    video.setAttribute("src", videoSrc[videoIndex])
    video.play()
    leftMovie.style.transform = "scale(1)"
    movieName.innerHTML = movieNameArray[videoIndex]
    movieNameMob.innerHTML = movieNameArray[videoIndex]
    imdb.innerHTML = imdbArray[videoIndex]
    imdbMob.innerHTML = imdbArray[videoIndex]
    timeLine.innerHTML = timeLineArray[videoIndex]
    timeLineMob.innerHTML = timeLineArray[videoIndex]
    genre.innerHTML = genreArray[videoIndex]
    genreMob.innerHTML = genreArray[videoIndex]
    movieYear.innerHTML = movieYearArray[videoIndex]
    movieYearMob.innerHTML = movieYearArray[videoIndex]
    movieDes.innerHTML = movieDesArray[videoIndex]
    movieDesMob.innerHTML = movieDesArray[videoIndex]
    // movieDes.innerHTML, movieDesMob.innerHTML = movieDesArray[videoIndex]
    // leftMovie.setAttribute("src", posters[videoIndex-1])
    // rightMovie.setAttribute("src", posters[videoIndex])
}

function nextVideo(event) {
    event.preventDefault()
    playerIcon.classList.remove("fa-play-circle")
    playerIcon.classList.add("fa-pause-circle")
    playerIcon.id = "pause-icon"
    console.log("next");
    videoIndex++
    if (videoIndex > videoSrc.length - 1) {
        videoIndex = 0
    }
    video.setAttribute("src", videoSrc[videoIndex])
    video.play()
    rightMovie.style.transform = "scale(1)"
    movieName.innerHTML = movieNameArray[videoIndex]
    movieNameMob.innerHTML = movieNameArray[videoIndex]
    imdb.innerHTML = imdbArray[videoIndex]
    imdbMob.innerHTML = imdbArray[videoIndex]
    timeLine.innerHTML = timeLineArray[videoIndex]
    timeLineMob.innerHTML = timeLineArray[videoIndex]
    genre.innerHTML = genreArray[videoIndex]
    genreMob.innerHTML = genreArray[videoIndex]
    movieYear.innerHTML = movieYearArray[videoIndex]
    movieYearMob.innerHTML = movieYearArray[videoIndex]
    movieDes.innerHTML = movieDesArray[videoIndex]
    movieDesMob.innerHTML = movieDesArray[videoIndex]
    // leftMovie.setAttribute("src", posters[videoIndex - 1])
    // rightMovie.setAttribute("src", posters[videoIndex + 1])
}

rightArrow.addEventListener("click", nextVideo)
leftArrow.addEventListener("click", prevVideo)
rightMovie.addEventListener("click", nextVideo)
leftMovie.addEventListener("click", prevVideo)
rightMovie.addEventListener("mouseenter", function () {
    rightMovie.style.transform = "scale(1.05)"
})
rightMovie.addEventListener("mouseleave", function () {
    rightMovie.style.transform = "scale(1)"
})
leftMovie.addEventListener("mouseenter", function () {
    leftMovie.style.transform = "scale(1.05)"
})
leftMovie.addEventListener("mouseleave", function () {
    leftMovie.style.transform = "scale(1)"
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