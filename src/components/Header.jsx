import ControlBudget from "./ControlBudget"
import Nuevobudget from "./NuevoBudget"



const Header = ({budget, setBudget, setPassed, passed, spents, setSpents}) => {
  return (
    <header>
        <h1 className="title">App Planificadora de Gastos</h1>
        {
            passed ? (
              <ControlBudget
                budget={budget}
                setBudget={setBudget}
                spents={spents}
                setSpents={setSpents}
              />

            ) : (
                <Nuevobudget
                    budget={budget}
                    setBudget={setBudget}
                    setPassed={setPassed}
                />               
            )
        }

    </header>
  )
}

export default Header
