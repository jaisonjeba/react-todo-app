import React, { useState, useEffect } from 'react';

const TodoForm = ({ onSave, editingTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setName(editingTodo.name);
      setDescription(editingTodo.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      onSave({ name, description, status: 'Not Completed' });
      setName('');
      setDescription('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">{editingTodo ? 'Update Todo' : 'Add Todo'}</button>
    </form>
  );
};

export default TodoForm;
