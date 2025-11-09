export default function CardComida({ data, onClick }) {
    return (
        <div className="com">
            <button type="button" onClick={onClick}>
                <img src={data.imagen} alt={data.nombre} />
            </button>
            <h3>{data.nombre}</h3>
            <p>${data.precio}</p>
        </div>
    );
}
