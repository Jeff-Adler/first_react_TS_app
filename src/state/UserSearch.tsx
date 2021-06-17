// import { useState } from 'react';

const users = [
  { name: 'John Doe', age: 20 },
  { name: 'Chris Adler', age: 30 },
];

//need to build this out
export const UserSearch: React.FC = () => {
  return (
    <div>
      User Search
      <ul>
        {users.map((user) => (
          <li>
            {user.name} : {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};
