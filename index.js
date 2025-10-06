const productos = [
    {
        nombre: "Avatar el camino del agua",
        description: "Ambientada más de una década después de los sucesos que tuvieron lugar en la primera película, AVATAR: EL CAMINO DEL AGUA narra la historia de la familia Sully (Jake, Neytiri y sus hijos), el peligro que los persigue, los esfuerzos que hacen para mantenerse a salvo, las batallas que libran para seguir con vida, y las tragedias que sobrellevan.",
        genero: "fantasia",
        director: "James Cameron",
        idioma: ["sub", "doblada"],
        tipo: ["2d", "3d"],
        precio: 35000,
        imagen: "avatar.jpg",
    },
    {
        nombre: "Una batalla tras otra",
        description: "Cuando su enemigo malvado reaparece después de 16 años, un grupo de exrevolucionarios se reúne para rescatar a la hija de uno de ellos.",
        genero: "accion",
        director: "Paul Thomas Anderson",
        idioma: ["sub", "doblada"],
        tipo: ["2d", "3d"],
        precio: 35000,
        imagen: "batalla.jpg",

    },
    {
        nombre: "Camina o muere",
        description: "De la esperada adaptación de la primera novela escrita por el maestro del suspenso Stephen King, y bajo la dirección de Francis Lawrence —la mente detrás de las impactantes películas de Los Juegos del Hambre (En llamas, Sinsajo partes 1 y 2, y La balada de los pájaros cantores y serpientes)— llega THE LONG WALK, un thriller intenso, estremecedor y profundamente emocional. Una historia que no solo pondrá a prueba los límites de sus protagonistas, sino también los del espectador, con una pregunta inquietante: ¿Hasta dónde serías capaz de llegar?",
        genero: "suspenso",
        director: "Francis Lawrence",
        idioma: ["sub", "doblada"],
        tipo: ["2d", "3d"],
        precio: 35000,
        imagen: "camina.jpg",
    },
    {
        nombre: "El conjuro 4",
        description: "El Conjuro 4: Último Ritos ofrece otro emocionante capítulo del icónico universo cinematográfico de El Conjuro, basado en hechos reales. Vera Farmiga y Patrick Wilson se reúnen para un último caso como los célebres investigadores paranormales de la vida real, Ed y Lorraine Warren, en una adición poderosa y escalofriante a la franquicia que rompe récords en taquilla global.",
        genero: "terror",
        director: "Michael Chaves",
        idioma: ["sub", "doblada"],
        tipo: ["2d", "3d"],
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
        tipo: ["2d", "3d"],
        precio: 35000,
        imagen: "demon.jpg",
    },
    {
        nombre: "Hamilton",
        description: "LA PELÍCULA CUENTA CON INTERVALO. Una experiencia escénica cinematográfica inolvidable, la versión filmada de la producción original de Broadway de HAMILTON combina lo mejor del teatro en vivo y el cine para crear una propuesta emocionante. HAMILTON es la historia de la América de entonces, contada por la América de hoy. Con una partitura que fusiona hip-hop, jazz, R&B y Broadway, el musical ha transformado la historia del padre fundador Alexander Hamilton en un momento revolucionario para el teatro: una obra que ha tenido un profundo impacto en la cultura, la política y la educación. Filmada en el Richard Rodgers Theatre de Broadway en junio de 2016, la película transporta al público al mundo del espectáculo de una manera íntima y única. Con libro, música y letras de Lin-Manuel Miranda y dirección de Thomas Kail, HAMILTON está inspirada en el libro “Alexander Hamilton” de Ron Chernow y producida por Thomas Kail, Lin-Manuel Miranda y Jeffrey Seller, con Sander Jacobs y Jill Furman como productores ejecutivos. La filmación fue realizada por RadicalMedia. El musical, ganador de 11 premios Tony®, premios Grammy®.",
        genero: "musical",
        director: "Thomas Kail",
        idioma: ["sub", "doblada"],
        tipo: ["2d", "3d"],
        precio: 35000,
        imagen: "hamilton.jpg",
    },
];
const productos1 = [
    {
        nombre: "Tron Ares",
        description: "Tercera entrega de la saga TRON. Cuenta la historia de Ares, un programa altamente sofisticado que es enviado desde el mundo digital al mundo real en una misión peligrosa, marcando el primer encuentro de la humanidad con seres de inteligencia artificial.",
        genero: "accion",
        director: "James Cameron",
        idioma: ["sub", "doblada"],
        tipo: ["2d", "3d"],
        precio: 35000,
        imagen: "tron.jpg",
    },
    {
        nombre: "TELÉFONO NEGRO 2",
        description: "Secuela de “Black Phone”. El Raptor quiere vengarse de Finn desde la tumba y escoge como objetivo a Gwen, su hermana pequeña. Gwen, una adolescente de 15 años con mucho carácter, empieza a recibir llamadas de un teléfono negro en sueños, acompañadas de inquietantes visiones de algo o alguien acechando a tres chicos en el campamento de invierno de Alpine Lake. Decidida a resolver el misterio y a acabar con el tormento de su hermano, Gwen convence a Finn para ir al campamento durante una tormenta de nieve. Juntos, los dos hermanos deberán enfrentarse a un asesino aún más poderoso desde la muerte.",
        genero: "terror",
        director: "Paul Thomas Anderson",
        idioma: ["sub", "doblada"],
        tipo: ["2d", "3d"],
        precio: 35000,
        imagen: "telefono.jpg",

    },
    {
        nombre: "MITSKI: THE LAND",
        description: "Mitski: The Land lleva a la pantalla toda la magia y grandeza de presenciar un espectáculo de Mitski en vivo. Grabada durante tres noches memorables en el Fox Theatre de Atlanta en 2024, esta producción captura la experiencia extraordinaria que mantuvo fascinados a cientos de miles de fanáticos en conciertos en todo el mundo. Mitski, una artista extraordinaria sobre el escenario, llevó su aclamado séptimo álbum, The Land Is Inhospitable and So Are We, a todo el mundo con una puesta en escena teatral y audaz, ofreciendo un espectáculo tan imponente como cualquier superproducción en vivo. Acompañada por una banda de siete músicos y con la coreografía de Monica Mirabile, Mitski domina cada rincón del escenario, moviéndose entre luces y penumbras con maestría. Mitski: The Land nos muestra a una artista en su máximo esplendor musical, brindando una intimidad cinematográfica a esta experiencia arrolladora, presentando la música de “The Land Is…” junto con nuevas versiones y reinterpretaciones de canciones que han marcado su extensa trayectoria. La sobriedad del diseño escénico (creado por Andi Watson) refleja perfectamente los temas del álbum: el aislamiento, el anhelo y la belleza intensa de las relaciones humanas, con",
        genero: "musical",
        director: "Francis Lawrence",
        idioma: ["sub", "doblada"],
        tipo: ["2d", "3d"],
        precio: 35000,
        imagen: "myski.jpg",
    },
];

