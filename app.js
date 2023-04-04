const buttonMenu = document.querySelector('.btn-round-menu');
const nav = document.querySelector('.nav');
console.log(buttonMenu);
console.log(nav);

buttonMenu.addEventListener('click', displayNav);

function displayNav() {
    console.log('display');
    if (nav.classList.contains('nav__links')) {
        nav.classList.remove('nav__links')
        nav.classList.add('nav_hidden')
    } else {
        nav.classList.remove('nav_hidden')
        nav.classList.add('nav__links')


    }

}