import {guardaDatos,getDatos, checkExistLocalStorage} from './DB.js';
import { buscarUsuario, siExisteUsuario } from './usuario.js';
checkExistLocalStorage();
let form = document.getElementById("form_inicio_sesion");
let log = document.getElementById("log");
let datos=getDatos();
// hasOwnProperty
// localStorage.clear();

function onFormSubmit(e){
    e.preventDefault();
    console.log("tocaodo");
    let {usuario,clave}=Object.fromEntries(new FormData(e.target))
    // busca usuario
    // let usuarioBuscado=buscarUsuario(usuario,datos.usuarios);
    // console.log("usuarioBuscado: ", usuarioBuscado);
    // if(!!usuarioBuscado){
    if(siExisteUsuario(usuario,datos.usuarios)){
        // if(usuarioBuscado.clave==clave){
        if(datos.usuarios[usuario].clave==clave){
            datos.usuario=usuario;
            log.innerText="clave correcta";
            log.style.color="green";
            guardaDatos(datos);
            setTimeout(() => {
                alert("inicio sesion correctamente");
                window.location = "/pages/inicio.html";
            }, 10);
        }else log.innerText="clave incorrecta";
    }else console.log("usuario no encontrado");
}
// checkSession(usuario);
form.addEventListener("submit", onFormSubmit);
