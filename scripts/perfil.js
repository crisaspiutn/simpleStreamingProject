import { checkExistLocalStorage, getDatos, getListaPeliculas, guardaDatos } from "./DB.js";
checkExistLocalStorage();
let datos=getDatos();
if(datos.usuario==undefined||datos.usuario==null)window.location = "/";

let nombre_usuario=document.getElementById("nombre_usuario");
let nombre_usuario2=document.getElementById("nombre_usuario2");
nombre_usuario.innerText=datos.usuario;
nombre_usuario2.innerText=datos.usuario;
let btn_cerrar_sesion=document.getElementById("btn_cerrar_sesion");
btn_cerrar_sesion.addEventListener("click",()=>{
    datos.usuario=null;
    guardaDatos(datos);
    // localStorage.clear();// asi lo pide el tp
    window.location="/";
});
let form = document.querySelector(".form_real");
form.addEventListener('input', onFormChange);
form.addEventListener('submit', sendForm);

form.btn_form.disabled = true;
form.email.value=datos.usuarios[datos.usuario].email;
form.clave.value=datos.usuarios[datos.usuario].clave;

let lista_campos=[
    {clave:"nuevaclave",condicion:x=>/^(?=.*[A-Za-z]{2,})(?=.*\d{2,})(?=.*[!@#$%^&*()_+]{2,}).{8,}$/.test(x),msg:"de 8 caracteres (minimo 2 letras, 2 números y 2 especiales)",e:null},
    {clave:"repiteclave",condicion:(e)=>{
        let result=lista_campos.find(x=>x.clave=="clave")
        // console.log(e);
        // console.log(result);
        return result==e;
    },msg:"debe ser igual a la contraseña",e:null},
    {clave:"tarjeta",condicion:x=>/^\d{16,19}$/.test(x),msg:"debe tener entre 16 y 19 numeros",e:null},
    {clave:"codigo",condicion:x=>/^[1-9]{3}$/.test(x),msg:"el codigo no puede tener ceros ej: 000",e:null},
    {clave:"payment",condicion:(x)=>x!=undefined,msg:"debe seleccionar un metodo de pago",e:null},
]
lista_campos.forEach(e=> {
        e.e=document.getElementById("msg_"+e.clave);
        e.e.innerText=e.msg;
});
function onFormChange() {
    let objeto = Object.fromEntries(new FormData(form));
    let isFormValid = true;
    lista_campos.forEach(e=> {
        // console.log("valor");
        // console.log(e.clave);// clave nombre
        // console.log(objeto[e.clave]);// valor escrito
        let condi;
        if(e.clave=="repiteclave"){
            // let condi=e.condicion(objeto[e.clave]);
            condi=objeto[e.clave]==objeto["nuevaclave"];
        }
        else{
            condi=e.condicion(objeto[e.clave]);
            if(e.clave=="tarjeta"){
                condi=condi&&validateCreditCard(objeto["tarjeta"]);
                console.log(condi);
            }
        }
        // console.log(condi);
        e.e.style.display=condi?"none":"initial";
        isFormValid=isFormValid&&condi;
        // console.log(isFormValid);
        // console.log(e.condicion(objeto[e.clave]));
    });
    form.btn_form.disabled = !isFormValid;
    // console.log(datos.usuarios);// no imprime lo de su momento sino del actual
    // document.getElementById('errorMensaje').textContent = errorMensaje;
}
function sendForm(e){
    e.preventDefault();
    const valores=Object.fromEntries(new FormData(e.target));
        console.log("registrado correctamente");
        // console.log(datos.usuarios[datos.usuario]);
        for (const key in valores) {
            if (Object.hasOwnProperty.call(valores, key)) {
                if("nuevaclave"==key)datos.usuarios[datos.usuario].clave=valores[key];
                else datos.usuarios[datos.usuario][key]=valores[key];
            }
        }
        if(!valores.hasOwnProperty("si_pago_facil"))delete datos.usuarios[datos.usuario]["si_pago_facil"]; 
        if(!valores.hasOwnProperty("si_rapi_pago"))delete datos.usuarios[datos.usuario]["si_rapi_pago"];
        // datos.usuarios[valores.usuario]=(valores);
        guardaDatos(datos);
        alert("cambios guardados con exito");
        console.log(datos.usuarios[datos.usuario]);
    // window.location = "/";
}
function validateCreditCard(numTarjeta) {
    const digits = numTarjeta.split('').map(Number);
    const sum = digits.slice(0, -1).reduce((acc, val) => acc + val, 0);
    const lastDigit = digits[digits.length - 1];
    
    return (sum % 2 === 0 && lastDigit % 2 !== 0) || (sum % 2 !== 0 && lastDigit % 2 === 0);
}
