import React, { useReducer } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List</h2>
        <TodoForm />
      </header>
      <TodoList />
    </div>
  );
}

export default App;
