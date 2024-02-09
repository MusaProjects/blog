// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}




// swiper
let slideImg = document.getElementById("slideImg")
let images = new Array(
    "../images/stars.jpg",
    "../images/R.jpg",
)
let len = images.length
var i = 0

function slider() {
    if (i > len - 1) {
        i = 0
    }
    slideImg.src = images[i]
    i++
    setTimeout('slider()', 3000)
}