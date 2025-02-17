import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid -> generate unique id

// creating an initial state. 
const initialState = {
    todos: [{id:1, text:"HELLO"}]
}


// next we create slice and also also exporting it.
export const todoSlice = createSlice({
    name: 'todo',
    // next we give initial state 
    initialState,
    // now we give reducers,reducers takes properties and fns.
    reducers: {
        // this is a syntax, whenever u give fn to reducers properties(here prop=>addTodo), we get 2 things -> (1)"State", (2)"Actions"
        /* State give the access to the current state in the variable, and actions, whenever some values comes actions provides here action provide id for remove method. */
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            // now the above part says that todo is created. But now we have to tell initial state also.
            state.todos.push(todo);
        }, 
        deleteTodo: (state, action) => {
           state.todos = state.todos.filter((todo) => {todo.id !== action.payload});
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {todo.id === action.payload ?  todo.text=action.payload : todo});
        }
    }
})

// after creating reducers we need to export all functionalities so we use them in any component.
export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions;

// aftet this, we need to aware store we need to register them in store.
export default todoSlice.reducer;