"use strict";

function crearContacto(){
    const socialMedia = [
        {
            Nombre : "Luna",
            Intagram : "InstaLuna",
            Facebook : "FacebookLuna",
            Linkedin : "LinkedinLuna"
        },
        {
            Nombre : "Pablo",
            Intagram : "InstaPablo",
            Facebook : "Facebookpablo",
            Linkedin : "LinkedinPablo"
        }
    ];

    let tabla_contacto = document.querySelector(".tbody_contacto");

    let i=0;

        while(i<socialMedia.length){
            const fila = document.createElement("tr"); 
            tabla_contacto.append(fila);
    
            for(let k in socialMedia[i]){
                const celda = document.createElement('td');
                let contenido = document.createTextNode(`${socialMedia[i][k]}`);
                fila.appendChild(celda);
                celda.appendChild(contenido);
                celda.classList.add("celda_contacto")
            }

            i++
        }
}

crearContacto();