const productos = [
    {
        nombre: "Avatar el camino del agua",
        description: "Ambientada más de una década después de los sucesos que tuvieron lugar en la primera película, AVATAR: EL CAMINO DEL AGUA narra la historia de la familia Sully (Jake, Neytiri y sus hijos), el peligro que los persigue, los esfuerzos que hacen para mantenerse a salvo, las batallas que libran para seguir con vida, y las tragedias que sobrellevan.",
        genero: "fantasia",
        director: "James Cameron",
        idioma: ["sub", "doblada"],
        tipo:["2d","3d"],
        precio: 35000,
        imagen: "avatar.jpg",
    },
    {
        nombre: "Una batalla tras otra",
        description: "Cuando su enemigo malvado reaparece después de 16 años, un grupo de exrevolucionarios se reúne para rescatar a la hija de uno de ellos.",
        genero:  "accion",
        director: "Paul Thomas Anderson",
        idioma: ["sub", "doblada"],
        tipo:["2d","3d"],
        precio: 35000,
        imagen: "batalla.jpg",

    },
    {
        nombre: "Camina o muere",
        description: "De la esperada adaptación de la primera novela escrita por el maestro del suspenso Stephen King, y bajo la dirección de Francis Lawrence —la mente detrás de las impactantes películas de Los Juegos del Hambre (En llamas, Sinsajo partes 1 y 2, y La balada de los pájaros cantores y serpientes)— llega THE LONG WALK, un thriller intenso, estremecedor y profundamente emocional. Una historia que no solo pondrá a prueba los límites de sus protagonistas, sino también los del espectador, con una pregunta inquietante: ¿Hasta dónde serías capaz de llegar?",
        genero: "suspenso",
        director: "Francis Lawrence",
        idioma: ["sub", "doblada"],
        tipo:["2d","3d"],
        precio: 35000,
        imagen: "camina.jpg",
    },
    {
        nombre: "El conjuro 4",
        description: "El Conjuro 4: Último Ritos ofrece otro emocionante capítulo del icónico universo cinematográfico de El Conjuro, basado en hechos reales. Vera Farmiga y Patrick Wilson se reúnen para un último caso como los célebres investigadores paranormales de la vida real, Ed y Lorraine Warren, en una adición poderosa y escalofriante a la franquicia que rompe récords en taquilla global.",
        genero: "terror",
        director: "Michael Chaves",
        idioma: ["sub", "doblada"],
        tipo:["2d","3d"],
        precio: 35000,
        imagen: "conjuro.jpg",
    },
    {
        nombre: "Demon slayer, El castillo infinito",
        description:
            "COMUNICAMOS QUE ESTE FILM, EL DÍA JUEVES 11 DE SEPTIEMBRE, APLICARÁ ÚNICAMENTE EL PRECIO CORRESPONDIENTE AL FORMATO DE CADA COMPLEJO, YA QUE NO ACEPTARÁ PROMOCIONES NI BENEFICIOS PARA LA ADQUISICIÓN DE ENTRADAS. El final se acerca. ¡Crunchyroll se alegra en presentar Demon Slayer: Kimetsu no Yaiba Castillo Infinito, que llegará a los cines como trilogía! El primer tráiler nos lleva a las entrañas de la pelea que está por desencadenarse entre el cuerpo de cazadores de demonios y los pilares contra Muzan Kibutsuji y sus leales demonios. Esta épica historia comienza cuando Tanjiro Kamado, un chico cuya familia es asesinada por un demonio, se une al cuerpo de cazadores de demonios para convertir a su hermana menor Nezuko de nuevo en humana después de que ella se transformara en un demonio.",
        genero: "animacion",
        director: "Haruo Sotozaki",
        idioma: ["sub", "doblada"],
        tipo:["2d","3d"],
        precio: 35000,
        imagen: "demon.jpg",
    },
    {
        nombre: "Hamilton",
        description: "LA PELÍCULA CUENTA CON INTERVALO. Una experiencia escénica cinematográfica inolvidable, la versión filmada de la producción original de Broadway de HAMILTON combina lo mejor del teatro en vivo y el cine para crear una propuesta emocionante. HAMILTON es la historia de la América de entonces, contada por la América de hoy. Con una partitura que fusiona hip-hop, jazz, R&B y Broadway, el musical ha transformado la historia del padre fundador Alexander Hamilton en un momento revolucionario para el teatro: una obra que ha tenido un profundo impacto en la cultura, la política y la educación. Filmada en el Richard Rodgers Theatre de Broadway en junio de 2016, la película transporta al público al mundo del espectáculo de una manera íntima y única. Con libro, música y letras de Lin-Manuel Miranda y dirección de Thomas Kail, HAMILTON está inspirada en el libro “Alexander Hamilton” de Ron Chernow y producida por Thomas Kail, Lin-Manuel Miranda y Jeffrey Seller, con Sander Jacobs y Jill Furman como productores ejecutivos. La filmación fue realizada por RadicalMedia. El musical, ganador de 11 premios Tony®, premios Grammy®.",
        genero: "musical",
        director: "Thomas Kail",
        idioma: ["sub", "doblada"],
        tipo:["2d","3d"],
        precio: 35000,
        imagen: "hamilton.jpg",
    },
];
const productos1 = [
    {
        nombre: "Tron Ares",
        description: "Tercera entrega de la saga TRON. Cuenta la historia de Ares, un programa altamente sofisticado que es enviado desde el mundo digital al mundo real en una misión peligrosa, marcando el primer encuentro de la humanidad con seres de inteligencia artificial.",
        genero:  "accion",
        director: "James Cameron",
        idioma: ["sub", "doblada"],
        tipo:["2d","3d"],
        precio: 35000,
        imagen: "tron.jpg",
    },
    {
        nombre: "TELÉFONO NEGRO 2",
        description: "Secuela de “Black Phone”. El Raptor quiere vengarse de Finn desde la tumba y escoge como objetivo a Gwen, su hermana pequeña. Gwen, una adolescente de 15 años con mucho carácter, empieza a recibir llamadas de un teléfono negro en sueños, acompañadas de inquietantes visiones de algo o alguien acechando a tres chicos en el campamento de invierno de Alpine Lake. Decidida a resolver el misterio y a acabar con el tormento de su hermano, Gwen convence a Finn para ir al campamento durante una tormenta de nieve. Juntos, los dos hermanos deberán enfrentarse a un asesino aún más poderoso desde la muerte.",
        genero:  "terror",
        director: "Paul Thomas Anderson",
        idioma: ["sub", "doblada"],
        tipo:["2d","3d"],
        precio: 35000,
        imagen: "telefono.jpg",

    },
    {
        nombre: "MITSKI: THE LAND",
        description: "Mitski: The Land lleva a la pantalla toda la magia y grandeza de presenciar un espectáculo de Mitski en vivo. Grabada durante tres noches memorables en el Fox Theatre de Atlanta en 2024, esta producción captura la experiencia extraordinaria que mantuvo fascinados a cientos de miles de fanáticos en conciertos en todo el mundo. Mitski, una artista extraordinaria sobre el escenario, llevó su aclamado séptimo álbum, The Land Is Inhospitable and So Are We, a todo el mundo con una puesta en escena teatral y audaz, ofreciendo un espectáculo tan imponente como cualquier superproducción en vivo. Acompañada por una banda de siete músicos y con la coreografía de Monica Mirabile, Mitski domina cada rincón del escenario, moviéndose entre luces y penumbras con maestría. Mitski: The Land nos muestra a una artista en su máximo esplendor musical, brindando una intimidad cinematográfica a esta experiencia arrolladora, presentando la música de “The Land Is…” junto con nuevas versiones y reinterpretaciones de canciones que han marcado su extensa trayectoria. La sobriedad del diseño escénico (creado por Andi Watson) refleja perfectamente los temas del álbum: el aislamiento, el anhelo y la belleza intensa de las relaciones humanas, con",
        genero: "musical",
        director: "Francis Lawrence",
        idioma: ["sub", "doblada"],
        tipo:["2d","3d"],
        precio: 35000,
        imagen: "myski.jpg",
    },
];

