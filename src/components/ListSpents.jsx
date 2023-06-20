import React from 'react';
import Spent from './Spent';


const ListSpents = ({spents, setGastoEditar, deleteSpent, gastosFiltrados, filtro}) => {
  return (
    <div className="listado-gastos contenedor">
      <p className="title-gasto">{spents.length > 0 ? 'Administre sus Gastos' : 'No hay Gastos por Mostrar'}</p>
      {
        filtro ? (

          <>
            {

            gastosFiltrados.map(spent => (
              <Spent
                spent={spent}
                key={spent.id}
                setGastoEditar={setGastoEditar}
                deleteSpent={deleteSpent}
              />
            ))

          }
        
        </>
          
        ) : (
          <>
            {

            spents.map(spent => (
              <Spent
                spent={spent}
                key={spent.id}
                setGastoEditar={setGastoEditar}
                deleteSpent={deleteSpent}
              />
            ))

            }
          
          </>


        )

      }
      
    </div>
  )
}

export default ListSpents
