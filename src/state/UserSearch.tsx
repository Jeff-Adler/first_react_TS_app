import { useState } from 'react';

//Need to not hard code this in
const users = [
  { name: 'John Doe', age: 20 },
  { name: 'Chris Adler', age: 30 },
];

//need to build this out
export const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase().includes(name.toLowerCase());
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>{user ? user.name : ''}</div>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            {user.name} : {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};
