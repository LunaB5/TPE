let btn_menu = document.querySelector("#boton-menu");

btn_menu.addEventListener("click", menuResponsive);

function menuResponsive() {
    

    document.querySelector(".barra").classList.toggle("show")

}