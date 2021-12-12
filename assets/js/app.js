// Scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});


// Nav hamburgerburger selections
/*const burger = document.querySelector('#burger-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');
const navLink = document.querySelector('.nav-link');

// Open hamburger menu when button is clicked
burger.addEventListener('click', () => {
    ul.classList.toggle('show');
});

//Close hamburger menu when a link is clicked
navLink.forEach(
    function (ul) {

    }
)*/

const menu = document.querySelector('.nav-items');
const menuItems = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('#burger-menu');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        menu.classList.add('show');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener('click', toggleMenu);
    }
)