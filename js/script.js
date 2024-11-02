const hambureger = document.querySelector('.hamburger') 
      menu = document.querySelector('.menu'),
      closeElement = document.querySelector('.menu__close')

hambureger.addEventListener('click', () => {
    menu.classList.add('active')
})

closeElement.addEventListener('click', () => {
    menu.classList.remove('active')
})

const counters = document.querySelectorAll('.skills__ratings-counter'),
lines= document.querySelectorAll('.skills__ratings-line span')

counters.forEach((item, i) => {
lines[i].style.width = item.innerHTML
})