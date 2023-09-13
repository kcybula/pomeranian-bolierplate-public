import './styles.css';

export const MainHeader = (props) => {
  //   const Krzyś = { imię: 'Krzyś' };

  //   console.log(Krzyś.imię);
  //   const { imię } = Krzyś;
  //   console.log('imię:', imię);

  const { value } = props;
  return <h1 className="main-header">&lt; {value}</h1>;
};
