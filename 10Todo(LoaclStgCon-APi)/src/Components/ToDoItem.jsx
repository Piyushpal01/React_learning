import React, {useState} from 'react'
import { useToDo } from '../contexts/ToDoContext';

function ToDoItem({ todo }) {
    const [isTodoEditable, setisTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const {updateTodo, deleteTodo, toggleComplete} = useToDo();

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo:todoMsg}) // first getting the id that we want to update then keeping all values same nd changing only one key todo key.
        setisTodoEditable(false); // now telling that todo edit is done now make it false.
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return; // if todo is completed do nothing.

                    if (isTodoEditable) {
                        editTodo();  // // If in "edit" mode, execute the editTodo function.
                    } else setisTodoEditable((prev) => !prev); // // Toggle between "editable" and "non-editable" mode.
                }}
                disabled={todo.completed} // Disable the button if the todo is completed.
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default ToDoItem

{/* 
Logic of the Buttons:
Edit Button:
The edit button toggles between edit mode and view mode. If the todo is not completed, it lets the user toggle between editable and non-editable states (with icons changing from ✏️ to 📁).
If the todo is already marked as completed, the button is disabled (can't be clicked).
Delete Button:
The delete button, represented by the ❌ icon, will call the deleteTodo() function to remove the todo from the list when clicked.
*/}