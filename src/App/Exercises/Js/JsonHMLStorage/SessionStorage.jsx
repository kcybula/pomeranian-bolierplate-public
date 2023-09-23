import { useState } from 'react';
import { Button } from '../../../Components/Button';

const STORAGE_KEY = 'session-count';

export function SessionStorage() {
  const sessionCounter = parseInt(sessionStorage.getItem(STORAGE_KEY));

  const [counter, setCounter] = useState(sessionCounter || 0);

  const handleIncrement = () => {
    const newCount = counter + 1;
    setCounter(newCount);
    sessionStorage.setItem(STORAGE_KEY, newCount);
    console.log(sessionStorage);
  };

  const handleReset = () => {
    setCounter(0);
    sessionStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div>
      <h3>Session Storage example</h3>
      <Button onClick={handleIncrement}>Increment</Button>
      <br></br> <br></br>
      <Button onClick={handleReset}>Reset</Button>
      <p>count: {counter}</p>
    </div>
  );
}
