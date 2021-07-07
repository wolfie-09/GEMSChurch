const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector('#header-menu-content')

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

if (screen.width > 700) {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}

const headerTopContainer = document.getElementById('header-top-container')
const headerTop = document.getElementById('header-top')

function scroll() {
    if (window.pageYOffset > 0) {
        headerTopContainer.classList.add('is-scrolled')
        headerTop.classList.add('is-scrolled')
    } else {
        headerTopContainer.classList.remove('is-scrolled')
        headerTop.classList.remove('is-scrolled')
    }
}

var intervalId = window.setInterval(scroll, 500);




