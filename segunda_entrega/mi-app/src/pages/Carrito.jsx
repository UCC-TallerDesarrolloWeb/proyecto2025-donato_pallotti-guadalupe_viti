import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@styles/styles.scss";

export default function CarritoPage() {
    const navigate = useNavigate();
    const [pelicula, setPelicula] = useState(null);
    const [carrito, setCarrito] = useState([]);
    const [cantidadEntradas, setCantidadEntradas] = useState(1);
    const [total, setTotal] = useState(0);

    // cargar datos guardados
    useEffect(() => {
        const peli = JSON.parse(localStorage.getItem("peliculaSeleccionada"));
        const comidas = JSON.parse(localStorage.getItem("carritoComidas")) || [];
        setPelicula(peli);
        setCarrito(comidas);
    }, []);

    // recalcular total cuando cambien cantidades
    useEffect(() => {
        let t = 0;
        if (pelicula) t += pelicula.precio * cantidadEntradas;
        carrito.forEach((c) => (t += c.precio * (c.cantidad || 1)));
        setTotal(t);
    }, [pelicula, carrito, cantidadEntradas]);

    const cambiarCantidadEntradas = (nuevaCantidad) => {
        const cantidad = nuevaCantidad > 0 ? nuevaCantidad : 1;
        setCantidadEntradas(cantidad);
    };

    const quitarItem = (index) => {
        const nuevo = carrito.filter((_, i) => i !== index);
        setCarrito(nuevo);
        localStorage.setItem("carritoComidas", JSON.stringify(nuevo));
    };

    // 🔧 función auxiliar para mostrar imagen correctamente
    const obtenerRutaImagen = (img) => {
        if (!img) return "/imagenes/placeholder.jpg"; // imagen por defecto si falta
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/imagenes/${img}`;
    };

    return (
        <div className="carrito-page">
            <header className="carri">
                <h2 className="cineword">Carrito</h2>
            </header>

            <main className="maincarri">
                <h2>Eso es lo que vas seleccionando</h2>

                <div className="contenedor">
                    {/* Película seleccionada */}
                    <div className="informacionpeli">
                        {pelicula ? (
                            <div className="produ">
                                <img
                                    src={obtenerRutaImagen(pelicula.imagen)}
                                    alt={pelicula.nombre}
                                />
                                <h3>{pelicula.nombre}</h3>
                                <p>{pelicula.description}</p>
                                <p>Precio unitario: ${pelicula.precio}</p>

                                <label>Cantidad de entradas:</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={cantidadEntradas}
                                    onChange={(e) =>
                                        cambiarCantidadEntradas(parseInt(e.target.value))
                                    }
                                />
                                <p>Subtotal: ${pelicula.precio * cantidadEntradas}</p>
                            </div>
                        ) : (
                            <p>No elegiste película todavía 🎬</p>
                        )}
                    </div>

                    {/* Comidas seleccionadas */}
                    <div className="informacioncomida">
                        {carrito.length > 0 ? (
                            carrito.map((item, index) => (
                                <div key={index} className="produ">
                                    <img
                                        src={obtenerRutaImagen(item.imagen)}
                                        alt={item.nombre}
                                    />
                                    <h3>{item.nombre}</h3>
                                    <p>{item.description}</p>
                                    <p>Precio unitario: ${item.precio}</p>
                                    <p>Cantidad: {item.cantidad || 1}</p>
                                    <p>Subtotal: ${item.precio * (item.cantidad || 1)}</p>
                                    <button onClick={() => quitarItem(index)}>Quitar</button>
                                </div>
                            ))
                        ) : (
                            <p id="nohaynada">No agregaste comida todavía 🍿</p>
                        )}
                    </div>
                </div>

                <div className="totaldiv">
                    <h3>Total a pagar: ${total}</h3>
                    <button
                        className="botonpagar"
                        onClick={() => navigate("/pago")}
                    >
                        Pagar
                    </button>
                </div>
            </main>
        </div>
    );
}
