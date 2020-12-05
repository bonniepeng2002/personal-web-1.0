//Select element function

let slideIndex = 0;
let slider = document.querySelector(".slider");
let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots span")

showslide();

function plusslide(position) {
    slideIndex += position;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${slideIndex - 1}00%`;
    dots[slideIndex - 1].classList.add("dot-active");
}

function currentslide(index) {
    if (index > slide.length) {
        index = 1;
    }
    else if (index < 1) {
        index = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${index - 1}00%`;
    dots[index - 1].classList.add("dot-active");

    slideIndex = index;
}

function showslide() {
    slideIndex++;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${slideIndex - 1}00%`;
    dots[slideIndex - 1].classList.add("dot-active");
}


// let interval = setInterval(()=> {
//     showslide();
// } , 3000);   // Change every image after 3 seconds

// slider.addEventListener("mouseover" , ()=> {
//     clearInterval(interval);     // onHover Stop Changing every image after 3 seconds 
// });

// slider.addEventListener("mouseout" , ()=> {
//     interval = setInterval(()=> {
//         showslide();   
//     } , 3000);    // on mouseout from slide then again start Changing every image after 3  seconds 
// });


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
    // reset: true,
    origin: 'left',
    duration: 1500,
    distance: '40rem',
    delay: 500
});

sr.reveal('.animate-right', {
    // reset: true,
    origin: 'right',
    duration: 1500,
    distance: '40rem',
    delay: 500
});

sr.reveal('.animate-top', {
    // reset: true,
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 500
});

sr.reveal('.animate-bottom', {
    // reset: true,
    origin: 'bottom',
    duration: 1500,
    distance: '25rem',
    delay: 500
});

