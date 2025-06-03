const Controles = ({ onCambiarUnidad, onCambiarClima, onReset }) => {
    return (
        <div className='controles-clima'>
            <button onClick={onCambiarUnidad}>Cambiar Unidad</button>
            <button onClick={() => onCambiarClima('Soleado')}>Soleado</button>
            <button onClick={() => onCambiarClima('Nublado')}>Nublado</button>
			<button onClick={() => onReset('Nublado')}>Reset</button>
        </div>
    )
}

export default Controles