const comida = [
    {
        nombre: "Nachos",
        description: "nachos con aderezo",
        precio: 5000,
        imagen: "nachos.jpg",
    },
    {
        nombre: "Pororo grande",
        description: "balde grande",
        precio: 5000,
        imagen: "pororogrande.jpg",

    },
    {
        nombre: "Pororo medio",
        description: "balde mediano",
        precio: 5000,
        imagen: "pororomedio.jpg",
    },
];
const comida2 = [
    {
        nombre: "M&M",
        description: "Bolsa con M&M",
        precio: 500,
        imagen: "mym.jpg",
    },
    {
        nombre: "Skittles",
        description: "Bolsa con Skittles",
        precio: 500,
        imagen: "Skittles.jpg",

    },
];
const comida3 = [
    {
        nombre: "Botella de agua",
        description: "Botella con agua",
        precio: 500,
        imagen: "agua.jpg",
    },
    {
        nombre: "Vaso",
        description: "Vaso grande con gaseosa",
        precio: 5000,
        imagen: "baso.jpg",

    },
];
const comida4 = [
    {
        nombre: "Promo grande",
        description: "2 baldes de pororo, 4 Vasos grandes",
        precio: 5599,
        imagen: "promogrande.jpg",
    },
    {
        nombre: "Promo media",
        description: "Baso grande con nachos",
        precio: 5000,
        imagen: "promomedia.jpg",

    },
];

