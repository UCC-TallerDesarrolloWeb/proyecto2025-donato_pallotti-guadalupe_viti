const productos = [
    {
        nombre: "Avatar el camino del agua",
        description: "Ambientada más de una década después de los sucesos que tuvieron lugar en la primera película, AVATAR: EL CAMINO DEL AGUA narra la historia de la familia Sully (Jake, Neytiri y sus hijos), el peligro que los persigue, los esfuerzos que hacen para mantenerse a salvo, las batallas que libran para seguir con vida, y las tragedias que sobrellevan.",
        genero: ["fantasia", "accion"],
        director: "James Cameron",
        talle: ["1", "2", "3"],
        precio: 35000,
        imagen: "avatar.jpg",
    },
    {
        nombre: "Una batalla tras otra",
        description: "Cuando su enemigo malvado reaparece después de 16 años, un grupo de exrevolucionarios se reúne para rescatar a la hija de uno de ellos.",
        genero: ["terror", "accion"],
        director: "Paul Thomas Anderson",
        talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
        precio: 35000,
        imagen: "batalla.jpg",
    },
    {
        nombre: "Camina o muere",
        description: "De la esperada adaptación de la primera novela escrita por el maestro del suspenso Stephen King, y bajo la dirección de Francis Lawrence —la mente detrás de las impactantes películas de Los Juegos del Hambre (En llamas, Sinsajo partes 1 y 2, y La balada de los pájaros cantores y serpientes)— llega THE LONG WALK, un thriller intenso, estremecedor y profundamente emocional. Una historia que no solo pondrá a prueba los límites de sus protagonistas, sino también los del espectador, con una pregunta inquietante: ¿Hasta dónde serías capaz de llegar?",
        genero: "suspenso",
        director: "Francis Lawrence",
        talle: ["s/talle"],
        precio: 35000,
        imagen: "camina.jpg",
    },
    {
        nombre: "El conjuro 4",
        description: "El Conjuro 4: Último Ritos ofrece otro emocionante capítulo del icónico universo cinematográfico de El Conjuro, basado en hechos reales. Vera Farmiga y Patrick Wilson se reúnen para un último caso como los célebres investigadores paranormales de la vida real, Ed y Lorraine Warren, en una adición poderosa y escalofriante a la franquicia que rompe récords en taquilla global.",
        genero: ["terror", "accion"],
        director: "Michael Chaves",
        talle: ["s/talle"],
        precio: 35000,
        imagen: "conjuro.jpg",
    },
    {
        nombre: "Demon slayer, El castillo infinito",
        description:
            "COMUNICAMOS QUE ESTE FILM, EL DÍA JUEVES 11 DE SEPTIEMBRE, APLICARÁ ÚNICAMENTE EL PRECIO CORRESPONDIENTE AL FORMATO DE CADA COMPLEJO, YA QUE NO ACEPTARÁ PROMOCIONES NI BENEFICIOS PARA LA ADQUISICIÓN DE ENTRADAS. El final se acerca. ¡Crunchyroll se alegra en presentar Demon Slayer: Kimetsu no Yaiba Castillo Infinito, que llegará a los cines como trilogía! El primer tráiler nos lleva a las entrañas de la pelea que está por desencadenarse entre el cuerpo de cazadores de demonios y los pilares contra Muzan Kibutsuji y sus leales demonios. Esta épica historia comienza cuando Tanjiro Kamado, un chico cuya familia es asesinada por un demonio, se une al cuerpo de cazadores de demonios para convertir a su hermana menor Nezuko de nuevo en humana después de que ella se transformara en un demonio.",
        genero: ["animacion", "accion"],
        director: "Haruo Sotozaki",
        talle: ["s/talle"],
        precio: 35000,
        imagen: "demon.jpg",
    },
    {
        nombre: "Hamilton",
        description: "LA PELÍCULA CUENTA CON INTERVALO. Una experiencia escénica cinematográfica inolvidable, la versión filmada de la producción original de Broadway de HAMILTON combina lo mejor del teatro en vivo y el cine para crear una propuesta emocionante. HAMILTON es la historia de la América de entonces, contada por la América de hoy. Con una partitura que fusiona hip-hop, jazz, R&B y Broadway, el musical ha transformado la historia del padre fundador Alexander Hamilton en un momento revolucionario para el teatro: una obra que ha tenido un profundo impacto en la cultura, la política y la educación. Filmada en el Richard Rodgers Theatre de Broadway en junio de 2016, la película transporta al público al mundo del espectáculo de una manera íntima y única. Con libro, música y letras de Lin-Manuel Miranda y dirección de Thomas Kail, HAMILTON está inspirada en el libro “Alexander Hamilton” de Ron Chernow y producida por Thomas Kail, Lin-Manuel Miranda y Jeffrey Seller, con Sander Jacobs y Jill Furman como productores ejecutivos. La filmación fue realizada por RadicalMedia. El musical, ganador de 11 premios Tony®, premios Grammy®.",
        genero: "musical",
        director: "Thomas Kail",
        talle: ["XXS", "XS", "S", "M", "L", "XL"],
        precio: 35000,
        imagen: "hamilton.jpg",
    },
];
/**
* @method cargarpelis
* @param {Array<Object>} prod - Arreglo de productos/películas a mostrar.
* Cada objeto debe contener al menos las propiedades:
    *   - {string} imagen: nombre del archivo de imagen del producto.
*   - {string} nombre: nombre de la película/producto.
* @return {void} No retorna nada, solo modifica el DOM.
*/
let cargarpelis= (prod = productos) => {
    let contenido = "";

    prod.forEach((prod, id) => {
        contenido += `<div class="produ">
        <button type="button" onClick="quieroveresta(${id})">
             <img src="imagenes/${prod.imagen}" alt="${prod.nombre}" id="demon"/>
        </button>
        <h3>${prod.nombre}</h3>
    </div>`;
    });
    document.getElementById("mostrar-peliculas").innerHTML = contenido;
};

let quieroveresta =(id)=> {
    localStorage.setItem("carrito",id)
}

