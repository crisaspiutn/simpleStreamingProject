import { checkExistLocalStorage, getDatos, getListaPeliculas, guardaDatos } from "./DB.js";
import './carrusel.js';
checkExistLocalStorage();
let datos=getDatos();
let lista_peliculas=getListaPeliculas();
if(datos.usuario==undefined||datos.usuario==null)window.location = "/";
// const btn_series=document.getElementById("btn_series");
const btn_peliculas=document.getElementById("btn_peliculas");
// const titulo_series=document.getElementById("titulo_series");
// const titulo_peliculas=document.getElementById("titulo_peliculas");
let buscador=document.getElementById("buscador");
let nombre_usuario=document.getElementById("nombre_usuario");
nombre_usuario.innerText=datos.usuario;
let btn_cerrar_sesion=document.getElementById("btn_cerrar_sesion");
btn_cerrar_sesion.addEventListener("click",()=>{
    datos.usuario=null;
    guardaDatos(datos);
    // localStorage.clear();// asi lo pide el tp
    window.location="/";
});

const marco_peliculas=document.getElementById("marco_peliculas");
// const marco_series=document.getElementById("marco_series");
console.log(lista_peliculas);
function drawListaSegunCategoria(categoria,contenedor){
    contenedor.innerHTML="";
    for (const key in lista_peliculas) {
        if (Object.hasOwnProperty.call(lista_peliculas, key)) {
            // const element = lista_peliculas[key];
            if(lista_peliculas[key].tipo==categoria)
            contenedor.appendChild(drawItem(key));
        }
    }
}
function drawItem(clave){
    const a=document.createElement("a");
    a.href="movie_detail.html?video="+clave;
    a.className="item";
    a.innerHTML=`
        <span class="titulo_item">${clave}</span>
        <img src="../${lista_peliculas[clave].img}" class="imgPelicula">
    `;
    return a;
}
drawListaSegunCategoria("pelicula",marco_peliculas);
// drawListaSegunCategoria("serie",marco_series);
buscador.addEventListener("keyup",(e)=>{
    // console.log(e.target.value);
    marco_peliculas.innerHTML="";
    for (const key in lista_peliculas) {
        if (Object.hasOwnProperty.call(lista_peliculas, key)) {
            // const element = lista_peliculas[key];
            if(lista_peliculas[key].tipo=="pelicula"&&(key.includes(e.target.value)||e.target.value==""))
            marco_peliculas.appendChild(drawItem(key));
        }
    }
    // marco_series.innerHTML="";
    // for (const key in lista_peliculas) {
    //     if (Object.hasOwnProperty.call(lista_peliculas, key)) {
    //         // const element = lista_peliculas[key];
    //         if(lista_peliculas[key].tipo=="serie"&&(key.includes(e.target.value)||e.target.value==""))
    //         marco_series.appendChild(drawItem(key));
    //     }
    // }
});
btn_peliculas.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("btn_peliculas");
    // marco_series.innerHTML="";
    // titulo_series.style.display="none";
    // titulo_peliculas.style.display="initial";
    drawListaSegunCategoria("pelicula",marco_peliculas);
});

// 
const seleccionador=document.getElementById("seleccionador");
let lista_generos={};
for (const key in lista_peliculas) {
    if (Object.hasOwnProperty.call(lista_peliculas, key)) {
        // console.log(lista_peliculas[key].genero.split(","));
        lista_peliculas[key].genero.split(",").forEach(e => {
            if(e.trim()!="")lista_generos[e.toLowerCase().trim()]="";
        });
    }
}
Object.keys(lista_generos).forEach(e => {
    const option=document.createElement("option");
    option.value=e;
    option.textContent=e;
    seleccionador.appendChild(option);          
});
seleccionador.addEventListener("change",(e)=>{
    marco_peliculas.innerHTML="";
    for (const key in lista_peliculas) {
        if (Object.hasOwnProperty.call(lista_peliculas, key)) {
            if(lista_peliculas[key].tipo=="pelicula"&&lista_peliculas[key].genero.toLowerCase().includes(seleccionador.value)&&(key.includes(buscador.value)||buscador.value==""))
            marco_peliculas.appendChild(drawItem(key));
        }
    }
    marco_series.innerHTML="";
    for (const key in lista_peliculas) {
        if (Object.hasOwnProperty.call(lista_peliculas, key)) {
            if(lista_peliculas[key].tipo=="serie"&&lista_peliculas[key].genero.toLowerCase().includes(seleccionador.value)&&(key.includes(buscador.value)||buscador.value==""))
            marco_series.appendChild(drawItem(key));
        }
    }
});