/**
 * @method cargarpelis
 * @param {Array<Object>} prod - Arreglo de productos/películas a mostrar.
 * Cada objeto debe contener al menos las propiedades:
 *   - {string} imagen: nombre del archivo de imagen del producto.
 *   - {string} nombre: nombre de la película/producto.
 * @return {void} las peliculas
 */
let cargarpelis = (prod = productos) => {
    let contenido = "";

    prod.forEach((prod, id) => {
        contenido += `<div class="produ">
        <button type="button" onClick="agregarAlCarrito(${id})">
             <img src="imagenes/${prod.imagen}" alt="${prod.nombre}"/>
        </button>
        <h3>${prod.nombre}</h3>
    </div>`;
    });
    document.getElementById("mostrar-peliculas").innerHTML = contenido;
};
/**
 * @method cargarpelis1
 * @param {Array<Object>} prod - Arreglo de productos/películas a mostrar.
 * Cada objeto debe contener al menos las propiedades:
 *   - {string} imagen: nombre del archivo de imagen del producto.
 *   - {string} nombre: nombre de la película/producto.
 * @return {void} las peliculas
 */
let cargarpelis2 = (prod = productos1) => {
    let contenido = "";

    prod.forEach((prod, id) => {
        contenido += `<div class="produ">
        <button type="button" onClick="agregarAlCarrito2(${id})">
             <img src="imagenes/${prod.imagen}" alt="${prod.nombre}"/>
        </button>
        <h3>${prod.nombre}</h3>
    </div>`;
    });
    document.getElementById("mostrar-peliculas2").innerHTML = contenido;
};


