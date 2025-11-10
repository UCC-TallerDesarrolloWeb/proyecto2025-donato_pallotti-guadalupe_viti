import {Routes, Route} from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CarteleraPage from "./pages/Cartelera.jsx";
import ComidaPage from "./pages/Comida.jsx";
import CarritoPage from "./pages/Carrito.jsx";
import PagoPage from "./pages/Pago.jsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="cartelera" element={<CarteleraPage/>}/>
                <Route path="comida" element={<ComidaPage/>}/>
                <Route path="carrito" element={<CarritoPage/>}/>
                <Route path="pago" element={<PagoPage/>}/>
                <Route path="*" element={<h2 style={{padding: 16}}>404 - Página no encontrada</h2>}/>
            </Route>
        </Routes>
    );
}
