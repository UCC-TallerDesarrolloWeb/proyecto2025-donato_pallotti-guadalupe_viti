import { useState, useEffect } from "react";
import { getComidas } from "@api/comidaApi";
import CardComida from "@components/CardComida";
import "@styles/styles.scss";

export default function ComidaPage() {
    const [comidas, setComidas] = useState([]);
    const [filtro, setFiltro] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await getComidas();
            setComidas(data);
        };
        fetchData();
    }, []);

    // Guardar comida en localStorage
    const agregarAlCarrito = (item) => {
        let carrito = JSON.parse(localStorage.getItem("carritoComidas")) || [];
        const existe = carrito.find((c) => c.nombre === item.nombre);
        if (existe) {
            existe.cantidad++;
        } else {
            item.cantidad = 1;
            carrito.push(item);
        }
        localStorage.setItem("carritoComidas", JSON.stringify(carrito));
        alert(`${item.nombre} agregado al carrito 🍿`);
    };

    // Filtro en tiempo real
    const handleFiltro = (e) => {
        setFiltro(e.target.value.toLowerCase());
    };

    const comidasFiltradas = comidas.filter(
        (p) =>
            p.nombre.toLowerCase().includes(filtro) ||
            p.description.toLowerCase().includes(filtro)
    );

    return (
        <div className="comida-page">
            <header className="cabezacom">
                <h2 className="cineword">Comida</h2>
            </header>

            <aside className="busquedacom">
                <fieldset>
                    <legend>Búsqueda</legend>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={filtro}
                        onChange={handleFiltro}
                    />
                </fieldset>
            </aside>

            <main className="contenidocom">
                <h1>¿Qué se te antoja?</h1>

                <section>
                    <h2>Comida</h2>
                    <div className="grid-comida">
                        {comidasFiltradas
                            .filter((p) => p.categoria === "comida")
                            .map((p, i) => (
                                <CardComida key={i} data={p} onClick={() => agregarAlCarrito(p)} />
                            ))}
                    </div>
                </section>

                <section>
                    <h2>Dulces</h2>
                    <div className="grid-comida">
                        {comidasFiltradas
                            .filter((p) => p.categoria === "dulce")
                            .map((p, i) => (
                                <CardComida key={i} data={p} onClick={() => agregarAlCarrito(p)} />
                            ))}
                    </div>
                </section>

                <section>
                    <h2>Bebidas</h2>
                    <div className="grid-comida">
                        {comidasFiltradas
                            .filter((p) => p.categoria === "bebida")
                            .map((p, i) => (
                                <CardComida key={i} data={p} onClick={() => agregarAlCarrito(p)} />
                            ))}
                    </div>
                </section>

                <section>
                    <h2>Promos</h2>
                    <div className="grid-comida">
                        {comidasFiltradas
                            .filter((p) => p.categoria === "promo")
                            .map((p, i) => (
                                <CardComida key={i} data={p} onClick={() => agregarAlCarrito(p)} />
                            ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
