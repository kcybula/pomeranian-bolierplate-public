import { useState } from 'react';

export function NumberInuptValidator() {
  const [getInputValue, setInputValue] = useState('');
  const [getErrorMessage, setErrorMessage] = useState('');
  const validate = (value) => {
    try {
      //konwertuje na liczbe całkowita przy pomocy parseInt
      const intValue = parseInt(value, 10);
      //jeżeli liczba nie jest number/integerem
      if (isNaN(intValue)) {
        throw new Error('Wprowadzona wartość nie jest liczbą całkowitą');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleInputValidate = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    console.log(inputValue);

    setInputValue(inputValue);
    validate(inputValue);
  };
  console.log(getErrorMessage);

  return (
    <div className="container--number-input-validator">
      <input
        type="text"
        placeholder="Wprowadź literę"
        value={getInputValue}
        onChange={handleInputValidate}
      />
      <p> Error: {getErrorMessage} </p>
    </div>
  );
}
