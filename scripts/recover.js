import {guardaDatos,getDatos, checkExistLocalStorage} from './DB.js';
import {buscarUsuario,siExisteUsuario} from './usuario.js';
checkExistLocalStorage();
let form = document.querySelector(".form");
let log = document.getElementById("log");
let datos=getDatos();
// localStorage.clear();

function onFormSubmit(e){
    e.preventDefault();
    console.log("tocaodo");
    let {usuario,email}=Object.fromEntries(new FormData(e.target))
    // busca usuario
    // let usuarioBuscado=buscarUsuario(usuario,datos.usuarios);
    // console.log("usuarioBuscado: ", usuarioBuscado);
    // if(!!usuarioBuscado){
    if(siExisteUsuario(usuario,datos.usuarios)){
        alert("el usuario ingresado si existe ");
        console.log("si existe usuario");
        // if(usuarioBuscado.clave==clave){
        if(datos.usuarios[usuario].email==email){
            console.log("el email es el correcto, se enviara un correo para reestablecer la contraseña");
            window.location = "/";
        } log.innerText="clave incorrecta";
    }else console.log("usuario no encontrado");
    
}
form.btn_form.disabled=true;
function onFormChange(e){
    e.preventDefault();
    let {usuario,email}=Object.fromEntries(new FormData(e.target.form))
    if(usuario!=""&&email!=""){
        form.btn_form.disabled=false;
    }else{
        form.btn_form.disabled=true;
    }
}
// checkSession(usuario);
form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", onFormChange);
let texto="a";
// console.log(/^[A-Za-z]+$/.test(texto)+"aa");