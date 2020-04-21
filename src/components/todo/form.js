import React, { useRef } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD } from '../../shared/apollo/mutations/todo';

export function Form() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const doneRef = useRef();
  const [addTodo] = useMutation(ADD);

  function handleSubmit(event) {
    event.preventDefault();
    const { value: title } = titleRef.current;
    const { value: description } = descriptionRef.current;
    const { checked: done } = doneRef.current;
    addTodo({ variables: { title, description, done } });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" ref={titleRef} />
      <input placeholder="Description" ref={descriptionRef} />
      <input type="checkbox" ref={doneRef} />
      <button type="submit">
        Create Todo
      </button>
    </form>
  )
}