let cargarcomida = (prod = comida) => {
    let contenido = "";

    prod.forEach((prod, id) => {
        contenido += `<div class="com">
        <button type="button" onClick="ComidaAlCarrito(${id})">
             <img src="imagenes/${prod.imagen}" alt="${prod.nombre}"/>
        </button>
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
    </div>`;
    });
    document.getElementById("mostrar-comida").innerHTML = contenido;
};
let cargarcomida2 = (prod = comida2) => {
    let contenido = "";

    prod.forEach((prod, id) => {
        contenido += `<div class="com">
        <button type="button" onClick="ComidaAlCarrito2(${id})">
             <img src="imagenes/${prod.imagen}" alt="${prod.nombre}"/>
        </button>
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
    </div>`;
    });
    document.getElementById("mostrar-comida4").innerHTML = contenido;
};
let cargarcomida3 = (prod = comida3) => {
    let contenido = "";

    prod.forEach((prod, id) => {
        contenido += `<div class="com">
        <button type="button" onClick="ComidaAlCarrito3(${id})">
             <img src="imagenes/${prod.imagen}" alt="${prod.nombre}"/>
        </button>
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
    </div>`;
    });
    document.getElementById("mostrar-comida2").innerHTML = contenido;
};
let cargarcomida4 = (prod = comida4) => {
    let contenido = "";

    prod.forEach((prod, id) => {
        contenido += `<div class="com">
        <button type="button" onClick="ComidaAlCarrito4(${id})">
             <img src="imagenes/${prod.imagen}" alt="${prod.nombre}"/>
        </button>
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
    </div>`;
    });
    document.getElementById("mostrar-comida3").innerHTML = contenido;
};
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

function agregarComidaAlCarrito(item) {
    let carritoComidas = JSON.parse(localStorage.getItem("carritoComidas")) || [];

    // Si ya existe la comida, aumentar cantidad
    const existente = carritoComidas.find(c => c.nombre === item.nombre);
    if (existente) {
        existente.cantidad++;
    } else {
        item.cantidad = 1;
        carritoComidas.push(item);
    }

    localStorage.setItem("carritoComidas", JSON.stringify(carritoComidas));
    alert(`${item.nombre} se agregó al carrito 🍿`);
}

// Estas son las funciones llamadas desde comida.html
function ComidaAlCarrito(id) {
    agregarComidaAlCarrito(comida[id]);
}

function ComidaAlCarrito2(id) {
    agregarComidaAlCarrito(comida2[id]);
}

function ComidaAlCarrito3(id) {
    agregarComidaAlCarrito(comida3[id]);
}

function ComidaAlCarrito4(id) {
    agregarComidaAlCarrito(comida4[id]);
}


