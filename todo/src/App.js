import React, { useReducer } from 'react';
import { initialState, todoReducer } from "./reducers/reducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import './App.css';

const App = () => {

  const [{tasks}, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (e, task) => {
    e.preventDefault();

    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };
  
    dispatch({type: "ADD_TODO", payload: newTodo}); 
  };

  const toggleTodo = todoId => {
    dispatch({type: "COMPLETED_TODO", payload: todoId});
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({type: "CLEAR_TODO"})
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List</h2>
        <TodoForm addTodo={addTodo} />
      </header>
      <TodoList 
        todo={tasks}
        toggleTodo={toggleTodo}
        clearCompleted={clearCompleted} 
        />
    </div>
  );
}

export default App;
