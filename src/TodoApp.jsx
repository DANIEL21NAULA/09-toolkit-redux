import React, { useState } from 'react';
import { useGetTodoQuery } from './store/apis';
// import { useGetTodosQuery } from './store/apis';

export const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  const previosTodo = () => {
    if (todoId > 1) {
      setTodoId(todoId - 1);
    }
  };

  return (
    <>
      <h1>TODOs - RTK Query</h1>
      <h4>
        isLoading:
        {' '}
        {isLoading ? 'true' : 'false'}
      </h4>
      <hr />
      <h4>IsLoading...</h4>
      <pre>{JSON.stringify(todo)}</pre>
      {/* <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <strong>
                {todo.completed ? 'Done' : 'Pending'}
                {' '}
              </strong>
              {todo.title}
            </li>
          ))
        }
      </ul> */}
      <button
        type="button"
        onClick={previosTodo}
      >
        Previos Todo
      </button>
      <button
        type="button"
        onClick={nextTodo}
      >
        Next Todo
      </button>
    </>
  );
};
