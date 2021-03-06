import { useState, useRef, useEffect } from 'react';

//Need to not hard code this in
const users = [
  { name: 'John Doe', age: 20 },
  { name: 'Chris Adler', age: 30 },
];

//need to build this out
export const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    // Type guard. Could also do a 'positive' typeguard, but return makes it clearer
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase().includes(name.toLowerCase());
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
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
