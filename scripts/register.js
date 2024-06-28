import {guardaDatos,getDatos, checkExistLocalStorage} from './DB.js';
import {buscarUsuario,siExisteUsuario} from './usuario.js';
checkExistLocalStorage();
let datos=getDatos();

let form = document.querySelector(".form_real");
form.addEventListener('input', onFormChange);
form.addEventListener('submit', sendForm);
// document.getElementById('confirmar').addEventListener('click', onConfirmar);
// document.getElementById('cancelar').addEventListener('click', onCancelar);
form.btn_form.disabled = true;
let lista_campos=[
    {clave:"nombre",condicion:x=>/^[A-Za-z]+$/.test(x),msg:"solo acepta letras",e:null},
    {clave:"apellido",condicion:x=>/^[A-Za-z]+$/.test(x),msg:"solo acepta letras",e:null},
    {clave:"email",condicion:x=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x),msg:"email invalido",e:null},
    {clave:"usuario",condicion:x=>/^[A-Za-z0-9]+$/.test(x),msg:"solo acepta letras y números",e:null},
    {clave:"clave",condicion:x=>/^(?=.*[A-Za-z]{2,})(?=.*\d{2,})(?=.*[!@#$%^&*()_+]{2,}).{8,}$/.test(x),msg:"de 8 caracteres (minimo 2 letras, 2 números y 2 especiales)",e:null},
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
    // let form = document.getElementById('registrationForm');
    let objeto = Object.fromEntries(new FormData(form));
    let isFormValid = true;
    lista_campos.forEach(e=> {
        // console.log("valor");
        // console.log(e.clave);// clave nombre
        // console.log(objeto[e.clave]);// valor escrito
        let condi;
        if(e.clave=="repiteclave"){
            // let condi=e.condicion(objeto[e.clave]);
            condi=objeto[e.clave]==objeto["clave"];
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
    console.log(datos.usuarios);
    
    
    // document.getElementById('errorMensaje').textContent = errorMensaje;
}
function sendForm(e){
    console.log("tocado");
    e.preventDefault();
    const valores=Object.fromEntries(new FormData(e.target))
    if(siExisteUsuario(valores.usuario,datos.usuarios))alert("el usario ya existe");
    else{// si no existe usuario
        console.log("registrado correctamente");
        datos.usuarios[valores.usuario]=(valores);
        guardaDatos(datos);
        alert("registrado con exito");
        window.location = "/";
    }
}

function validateCreditCard(numTarjeta) {
    const digits = numTarjeta.split('').map(Number);
    const sum = digits.slice(0, -1).reduce((acc, val) => acc + val, 0);
    const lastDigit = digits[digits.length - 1];
    
    return (sum % 2 === 0 && lastDigit % 2 !== 0) || (sum % 2 !== 0 && lastDigit % 2 === 0);
}