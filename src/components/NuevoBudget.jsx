import {useState, useEffect} from 'react';
import Mensaje from './Mensaje';



const Nuevobudget = ({budget, setBudget, setPassed}) => {

    const [mensaje, setMensaje] = useState('');

    const handlebudget = (e) => {
        e.preventDefault();
        
        if(!budget || budget < 0){
            setMensaje('Tienes que agregar un budget valido');

            setTimeout(() => {
                setMensaje('');
            }, 3000);
            return;
        }

        setPassed(true);
    }




    return (
        <div className="contenedor contenedor-gasto sombra">
            <form onSubmit={handlebudget} className="formulario">
                <div className="campo">
                    <label htmlFor="cantidad">Ingrese un Presupuesto:</label>
                    <input id="cantidad" type="number" value={budget} onChange={e => setBudget(Number(e.target.value))} />
                </div>
                <input type="submit" value="Añadir" className="buttonAdd" />

            </form>

            <div className="contenedorMensaje">
                {mensaje ?? <Mensaje tipo='error'>{mensaje}</Mensaje>}            
            </div>

        </div>
    )
}

export default Nuevobudget
