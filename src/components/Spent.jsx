import React from 'react';
import {formatearCantidad, formatearFecha} from '../Helpers/index';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';
import  'react-swipeable-list/dist/styles.css';

import IconEscuela from '../icons-gasto/icon-escuela.png';
import IconComida from '../icons-gasto/icon-comida.png';
import IconAlquiler from '../icons-gasto/alquiler.png';
import IconVarios from '../icons-gasto/gastos-varios.png';
import IconSalud from '../icons-gasto/salud.png';
import IconSuscripciones from '../icons-gasto/suscripciones.png';
import IconTransporte from '../icons-gasto/transporte.png';
import IconDiversion from '../icons-gasto/diversion.png';


const Spent = ({spent, setGastoEditar, deleteSpent}) => {

    const ImagesSpents = {
        escuela: IconEscuela,
        comida: IconComida,
        transporte: IconTransporte,
        alquiler: IconAlquiler,
        suscripciones: IconSuscripciones,
        salud: IconSalud,
        varios: IconVarios,
        diversion: IconDiversion
    }
    
    const {nameSpent, amount, category, fecha, id} = spent;

    const leadingActions = () =>(
        <LeadingActions>
            <SwipeAction onClick={()=> setGastoEditar(spent)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () =>(
        <TrailingActions>
            <SwipeAction onClick={()=> deleteSpent(id) } destructive={true   }>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
        
                <div className="contain-spent sombra">
                    <div className='descripcion-gasto'>
                        <img src={ImagesSpents[category]} className='imagen-category' alt='icono gasto'/>
                        <div>
                            <p>{category}</p>
                            <p>{nameSpent}</p>
                            <p> <span>Añadido el</span> {formatearFecha(fecha)}</p>                    
                        </div>

                    </div>

                    <div className="cantidad">
                        <p>{formatearCantidad(amount)}</p>
                    </div>
                </div>           
        </SwipeableListItem>
    </SwipeableList>

    )
}

export default Spent
