export default function Card({ data, onClick }) {
    const imagenSrc = data.imagen.startsWith("/imagenes/")
        ? data.imagen
        : `/imagenes/${data.imagen}`;

    return (
        <div className="produ" onClick={onClick}>
            <img src={imagenSrc} alt={data.nombre} />
            <h3>{data.nombre}</h3>
            <p>{data.genero}</p>
            <p>${data.precio}</p>
        </div>
    );
}
