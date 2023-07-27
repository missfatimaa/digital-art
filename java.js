let $ = document
let morfyGif = $.querySelector("#oppenheimer")
let clone = $.querySelector("#clone")
let camp = $.querySelector("#camp")



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
