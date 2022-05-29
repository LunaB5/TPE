// Este sitio fue desarrollado por Saint Girons Juan Pablo (C12) y Salas Costa Luna Bianca (C11), grupo 131

let array = ["j", "3", "f", "5", "z", "7", "x", "6", "c", "8", "v", "4", "b", "1", "n", "9", "m"];

let captcha = "";

let muestraCaptcha = document.querySelector("#captchagenerado");

let validacionCaptcha = document.querySelector("#captchaHumano");

let botonFormulario = document.querySelector("#botonFormulario");

botonFormulario.addEventListener("click", validarCaptcha);

function aleatorio() {
    for (let index = 0; index < 5; index++) {
        let valor = Math.floor((Math.random()*16)+1);
    
        captcha = captcha + array[valor];

        muestraCaptcha.innerHTML = captcha;
    } 
}

function validarCaptcha(e) {
    e.preventDefault();
    if (captcha == validacionCaptcha.value) {
        botonFormulario.innerHTML = "Aceptado"
    }else{
        botonFormulario.innerHTML = "Rechazado"
    }
}

aleatorio();


let btn_menu = document.querySelector("#boton-menu");

btn_menu.addEventListener("click", menuResponsive);

function menuResponsive() {
    // alert("Sip");

    document.querySelector(".barra").classList.toggle("show")

}