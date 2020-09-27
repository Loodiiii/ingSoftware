//Declaring variables
const hamburger = document.querySelector('.hamburger')
const list = document.querySelector('.list')
const uList = document.querySelector(".u-list")
const rocket = document.querySelector(".rocket")
const header = document.querySelector("header")

// Functions

function listDisappear() {
    list.classList.remove('block')

    hamburger.classList.toggle('opened');
    hamburger.setAttribute('aria-expanded', this.classList.contains('opened'))
}

function listAppear() {
    list.classList.toggle('block')

    hamburger.classList.toggle('opened');
    hamburger.setAttribute('aria-expanded', this.classList.contains('opened'))
}

var prevScrollpos = window.pageYOffset
function headerScroll() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.classList.add("header-appear");
    } else {
        header.classList.remove("header-appear");
    }
    prevScrollpos = currentScrollPos;
}

function appearOnScroll(e, clas) {
    var elementFadeLeft = document.querySelector(e)
    var elementFadeLeftPosition = elementFadeLeft.getBoundingClientRect().top
    var screenFadeLeftPosition = window.innerHeight / 1.3

    if (elementFadeLeftPosition < screenFadeLeftPosition) {
        elementFadeLeft.classList.add(clas)
    }
}

//Event Listeners

window.addEventListener('load', () => {
    const preload = document.querySelector(".preload")
    setTimeout(function () {
        preload.classList.add("fadeOut")
        header.classList.add("header-appear")
        const s1Left = document.querySelector(".s1-left")
        s1Left.classList.add("fadeLeft")
        rocket.classList.add("fadeUp")
        const s1Right = document.querySelector(".s1-right")
        s1Right.classList.add("fadeUp")
    }, 2000);
});



hamburger.addEventListener('click', function () {
    listAppear();
})

uList.addEventListener("click", function () {
    listDisappear();
})

window.addEventListener("scroll", () => {
    headerScroll();
    appearOnScroll(".icon-container1", "fadeJS-active");
    appearOnScroll(".icon-container2", "fadeJS-active");
    appearOnScroll(".icon-container3", "fadeJS-active");
    appearOnScroll(".icon-container4", "fadeJS-active");
})


dateYear = document.querySelector('#fullYear')
var d = new Date();
dateYear.innerHTML = d.getFullYear();

// function validateEmail(emailField) {
//     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     if (reg.test(emailField.value) == false) {
//         alert('Invalid Email Address');
//         return false;
//     }
//     return true;
// }

//window.addEventListener("scroll", function () {
//   var value = window.scrollY  
//   rocket.style.top = -value * 0.1 + "px"
// })