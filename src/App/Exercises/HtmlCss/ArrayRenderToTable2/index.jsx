import './styles.css';
const bands = [
  {
    band: 'The Clash',

    yearFormed: 1976,

    albums: 6,

    mostFamousSong: 'London Calling',
  },

  {
    band: 'Sex Pistols',

    yearFormed: 1975,

    albums: 1,

    mostFamousSong: 'Anarchy in the UK',
  },

  {
    band: 'Ramones',

    yearFormed: 1974,

    albums: 14,

    mostFamousSong: 'Blitzkrieg Bop',
  },

  {
    band: 'The Cure',

    yearFormed: 1976,

    albums: 13,

    mostFamousSong: 'Just Like Heaven',
  },

  {
    band: 'Joy Division',

    yearFormed: 1976,

    albums: 2,

    mostFamousSong: 'Love Will Tear Us Apart',
  },

  {
    band: 'Siouxsie and the Banshees',

    yearFormed: 1976,

    albums: 11,

    mostFamousSong: 'Hong Kong Garden',
  },
];

function BandsTable({ band, yearFormed, albums, mostFamousSong }) {
  return (
    <tr>
      <td>{band}</td>

      <td>{yearFormed}</td>

      <td>{albums}</td>

      <td>{mostFamousSong}</td>
    </tr>
  );
}

export function Exercise() {
  return (
    <table className="table-bands">
      <tr>
        <th>Band</th>

        <th>Year Formed</th>

        <th>Albums</th>

        <th>Most Famous Song</th>
      </tr>

      {bands.map(BandsTable)}
    </table>
  );
}
