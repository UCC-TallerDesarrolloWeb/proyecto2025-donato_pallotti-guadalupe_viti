export const getComidas = async () => {
    return [
        { nombre: "Nachos", description: "Nachos con aderezo", precio: 5000, imagen: "/imagenes/comida_nachos.jpg", categoria: "comida" },
        { nombre: "Pororo grande", description: "Balde grande", precio: 5000, imagen: "/imagenes/comida_pororogrande.jpg", categoria: "comida" },
        { nombre: "Pororo medio", description: "Balde mediano", precio: 5000, imagen: "/imagenes/comida_pororomedio.jpg", categoria: "comida" },
        { nombre: "M&M", description: "Bolsa con M&M", precio: 500, imagen: "/imagenes/comida_mym.jpg", categoria: "dulce" },
        { nombre: "Skittles", description: "Bolsa con Skittles", precio: 500, imagen: "/imagenes/comida_skittles.jpg", categoria: "dulce" },
        { nombre: "Botella de agua", description: "Botella con agua", precio: 500, imagen: "/imagenes/comida_agua.jpg", categoria: "bebida" },
        { nombre: "Vaso grande", description: "Vaso con gaseosa", precio: 5000, imagen: "/imagenes/comida_vaso.jpg", categoria: "bebida" },
        { nombre: "Promo grande", description: "2 baldes de pororo, 4 vasos grandes", precio: 5599, imagen: "/imagenes/comida_promogrande.jpg", categoria: "promo" },
        { nombre: "Promo media", description: "Vaso grande con nachos", precio: 5000, imagen: "/imagenes/comida_promomedia.jpg", categoria: "promo" }
    ];
};
