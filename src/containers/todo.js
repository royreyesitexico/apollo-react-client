import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL } from '../shared/apollo/queries/todo';
import { Loading } from '../components/todo/loading';
import { Error } from '../components/todo/error'
import { List } from '../components/todo/list';
import { Form } from '../components/todo/form';

export function TodoContainer() {
  const [addTodo, setAddTodo] = useState(false);
  const { loading, data, error } = useQuery(GET_ALL);
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <div>
      <button onClick={() => setAddTodo(!addTodo)}>
        {addTodo ? 'Cancel' : 'Add Todo'}
      </button>
      {addTodo ?
        <Form />
        :
        <List todos={data.todos} />
      }
    </div>
  )
};
