import React from 'react';

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div className="todo-filter">
      <button onClick={() => setFilter('All')}>All</button>
      <button onClick={() => setFilter('Completed')}>Completed</button>
      <button onClick={() => setFilter('Not Completed')}>Not Completed</button>
    </div>
  );
};

export default TodoFilter;
