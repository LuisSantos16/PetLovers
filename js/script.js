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