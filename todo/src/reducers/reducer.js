export const initialState = {
    task: [
        {
            task: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {...state, tasks: [...state.tasks, action.payload]};

        case "COMPLETED_TODO":
            return {...state, tasks: state.tasks.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task)}

        case "CLEAR_TODO":
            return{...state, tasks: state.tasks.filter(task => !task.completed)};
        default:
            return state;
    }
}