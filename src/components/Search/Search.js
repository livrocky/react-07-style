import { useEffect, useState } from 'react';
import Container from '../Container';

const initUsers = [
  { id: 1, name: 'James', town: 'London' },
  { id: 2, name: 'Mike', town: 'Kaunas' },
  { id: 3, name: 'Jill', town: 'Kaunas' },
  { id: 4, name: 'Jake', town: 'Vilnius' },
  { id: 5, name: 'Bob', town: 'Kaunas' },
];

function Search() {
  const [stateUsers, setStateUsers] = useState(initUsers);
  const [activeTown, setActiveTown] = useState('');

  // infered value
  const filteredUsers = activeTown !== '' ? stateUsers.filter((uObj) => uObj.town === activeTown) : stateUsers;

  console.log('filteredUsers===', filteredUsers);

  return (
    <Container>
      <button onClick={() => setActiveTown('London')}>London</button>
      <button onClick={() => setActiveTown('Kaunas')}>Kaunas</button>
      <input type='search' placeholder='enter name' />

      <ul className=''>
        {filteredUsers.map((uObj) => (
          <li key={uObj.id}>
            Name: {uObj.name} || Town: {uObj.town}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Search;
