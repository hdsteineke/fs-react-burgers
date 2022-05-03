import { useState } from 'react';
import './App.css';
import OrderNameInput from './OrderNameInput';
import OrderImages from './OrderImages';
import InstructionsForm from './InstructionsForm';
import InstructionsList from './InstructionsList';

function App() {

  const [orderName, setOrderName] = useState('');
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructions] = useState(['']);

  function handleNameChange(e) {
    setOrderName(e.target.value);
  }

  return (
    <div className="App">
      <header>
        Hello {orderName} !
        <OrderNameInput handleNameChange={handleNameChange}/>
      </header>
      <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId} />
      <InstructionsForm />
      <InstructionsList />
    </div>
  );
}

export default App;
