import { useState } from 'react';
import './App.css';
import { IoTrashBin } from "react-icons/io5";
import { LuClipboardEdit } from "react-icons/lu";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [editingId, setEditingId] = useState(null); // Define editingId state variable

  const inputHandle = (e) => {
    setText(e.target.value);
  }

  // Add todo
  const addTodo = () => {
    const newTodo = {
      id: Math.random().toString(),
      text: text,
      value: false
    }
    setTodos([...todos, newTodo]);
    setText('');
  }
  
    

  // Delete todo 
  const deleteTodo = (todoToDelete) => {
    const filteredTodos = todos.filter(todo => todo.id !== todoToDelete.id);
    setTodos(filteredTodos);
   
  }

  // Edit todo
  const updateTodo = (todo) => {
    setText(todo.text); // Set the current text in the input field for editing
    setToggle(true); // Toggle edit mode on
    setEditingId(todo.id); // Set the ID of the todo item being edited
  }


  //updateTodo
  const submitUpdate = (e) =>{
    e.preventDefault();
    const updateTodo = todos.map(todo => {
      if (todo.id == editingId) {
        return {...todos, text: text};
      }
      return todo;
    }
    );
    setTodos(updateTodo);
    setText('');
    setToggle(false);
    setEditingId(null);
    localStorage.setItem("Todo" , todos)
  }


  //delete all todo 
  const deleteAllTodo = () =>{
    setTodos([]);
  }


  return (
    <section className='m-auto h-screen items-center justify-center flex flex-col bg-green-200 gap-5'>
      <h1 className='text-4xl text-center'>Todo Application</h1>
      <div className="card flex flex-col gap-8 bg-white p-5 rounded-xl">
        <div className="input-box shadow-md">
          <input type="text" className='px-10 pl-3 py-3 border-gray-800 border-2 rounded-md focus:border-sky-300' value={text} onChange={inputHandle} placeholder="Enter task here..." />
          {toggle ?
            <button type='button' className='Btn bg-orange-300 px-10 py-3 ms-2 rounded-md' onClick={submitUpdate}>Update</button>
            :
            <button className='Btn bg-orange-300 px-10 py-3 ms-2 rounded-md' onClick={addTodo}>Add Task</button>
          }

        </div>

        <ul className='  rounded-lg flex flex-col ' >
          {todos.map((todo, id) => (
            <li key={id} className='flex shadow-xl justify-between bg-sky-200 border-2 border-sky-600 rounded-lg py-2 px-3 items-center mb-5'  >
              <p>{todo.text}</p>
              <span className='flex gap-6'>
                <button type='button' className='btn text-xl rounded-md hover:text-2xl hover:color-red' onClick={() => updateTodo(todo)}><LuClipboardEdit className='bg-red text-green-800' ></LuClipboardEdit></button>
                <button type='button' className='btn text-xl rounded-md hover:text-2xl hover:color-red' onClick={() => deleteTodo(todo)}><IoTrashBin className='text-red-600' /></button>
              </span>
            </li>
          ))}
        </ul>
        <div className="task flex items-center justify-between">
          <p className='text-xl font-medium'>You have {todos.length} tasks left.</p>
          <button type='button'className='button bg-red-100 border-2 border-red-500 color-red px-4 py-2 rounded-xl' onClick={deleteAllTodo}>
            Clear all
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
