import React from 'react'

const Filtrar = ({filtro, setFiltro}) => {

   
    return (
        <div className="contenedor contenedor-filtro sombra">
            <div className="campo ">
            <label htmlFor="categoria">Categoria: </label>
                <select className="categoria"  id="categoria" onChange={(e)=> setFiltro(e.target.value)}>
                    <option value="">Todos los gastos</option>
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
        </div>
    )
}

export default Filtrar
