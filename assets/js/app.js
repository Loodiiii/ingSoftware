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
    if(hr1.classList.contains("hr-1-toggle")){
        hr1.classList.remove('hr-1-toggle')
        hr2.classList.remove('hr-2-toggle')
        hr3.classList.remove('hr-3-toggle')
        list.classList.remove('block')
    }
    else{
        hamburger.style.animation = "height1 1s"
        setTimeout(function () {
            hr1.classList.add('hr-1-toggle')
            hr2.classList.add('hr-2-toggle')
            hr3.classList.add('hr-3-toggle')
            list.classList.add('block')
            hamburger.style.animation = "none"
        }, 1000)
    }
})

list.addEventListener("click", function() {
    hr1.classList.remove('hr-1-toggle')
    hr2.classList.remove('hr-2-toggle')
    hr3.classList.remove('hr-3-toggle')
    list.classList.remove('block')
})




var dateYear = document.querySelector('#fullYear')
var d = new Date();
dateYear.innerHTML = d.getFullYear();


