import React from 'react'

export default function ToDoForm({ addToList }) {

    function handleClick(e){
        e.preventDefault();
        const newTask = e.target.task.value;
        addToList(newTask);
        e.target.task.value = '';
    }

  return (
    <>
    <h1 className='text-center'>Add A Task</h1>
    <div className="container d-flex justify-content-center">
        <form action="" onSubmit={handleClick}>
        <div>
            <input type="text" name="task" className='form-control' style={{width:"500px"}} id="" placeholder='Enter a Task...'/>
            <input type="submit" value="Add Task" className='btn btn-outline-success w-100 mt-3 mb-4' />
        </div>     
        </form>
    </div>
    </>
  )
}