/**
 * @method agregarAlCarrito
 * @param {number} id - Índice del arreglo `productos` que representa la película seleccionada.
 * @description Guarda en el almacenamiento local (`localStorage`) la película elegida
 *              por el usuario para poder mostrarla luego en la página del carrito.
 * @return {void} No devuelve valor.
 */

let agregarAlCarrito = (id) => {
    const peli = productos[id];
    localStorage.setItem("peliculaSeleccionada", JSON.stringify(peli));

};
/**
 * @method agregarAlCarrito2
 * @param {number} id - Índice del arreglo `productos1` (por ejemplo, comidas u otros productos).
 * @description Funciona igual que `agregarAlCarrito`, pero utiliza el arreglo `productos1`.
 *              Sirve para guardar un tipo diferente de producto (como comida).
 * @return {void} No devuelve valor.
 */
let agregarAlCarrito2 = (id) => {
    const peli = productos1[id];
    localStorage.setItem("peliculaSeleccionada", JSON.stringify(peli));
};

/**
 * @method mostrarCarritoCompleto
 * @description Carga y muestra en pantalla el contenido completo del carrito:
 *              - La película seleccionada (si existe).
 *              - La comida seleccionada (si existe).
 *              También calcula el total a pagar sumando los precios de ambos.
 * @return {void} No devuelve valor. Modifica el DOM directamente.
 */
/**
 * @method mostrarCarritoCompleto
 * @description Muestra la película seleccionada, la comida (si hay),
 *              permite elegir cuántas entradas quiere el usuario
 *              y calcula el total a pagar.
 * @return {void}
 */
