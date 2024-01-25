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

