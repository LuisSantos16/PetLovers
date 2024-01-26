//menu
function llamar() {
    let menu = document.getElementById("navbarid");
    let icono = document.getElementById("IconId");

    menu.classList.toggle("lista-open");

    if (menu.classList.contains("lista-open")) {
        icono.querySelector("i").classList.remove("fa-bars-staggered");
        icono.querySelector("i").classList.add("fa-x");
    } else {
        icono.querySelector("i").classList.remove("fa-x");
        icono.querySelector("i").classList.add("fa-bars-staggered");
    }
}

//scroll
window.addEventListener("scroll",Scroll);
function Scroll(){
    let MenuNavbar=document.getElementById("MenuNavbar");
    let SecondHeader=document.getElementById("SecondHeader");
    let posy=window.pageYOffset;
    if (posy>150){
        MenuNavbar.style.position="fixed"
        MenuNavbar.style.width="100%"
        MenuNavbar.style.top="0"
        SecondHeader.style.display="none"
    }
    else{
        MenuNavbar.style.position="relative"
        SecondHeader.style.display="block"
    }
}

//testimonios
let testimonialIndex = 0;
const intervalDuration = 4000;
const TestimonialsPerson = document.getElementById("person_testimonials");
const testimonialButtons = document.getElementById("testimonial-buttons");

function moveTestimonial(index) {
    testimonialIndex = (index + TestimonialsPerson.children.length) % TestimonialsPerson.children.length;
    const offset = -testimonialIndex * 100;
    TestimonialsPerson.style.transform = `translateX(${offset}%)`;
    updateButtons();
}

function startCarousel() {
    setInterval(() => {
        moveTestimonial(testimonialIndex + 1);
    }, intervalDuration);
}

function createButtons() {
    Array.from(TestimonialsPerson.children).forEach((testimonial, index) => {
        const button = document.createElement("button");
        button.classList.add("testimonial-button");
        button.addEventListener("click", () => moveTestimonial(index));
        testimonialButtons.appendChild(button);
    });
}

function updateButtons() {
    const activeButton = document.querySelector(".testimonial-button.active");
    if (activeButton) activeButton.classList.remove("active");
    testimonialButtons.children[testimonialIndex].classList.add("active");
}

window.onload = function() {
    startCarousel();
    createButtons();
};
