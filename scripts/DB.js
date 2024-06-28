// console.log("ejecuto DB"); // si se ejecuta
// console.log(typeof localStorage.getItem("usuarios"));
// console.log(JSON.parse(localStorage.getItem("usuarios")));
export function guardaDatos(diccionario) {
    localStorage.setItem("usuarios", JSON.stringify(diccionario));
}
export function getDatos() {
    return JSON.parse(localStorage.getItem("usuarios"));
}
export function checkExistLocalStorage() {
    if (localStorage.getItem("usuarios") === null) {
        console.log("no hay usuarios");
        guardaDatos({ usuarios: {}, usuario: null });
        // alert("no existe usaurios. registrate");
        window.location = "/registro.html";
    }
    else {
        console.log('hay datos localStorage\nrevisa usando este comando\nJSON.parse(localStorage.getItem("usuarios"))');
        // let datos=getDatos();
        // if(!datos.hasOwnProperty("albums_favoritos")){
        //     datos["albums_favoritos"]={};
        //     guardaDatos(datos);
        // }
        // if(!datos.hasOwnProperty("canciones_favoritas")){
        //     datos["canciones_favoritas"]={};
        //     guardaDatos(datos);
        // }
        // if(!datos.hasOwnProperty("musica_actual")){
        //     datos["musica_actual"]={};
        //     guardaDatos(datos);
        // }
    }
}
export function getListaPeliculas() {
    return {
        "joker":{
            tipo:"pelicula",
            link:"",
            img:"imagenes/img1.jpg",
            duracion:2,
        },
        "spiderman":{
            tipo:"pelicula",
            link:"",
            img:"imagenes/img2.jpg",
            duracion:2,
        },
        "guardianes de la galaxia":{
            tipo:"serie",
            link:"",
            img:"imagenes/img3.jpg",
            duracion:2,
            capitulos:[]
        },
        "piratas del caribe":{
            tipo:"pelicula",
            link:"",
            img:"imagenes/img4.jpg",
            duracion:2,
        },
        "fantastic beast":{
            tipo:"serie",
            link:"",
            img:"imagenes/img5.jpg",
            duracion:2,
            capitulos:[]
        },
        "amarillo":{
            tipo:"serie",
            link:"",
            img:"imagenes/img6.jpg",
            duracion:2,
            capitulos:[]
        },
        "godzilla vs kong":{
            tipo:"pelicula",
            link:"",
            img:"imagenes/img7.jpg",
            duracion:2,
        },
        "oppenheimer":{
            tipo:"serie",
            link:"",
            img:"imagenes/img8.jpg",
            duracion:2,
            capitulos:[]
        },
        "barbie":{
            tipo:"pelicula",
            link:"",
            img:"imagenes/img9.jpg",
            duracion:2,
        },
        "tintin":{
            tipo:"serie",
            link:"",
            img:"imagenes/img10.jpg",
            duracion:2,
            capitulos:[]
        },
        "midsommar":{
            tipo:"serie",
            link:"",
            img:"imagenes/img11.jpg",
            duracion:2,
            capitulos:[]
        },
        "fight blub":{
            tipo:"pelicula",
            link:"",
            img:"imagenes/img12.jpg",
            duracion:2,
        },
        "coraline":{
            tipo:"pelicula",
            link:"",
            img:"imagenes/img13.jpg",
            duracion:2,
        },
    }
}