import { useState } from 'react'
import './App.css'

function GeneralInfo() {
  return (
    <div className='general-info'>
      <h2>General Information</h2>
      <form>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' />
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <label htmlFor='phone'>Phone:</label>
        <input type='tel' id='phone' name='phone' />
      </form>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 id='title'>CV generator</h1>
      <div  id='general-info'>
        <p>First fill in your personal information <br /> Ensure you review the information you enter</p>
      </div>
    </>
  )
}

export default App
