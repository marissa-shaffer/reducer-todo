import React from 'react';
import Todo from "./Todo";

const TodoList = props => {
    console.log("todolist", props)
    return (
        <div className="Todo-list">
            {props.tasks.map(task => (
                <Todo key={task.id} todo={task} toggleTodo={props.toggleTodo} />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;