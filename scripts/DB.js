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
        window.location = "/pages/register2.html";
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
        "joker": {
            tipo: "pelicula",
            link: '<iframe class="img" src="https://www.youtube.com/embed/zAGVQLHvwOY?si=5KgCon_Zkxe0_-rO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            img: "imagenes/img1.jpg",
            duracion: 2,
            duracion_diferente: "2h 2m",
            genero: "Drama, Crime, Thriller",
            actores: ["Joaquin Phoenix", "Robert De Niro"]
        },
        "spiderman": {
            tipo: "pelicula",
            link_real: "https://www.youtube.com/watch?v=TYMMOjBUPMM",
            link_compartir: "https://youtu.be/TYMMOjBUPMM?si=3m9LBEFp_AesUYqv",
            link: '<iframe class="img" src="https://www.youtube.com/embed/TYMMOjBUPMM?si=i8feDDYv7OGvFYq3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            img: "imagenes/img2.jpg",
            duracion: 2,
            duracion_diferente: "2h 13m",
            genero: "Action, Adventure, Sci-Fi",
            actores: ["Tom Holland", "Zendaya"]
        },
        "guardianes de la galaxia": {
            temporadas:[
                [
                    {titulo:"capitulo 1",duracion:"30 min",link:''},
                    {titulo:"capitulo 2",duracion:"30 min",link:''},
                    {titulo:"capitulo 3",duracion:"30 min",link:''},
                    {titulo:"capitulo 4",duracion:"30 min",link:''},
                    {titulo:"capitulo 5",duracion:"30 min",link:''},
                    {titulo:"capitulo 6",duracion:"30 min",link:''},
                    {titulo:"capitulo 7",duracion:"30 min",link:''},
                    {titulo:"capitulo 8",duracion:"30 min",link:''}
                ],
                [
                    {titulo:"capitulo 1",duracion:"30 min",link:''},
                    {titulo:"capitulo 2",duracion:"30 min",link:''},
                    {titulo:"capitulo 3",duracion:"30 min",link:''},
                    {titulo:"capitulo 4",duracion:"30 min",link:''},
                    {titulo:"capitulo 5",duracion:"30 min",link:''},
                    {titulo:"capitulo 6",duracion:"30 min",link:''},
                    {titulo:"capitulo 7",duracion:"30 min",link:''},
                    {titulo:"capitulo 8",duracion:"30 min",link:''},
                    {titulo:"capitulo 9",duracion:"30 min",link:''},
                    {titulo:"capitulo 10",duracion:"30 min",link:''}
                ]
            ],
            tipo: "serie",
            link: '<iframe class="img" src="https://www.youtube.com/embed/9SfnkovRye8?si=P7CiZo7_fcE93crM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            img: "imagenes/img3.jpg",
            duracion: 2,
            duracion_diferente: "45m por episodio",
            genero: "Action, Adventure, Comedy",
            actores: ["Chris Pratt", "Zoe Saldana"],
            capitulos: []
        },
        "piratas del caribe": {
            tipo: "pelicula",
            link: '<iframe class="img" src="https://www.youtube.com/embed/aPF8KC8uxTw?si=3JVXrbr-JrE-jzrR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            img: "imagenes/img4.jpg",
            duracion: 2,
            duracion_diferente: "2h 23m",
            genero: "Action, Adventure, Fantasy",
            actores: ["Johnny Depp", "Orlando Bloom"]
        },
        "fantastic beasts": {
            temporadas:[
                [
                    {titulo:"capitulo 1",duracion:"30 min",link:''},
                    {titulo:"capitulo 2",duracion:"30 min",link:''},
                    {titulo:"capitulo 3",duracion:"30 min",link:''},
                    {titulo:"capitulo 4",duracion:"30 min",link:''},
                    {titulo:"capitulo 5",duracion:"30 min",link:''},
                    {titulo:"capitulo 6",duracion:"30 min",link:''},
                    {titulo:"capitulo 7",duracion:"30 min",link:''},
                    {titulo:"capitulo 8",duracion:"30 min",link:''}
                ],
                [
                    {titulo:"capitulo 1",duracion:"30 min",link:''},
                    {titulo:"capitulo 2",duracion:"30 min",link:''},
                    {titulo:"capitulo 3",duracion:"30 min",link:''},
                    {titulo:"capitulo 4",duracion:"30 min",link:''},
                    {titulo:"capitulo 5",duracion:"30 min",link:''},
                    {titulo:"capitulo 6",duracion:"30 min",link:''},
                    {titulo:"capitulo 7",duracion:"30 min",link:''},
                    {titulo:"capitulo 8",duracion:"30 min",link:''},
                    {titulo:"capitulo 9",duracion:"30 min",link:''},
                    {titulo:"capitulo 10",duracion:"30 min",link:''}
                ]
            ],
            tipo: "serie",
            link: '<iframe class="img" src="https://www.youtube.com/embed/ViuDsy7yb8M?si=qjA1odz8xd7aHVnX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            img: "imagenes/img5.jpg",
            duracion: 2,
            duracion_diferente: "1h por episodio",
            genero: "Adventure, Family, Fantasy",
            actores: ["Eddie Redmayne", "Katherine Waterston"],
            capitulos: []
        },
        "amarillo": {
            temporadas:[
                [
                    {titulo:"capitulo 1",duracion:"30 min",link:''},
                    {titulo:"capitulo 2",duracion:"30 min",link:''},
                    {titulo:"capitulo 3",duracion:"30 min",link:''},
                    {titulo:"capitulo 4",duracion:"30 min",link:''},
                    {titulo:"capitulo 5",duracion:"30 min",link:''},
                    {titulo:"capitulo 6",duracion:"30 min",link:''},
                    {titulo:"capitulo 7",duracion:"30 min",link:''},
                    {titulo:"capitulo 8",duracion:"30 min",link:''}
                ],
                [
                    {titulo:"capitulo 1",duracion:"30 min",link:''},
                    {titulo:"capitulo 2",duracion:"30 min",link:''},
                    {titulo:"capitulo 3",duracion:"30 min",link:''},
                    {titulo:"capitulo 4",duracion:"30 min",link:''},
                    {titulo:"capitulo 5",duracion:"30 min",link:''},
                    {titulo:"capitulo 6",duracion:"30 min",link:''},
                    {titulo:"capitulo 7",duracion:"30 min",link:''},
                    {titulo:"capitulo 8",duracion:"30 min",link:''},
                    {titulo:"capitulo 9",duracion:"30 min",link:''},
                    {titulo:"capitulo 10",duracion:"30 min",link:''}
                ]
            ],
            tipo: "serie",
            link: '<iframe class="img" src="https://www.youtube.com/embed/zd0WucEZVRI?si=CpW1KWMUig5HRflS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            img: "imagenes/img6.jpg",
            duracion: 2,
            duracion_diferente: "30m por episodio",
            genero: "Drama",
            actores: [],
            capitulos: []
        },
        "godzilla vs kong": {
            tipo: "pelicula",
            link: '<iframe class="img" src="https://www.youtube.com/embed/odM92ap8_c0?si=MdpW-ziKNQUAuVuz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            img: "imagenes/img7.jpg",
            duracion: 2,
            duracion_diferente: "1h 53m",
            genero: "Action, Sci-Fi, Thriller",
            actores: ["Alexander Skarsgård", "Millie Bobby Brown"]
        },
        "oppenheimer": {
            temporadas:[
                [
                    {titulo:"capitulo 1",duracion:"30 min",link:''},
                    {titulo:"capitulo 2",duracion:"30 min",link:''},
                    {titulo:"capitulo 3",duracion:"30 min",link:''},
                    {titulo:"capitulo 4",duracion:"30 min",link:''},
                    {titulo:"capitulo 5",duracion:"30 min",link:''},
                    {titulo:"capitulo 6",duracion:"30 min",link:''},
                    {titulo:"capitulo 7",duracion:"30 min",link:''},
                    {titulo:"capitulo 8",duracion:"30 min",link:''}
                ],
                [
                    {titulo:"capitulo 1",duracion:"30 min",link:''},
                    {titulo:"capitulo 2",duracion:"30 min",link:''},
                    {titulo:"capitulo 3",duracion:"30 min",link:''},
                    {titulo:"capitulo 4",duracion:"30 min",link:''},
                    {titulo:"capitulo 5",duracion:"30 min",link:''},
                    {titulo:"capitulo 6",duracion:"30 min",link:''},
                    {titulo:"capitulo 7",duracion:"30 min",link:''},
                    {titulo:"capitulo 8",duracion:"30 min",link:''},
                    {titulo:"capitulo 9",duracion:"30 min",link:''},
                    {titulo:"capitulo 10",duracion:"30 min",link:''}
                ]
            ],
            tipo: "serie",
            link: '<iframe class="img" src="https://www.youtube.com/embed/yLYbOe914ZU?si=8salD93FK3s728m7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            img: "imagenes/img8.jpg",
            duracion: 2,
            duracion_diferente: "1h por episodio",
            genero: "Biography, Drama, History",
            actores: ["Cillian Murphy", "Emily Blunt"],
            capitulos: []
        },
        "barbie": {
            tipo: "pelicula",
            link: '<iframe class="img" src="https://www.youtube.com/embed/pBk4NYhWNMM?si=vUSTr6fcMFKD_khO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            img: "imagenes/img9.jpg",
            duracion: 2,
            duracion_diferente: "1h 54m",
            genero: "Animation, Family",
            actores: ["Margot Robbie", "Ryan Gosling"]
        },
        "tintin": {
            temporadas:[
                [
                    {titulo:"capitulo 1",duracion:"30 min",link:''},
                    {titulo:"capitulo 2",duracion:"30 min",link:''},
                    {titulo:"capitulo 3",duracion:"30 min",link:''},
                    {titulo:"capitulo 4",duracion:"30 min",link:''},
                    {titulo:"capitulo 5",duracion:"30 min",link:''},
                    {titulo:"capitulo 6",duracion:"30 min",link:''},
                    {titulo:"capitulo 7",duracion:"30 min",link:''},
                    {titulo:"capitulo 8",duracion:"30 min",link:''}
                ],
                [
                    {titulo:"capitulo 1",duracion:"30 min",link:''},
                    {titulo:"capitulo 2",duracion:"30 min",link:''},
                    {titulo:"capitulo 3",duracion:"30 min",link:''},
                    {titulo:"capitulo 4",duracion:"30 min",link:''},
                    {titulo:"capitulo 5",duracion:"30 min",link:''},
                    {titulo:"capitulo 6",duracion:"30 min",link:''},
                    {titulo:"capitulo 7",duracion:"30 min",link:''},
                    {titulo:"capitulo 8",duracion:"30 min",link:''},
                    {titulo:"capitulo 9",duracion:"30 min",link:''},
                    {titulo:"capitulo 10",duracion:"30 min",link:''}
                ]
            ],
            tipo: "serie",
            link: '<iframe class="img" src="https://www.youtube.com/embed/LTnCE_SaU38?si=szQIAsWRQb11FsaH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            img: "imagenes/img10.jpg",
            duracion: 2,
            duracion_diferente: "25m por episodio",
            genero: "Animation, Adventure, Family",
            actores: ["Jamie Bell", "Andy Serkis"],
            capitulos: []
        },
        "midsommar": {
            temporadas:[
                [
                    {titulo:"capitulo 1",duracion:"30 min",link:''},
                    {titulo:"capitulo 2",duracion:"30 min",link:''},
                    {titulo:"capitulo 3",duracion:"30 min",link:''},
                    {titulo:"capitulo 4",duracion:"30 min",link:''},
                    {titulo:"capitulo 5",duracion:"30 min",link:''},
                    {titulo:"capitulo 6",duracion:"30 min",link:''},
                    {titulo:"capitulo 7",duracion:"30 min",link:''},
                    {titulo:"capitulo 8",duracion:"30 min",link:''}
                ],
                [
                    {titulo:"capitulo 1",duracion:"30 min",link:''},
                    {titulo:"capitulo 2",duracion:"30 min",link:''},
                    {titulo:"capitulo 3",duracion:"30 min",link:''},
                    {titulo:"capitulo 4",duracion:"30 min",link:''},
                    {titulo:"capitulo 5",duracion:"30 min",link:''},
                    {titulo:"capitulo 6",duracion:"30 min",link:''},
                    {titulo:"capitulo 7",duracion:"30 min",link:''},
                    {titulo:"capitulo 8",duracion:"30 min",link:''},
                    {titulo:"capitulo 9",duracion:"30 min",link:''},
                    {titulo:"capitulo 10",duracion:"30 min",link:''}
                ]
            ],
            tipo: "serie",
            link: '<iframe class="img" src="https://www.youtube.com/embed/fcylOJ0twFw?si=seA94x0NDgndriCW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            img: "imagenes/img11.jpg",
            duracion: 2,
            duracion_diferente: "2h 28m",
            genero: "Drama, Horror, Mystery",
            actores: ["Florence Pugh", "Jack Reynor"],
            capitulos: []
        },
        "fight club": {
            tipo: "pelicula",
            link: '<iframe class="img" src="https://www.youtube.com/embed/SUXWAEX2jlg?si=x88kAPvo9FA22Obu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            img: "imagenes/img12.jpg",
            duracion: 2,
            duracion_diferente: "2h 19m",
            genero: "Drama",
            actores: ["Brad Pitt", "Edward Norton"]
        },
        "coraline": {
            tipo: "pelicula",
            link: '<iframe class="img" src="https://www.youtube.com/embed/fvT7W5LHxF4?si=xBMyEFs7taSfqLd1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            img: "imagenes/img13.jpg",
            duracion: 2,
            duracion_diferente: "1h 40m",
            genero: "Animation, Drama, Family",
            actores: ["Dakota Fanning", "Teri Hatcher"]
        }
    }
}