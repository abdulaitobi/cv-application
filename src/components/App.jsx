import { useState } from 'react'
import '/src/styles/App.css'
import GeneralInfo from './GeneralInfo.jsx'
import PracticalExperience from './PracticalExperience.jsx'

function App() {

  return (
    <>
      <h1 id='title'>CV generator</h1>
      <p>First fill in your personal information <br /> Ensure you review the information you enter</p>
      <div  id='general-info'>
        <GeneralInfo />
        <PracticalExperience />
      </div>
      <span id='save-button'>Save</span>
    </>
  )
}

export default App
