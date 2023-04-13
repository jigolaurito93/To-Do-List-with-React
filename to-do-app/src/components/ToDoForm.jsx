import React from 'react'

export default function ToDoForm({ addToList }) {

    function handleClick(e){
        e.preventDefault();
        const newTask = e.target.task.value;
        addToList(newTask);
    }

  return (
    <form action="" onSubmit={handleClick}>
        <h1 className='text-center'>Add A Task</h1>
        <div className="form-group">
            <label htmlFor="task">Enter task</label>
            <input type="text" name="task" className='form-control' id="" placeholder='Enter a Task...'/>
            <input type="submit" value="Add Task" className='btn btn-outline-success w-100 mt-3 mb-4' />
        </div>
    </form>
  )
}
