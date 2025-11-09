export default function HomePage() {
    return (
        <main className="contenidoind">
            <div className="dondeir" id="dondeir">
                <h1>Bienvenido, ¿qué haremos primero?</h1>
                <ul>
                    <li>
                        <a href="/">
                            <h3>Principal</h3>
                        </a>
                    </li>
                    <li>
                        <a href="/cartelera">
                            <h3>CARTELERA</h3>
                        </a>
                    </li>
                    <li>
                        <a href="/carrito">
                            <h3>COMPRAR ENTRADA</h3>
                        </a>
                    </li>
                    <li>
                        <a href="/comida">
                            <h3>COMIDA</h3>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="promo">
                <img
                    src="/imagenes/propaganda1.jpg"
                    alt="Mas como que el sillon de tu casa"
                    id="promo"
                />
            </div>

            <div className="anuncio">
                <img
                    src="/imagenes/propaganda2.jpg"
                    alt="Anuncio de pelis en 3D"
                    id="Anuncio"
                />
            </div>
        </main>
    )
}
