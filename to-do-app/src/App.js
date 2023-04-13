import React, { useState } from 'react'
import NavBar from './components/NavBar'
import ToDoForm from './components/ToDoForm'

export default function App() {
      // toDos is the current list of toDos
      // setToDos is a function that sets the toDos state
      // useState is a hook that returns the current toDos state
  const [toDos, setToDos] = useState([]);
  const addToList = task => {
    console.log(task);
    setToDos([...toDos, task]);
  }

  return (
    <div>
      <NavBar />
      <div className='container'>
        <ToDoForm/>
      </div>

    </div>
  )
}

