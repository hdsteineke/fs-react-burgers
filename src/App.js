import { useState } from 'react';
import './App.css';
import OrderNameInput from './OrderNameInput';
import OrderImages from './OrderImages';
import InstructionsForm from './InstructionsForm';
import InstructionsList from './InstructionsList';
import FoodDropdown from './FoodDropdown';
import SideDropdown from './SideDropdown';
import DrinkDropdown from './DrinkDropdown';

function App() {

  const [orderName, setOrderName] = useState('');
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructions] = useState(['']);
  const [instructionsInput, setInstructionsInput] = useState('');

  function handleNameChange(e) {
    setOrderName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    instructions.push(instructionsInput);
    setInstructions([...instructions]);
    setInstructionsInput('');
    
  }



  return (
    <div className="App">
      <header>
        <h2>
        Hello {orderName} !
        </h2>
        <OrderNameInput handleNameChange={handleNameChange}/>
      </header>
      <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId} />
      
      <section className="selectors">
        <FoodDropdown setFoodId={setFoodId} />
        <SideDropdown setSideId={setSideId} />
        <DrinkDropdown setDrinkId={setDrinkId} />
      </section>

      <section className='notes'>
        <InstructionsList />
        <InstructionsForm handleSubmit={handleSubmit} setInstructionsInput={setInstructionsInput} />
      </section>


    </div>
  );
}

export default App;
