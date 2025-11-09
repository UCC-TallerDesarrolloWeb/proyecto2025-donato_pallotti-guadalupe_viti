import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@styles/styles.scss";

export default function CarritoPage() {
    const navigate = useNavigate();
    const [pelicula, setPelicula] = useState(null);
    const [carrito, setCarrito] = useState([]);
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
        if (pelicula) t += pelicula.precio;
        carrito.forEach((c) => (t += c.precio * (c.cantidad || 1)));
        setTotal(t);
    }, [pelicula, carrito]);

    const cambiarCantidad = (index, cantidad) => {
        const nuevo = [...carrito];
        nuevo[index].cantidad = cantidad > 0 ? cantidad : 1;
        setCarrito(nuevo);
        localStorage.setItem("carritoComidas", JSON.stringify(nuevo));
    };

    const quitarItem = (index) => {
        const nuevo = carrito.filter((_, i) => i !== index);
        setCarrito(nuevo);
        localStorage.setItem("carritoComidas", JSON.stringify(nuevo));
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
                                <img src={`/imagenes/${pelicula.imagen}`} alt={pelicula.nombre} />
                                <h3>{pelicula.nombre}</h3>
                                <p>{pelicula.description}</p>
                                <p>Precio unitario: ${pelicula.precio}</p>
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
                                    <img src={`/imagenes/${item.imagen}`} alt={item.nombre} />
                                    <h3>{item.nombre}</h3>
                                    <p>{item.description}</p>
                                    <p>Precio: ${item.precio}</p>
                                    <label>Cantidad:</label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.cantidad || 1}
                                        onChange={(e) =>
                                            cambiarCantidad(index, parseInt(e.target.value))
                                        }
                                    />
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
