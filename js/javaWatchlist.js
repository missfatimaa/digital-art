let $ = document
let heartIcon = $.querySelectorAll(".fa-heart")
let heartLike = $.querySelectorAll(".watchlist-box div a")
let searchBtn = $.querySelector("#search-button")
let watchlistBoxes = $.querySelector(".watchlist-boxes")
let createBtn = $.querySelector("#create-btn")
let searchBox = $.querySelector("#search-box")
let watchlistForm = $.querySelector(".watchlist-form")
let nameInput = $.querySelector("#name-input")
let titleInput = $.querySelector("#title-input")
let age = $.querySelector("#age")
let searchInput = $.querySelector("#search-input")
// let shelfArrow = $.querySelector(".shelf-arrow")


window.addEventListener("DOMContentLoaded", function () {
    $.documentElement.style.setProperty("--second-color", localStorage.getItem("color"))
    heartLike.forEach(function (item) {
        item.style.display = "none"
    })
    // watchlistBoxes.parentElement.style.display = "none"
})
///////////////API


// function showUser(response) {
//     console.log(response);
//     // alert(`The user name is ${response.data.name}`);
// }

// let url = "https://streaming-availability.p.rapidapi.com/search/title";
// axios.get(url).then(showUser);
/////////////////

let flag = 0
let guideCounter = 0
function likedMovie(item, newWatchlist) {
    console.log("kkk");
    if (guideCounter === 0) {
        $.querySelector("#guide").remove()
    }
    guideCounter++
    let newFilm = $.createElement("div")
    let newFilmImg = $.createElement("img")
    newFilmImg.setAttribute("src", item.previousElementSibling.previousElementSibling.getAttribute("src"))
    newFilmImg.style.border = "2px solid var(--second-color)"
    let newFilmName = $.createElement("p")
    newFilmName.style.color = "var(--second-color)"
    let sibling = item.previousElementSibling
    newFilmName.innerHTML = sibling.innerHTML
    let filmRemoveIcon = $.createElement("a")
    filmRemoveIcon.classList.add("film-remove")
    filmRemoveIcon.setAttribute("href", "#")
    filmRemoveIcon.innerHTML = '<i class="fas fa-trash-alt"></i>'
    filmRemoveIcon.style.color = "var(--second-color)"
    newFilm.style.justifyContent = "space-between"
    newFilm.append(newFilmImg, newFilmName, filmRemoveIcon)
    filmRemoveIcon.addEventListener("click", function (event) {
        event.preventDefault()
        newFilm.remove()
        newFilm.style.justifyContent = "space-between"
    })
    newWatchlist.appendChild(newFilm)
}
function movieMaker(newWatchlist) {
    if (guideCounter === 0) {
        $.querySelector("#guide").remove()
    }
    guideCounter++
    let newFilm = $.createElement("div")
    let newFilmImg = $.createElement("img")
    newFilmImg.style.border = "2px solid var(--second-color)"
    newFilmImg.setAttribute("src", "/images/extraction.jpg")
    let newFilmName = $.createElement("p")
    newFilmName.style.color = "var(--second-color)"
    newFilmName.innerHTML = searchInput.value
    let filmRemoveIcon = $.createElement("a")
    filmRemoveIcon.classList.add("film-remove")
    filmRemoveIcon.setAttribute("href", "#")
    filmRemoveIcon.innerHTML = '<i class="fas fa-trash-alt"></i>'
    filmRemoveIcon.style.color = "var(--second-color)"
    newFilm.style.justifyContent = "space-between"
    newFilm.append(newFilmImg, newFilmName, filmRemoveIcon)
    filmRemoveIcon.addEventListener("click", function () {
        newFilm.remove()
        newFilm.style.justifyContent = "space-between"

    })
    newWatchlist.appendChild(newFilm)
    searchInput.value = ''
}

