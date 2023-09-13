import './styles.css';
import { MainHeader } from '../../../Components/MainHeader';
import { Button } from '../../../Components/Button';
import { useState } from 'react';
// import { Tile } from ;

const MINUTE = 60000;

export const HitTheMoleGame = () => {
  //notStarted, started, finished
  const [status, setStatus] = useState('notStarted');
  const [duration, setDuration] = useState(0);

  const handleStartOnClick = () => {
    setStatus('started');
  };

  const handleStopOnClick = () => {
    setStatus('finished');
  };
  return (
    <div className="hit-the-mole-game">
      <MainHeader value="Kret" />
      <p className="mole-description">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      <div className="mole-settings-container">
        <span className="mole-label"> CZAS GRY</span>
        <Button
          variant={duration !== MINUTE ? 'primary' : 'secondary'}
          onClick={() => setDuration(MINUTE)}
        >
          1 minuta
        </Button>

        <Button
          variant={duration !== 2 * MINUTE ? 'primary' : 'secondary'}
          onClick={() => setDuration(2 * MINUTE)}
        >
          2 minuty
        </Button>

        <Button
          variant={duration !== 3 * MINUTE ? 'primary' : 'secondary'}
          onClick={() => setDuration(3 * MINUTE)}
        >
          3 minuty
        </Button>
      </div>
      <div className="mole-settings-container">
        <span className="mole-label"> LICZBA KRETÓW</span>
        <Button variant="primary">1 kret </Button>
        <Button variant="primary">2 krety </Button>
        <Button variant="primary">3 krety </Button>
      </div>
      <div className="mole-settings-container">
        <span className="mole-label"> PRZYCISKI STERUJĄCE</span>
        <Button onClick={handleStartOnClick} variant="primary">
          START{' '}
        </Button>
      </div>
      <div>Started: {status}</div>
      <div className="mole-settings-container">
        <span className="mole-label"> CZAS DO KOŃCA</span>
        <span className="mole-output"> 1:35</span>
      </div>
      <div className="mole-settings-container">
        <span className="mole-label"> WYNIK</span>
        <span className="mole-output"> 16</span>
      </div>
      <span className="mole-label"> PRZYCISKI STERUJĄCE</span>
      <Button variant="tetriary" onClick={handleStopOnClick} variant="tetriary">
        STOP{' '}
      </Button>

      {/* <Tile /> */}
    </div>
  );
};
