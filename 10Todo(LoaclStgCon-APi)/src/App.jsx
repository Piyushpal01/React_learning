import { useEffect, useState } from "react";
import { ToDoProvider } from "./contexts/ToDoContext";
import ToDoForm from "./Components/ToDoForm";
import ToDoItem from "./Components/ToDoItem";

function App() {
  //we need to store todos as ui is also changing so, useState have to be used.
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(), ...todo}, ...prev]); // accessing previous todos also ,if we used setTodos(todo) instead of spreading the previous todos, it would overwrite the entire todos state with only the new todo object, effectively removing all the existing todos.
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevToDo) => (prevToDo.id === id ? todo : prevToDo)));
    /* map() is an array method that creates a new array by applying a function to each element of the original array (prev in this case).
    In this case, the array is your list of todos (prev), and for each prevToDo (each todo object in the list), you are checking if the id of that todo matches the id passed to updateTodo. */
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    /* filter() is an array method that creates a new array by selecting all items that pass a condition. This means: "Keep all todos where the id is not equal to the id passed to the deleteTodo function." The filter method will exclude the todo with the matching id, effectively deleting it from the list. */
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevToDo) => prevToDo.id === id ? {...prevToDo, completed: !prevToDo.completed}: prevToDo)); // here we first check whether the any prevTodo matches with our given id or not, if matches then keep other values same nd only change the complete value, and if not matches then keep prevTodo as it is. 

    /* previous state (prev), which is the current list of todos. The function returns the new state after making the necessary changes. For each todo (prevToDo), we're checking whether its id matches the id passed to toggleComplete. 
    If prevToDo.id === id: This means the todo you're iterating over has the same id as the one you're toggling. So, you create a new todo object with the same properties as the original todo, but you change the completed property.
    */
  }

  // Local Storage Concept
  useEffect(() => {
    // getting item from local storage.
    const todos = JSON.parse(localStorage.getItem("todos"));
    
    // now we are setting values in todos array if there is any todos and the given todos have any length or not.
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // now we are setting values if there is any change in the the todos.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  
  return (
    // Any Provider is just a provider, what we want to provide we have to give in value attribute, we are destructuring here.
    <ToDoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                 <ToDoItem todo={todo}/> {/* we also need to pass a prop also to this component */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
