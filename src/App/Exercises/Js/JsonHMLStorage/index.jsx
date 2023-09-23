import { CookieStorage } from './CookieStorage';
import { LocalStorage } from './LocalStorage';
import { SessionStorage } from './SessionStorage';
import './styles.css';

export const JsonHMLStorage = () => {
  //Parsowanie (deserializacja)

  const jsonString = `{
    "name": "John",
    "surname": "Doe",
    "age": 30,
    "cars": ["Ford", "BMW", "Fiat"],
    "isAdult": true
  }`;

  const parsedJson = JSON.parse(jsonString);
  //Serializacja

  const obiektDoSerializacji = {
    name: 'John',
    age: 100,
    cars: [],
  };
  // przykłady inne
  const emptyValue = null;
  console.log('emptyValue po serializacji: ', JSON.stringify(emptyValue));
  console.log(
    'emptyValue po De-Serializacji: ',
    JSON.parse(JSON.stringify(emptyValue))
  );
  const undefinedValue = undefined;
  console.log(
    'undefinedValue po serializacji: ',
    JSON.stringify(undefinedValue)
  );
  // nie da się undefined deserializować
  // console.log(
  //   'undefinedValue po DE-serializacji: ',
  //   JSON.parse(JSON.stringify(undefinedValue))
  // );

  // const currencies = {
  //   lastUpdate: '2004',
  //   currencies: [
  //     {
  //       name: 'dollar',
  //       unit: 1,
  //       country: 'USA',
  //     },
  //     {
  //       name: 'eur',
  //       unit: 1,
  //       country: 'European Monetary Union',
  //     },
  //   ],
  // };

  const poSerializacji = JSON.stringify(obiektDoSerializacji);

  return (
    <div>
      <LocalStorage />
      <SessionStorage />
      <CookieStorage />
      <h1>JsonHMLStorage</h1>
      <h2>JSON kim jest JSON?</h2>
      <p>JavaScript Object Notation</p>
      <p>lekki format wymiany danych</p>
      <p>wykorzystywany może byc przez różne języki programowania</p>
      <p>The JSON Format Evaluates to JavaScript Objects</p>
      <p>Internet Media Type = application/json</p>
      <p>rozszerzenie pliku .json</p>
      <h2>Parsowanie</h2>
      <p>{jsonString}</p>
      <p>parsowanie - deserializacja przykład: {parsedJson.name}</p>
      <p>stringify - serializacja przykład: {poSerializacji}</p>

      <button>XML zajmuje więcej miejsca niż JSON</button>
      <h2>XML</h2>
      <p>
        XML (ang. Extensible Markup Language, rozszerzalny język znaczników) //
        uniwersalny język znaczników przeznaczony do reprezentowania różnych //
        danych w strukturalizowany sposób.{' '}
      </p>
      <h2>Storage - pamięć</h2>
      <ul>
        <li>LocalStorage</li>
        <li>SessionStorage</li>
        <li>CookiesStorage</li>
      </ul>
    </div>
  );
};
