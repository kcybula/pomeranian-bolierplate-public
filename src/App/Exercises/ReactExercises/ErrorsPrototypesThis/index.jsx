import { useEffect, useState } from 'react';
import './style.css';
import { NumberInuptValidator } from './InuptValidator';

export function ErrorsPrototypesThis() {
  //useState hook
  const [getUserData, setUserData] = useState(null);
  const [getError, setError] = useState(null);

  //synthatic sugar async
  const fetchData = async () => {
    try {
      //synthatic sugar await
      //restfull API
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      //exception
      // throw new Error(
      //   'Ups.. kodzik się położył, jest piątek, nie wychodzę z pracy'
      // );
      setError(error);
    } finally {
      console.log('Wykonam się niezależnie czy API się położy czy nie');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container--errors-prototypes-this">
      Name: {getUserData?.name}
      <br></br>
      Username: {getUserData?.username}
      <br></br>
      Error: {getError && getError.message}
      <br></br>
      <br></br>
      <br></br>
      <NumberInuptValidator />
    </div>
  );
}
