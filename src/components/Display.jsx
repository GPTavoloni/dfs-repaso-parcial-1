const Display = ({ unidad, clima }) => {

    const icono = (clima == 'Soleado') ? '☀️' : '🌧️';
    
	return (
        <div className="display-clima">
            <h2>Estado del tiempo</h2>
            <p>Unidad de temperatura: {unidad}</p>
            <p>Clima: {clima} {icono}</p>
        </div>
    )
}

export default Display