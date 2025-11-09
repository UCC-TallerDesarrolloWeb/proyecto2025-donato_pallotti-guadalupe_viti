export const getPeliculas = async () => {
    return [
        {
            nombre: "Avatar el camino del agua",
            description:
                "Ambientada más de una década después de los sucesos...",
            genero: "fantasia",
            director: "James Cameron",
            precio: 35000,
            imagen: "/imagenes/pelicula_avatar.jpg",
        },
        {
            nombre: "El conjuro 4",
            description: "El Conjuro 4: Último Ritos...",
            genero: "terror",
            director: "Michael Chaves",
            precio: 35000,
            imagen: "/imagenes/pelicula_conjuro.jpg",
        },
    ];
};

export const getProximosEstrenos = async () => {
    return [
        {
            nombre: "Tron Ares",
            description: "Tercera entrega de la saga TRON...",
            genero: "accion",
            director: "Joseph Kosinski",
            precio: 35000,
            imagen: "/imagenes/pelicula_tron.jpg",
        },
    ];
};
