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
let videoSrc = ['/video/Oppenheimer.mp4', '/video/thyron.mp4', '/video/theater.mp4', '/video/Heart_of_Stone.mp4', '/video/extraction.mp4', '/video/freedom.mp4']
let posters = ['/images/oppenheimer-movie-poster.jpg', '/images/cloned poster.jpg', '/images/Theater poster.jpg', '/images/heart-of-stone.jpg', '/images/extraction.jpg', '/images/freedom.jpg']
let imdbArray = ['⭐8.6', '⭐6.7', '⭐7.5', '⭐5.7', '⭐7', '⭐7.8']
let timeLineArray = ['3h', '2h 2m', '1h 33m', '2h 3m', '2h 3m', ' 2h 15m']
let genreArray = ['Drama, Thriller', 'Mystery, Fantasy', 'Comedy', 'Mystery', 'Action, Thriller', 'Drama, Thriller']
let movieYearArray = ['2023', '2023', '2023', '2023', '2023', '2023']
let movieNameArray = ['Oppenheimer', 'They Cloned Tyrone', 'Theater Camp', 'Heart of Stone', 'Extraction 2', 'Sound of Freedom']
const movieDesArray = [
    'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb.',
    'They Cloned Tyrone is a 2023 American science fiction comedy mystery film directed by Juel Taylor, in his feature film directorial debut, from a screenplay he wrote with Tony Rettenmaier.',
    'Theater Camp is a 2023 American comedy film directed by Molly Gordon and Nick Lieberman in both of their respective feature directorial debuts, from a screenplay by Gordon, Lieberman, Ben Platt and Noah Galvin.',
    'Rachel Stone is an intelligence operative, the only woman who stands between her powerful global peacekeeping organization and the loss of its most valuable -- and dangerous -- asset.',
    'Extraction 2 (stylised on-screen as Extraction II) is a 2023 American action thriller film directed by Sam Hargrave and written by Joe Russo, based on the graphic novel Ciudad by Ande Parks, Joe Russo, Anthony Russo, Fernando León González, and Eric Skillman.',
    'After rescuing a boy from ruthless child traffickers, a federal agent learns the boys sister is still captive and decides to embark on a dangerous mission to save her.With time running out, he quits his job and journeys deep into the Colombian jungle, putting his life on the line to free her from a fate worse than death.'
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
let movieInfomob = $.querySelector(".movie-info-box-mobile")
let movieDes = $.querySelector(".movie-info-box p")
let movieInfo = $.querySelector(".movie-info-box")
let playerIconBox = $.querySelector(".player-icons")
let tvFrame = $.querySelector(".tv-frame")

let interval = setInterval(function () {
    playerIconBox.style.transform = "scale(0)"
}, 3000)

window.addEventListener("DOMContentLoaded", function () {
    $.documentElement.style.setProperty("--second-color", localStorage.getItem("color"))
    video.muted = true;
    interval
    videoAnimation()
})
window.addEventListener("load", function () {
    video.setAttribute("src", videoSrc[videoIndex])
    video.play()
    rightMovie.setAttribute("src", posters[videoIndex + 1])
    leftMovie.setAttribute("src", posters[posters.length - 1])
})

function videoAnimation() {
    video.addEventListener("play", function () {
        video.style.animation = 'Slider .2s ease-in-out'
        movieInfo.style.animation = 'SliderTxt .6s ease-in'
        movieInfomob.style.animation = 'SliderTxtMob 1s ease-out'
    })
    video.style.animation = 'none'
    movieInfo.style.animation = 'none'
    movieInfomob.style.animation = 'none'
    interval
}

function movieInfoFiller() {
    playerIcon.classList.remove("fa-play-circle")
    playerIcon.classList.add("fa-pause-circle")
    playerIcon.id = "pause-icon"
    video.setAttribute("src", videoSrc[videoIndex])
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

}
function prevVideo(event) {
    event.preventDefault()
    videoAnimation()
    videoIndex--
    if (videoIndex < 0) {
        videoIndex = videoSrc.length - 1
    }
    console.log("prev");
    movieInfoFiller()
    video.play()
    leftMovie.style.transform = "scale(1)"
    // movieDes.innerHTML, movieDesMob.innerHTML = movieDesArray[videoIndex]
    // leftMovie.setAttribute("src", posters[videoIndex-1])
    // rightMovie.setAttribute("src", posters[videoIndex])
}

function nextVideo(event) {
    event.preventDefault()
    videoAnimation()
    console.log("next");
    videoIndex++
    if (videoIndex > videoSrc.length - 1) {
        videoIndex = 0
    }
    movieInfoFiller()
    video.play()
    rightMovie.style.transform = "scale(1)"
    // leftMovie.setAttribute("src", posters[videoIndex - 1])
    // rightMovie.setAttribute("src", posters[videoIndex + 1])
}
tvFrame.addEventListener("mouseenter", function () {
    playerIconBox.style.transform = "scale(1)"
    clearInterval(interval)
})

tvFrame.addEventListener("mouseleave", function () {
    playerIconBox.style.transform = "scale(0)"
})

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