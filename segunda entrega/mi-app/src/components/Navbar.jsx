import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/styles.scss' // si tu SCSS define .cabezaind, .menuind, etc.

export default function Navbar() {
    return (
        <>
            <header className="cabezaind">
                <h2 className="cineword">CineWorld</h2>
                <img src="/imagenes/logo.jpg" alt="Logo del cine" className="logo" />
            </header>

            <nav className="menuind">
                <NavLink to="/">Principal</NavLink>
                <NavLink to="/cartelera">Cartelera</NavLink>
                <NavLink to="/carrito">Comprar entrada</NavLink>
                <NavLink to="/comida">Comida</NavLink>
            </nav>
        </>
    )
}