function mostrarCarritoCompleto() {
    const peli = JSON.parse(localStorage.getItem("peliculaSeleccionada"));
    const carritoComidas = JSON.parse(localStorage.getItem("carritoComidas")) || [];

    let total = 0;
    const contenedorPeli = document.querySelector(".informacionpeli");
    const contenedorComida = document.querySelector(".informacioncomida");
    const totalContenedor = document.getElementById("total-pagar");

    contenedorPeli.innerHTML = "";
    contenedorComida.innerHTML = "";

    // --- Mostrar película ---
    if (peli) {
        contenedorPeli.innerHTML = `
            <div class="produ">
                <img src="imagenes/${peli.imagen}" alt="${peli.nombre}">
                <h3>${peli.nombre}</h3>
                <p>${peli.description}</p>
                <p>Precio unitario: $${peli.precio}</p>
                <label>Cantidad de entradas:</label>
                <input type="number" id="cantidadEntradas" min="1" value="1" style="width:60px;">
                <p id="subtotalPeli">Subtotal: $${peli.precio}</p>
            </div>`;
        total += peli.precio;

        // actualizar total si cambia cantidad
        const inputCant = document.getElementById("cantidadEntradas");
        const subtotalPeli = document.getElementById("subtotalPeli");
        inputCant.addEventListener("input", () => {
            let cant = parseInt(inputCant.value);
            if (isNaN(cant) || cant < 1) cant = 1;
            const sub = peli.precio * cant;
            subtotalPeli.textContent = `Subtotal: $${sub}`;
            actualizarTotal();
        });
    }

    // --- Mostrar comidas ---
    if (carritoComidas.length > 0) {
        carritoComidas.forEach((item, index) => {
            const subtotal = item.precio * item.cantidad;
            total += subtotal;

            const div = document.createElement("div");
            div.classList.add("produ");
            div.innerHTML = `
                <img src="imagenes/${item.imagen}" alt="${item.nombre}">
                <h3>${item.nombre}</h3>
                <p>${item.description}</p>
                <p>Precio unitario: $${item.precio}</p>
                <label>Cantidad:</label>
                <input type="number" min="1" value="${item.cantidad}" data-index="${index}" class="cantidadComida" style="width:60px;">
                <p class="subtotalComida">Subtotal: $${subtotal}</p>
                <button class="btnQuitar" data-index="${index}">Quitar</button>
            `;
            contenedorComida.appendChild(div);
        });
    } else {
        contenedorComida.innerHTML = "<p id='nohaynada'>No agregaste comida todavía </p>";
    }

    totalContenedor.innerHTML = `<h3>Total a pagar: $${total}</h3>`;

    // --- Eventos: actualizar cantidades o quitar ---
    document.querySelectorAll(".cantidadComida").forEach(input => {
        input.addEventListener("input", e => {
            let cant = parseInt(e.target.value);
            if (isNaN(cant) || cant < 1) cant = 1;

            const idx = e.target.dataset.index;
            carritoComidas[idx].cantidad = cant;
            localStorage.setItem("carritoComidas", JSON.stringify(carritoComidas));
            mostrarCarritoCompleto();
        });
    });

    document.querySelectorAll(".btnQuitar").forEach(btn => {
        btn.addEventListener("click", e => {
            const idx = e.target.dataset.index;
            carritoComidas.splice(idx, 1);
            localStorage.setItem("carritoComidas", JSON.stringify(carritoComidas));
            mostrarCarritoCompleto();
        });
    });

    // --- Función auxiliar para recalcular total ---
    function actualizarTotal() {
        let totalFinal = 0;
        if (peli) {
            const cant = parseInt(document.getElementById("cantidadEntradas").value);
            totalFinal += peli.precio * (isNaN(cant) ? 1 : cant);
        }
        carritoComidas.forEach(c => {
            totalFinal += c.precio * c.cantidad;
        });
        totalContenedor.innerHTML = `<h3>Total a pagar: $${totalFinal}</h3>`;
    }
}

/**
 * @method filtrarProductos
 * @description Filtra las películas según la palabra ingresada en el campo de búsqueda
 *              y/o los géneros seleccionados. Mantiene la separación visual entre las secciones
 *              "En estreno" (productos) y "Próximamente" (productos1), mostrando cada película
 *              en su contenedor correspondiente.
 *
 * @returns {void} No devuelve valor; actualiza dinámicamente el contenido del DOM mostrando
 *                 solo las películas que coinciden con los filtros aplicados.
 *
 * @example
 * // Si el usuario escribe "acción" y selecciona el género "Acción":
 * // se mostrarán las películas de ese género tanto en estrenos como en próximamente,
 * // cada una en su sección correspondiente.
 */
