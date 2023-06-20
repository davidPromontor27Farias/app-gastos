import {useState, useEffect} from 'react';
import CloseIcon from '../images/close-icon.png';
import Mensaje from './Mensaje';


const Modal = ({setModal, animatedModal, setAnimatedModal, saveSpents, setGastoEditar, gastoEditar}) => {

    const [error, setError] = useState('');
    const [nameSpent, setNameSpent] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [fecha, setFecha] = useState('');
    const [id, setId] = useState('');


    useEffect(()=>{
        if(Object.keys(gastoEditar).length > 0){
            setNameSpent(gastoEditar.nameSpent);
            setAmount(gastoEditar.amount);
            setCategory(gastoEditar.category);
            setFecha(gastoEditar.fecha);
            setId(gastoEditar.id);
        }

    }, []);


    const cerrarModal = () => {
        setAnimatedModal(false);

        setGastoEditar({});

        setTimeout(() => {
            setModal(false);
        }, 400);
    }

    const validateForm = (e) =>{
        e.preventDefault();

        if([nameSpent, amount, category].includes('')){
            setError('No puede ir ningun campo vacios');

            setTimeout(() => {
                setError('');
            }, 3000);
            return;
        }

        saveSpents({nameSpent, amount, category, fecha, id})
    }


    return (
        <div className="modal">
            <div className="btn-cerrar">
                <img src={CloseIcon} alt="icono de cerrar" onClick={cerrarModal} />
            </div>
            <form className={`formulario-modal ${animatedModal ? 'animar' : 'cerrar'}`} onSubmit={validateForm}>

 
            <p className="title-modal">{Object.keys(gastoEditar).length > 0 ? "Editar Gasto" : 'Nuevo Gasto'}</p>
                
                <div className="campo campo-modal">
                    <label htmlFor="nombre">Nombre del Gasto: </label>
                    <input id="nombre" type="text" placeholder="Pago de la renta" value={nameSpent} onChange={(e) => setNameSpent(e.target.value)}/>
                </div>
                <div className="campo campo-modal">
                    <label htmlFor="cantidad">Cantidad a Procesar: </label>
                    <input id="cantidad"  type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
                </div>
                <div className="campo campo-modal">
                    <label htmlFor="categoria">Categoria: </label>
                        <select className="categoria"  id="categoria" value={category} onChange={e => setCategory(e.target.value)}>
                            <option value="">--Seleccione--</option>
                            <option value="escuela">Escuela</option>
                            <option value="comida">Comida</option>
                            <option value="transporte">Transporte</option>
                            <option value="alquiler">Alquiler</option>
                            <option value="suscripciones">Suscripciones</option>
                            <option value="salud">Salud</option>
                            <option value="varios">Gastos Varios</option>
                            <option value="diversion">Diversion</option>
                        </select>
                </div>
                <input type="submit" value={Object.keys(gastoEditar).length > 0 ? 'Eidtar' : 'Agregar'} />
                {error && <Mensaje tipo='error'>{error}</Mensaje>}
            </form>
        </div>
    )
}

export default Modal
