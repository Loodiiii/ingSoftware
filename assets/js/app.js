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
    list.classList.toggle('block')
    hamburger.classList.toggle('opened');
    hamburger.setAttribute('aria-expanded', this.classList.contains('opened'))
})

list.addEventListener("click", function () {
    list.classList.remove('block')
    hamburger.classList.toggle('opened');
    hamburger.setAttribute('aria-expanded', this.classList.contains('opened'))
})

function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(emailField.value) == false) {
        alert('Invalid Email Address');
        return false;
    }
    return true;
}

var prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
})



var dateYear = document.querySelector('#fullYear')
var d = new Date();
dateYear.innerHTML = d.getFullYear();