let filtrarProductos = () => {
    let searchWord = document.getElementById("buscar").value.trim().toLowerCase();

    // Crear copias de los arreglos originales
    let estrenos = [...productos];
    let proximamente = [...productos1];

    // Función auxiliar para filtrar según palabra y género
    const aplicarFiltros = (lista) => {
        let filtrada = [...lista];

        // Filtrar por texto (nombre o descripción)
        if (searchWord) {
            filtrada = filtrada.filter(
                (p) =>
                    p.nombre.toLowerCase().includes(searchWord) ||
                    p.description.toLowerCase().includes(searchWord)
            );
        }

        // Filtrar por género
        const generos = Array.from(document.querySelectorAll("input[name='genero']:checked"))
            .map((g) => g.value.toLowerCase());

        if (generos.length > 0) {
            filtrada = filtrada.filter((p) => generos.includes(p.genero.toLowerCase()));
        }

        return filtrada;
    };

    // Aplicar filtros a ambas listas
    const filtradosEstreno = aplicarFiltros(estrenos);
    const filtradosProximamente = aplicarFiltros(proximamente);

    // Limpiar los contenedores antes de mostrar
    const mostrarPeliculas = document.getElementById("mostrar-peliculas");
    const mostrarPeliculas2 = document.getElementById("mostrar-peliculas2");

    mostrarPeliculas.innerHTML = "";
    mostrarPeliculas2.innerHTML = "";

    // Renderizar estrenos filtrados
    if (filtradosEstreno.length > 0) {
        filtradosEstreno.forEach((p, id) => {
            const html = `
                <div class="produ">
                    <button type="button" onClick="agregarAlCarrito(${id})">
                        <img src="imagenes/${p.imagen}" alt="${p.nombre}"/>
                    </button>
                    <h3>${p.nombre}</h3>
                </div>`;
            mostrarPeliculas.innerHTML += html;
        });
    } else {
        mostrarPeliculas.innerHTML = `<p id="nohaynada">No hay películas de estreno que coincidan.</p>`;
    }

    // Renderizar próximas filtradas
    if (filtradosProximamente.length > 0) {
        filtradosProximamente.forEach((p, id) => {
            const html = `
                <div class="produ">
                    <button type="button" onClick="agregarAlCarrito2(${id})">
                        <img src="imagenes/${p.imagen}" alt="${p.nombre}"/>
                    </button>
                    <h3>${p.nombre}</h3>
                </div>`;
            mostrarPeliculas2.innerHTML += html;
        });
    } else {
        mostrarPeliculas2.innerHTML = `<p id="nohaynada">No hay películas próximamente que coincidan.</p>`;
    }
};

/**
 * @method filtrarComida
 * @description Filtra los productos de comida, dulces, bebidas y promociones según
 *              el texto ingresado en el campo de búsqueda. Combina los cuatro arreglos
 *              principales (`comida`, `comida2`, `comida3`, `comida4`) y actualiza
 *              dinámicamente el contenido mostrado en el DOM.
 *
 * @returns {void} No devuelve valor; modifica directamente el contenido HTML de los
 *                 contenedores de comida en la página `comida.html`.
 */
