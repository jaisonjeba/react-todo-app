import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoCard from './components/TodoCard';
import TodoFilter from './components/TodoFilter';
import './index.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), ...todo }]);
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingTodo(todoToEdit);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === editingTodo.id ? updatedTodo : todo)));
    setEditingTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeStatus = (id, status) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, status } : todo))
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Completed') return todo.status === 'Completed';
    if (filter === 'Not Completed') return todo.status === 'Not Completed';
    return true;
  });

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm onSave={editingTodo ? updateTodo : addTodo} editingTodo={editingTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onEdit={editTodo}
            onDelete={deleteTodo}
            onStatusChange={changeStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
