const btn_atras = document.querySelector('.antes');
const btn_adelante = document.querySelector('.despues');
const carrusel = document.querySelector('.carrusel');
const contenedor_carrusel = document.querySelector('.contenedor_carrusel');
const images = document.querySelectorAll('.item_carrusel');
let porcentaje;
let cantidad_visible;
// carrusel.offsetHeight;
function reajustar(){
    if(images.length!=0)carrusel.style.height=images[0].clientHeight+"px";
    if(screen.width>1024){porcentaje=25;cantidad_visible=4;}
    else if(screen.width>768){porcentaje=33;cantidad_visible=3;}
    else{porcentaje=50;cantidad_visible=2;}
    contenedor_carrusel.style.transform = `translateX(0vw)`;
}
reajustar();
window.addEventListener('resize',reajustar);

console.log(contenedor_carrusel.clientWidth);
let cantidad = images.length;
let pos=0;
btn_atras.addEventListener('click', () => {
    if (pos < 0) {
        pos+=porcentaje;
        contenedor_carrusel.style.transform = `translateX(${pos}vw)`;
    } 
});
btn_adelante.addEventListener('click', () => {
    if (pos > (cantidad_visible*porcentaje)-(cantidad*porcentaje) ) {
        pos=pos-porcentaje;
        contenedor_carrusel.style.transform = `translateX(${pos}vw)`;
    }
});