import { checkExistLocalStorage, getDatos, getListaPeliculas, guardaDatos } from "./DB.js";
import './carrusel.js';
checkExistLocalStorage();
let datos=getDatos();
let lista_peliculas=getListaPeliculas();
if(datos.usuario==undefined||datos.usuario==null)window.location = "/";
let nombre_usuario=document.getElementById("nombre_usuario");
nombre_usuario.innerText=datos.usuario;
let btn_cerrar_sesion=document.getElementById("btn_cerrar_sesion");
btn_cerrar_sesion.addEventListener("click",()=>{
    datos.usuario=null;
    // guardaDatos(datos);
    localStorage.clear();
    window.location="/";
});
console.log(lista_peliculas);
let params= new URLSearchParams(window.location.search);
// console.log(params.get("video"));
const vista_video=document.getElementById("vista_video");
const d_titulo=document.getElementById("d_titulo");
const d_duracion=document.getElementById("d_duracion");
const d_genero=document.getElementById("d_genero");
const d_actores=document.getElementById("d_actores");
const d_tipo=document.getElementById("d_tipo");
const d_temporadas=document.getElementById("d_temporadas");
const btn_comenzar=document.getElementById("btn_comenzar");
const op_temporadas=document.getElementById("op_temporadas");
const op_capitulos=document.getElementById("op_capitulos");
const title=document.getElementById("title");

const titulo=params.get("video");
const datos_video=lista_peliculas[titulo];
title.innerText = titulo;
vista_video.innerHTML=`
<img class="img" src="../${datos_video.img}" alt="${datos_video.img}" />
`;
d_titulo.innerText=titulo;
if(datos_video.hasOwnProperty("temporadas")){
    d_temporadas.classList.remove("ocultar");
    for (let i = 0; i < datos_video.temporadas.length; i++) {
        const option=document.createElement("option");
        option.textContent = "temporada "+(i+1);
        option.value= i;
        op_temporadas.appendChild(option);
    }
    if(datos_video.temporadas.length!=0)
    setCapitulos(0);
}

d_duracion.innerText=datos_video["duracion_diferente"];
d_genero.innerText=datos_video["genero"];
d_actores.innerText=datos_video["actores"].join(", ")+".";
d_tipo.innerText=datos_video["tipo"];
btn_comenzar.addEventListener("click",()=>{
vista_video.innerHTML=`
${datos_video.link}
`;
});
function setCapitulos(numero){
    if(datos_video.temporadas[numero]!=undefined)
    for (let j = 0; j < datos_video.temporadas[numero].length; j++) {
        const option=document.createElement("option");
        option.textContent = "capitulo "+(j+1);
        option.value= j;
        op_capitulos.appendChild(option);
    }
}
d_temporadas.addEventListener("change",(e)=>{
    console.log("cambio");
    if(e.target.id=="op_temporadas"){
        op_capitulos.innerHTML="";
        setCapitulos(e.target.value);
        // title.innerText=
        // titulo+" Temp:"+(Number(op_temporadas.value)+1)+" Cap:"+(1);
    }
    if(e.target.id=="op_capitulos"){
        // console.log(op_temporadas.value);
    }
    d_duracion.innerText=
    datos_video.temporadas[op_temporadas.value][op_capitulos.value].duracion;
    d_titulo.innerText=
    datos_video.temporadas[op_temporadas.value][op_capitulos.value].titulo;
    title.innerText=
    titulo+" Temp:"+(Number(op_temporadas.value)+1)+" Cap:"+(Number(op_capitulos.value)+1);
});
// <iframe src="${datos_video.link}" class="img" frameborder="0"></iframe>
// <iframe width="560" height="315" src="https://www.youtube.com/embed/TYMMOjBUPMM?si=i8feDDYv7OGvFYq3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>