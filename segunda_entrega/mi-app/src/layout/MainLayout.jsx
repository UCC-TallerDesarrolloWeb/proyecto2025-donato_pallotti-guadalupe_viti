import { Outlet } from "react-router-dom";
import "@styles/styles.scss";

export default function MainLayout() {
    return (
        <>
            <header>
                <div className="cineword">
                    <h1>CineWorld</h1>
                    <img src="/imagenes/logo.jpg" alt="Logo CineWorld" />
                </div>

                <nav>
                    <a href="/">Principal</a>
                    <a href="/cartelera">Cartelera</a>
                    <a href="/carrito">Comprar entrada</a>
                    <a href="/comida">Comida</a>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
}
