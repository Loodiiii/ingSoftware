//Declaring variables
const hamburger = document.querySelector('.burger')
const list = document.querySelector('.list')
const cross = document.querySelector('.cross')
let li = document.querySelectorAll('li')
const hr1 = document.querySelector('.hr-1')
const hr2 = document.querySelector('.hr-2')
const hr3 = document.querySelector('.hr-3')

//Event Listeners

hamburger.addEventListener('click', function () {
    hamburger.style.animation = "height1 1s"
    setTimeout(function () {
        hr1.classList.toggle('hr-1-toggle')
        hr2.classList.toggle('hr-2-toggle')
        hr3.classList.toggle('hr-3-toggle')
        list.classList.toggle('block')
        hamburger.style.animation = "none"
    }, 1000)
})




var dateYear = document.querySelector('#fullYear')
var d = new Date();
dateYear.innerHTML = d.getFullYear();


