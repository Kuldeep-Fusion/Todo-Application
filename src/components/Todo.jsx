import React from 'react'
import { IoTrashBin } from 'react-icons/io5'

const Todo = () => {
  return (
    <section className='m-auto h-screen items-center justify-center flex flex-col bg-green-200 gap-5'>
      <h1 className='text-4xl text-center'>Todo Application</h1>
      <div className="card flex flex-col gap-8">
        <div className="input-box shadow-md">
          <input type="text" className='px-10 pl-3 py-3 focus:border-sky-300' value={text} onChange={inputValue} />
          <button className='Btn bg-orange-300 px-10 py-3 ms-2 rounded-md' onClick={addTodo} >Add Task</button>
        </div>

        <ul className='  rounded-lg flex flex-col  ' > {
          todo.map((addTodo) => (
            <li className='flex  shadow-xl justify-between bg-sky-200 border-2 border-sky-600 rounded-lg py-2 px-3 items-center mb-5' >{addTodo.text} 
        
            <button type='button' className='buttext-xl rounded-md hover:text-2xl hover:color-red 'onClick={() => deleteTodo(addTodo)}><IoTrashBin/></button>
            </li>
          ))
          }
        </ul>
        <div className="task flex items-center justify-between">
          <p className='text-xl font-medium'>You have {length} tasks  left.</p>
          <button
            type='button'
            className='button bg-red-100 border-2 border-red-500 color-red px-4 py-2 rounded-xl' onClick={emptyInput}
          >
            Clear all
          </button>
        </div>
      </div>
    </section>
  )
}

export default Todo