import {useState, useEffect} from 'react';
import { formatearCantidad } from "../Helpers";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlBudget = ({budget, setBudget, spents, setSpents}) => {

    const [expend, setExpend] = useState(0);
    const [available, setAvailable] = useState(0);
    const [percentage, setPercentage] = useState(0);

    useEffect(()=>{

        const expendAmount = spents.reduce((total, spent)=> spent.amount + total, 0);
        setExpend(expendAmount);

        const availableAmount = budget - expendAmount;
        setAvailable(availableAmount);

        const percentageExpend = (((budget - availableAmount) / budget) * 100).toFixed(2);

        setTimeout(() => {
            setPercentage(percentageExpend);             
        }, 500);
  

    }, [spents]);

    const resetApp = () =>{
        const reset = confirm('¿Deseas resetear la aplicacion?');

        if(reset){
            setBudget(0);
            setSpents([]);
            window.location.reload()
        }
    }





    return (
        <div className="contenedor sombra contenedor-gasto info-gasto">
            <div className="grafica">
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: percentage >= 80 ? '#B03A2E' : percentage >= 60 ? '#F5B041' : '#229954',
                        textColor: percentage >= 80 ? '#B03A2E' : percentage >= 60 ? '#F5B041' : '#229954',
                    })}
                    value={percentage}
                    text={`${percentage}%`}
                />
            </div>
            <div className="contenedor-descripcion">
                <h2 className={percentage >= 80 ?  'excedido' : percentage >=60 ? 'medium' : ''}>{percentage >= 80 ? 'Estas por exceder tu presupuesto' : percentage >= 60 ? 'Llevas mas de la mitad gastado' : ''}</h2>
                
                <p>Presupuesto: <span>{formatearCantidad(budget)}</span></p>

                <p>Gastado: <span>{formatearCantidad(expend)}</span></p>

                <p>Disponible: <span>{formatearCantidad(available)}</span></p>
                
                <button onClick={resetApp} className='deleted' type='button'>Resetear App</button>
            </div>
        </div>
    )
}

export default ControlBudget
