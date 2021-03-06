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
    appearOnScroll(".s2-up", "s2-up-active");
    appearOnScroll(".s3-right-texts", "s3-right-texts-active");
    appearOnScroll(".s3-left", "s3-left-active");
    appearOnScroll(".s3-tick-and-p1", "s3-tick-and-p-active");
    appearOnScroll(".s3-tick-and-p2", "s3-tick-and-p-active");
    appearOnScroll(".s3-tick-and-p3", "s3-tick-and-p-active");
    appearOnScroll(".s3-tick-and-p4", "s3-tick-and-p-active");
    appearOnScroll(".s4-right", "s4-right-active");
    appearOnScroll(".s4-left", "s4-left-active");
    appearOnScroll(".s3-left-2", "s3-left-2-active");
    appearOnScroll(".s5-right-texts-2", "s5-right-texts-2-active");
    appearOnScroll(".s5-tick-and-p1", "s5-tick-and-p-active");
    appearOnScroll(".s5-tick-and-p2", "s5-tick-and-p-active");
    appearOnScroll(".s5-tick-and-p3", "s5-tick-and-p-active");
    appearOnScroll(".s5-tick-and-p4", "s5-tick-and-p-active");
    appearOnScroll(".s7-left", "s7-left-active");
    appearOnScroll(".s7-right", "s7-right-active");
    appearOnScroll(".s8-left", "s8-left-active");
    appearOnScroll(".s8-right", "s8-right-active");
    appearOnScroll(".s9-container", "s9-container-active");
    appearOnScroll(".s10-popular", "s10-popular-active");
    appearOnScroll(".s10-buttons", "s10-buttons-active");
    appearOnScroll(".s10-learnMore", "s10-learnMore-active");
    appearOnScroll(".s10-getInTouch", "s10-getInTouch-active");
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