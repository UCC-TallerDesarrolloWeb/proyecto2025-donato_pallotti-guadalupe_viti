import { useState, useEffect } from "react";
import { getPeliculas, getProximosEstrenos } from "@api/peliculasApi";
import Card from "@components/Card";
import "@styles/styles.scss";

export default function Cartelera() {
    const [peliculas, setPeliculas] = useState([]);
    const [proximas, setProximas] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [generos, setGeneros] = useState([]);

    // Cargar datos del mock
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPeliculas();
            const data2 = await getProximosEstrenos();
            setPeliculas(data);
            setProximas(data2);
        };
        fetchData();
    }, []);

    // Función para manejar los filtros
    const handleFiltro = (e) => {
        setFiltro(e.target.value.toLowerCase());
    };

    const handleGenero = (e) => {
        const { value, checked } = e.target;
        setGeneros((prev) =>
            checked ? [...prev, value] : prev.filter((g) => g !== value)
        );
    };

    const filtrar = (lista) =>
        lista.filter((p) => {
            const texto = p.nombre.toLowerCase() + p.description.toLowerCase();
            const coincideTexto = texto.includes(filtro);
            const coincideGenero =
                generos.length === 0 || generos.includes(p.genero.toLowerCase());
            return coincideTexto && coincideGenero;
        });

    const guardarPelicula = (peli) => {
        localStorage.setItem("peliculaSeleccionada", JSON.stringify(peli));
        alert(`Guardaste ${peli.nombre} 🎬`);
    };

    return (
        <div className="cartelera-page">
            <header className="cabezacar">
                <h2 className="cineword">Cartelera</h2>
            </header>

            <main className="contenidocar">
                <h1>¿Cuál va a ser tu siguiente aventura?</h1>

                {/* --- FILTRO --- */}
                <aside className="busquedacar">
                    <fieldset>
                        <legend>Búsqueda</legend>
                        <input
                            type="text"
                            placeholder="Buscar película..."
                            value={filtro}
                            onChange={handleFiltro}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Género</legend>
                        {[
                            "comedia",
                            "terror",
                            "romance",
                            "animacion",
                            "accion",
                            "fantasia",
                            "musical",
                            "suspenso",
                        ].map((g) => (
                            <label key={g}>
                                <input
                                    type="checkbox"
                                    value={g}
                                    checked={generos.includes(g)}
                                    onChange={handleGenero}
                                />
                                {g}
                            </label>
                        ))}
                    </fieldset>
                </aside>

                {/* --- ESTRENOS --- */}
                <section>
                    <h2>Cartelera</h2>
                    <div className="peliculas">
                        {filtrar(peliculas).map((p, i) => (
                            <Card key={i} data={p} onClick={() => guardarPelicula(p)} />
                        ))}
                    </div>
                </section>

                {/* --- PRÓXIMOS --- */}
                <section>
                    <h2>Próximos estrenos</h2>
                    <div className="peliculas2">
                        {filtrar(proximas).map((p, i) => (
                            <Card key={i} data={p} onClick={() => guardarPelicula(p)} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