let filtrarComida = () => {
    let searchWord = document.getElementById("buscar").value.trim().toLowerCase();

    // Combinar los cuatro arreglos de comida
    let todasLasComidas = [...comida, ...comida2, ...comida3, ...comida4];
    let filtradas = todasLasComidas;

    // Filtrar por búsqueda (nombre o descripción)
    if (searchWord) {
        filtradas = filtradas.filter(
            (p) =>
                p.nombre.toLowerCase().includes(searchWord) ||
                p.description.toLowerCase().includes(searchWord)
        );
    }

    // Limpiar los contenedores existentes
    document.getElementById("mostrar-comida").innerHTML = "";
    document.getElementById("mostrar-comida2").innerHTML = "";
    document.getElementById("mostrar-comida3").innerHTML = "";
    document.getElementById("mostrar-comida4").innerHTML = "";

    // Volver a renderizar los productos filtrados según el tipo original
    filtradas.forEach((p) => {
        const html = `
            <div class="com">
                <button type="button" onClick="agregarComidaAlCarrito({
                    nombre: '${p.nombre}',
                    description: '${p.description}',
                    precio: ${p.precio},
                    imagen: '${p.imagen}'
                })">
                    <img src="imagenes/${p.imagen}" alt="${p.nombre}"/>
                </button>
                <h3>${p.nombre}</h3>
                <p>$${p.precio}</p>
            </div>`;

        // Mostrar según el grupo original
        if (comida.find(c => c.nombre === p.nombre)) {
            document.getElementById("mostrar-comida").innerHTML += html;
        } else if (comida2.find(c => c.nombre === p.nombre)) {
            document.getElementById("mostrar-comida4").innerHTML += html;
        } else if (comida3.find(c => c.nombre === p.nombre)) {
            document.getElementById("mostrar-comida2").innerHTML += html;
        } else if (comida4.find(c => c.nombre === p.nombre)) {
            document.getElementById("mostrar-comida3").innerHTML += html;
        }
    });
};
/* ---------- INICIO: funcionalidades de pago (copiar al final de index.js o en pago.js) ---------- */

/**
 * Lista simple de cupones válidos.
 * Puedes editarla: {codigo: 'STRING', tipo: 'percent'|'fixed', valor: number, descripcion: ''}
 */
const CUponesValido = [
    {codigo: 'DESCUENTO10', tipo: 'percent', valor: 10, descripcion: '10% de descuento'},
    {codigo: 'CUPON500', tipo: 'fixed', valor: 500, descripcion: '$500 de descuento'},
    {codigo: 'PROMO5', tipo: 'percent', valor: 5, descripcion: '5% de descuento'}
];

/**
 * @method sincronizarTotalEnPago
 *  * @param {void} - No recibe parámetros (toma los datos desde localStorage y el DOM).
 *  * @return {void} No retorna valor; actualiza el DOM con el total actualizado.
 *  a
 */
function sincronizarTotalEnPago() {
    const peli = JSON.parse(localStorage.getItem("peliculaSeleccionada"));
    const carritoComidas = JSON.parse(localStorage.getItem("carritoComidas")) || [];
    // Si el carrito en la otra página guarda cantidad de entradas, usala. Si no, asumimos 1.
    let cantidadEntradas = parseInt(localStorage.getItem("cantidadEntradas")) || 1;

    let total = 0;
    if (peli && typeof peli.precio === 'number') {
        total += peli.precio * cantidadEntradas;
    }
    carritoComidas.forEach(item => {
        // item.cantidad puede existir
        const cant = parseInt(item.cantidad) || 1;
        total += (item.precio || 0) * cant;
    });

    // Aplicar cupón guardado si existe
    const cuponAplicado = JSON.parse(localStorage.getItem('cuponAplicado'));
    let descuento = 0;
    let mensajeCup = '';
    if (cuponAplicado) {
        if (cuponAplicado.tipo === 'percent') {
            descuento = Math.round(total * (cuponAplicado.valor / 100));
            mensajeCup = ` (${cuponAplicado.valor}% aplicado = -$${descuento})`;
        } else if (cuponAplicado.tipo === 'fixed') {
            descuento = cuponAplicado.valor;
            mensajeCup = ` (-$${descuento})`;
        }
    }
    const totalFinal = Math.max(0, total - descuento);

    // Actualizar UI
    const el = document.getElementById('totalPagar');
    if (el) el.textContent = totalFinal;

    // Opcional: mostrar detalle
    const mensajeEl = document.getElementById('mensajeCupon');
    if (mensajeEl && cuponAplicado) {
        mensajeEl.textContent = `Cupón "${cuponAplicado.codigo}" aplicado${mensajeCup}. Total actualizado.`;
    }
}

