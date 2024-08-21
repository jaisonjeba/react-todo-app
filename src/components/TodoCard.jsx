import React, { useState } from 'react';

const TodoCard = ({ todo, onEdit, onDelete, onStatusChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleStatusChange = (status) => {
    onStatusChange(todo.id, status);
    toggleDropdown();
  };

  return (
    <div className="todo-card">
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
      <div className="todo-status">
        <span onClick={toggleDropdown}>
          Status: {todo.status}
        </span>
        {showDropdown && (
          <div className="dropdown">
            <div onClick={() => handleStatusChange('Completed')}>Completed</div>
            <div onClick={() => handleStatusChange('Not Completed')}>Not Completed</div>
          </div>
        )}
      </div>
      <button onClick={() => onEdit(todo.id)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoCard;
