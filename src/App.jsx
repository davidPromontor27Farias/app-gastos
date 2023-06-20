import { useState, useEffect } from 'react';
import Header from './components/Header';
import IconAdd from '../src/images/iconAdd.svg';
import ListSpents from './components/ListSpents';
import Modal from './components/Modal';
import {generarId} from '../src/Helpers/index';
import Filtrar from './components/Filtrar';


function App() {

  const [budget, setBudget] = useState(Number(localStorage.getItem('budget')) ?? 0);
  const [passed, setPassed] = useState(false);
  const [modal, setModal] = useState(false);
  const [animatedModal, setAnimatedModal] = useState(false);
  const [spents, setSpents] = useState(JSON.parse(localStorage.getItem('spents')) ?? []);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);


  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){

      setModal(true);

      setTimeout(() => {
          setAnimatedModal(true);
      }, 500);
    }

  }, [gastoEditar])

  useEffect(() =>{

    if(filtro){
      const filtrarGasto = spents.filter(spent => spent.category === filtro);
      setGastosFiltrados(filtrarGasto);
      
    }

  }, [filtro]);

  useEffect(()=>{
    localStorage.setItem('budget', budget ?? 0);

  }, [budget])

  useEffect(()=>{
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;

    if(budgetLS){
      setPassed(true);
    }

  }, []);

  useEffect(()=>{
    localStorage.setItem('spents', JSON.stringify(spents) ?? []);


  }, [spents]);



  const saveSpents = (spent) => {
    
    if(spent.id){
      const spentActualizated = spents.map(spentState => spentState.id === spent.id ? spent : spentState);
      setSpents(spentActualizated);
      setGastoEditar({});

    }else{
        spent.id = generarId();
        spent.fecha = Date.now();
        setSpents([...spents, spent]);
    }


  

    setAnimatedModal(false);
    setTimeout(() => {
      setModal(false);
    }, 400);

  
  }

  const showModal = () =>{
    setModal(true);

    setTimeout(() => {
      setAnimatedModal(true);
    }, 400);
  }

  const deleteSpent = (id) => {
    const deletedSpent = spents.filter( spent => spent.id !== id);
    setSpents(deletedSpent);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        budget={budget}
        setBudget={setBudget}
        setPassed={setPassed}
        passed={passed}
        spents={spents}
        setSpents={setSpents}
      />

      {passed && (
        <>
          <main>
            <Filtrar  
              filtro={filtro}
              setFiltro={setFiltro}
            />

            <ListSpents
              spents={spents}
              setSpents={setSpents}
              setGastoEditar={setGastoEditar}
              deleteSpent={deleteSpent}
              gastosFiltrados={gastosFiltrados}
              filtro={filtro}
            />


          </main>   

          <div className="iconAdd">
            <img src={IconAdd} alt="iconoAgregar" onClick={showModal} />
          </div>     
        </>

      )}

      {
        modal && (
          <Modal
            setModal={setModal}
            animatedModal={animatedModal}
            setAnimatedModal={setAnimatedModal}
            saveSpents={saveSpents}
            setGastoEditar={setGastoEditar}
            gastoEditar={gastoEditar}
          />
        )
      }

    </div>
  )
}

export default App