/**
 * * @method aplicarCupon
 *  * @param {void} - No recibe parámetros directamente (usa el valor del input #cupon).
 *  * @return {void} No retorna valor; actualiza el total y muestra un mensaje en pantalla.
 *  */
function aplicarCupon() {
    const input = document.getElementById('cupon');
    const mensajeEl = document.getElementById('mensajeCupon');
    if (!input) return;
    const codigo = input.value.trim().toUpperCase();
    if (!codigo) {
        if (mensajeEl) mensajeEl.textContent = 'Ingrese un código de cupón.';
        return;
    }
    const encontrado = CUponesValido.find(c => c.codigo === codigo);
    if (!encontrado) {
        if (mensajeEl) mensajeEl.textContent = 'Cupón inválido.';
        localStorage.removeItem('cuponAplicado');
        sincronizarTotalEnPago();
        return;
    }

    // Guardar cupón aplicado
    localStorage.setItem('cuponAplicado', JSON.stringify(encontrado));
    if (mensajeEl) mensajeEl.textContent = `Cupón "${encontrado.codigo}" válido: ${encontrado.descripcion}.`;
    sincronizarTotalEnPago();
}

/**
 * * @method mostrarTarjeta
 *  * @param {void} - No recibe parámetros (usa el valor del select #formaPago).
 *  * @return {void} No retorna valor; modifica la visibilidad del formulario de tarjeta.
 *  */
function mostrarTarjeta() {
    const select = document.getElementById('formaPago');
    const datos = document.getElementById('datosTarjeta');
    if (!select || !datos) return;
    if (select.value === 'tarjeta') {
        datos.style.display = 'block';
    } else {
        datos.style.display = 'none';
    }
}

/* ----------------- Validadores de tarjeta ----------------- */

// Limpiar input dejando sólo dígitos
function soloDigitosInput(el, maxLength) {
    if (!el) return;
    el.addEventListener('input', () => {
        let v = el.value.replace(/\D/g, '');
        if (maxLength) v = v.slice(0, maxLength);
        el.value = v;
    });
}

// Luhn algorithm para verificar número de tarjeta
function luhnCheck(cardNumber) {
    const s = cardNumber.replace(/\D/g, '');
    let sum = 0;
    let alt = false;
    for (let i = s.length - 1; i >= 0; i--) {
        let n = parseInt(s.charAt(i), 10);
        if (alt) {
            n *= 2;
            if (n > 9) n -= 9;
        }
        sum += n;
        alt = !alt;
    }
    return (sum % 10) === 0;
}

// Verificar fecha MM/AA no vencida
function fechaValidaYNoVencida(mmYY) {
    const m = mmYY.replace(/\s/g, '');
    if (!/^\d{2}\/\d{2}$/.test(m)) return false;
    const [mmStr, yyStr] = m.split('/');
    const mm = parseInt(mmStr, 10);
    const yy = parseInt(yyStr, 10);
    if (mm < 1 || mm > 12) return false;

    // Convertir a año completo: asumimos 20XX para 00-99 (ajustable)
    const anio = 2000 + yy;
    const fechaVenc = new Date(anio, mm, 1); // primer día del mes siguiente se considera vencido en el primer día del mes
    // Tomar fin del mes como último instante válido: usaremos el primer día del siguiente mes menos 1ms.
    const ahora = new Date();
    // Considerar válido si final del mes >= hoy
    // Para simplificar: comparamos año/mes
    const ahoraYm = ahora.getFullYear() * 12 + (ahora.getMonth() + 1);
    const vencYm = anio * 12 + mm;
    return vencYm >= ahoraYm;
}

