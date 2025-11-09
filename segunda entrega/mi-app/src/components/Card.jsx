export default function Card({ data, onClick }) {
    return (
        <div className="produ" onClick={onClick}>
            <img src={data.imagen} alt={data.nombre} />
            <h3>{data.nombre}</h3>
            <p>{data.genero}</p>
            <p>${data.precio}</p>
        </div>
    );
}
