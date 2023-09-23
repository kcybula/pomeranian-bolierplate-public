import { useState } from 'react';
import { Button } from '../../../Components/Button';

const STORAGE_KEY = 'local-count';

export function LocalStorage() {
  const localCounter = parseInt(localStorage.getItem(STORAGE_KEY));

  const [counter, setCounter] = useState(localCounter || 0);

  const handleIncrement = () => {
    const newCount = counter + 1;
    setCounter(newCount);
    localStorage.setItem(STORAGE_KEY, newCount);
    console.log(localStorage);
  };

  const handleReset = () => {
    setCounter(0);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div>
      <h3>Local Storage example</h3>
      <Button onClick={handleIncrement}>Increment</Button>
      <br></br> <br></br>
      <Button onClick={handleReset}>Reset</Button>
      <p>count: {counter}</p>
    </div>
  );
}
