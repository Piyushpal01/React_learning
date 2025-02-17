import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo message",
            completed:false
        },
    ],
    // methods 
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

// exporting created context
export const useToDo = () => {
    return useContext(ToDoContext);
}

// Provider
export const ToDoProvider = ToDoContext.Provider;