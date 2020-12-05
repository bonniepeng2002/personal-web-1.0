// menu 
const selectElement = function (element) {
    return document.querySelector(element);
};

let body = selectElement('body');

let menuToggler = selectElement('.menu-toggle');
menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

let menuLink = selectElement('.nav-list');
menuLink.addEventListener('click', function () {
    body.classList.toggle('open');
});

// scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 500
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 2000,
    distance: '50rem',
    delay: 500
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 500
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 500
});

