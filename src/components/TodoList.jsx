import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    const[inputValue,setInputValue] = useState("")
    const[todo,setTodo] = useState([])
    function handleInputChange(e){
        setInputValue(e.target.value)
    }
    const handleAddTodo = () => {
        if(inputValue !== ""){
            const newTodo = {
                id : Date.now(),
                text : inputValue,
                completed : false
            };
            setTodo([...todo,newTodo])
        }
    }
    const removeTodo = (id) => {
        const deleteTodo = todo.filter((todo) => todo.id !== id)
        setTodo(deleteTodo)
    }

    return (
        <>
            <div className="container">
                <h1 className='heading'>Todo List</h1>
                <input type="text" value={inputValue} placeholder='Enter your work here' onChange={handleInputChange} className='user-input' />
                <button onClick={handleAddTodo} className='add-todo'>Add</button>
                <h2 className='todos'>Your Todos - </h2>
                <ul className='todo-list'>
                    {
                        todo.map((todo) => (
                            <li>
                                <span>{todo.text}</span>
                                <button className='remove-todo' onClick={() => removeTodo(todo.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default TodoList
