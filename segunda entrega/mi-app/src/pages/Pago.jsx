import { useState, useEffect } from "react";
import "@styles/styles.scss";

export default function PagoPage() {
    const [cupon, setCupon] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [formaPago, setFormaPago] = useState("");
    const [mostrarTarjeta, setMostrarTarjeta] = useState(false);
    const [numTarjeta, setNumTarjeta] = useState("");
    const [nombreTarjeta, setNombreTarjeta] = useState("");
    const [vencimiento, setVencimiento] = useState("");
    const [cvv, setCvv] = useState("");
    const [total, setTotal] = useState(0);

    const cuponesValidos = [
        { codigo: "DESCUENTO10", tipo: "percent", valor: 10 },
        { codigo: "CUPON500", tipo: "fixed", valor: 500 },
        { codigo: "PROMO5", tipo: "percent", valor: 5 },
    ];

    useEffect(() => {
        actualizarTotal();
    }, []);

    const actualizarTotal = () => {
        const peli = JSON.parse(localStorage.getItem("peliculaSeleccionada"));
        const comidas = JSON.parse(localStorage.getItem("carritoComidas")) || [];
        let totalCalc = 0;
        if (peli) totalCalc += peli.precio;
        comidas.forEach((c) => (totalCalc += c.precio * (c.cantidad || 1)));

        const cuponAplicado = JSON.parse(localStorage.getItem("cuponAplicado"));
        if (cuponAplicado) {
            if (cuponAplicado.tipo === "percent") {
                totalCalc -= Math.round(totalCalc * (cuponAplicado.valor / 100));
            } else totalCalc -= cuponAplicado.valor;
        }
        setTotal(totalCalc);
    };

    const aplicarCupon = () => {
        if (!cupon.trim()) {
            setMensaje("Ingrese un código de cupón.");
            return;
        }
        const encontrado = cuponesValidos.find(
            (c) => c.codigo === cupon.toUpperCase()
        );
        if (!encontrado) {
            setMensaje("Cupón inválido.");
            localStorage.removeItem("cuponAplicado");
            actualizarTotal();
            return;
        }
        localStorage.setItem("cuponAplicado", JSON.stringify(encontrado));
        setMensaje(`Cupón ${encontrado.codigo} aplicado correctamente.`);
        actualizarTotal();
    };

    const validarLuhn = (num) => {
        const s = num.replace(/\D/g, "");
        let sum = 0;
        let alt = false;
        for (let i = s.length - 1; i >= 0; i--) {
            let n = parseInt(s.charAt(i), 10);
            if (alt) {
                n *= 2;
                if (n > 9) n -= 9;
            }
            sum += n;
            alt = !alt;
        }
        return sum % 10 === 0;
    };

    const fechaValida = (mmYY) => {
        const m = mmYY.replace(/\s/g, "");
        if (!/^\d{2}\/\d{2}$/.test(m)) return false;
        const [mmStr, yyStr] = m.split("/");
        const mm = parseInt(mmStr, 10);
        const yy = parseInt(yyStr, 10);
        if (mm < 1 || mm > 12) return false;
        const anio = 2000 + yy;
        const ahora = new Date();
        const ahoraYm = ahora.getFullYear() * 12 + (ahora.getMonth() + 1);
        const vencYm = anio * 12 + mm;
        return vencYm >= ahoraYm;
    };

    const confirmarCompra = () => {
        if (!formaPago) {
            alert("Seleccione una forma de pago.");
            return;
        }

        if (formaPago === "efectivo") {
            alert(`Compra confirmada. Total a pagar: $${total}`);
        } else {
            if (!/^\d{13,19}$/.test(numTarjeta)) {
                alert("Número de tarjeta inválido.");
                return;
            }
            if (!validarLuhn(numTarjeta)) {
                alert("Número de tarjeta inválido (falló verificación Luhn).");
                return;
            }
            if (!nombreTarjeta.trim()) {
                alert("Ingrese el nombre del titular.");
                return;
            }
            if (!fechaValida(vencimiento)) {
                alert("Fecha inválida o vencida (MM/AA).");
                return;
            }
            if (!/^\d{3,4}$/.test(cvv)) {
                alert("CVV inválido.");
                return;
            }
            alert(`Pago con tarjeta confirmado. Total: $${total}`);
        }

        localStorage.clear();
        window.location.href = "/";
    };

    return (
        <div className="pago-page">
            <header className="cabezaind">
                <h2 className="cineword">Pago</h2>

            </header>

            <main className="final">
                <section className="cupon">
                    <label htmlFor="cupon">Código de cupón:</label>
                    <input
                        type="text"
                        id="cupon"
                        value={cupon}
                        onChange={(e) => setCupon(e.target.value)}
                        placeholder="Ingresar cupón"
                    />
                    <button className="pago2" onClick={aplicarCupon}>
                        Aplicar Cupón
                    </button>
                    <div id="mensajeCupon" aria-live="polite">
                        {mensaje}
                    </div>
                </section>

                <section className="pago">
                    <label htmlFor="formaPago">Forma de Pago:</label>
                    <select
                        id="formaPago"
                        value={formaPago}
                        onChange={(e) => {
                            setFormaPago(e.target.value);
                            setMostrarTarjeta(e.target.value === "tarjeta");
                        }}
                    >
                        <option value="">Seleccionar</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="tarjeta">Tarjeta</option>
                    </select>

                    {mostrarTarjeta && (
                        <div className="tarjeta" id="datosTarjeta">
                            <label htmlFor="numTarjeta">Número de tarjeta:</label>
                            <input
                                type="text"
                                id="numTarjeta"
                                value={numTarjeta}
                                onChange={(e) => setNumTarjeta(e.target.value.replace(/\D/g, ""))}
                                placeholder="16 dígitos"
                                maxLength="19"
                            />

                            <label htmlFor="nombreTarjeta">Nombre en la tarjeta:</label>
                            <input
                                type="text"
                                id="nombreTarjeta"
                                value={nombreTarjeta}
                                onChange={(e) => setNombreTarjeta(e.target.value)}
                                placeholder="Titular de la tarjeta"
                            />

                            <label htmlFor="vencimiento">Vencimiento:</label>
                            <input
                                type="text"
                                id="vencimiento"
                                value={vencimiento}
                                onChange={(e) => setVencimiento(e.target.value)}
                                placeholder="MM/AA"
                            />

                            <label htmlFor="cvv">CVV:</label>
                            <input
                                type="text"
                                id="cvv"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                                placeholder="3 dígitos"
                                maxLength="4"
                            />
                        </div>
                    )}
                </section>

                <section className="total">
                    <h2>
                        Total: $<span id="totalPagar">{total}</span>
                    </h2>
                </section>

                <button className="pago2" onClick={confirmarCompra}>
                    Confirmar Compra
                </button>
            </main>
        </div>
    );
}
