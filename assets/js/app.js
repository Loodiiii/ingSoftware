const hamburger = document.querySelector('.hamburger')
const list = document.querySelector('.list')
const cross = document.querySelector('.cross')
let li = document.querySelectorAll('li')
const hr1 = document.querySelector('.hr-1')
const hr2 = document.querySelector('.hr-2')
const hr3 = document.querySelector('.hr-3')

hamburger.addEventListener('click', function () {
    hr1.classList.toggle('hr-1-toggle')
    hr2.classList.toggle('hr-2-toggle')
    hr3.classList.toggle('hr-3-toggle')
    list.classList.toggle('block')
})


// document.querySelector('.li').addEventListener('click', function () {
//     list.classList.toggle('block')
// })


// document.querySelector('.li1').addEventListener('click', function () {
//     list.classList.toggle('block')
// })


// document.querySelector('.li2').addEventListener('click', function () {
//     list.classList.toggle('block')
// })

// document.querySelector('.li3').addEventListener('click', function () {
//     list.classList.toggle('block')
// })

// document.querySelector('.li4').addEventListener('click', function () {
//     list.classList.toggle('block')
// })


// document.querySelector('.li5').addEventListener('click', function () {
//     list.classList.toggle('block')
// })

// Slider - Testimonials

var container = document.querySelector('#testimonials .wrapper'),
    testimonials = container.children,
    testimonial_count = testimonials.length;

var current_testimonial = 2,
    x_on_first_touch = null,
    y_on_first_touch = null,
    locked = false,
    width,
    canDrag = true,
    timerNoDrag,
    changeTestimonial = false;


function unify(event) { return event.changedTouches ? event.changedTouches[0] : event };

function lock(event) {
    if (canDrag) {
        x_on_first_touch = unify(event).clientX;
        y_on_first_touch = unify(event).clientY;
        container.classList.toggle('smooth', !(locked = true));
    }
};

function drag(event) {
    if (locked && Math.abs(unify(event).clientX - x_on_first_touch) > Math.abs(unify(event).clientY - y_on_first_touch)) {
        event.preventDefault();
        container.style.setProperty('--tx', `${Math.round(unify(event).clientX - x_on_first_touch)}px`)
    }
};

function move(event) {
    if (locked) {
        var distance = unify(event).clientX - x_on_first_touch,
            left_or_right = Math.sign(distance)
        duration = +(left_or_right * distance / width).toFixed(2);

        if (
            (current_testimonial > 0 || left_or_right < 0) &&
            (current_testimonial < testimonial_count - 1 || left_or_right > 0) &&
            duration > .2
        ) {
            testimonials[current_testimonial].classList.remove('current');
            container.style.setProperty('--i', current_testimonial -= left_or_right);
            testimonials[current_testimonial].classList.add('current');
            duration = 1 - duration;
            changeTestimonial = true;
        }

        container.style.setProperty('--tx', '0px');
        container.style.setProperty('--f', duration);
        container.classList.toggle('smooth', !(locked = false));
        x_on_first_touch = null;

        canDrag = false;
        timerNoDrag = setTimeout(allowDrag, duration * 500);
    }
};

function allowDrag() {
    clearTimeout(timerNoDrag);
    canDrag = true;

    if (changeTestimonial) {
        if (current_testimonial > 2) {
            container.appendChild(testimonials[0]);
        } else if (current_testimonial < 2) {
            container.insertBefore(testimonials[testimonial_count - 1], testimonials[0]);
        }

        testimonials = container.children;
        current_testimonial = 2;
        container.style.setProperty('--i', current_testimonial);
        container.style.setProperty('--f', 0);
        changeTestimonial = false;
    }
}

function size() {
    if (window.innerWidth < 1000) {
        width = window.innerWidth - 60;
    } else {
        width = 800;
    }
};

size();
container.style.setProperty('--n', testimonial_count);
container.style.setProperty('--i', current_testimonial);

addEventListener('resize', size, false);

container.addEventListener('mousedown', lock, false);
container.addEventListener('touchstart', lock, false);

container.addEventListener('mousemove', drag, false);
container.addEventListener('touchmove', drag, false);

container.addEventListener('mouseup', move, false);
container.addEventListener('touchend', move, false);




