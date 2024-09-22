const hambureger = document.querySelector('.hamburger') 
      menu = document.querySelector('.menu'),
      closeElement = document.querySelector('.menu__close')

hambureger.addEventListener('click', () => {
    menu.classList.add('active')
})

closeElement.addEventListener('click', () => {
    menu.classList.remove('active')
})