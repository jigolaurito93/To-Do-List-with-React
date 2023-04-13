import React from 'react'

export default function ToDoList({ taskList }) {
  return (
    <div className='row mt-3'>
      <div className="col-6 offset-3">
        <ul className="list-group list-group-numbered text-center">
            {taskList.map(task => <li key={task} className="list-group-item">{task}</li>)}
        </ul>
      </div>
    </div>
  )
}
