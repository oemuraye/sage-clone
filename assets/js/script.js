const hamburgerBtn = document.querySelector('.navbar-toggler')
const toggledMenu = document.querySelector('.toggled-menu')
const closeMenu = document.querySelector('.close-menu')

hamburgerBtn.addEventListener('click', () => {
    toggledMenu.style.display = 'block'
})
closeMenu.addEventListener('click', () => {
    toggledMenu.style.display = 'none'
})