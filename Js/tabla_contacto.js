"use strict";

let btn = document.querySelector(".add");
let btnDel = document.querySelector(".delete");
let btnTres = document.querySelector(".tres");
let tbody = document.querySelector("tbody");
let thead = document.querySelector("thead");
let rec = document.querySelector("#Receta");
let ing = document.querySelector("#Ingredientes");
let tiempo = document.querySelector("#Tiempo");
let dif = document.querySelector("#Dificultad");

let recetas =
    {
        Recetas: "Recetas",
        Ingredientes:"Ingredientes",    
        Tiempo :"Tiempo",   
        Dificultad:"Dificultad"
    };

window.onload = function(){
    thead.innerHTML = "<th>"+recetas.Recetas+"</th>"+"<th>"+recetas.Ingredientes+"</th>"+"<th>"+recetas.Tiempo+"</th>"+"<th>"+recetas.Dificultad+"</th>"
}
btn.addEventListener('click', function(e){
    e.preventDefault();
    tbody.innerHTML += "<tr>"+"<th>"+rec.value+"</th>"+"<th>"+ing.value+"</th>"+"<th>"+tiempo.value+"</th>"+"<th>"+dif.value+"</th>"
})
btnDel.addEventListener('click', function (){
    tbody.innerHTML = "";
})
btnTres.addEventListener('click', function (){
    tbody.innerHTML += "<tr>"+"<th>"+rec.value+"</th>"+"<th>"+ing.value+"</th>"+"<th>"+tiempo.value+"</th>"+"<th>"+dif.value+"</th>"+"<th>"
    tbody.innerHTML += "<tr>"+"<th>"+rec.value * 2 +"</th>"+"<th>"+ing.value * 2 +"</th>"+"<th>"+tiempo.value * 2 +"</th>"+"<th>"+dif.value+"</th>"+"<th>"
    tbody.innerHTML += "<tr>"+"<th>"+rec.value * 3 +"</th>"+"<th>"+ing.value * 3 +"</th>"+"<th>"+tiempo.value * 3 +"</th>"+"<th>"+dif.value+"</th>"+"<th>"
})