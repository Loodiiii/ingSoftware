const hamburger = document.querySelector('.hamburger')
const list = document.querySelector('.list')
const cross = document.querySelector('.cross')
const li = document.querySelector('.li')
const hr1 = document.querySelector('#hr-1')
const hr2 = document.querySelector('#hr-2')
const hr3 = document.querySelector('#hr-3')

hamburger.addEventListener('click', function(){
/*hr1.addClass('.hr-rotate')
hr1.addClass('.hr-1')
hr2.addClass('.hr2')
hr3.addClass('.hr-rotate')
hr3.addClass('.hr-3')*/
this.style.display = "none"
list.style.display = 'block'
})

cross.addEventListener('click', function(){
list.style.display = 'none'
hamburger.style.display = 'flex'
})



/*
function listNone(){
    list.style.display = 'none'
    hamburger.style.display = 'flex'
}

const li2 = document.querySelector('.li2')
const li3 = document.querySelector('.li3')
const li4 = document.querySelector('.li4')
const li5 = document.querySelector('.li5')

li.addEventListener('click', listNone)
li2.addEventListener('click', listNone)
li3.addEventListener('click', listNone)
li4.addEventListener('click', listNone)
li5.addEventListener('click', listNone)
*/

