import React, { useState } from 'react'
import ToDoForm from '../components/ToDoForm'
import ToDoList from '../components/ToDoList';


export default function ToDo() {

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
            <ToDoForm addToList={addToList}/>
            <ToDoList taskList = {toDos}/>
        </div>
    )
    }
