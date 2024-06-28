import { checkExistLocalStorage, getDatos, getListaPeliculas, guardaDatos } from "./DB.js";
checkExistLocalStorage();
let datos=getDatos();
let lista_peliculas=getListaPeliculas();
if(datos.usuario==undefined||datos.usuario==null)window.location = "/";
let buscador=document.getElementById("buscador");
let nombre_usuario=document.getElementById("nombre_usuario");
nombre_usuario.innerText=datos.usuario;
let btn_cerrar_sesion=document.getElementById("btn_cerrar_sesion");
btn_cerrar_sesion.addEventListener("click",()=>{
    datos.usuario=null;
    guardaDatos(datos);
});

const marco_peliculas=document.getElementById("marco_peliculas");
const marco_series=document.getElementById("marco_series");
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
    a.href="detallesPelicula1.html?titulo="+clave;
    a.className="item";
    a.innerHTML=`
        <span class="titulo_item">${clave}</span>
        <img src="../${lista_peliculas[clave].img}" class="imgPelicula">
    `;
    return a;
}
drawListaSegunCategoria("pelicula",marco_peliculas);
drawListaSegunCategoria("serie",marco_series);
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
    marco_series.innerHTML="";
    for (const key in lista_peliculas) {
        if (Object.hasOwnProperty.call(lista_peliculas, key)) {
            // const element = lista_peliculas[key];
            if(lista_peliculas[key].tipo=="serie"&&(key.includes(e.target.value)||e.target.value==""))
            marco_series.appendChild(drawItem(key));
        }
    }
});