let mostrarCarritoCompleto = () => {
    const peli = JSON.parse(localStorage.getItem("peliculaSeleccionada"));
    const comida = JSON.parse(localStorage.getItem("comidaSeleccionada"));

    let total = 0;
    let contenido = "";

    // Si hay una película seleccionada, mostrarla con selector de cantidad
    if (peli) {
        contenido += `
        <div class="produ">
            <img src="imagenes/${peli.imagen}" alt="${peli.nombre}">
            <h3>${peli.nombre}</h3>
            <p>${peli.description}</p>
            <p>Precio unitario: $${peli.precio}</p>

            <label for="cantidad">Cantidad de entradas:</label>
            <input type="number" id="cantidad" min="1" value="1" style="width:60px;">

            <p id="subtotal">Subtotal: $${peli.precio}</p>
        </div>`;
        total += peli.precio;
    }

    // Si hay comida seleccionada, mostrarla
    if (comida) {
        contenido += `
        <div class="produ">
            <img src="imagenes/${comida.imagen}" alt="${comida.nombre}">
            <h3>${comida.nombre}</h3>
            <p>${comida.description}</p>
            <p>Precio: $${comida.precio1}</p>
        </div>`;
        total += comida.precio1;
    }

    // Mostrar la información en el HTML
    const contenedor = document.querySelector(".informacionpeli");
    contenedor.innerHTML = contenido;

    // Mostrar el total inicial
    const totalContenedor = document.getElementById("total-pagar");
    totalContenedor.innerHTML = `<h3>Total a pagar: $${total}</h3>`;

    // Si hay película, agregar comportamiento al input de cantidad
    if (peli) {
        const inputCantidad = document.getElementById("cantidad");
        const subtotalElem = document.getElementById("subtotal");

        inputCantidad.addEventListener("input", () => {
            let cantidad = parseInt(inputCantidad.value);
            if (isNaN(cantidad) || cantidad < 1) cantidad = 1;

            const subtotal = peli.precio * cantidad;
            subtotalElem.textContent = `Subtotal: $${subtotal}`;

            // Recalcular total general (película + comida)
            let nuevoTotal = subtotal + (comida ? comida.precio1 : 0);
            totalContenedor.innerHTML = `<h3>Total a pagar: $${nuevoTotal}</h3>`;
        });
    }
};

// Ejecutar al cargar la página
window.onload = mostrarCarritoCompleto;

let filtrarProductos = () => {
    let searchWord = document.getElementById("buscar").value.trim().toLowerCase();

    // Combinar ambos arreglos
    let todos = [...productos, ...productos1];
    let filtrados = todos;

    // Filtrar por búsqueda
    if (searchWord) {
        filtrados = filtrados.filter(
            (p) =>
                p.nombre.toLowerCase().includes(searchWord) ||
                p.description.toLowerCase().includes(searchWord)
        );
    }

    // Filtrar por género
    const generos = Array.from(document.querySelectorAll("input[name='genero']:checked"))
        .map((g) => g.value.toLowerCase());
    if (generos.length > 0) {
        filtrados = filtrados.filter((p) => generos.includes(p.genero.toLowerCase()));
    }


    const mostrarPeliculas = document.getElementById("mostrar-peliculas");

    const mostrarPeliculas2 = document.getElementById("mostrar-peliculas2");

    mostrarPeliculas.innerHTML = "";
    mostrarPeliculas2.innerHTML = "";

        filtrados.forEach((p) => {
            const html = `
                <div class="produ">
                    <button type="button" onClick="agregarAlCarrito(${p.id || 0})">
                        <img src="imagenes/${p.imagen}" alt="${p.nombre}"/>
                    </button>
                    <h3>${p.nombre}</h3>
                </div>`;


            mostrarPeliculas.innerHTML += html;
        });
};

// El usuario ingresa todos los datos para poder registrarse
function registrar() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;

  if (!nombre || !email || !password || !fechaNacimiento) {
    alert("Por favor completa todos los campos");
    return;
  }

  // Guardamos los datos del usuario en localStorage
  const usuario = { nombre, email, password, fechaNacimiento };
  localStorage.setItem("usuario", JSON.stringify(usuario));
  alert("Usuario registrado correctamente");
}

//Una vez registrado, comparamos que los datos sean correctos para permitir que ingrese sesion
function iniciarSesion() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioGuardado) {
    alert("No hay usuarios registrados");
    return;
  }

  if (email === usuarioGuardado.email && password === usuarioGuardado.password) {
    localStorage.setItem("sesionActiva", "true");
    window.location.href = "principal.html";
  } else {
    alert("Email o contraseña incorrectos");
  }
}

//perfil
const usuario = JSON.parse(localStorage.getItem("usuario"));
const sesionActiva = localStorage.getItem("sesionActiva");

if (!sesionActiva) {
    window.location.href = "index.html";
}

document.getElementById("info").innerHTML = `
    <p><strong>Nombre:</strong> ${usuario.nombre}</p>
    <p><strong>Email:</strong> ${usuario.email}</p>
    <p><strong>Fecha de nacimiento:</strong> ${usuario.fechaNacimiento}</p>
`;

function cerrarSesion() {
    localStorage.removeItem("sesionActiva");
    window.location.href = "index.html";
}