import { useState } from 'react'
import '/src/styles/App.css'
import GeneralInfo from './GeneralInfo.jsx'
import PracticalExperience from './PracticalExperience.jsx'

function SubmitForm(){
  document.getElementById("root").innerHTML = `
  <h1>CV Submitted Successfully!</h1>
  <span>Click the button below to return to the form.</span>
  <button id="return-button">Return to Form</button>
  `;
  document.getElementById("return-button").addEventListener("click", () => {
    window.location.reload();
    GeneralInfo
  });
}

function App() {

  return (
    <>
      <h1 id='title'>CV generator</h1>
      <p>First fill in your personal information <br /> Ensure you review the information you enter</p>
      <div  id='content'>
        <GeneralInfo />
        <hr />
        <PracticalExperience />
        <span id='submit-button' onClick={SubmitForm}>Submit</span>
      </div>
    </>
  )
}

export default App
