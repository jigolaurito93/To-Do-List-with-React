import React from 'react'
import NavBar from './components/NavBar'
import ToDo from './views/ToDo'


export default function App() {

  return (
    <div>
      <NavBar />
      <div className='container'>
        <ToDo />
      </div>

    </div>
  )
}

