//Declaring variables
const hamburger = document.querySelector('.hamburger')
const list = document.querySelector('.list')
const uList = document.querySelector(".u-list")
const rocket = document.querySelector("#rocket")

//Event Listeners

hamburger.addEventListener('click', function () {
    list.classList.toggle('block')

    hamburger.classList.toggle('opened');
    hamburger.setAttribute('aria-expanded', this.classList.contains('opened'))
})

uList.addEventListener("click", function () {
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

window.addEventListener("scroll", function () {
    var value = window.scrollY

    rocket.style.top = -value * 0.1 + "px"
})



var dateYear = document.querySelector('#fullYear')
var d = new Date();
dateYear.innerHTML = d.getFullYear();