function watchlistMaker() {
    console.log("sss");
    guideCounter = 0
    $.querySelectorAll(".watchlist-box div").forEach(function (div) {
        div.style.justifyContent = "space-between"
    })
    heartLike.forEach(function (item) {
        item.style.display = "block"
        item.addEventListener("click", function (event) {
            console.log(flag);
            event.preventDefault()
            item.firstChild.classList.remove("far")
            item.firstChild.classList.add("fa")
            flag = 0
            item.style.transform = "scale(1.5)"

            setInterval(function () {
                item.style.transform = "scale(1)"
                item.firstChild.classList.remove("fa")
                item.firstChild.classList.add("far")
            }, 400);
            likedMovie(item, watchlistBoxes.firstChild)            
            // setTimeout(watchlistMaker(),200)
        })
        // return
    })
    let newWatchlist = $.createElement("div")
    newWatchlist.classList.add("watchlist-box")
    newWatchlist.style.backgroundColor = "var(--first-color)"
    let newTitle = $.createElement("h6")
    newTitle.style.color = "var(--second-color)"
    let filmRemoveIcon = $.createElement("a")
    filmRemoveIcon.classList.add("film-remove")
    filmRemoveIcon.setAttribute("href", "#")
    filmRemoveIcon.innerHTML = '<i class="fas fa-trash"></i>'
    filmRemoveIcon.style.color = "var(--boxes-color)"
    newTitle.innerHTML = `${titleInput.value} / ${nameInput.value}(${age.value})`
    newTitle.style.display = "flex"
    newTitle.style.justifyContent = "space-between"
    newTitle.append(filmRemoveIcon)
    newWatchlist.append(newTitle)
    filmRemoveIcon.addEventListener("click", function (event) {
        event.preventDefault()
        let confirmAnswer = confirm("Really Wanna Miss This WatchList?? ⚠")
        if (confirmAnswer === true) {
            newWatchlist.remove()
        } else {
            void (0)
        }
    })
    // movieMaker(newWatchlist)
    let watchlistGuide = $.createElement("p")
    watchlistGuide.style.color = "var(--second-color)"
    watchlistGuide.innerHTML = "select a movie in Searchbar :)"
    watchlistGuide.setAttribute("id", "guide")
    newWatchlist.append(watchlistGuide)
    watchlistBoxes.prepend(newWatchlist)
    nameInput.value = ""
    titleInput.value = ""
}
// let clickCounter = 0
searchBtn.addEventListener("click", function () {
    if (searchInput.value === '') {
        searchInput.placeholder = "Search something!!"
    }
    else {
        // if (clickCounter === 0) {
        //     // watchlistMaker()
        //     movieMaker
        // }
        // else {
        //     movieMaker(watchlistBoxes.firstChild)
        // }
        movieMaker(watchlistBoxes.firstChild)
    }
    // clickCounter++
})
createBtn.addEventListener("click", function (event) {
    event.preventDefault()
    if (nameInput.value === '' || titleInput.value === '' || age.value === '') {
        nameInput.placeholder = "Please Enter Name First !!"
        titleInput.placeholder = "Please Enter Title First !!"
        nameInput.classList.add("warning-shadow")
        titleInput.classList.add("warning-shadow")
        age.classList.add("warning-shadow")
        nameInput.addEventListener("focus", function () {
            nameInput.classList.remove("warning-shadow")
        })
        titleInput.addEventListener("focus", function () {
            titleInput.classList.remove("warning-shadow")
        })
        age.addEventListener("focus", function () {
            age.classList.remove("warning-shadow")
        })
    }
    else {
        alert(`Dear ${nameInput.value},\rNow Create Your Own WatchList🎬`)
        searchBox.style.display = "flex"
        watchlistMaker()
    }
})
// shelfArrow.addEventListener("click", function (event) {
//     event.preventDefault()
//     if (shelfArrow.id === "shelf-arrow-up") {
//         watchlistBoxes.parentElement.style.display = "block"
//         shelfArrow.firstChild.classList.remove("fa-chevron-circle-down")
//         shelfArrow.firstChild.classList.add("fa-chevron-circle-up")
//         shelfArrow.id = "shelf-arrow-down"
//     }
//     else {
//         watchlistBoxes.parentElement.style.display = "none"
//         shelfArrow.firstChild.classList.remove("fa-chevron-circle-up")
//         shelfArrow.firstChild.classList.add("fa-chevron-circle-down")
//         shelfArrow.id = "shelf-arrow-up"
//     }
// })

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