/* @method confirmarCompra
* @param {void} - No recibe parámetros directamente (toma los valores desde el DOM).
* @return {void} No retorna ningún valor; muestra alertas y redirige al usuario al index.html.
*/
function confirmarCompra() {
    const forma = document.getElementById('formaPago').value;
    const mensajeEl = document.getElementById('mensajeCupon');

    // Calcular total actual (para mostrar en confirm)
    const totalActual = parseInt(document.getElementById('totalPagar').textContent) || 0;

    if (!forma) {
        alert('Seleccione una forma de pago.');
        return;
    }

    if (forma === 'efectivo') {
        // Flujo sencillo
        alert(`Compra confirmada. Pagarás $${totalActual} en efectivo al retirar.`);
        // Opcional: limpiar carrito
        localStorage.removeItem('peliculaSeleccionada');
        localStorage.removeItem('carritoComidas');
        localStorage.removeItem('cantidadEntradas');
        localStorage.removeItem('cuponAplicado');
        window.location.href = 'index.html'; // redirigir a inicio
        return;
    }

    // Si es tarjeta: validar campos
    const num = document.getElementById('numTarjeta').value.replace(/\s/g, '');
    const nombre = document.getElementById('nombreTarjeta').value.trim();
    const venc = document.getElementById('vencimiento').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (!/^\d{13,19}$/.test(num)) {
        alert('Número de tarjeta inválido: deben ser entre 13 y 19 dígitos solamente.');
        return;
    }
    if (!luhnCheck(num)) {
        alert('Número de tarjeta inválido (falló verificación Luhn).');
        return;
    }
    if (!nombre || nombre.length < 2) {
        alert('Ingrese el nombre tal como figura en la tarjeta.');
        return;
    }
    if (!/^\d{2}\/\d{2}$/.test(venc) || !fechaValidaYNoVencida(venc)) {
        alert('Fecha de vencimiento inválida o ya vencida. Use formato MM/AA.');
        return;
    }
    if (!/^\d{3,4}$/.test(cvv)) {
        alert('CVV inválido: deben ser 3 o 4 dígitos.');
        return;
    }

    // Simular verificación de seguridad (EN PRODUCCION deberías llamar a un backend/servicio de pagos)
    // Aquí sólo mostramos confirmación
    alert(`Pago con tarjeta autorizado. Se cobró $${totalActual}. ¡Gracias por su compra!`);

    // Limpiar carrito (opcional)
    localStorage.removeItem('peliculaSeleccionada');
    localStorage.removeItem('carritoComidas');
    localStorage.removeItem('cantidadEntradas');
    localStorage.removeItem('cuponAplicado');

    // Redirigir o actualizar UI
    window.location.href = 'index.html';
}

/* ----------------- Inicialización y eventos ----------------- */
document.addEventListener('DOMContentLoaded', () => {
    /* @method sincronizarTotalEnPago
    * @param {void} - No recibe parámetros (toma los datos desde localStorage y el DOM).
* @return {void} No retorna valor; actualiza el DOM con el total actualizado.
    */
    sincronizarTotalEnPago();

    // Asignar listeners para inputs numéricos
    const elNum = document.getElementById('numTarjeta');
    const elCvv = document.getElementById('cvv');
    soloDigitosInput(elNum, 19); // admite hasta 19 dígitos (VISA/Amex/etc)
    soloDigitosInput(elCvv, 4);

    // Limpiar/ocultar datos de tarjeta por defecto
    mostrarTarjeta();

    // Enlace botón aplicar cupón y confirmar compra si existen en DOM
    const btnCupon = document.querySelector('.cupon .pago2');
    if (btnCupon) btnCupon.addEventListener('click', aplicarCupon);
    const btnConfirm = document.querySelector('.pago2[onclick="confirmarCompra()"]');
    // en caso de que el botón tenga onclick inline, no necesitamos agregar otro listener; si quieres, lo puedes cambiar
});

/* ---------- FIN: funcionalidades de pago ---------- */