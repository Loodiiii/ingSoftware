//Declaring variables
const hamburger = document.querySelector('.hamburger')
const list = document.querySelector('.list')
const cross = document.querySelector('.cross')
let li = document.querySelectorAll('li')
const hr1 = document.querySelector('.hr-1')
const hr2 = document.querySelector('.hr-2')
const hr3 = document.querySelector('.hr-3')

//Event Listeners

hamburger.addEventListener('click', function () {
    hr1.classList.toggle('hr-1-toggle')
    hr2.classList.toggle('hr-2-toggle')
    hr3.classList.toggle('hr-3-toggle')
    list.classList.toggle('block')
})

list.addEventListener("click", function () {
    hr1.classList.toggle('hr-1-toggle')
    hr2.classList.toggle('hr-2-toggle')
    hr3.classList.toggle('hr-3-toggle')
    list.classList.toggle('block')
})

var dateYear = document.querySelector('#fullYear')
var d = new Date();
dateYear.innerHTML = d.getFullYear();


