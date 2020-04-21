import React from 'react';

export function List({ todos = [] }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.title}>
          <b>
            {todo.title}
          </b>
          {todo.description}
        </li>
      ))}
    </ul>
  )
};
