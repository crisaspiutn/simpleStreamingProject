export function buscarUsuario(usuario,usuarios){
    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].usuario==usuario){
            return usuarios[i];
        }
    }
    return null;
}
export function siExisteUsuario(usuario,usuarios){
    // console.log("si existe el usuario");
    return usuarios.hasOwnProperty(usuario);
}