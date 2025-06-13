import { useState } from 'react'
import '/src/styles/App.css'
import GeneralInfo from './GeneralInfo.jsx'
import PracticalExperience from './PracticalExperience.jsx'

function App() {

  const [generalInfo, setGeneralInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    zip: ''
  });

  const [practicalExperience, setPracticalExperience] = useState({
    jobtitle: '',
    companyname: '',
    location: '',
    startdate: '',
    enddate: '',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  
  function SubmitForm(){
    if (!generalInfo.firstname || !generalInfo.lastname || !generalInfo.email || !generalInfo.phone || !generalInfo.city || !generalInfo.state || !generalInfo.zip ||
        !practicalExperience.jobtitle || !practicalExperience.companyname || !practicalExperience.location || !practicalExperience.startdate || !practicalExperience.enddate || !practicalExperience.description) {
      alert('Please fill in all required fields.');
      return;
    }
    if (practicalExperience.startdate > practicalExperience.enddate) {
      alert('Start date cannot be later than end date.');
      return;
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(generalInfo.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    else{
      setIsSubmitted(true);
    }
  }

  if (isSubmitted) {
    return (
      <div id='success-message'>
        <h1>CV Submitted Successfully</h1>
        <h2>Your CV Information:</h2>
        
        <div>
          <h3>Personal Information</h3>
          <p><strong>First Name:</strong> {generalInfo.firstname}</p>
          <p><strong>Last Name:</strong> {generalInfo.lastname}</p>
          <p><strong>Email:</strong> {generalInfo.email}</p>
          <p><strong>Phone:</strong> {generalInfo.phone}</p>
          <p><strong>City:</strong> {generalInfo.city}</p>
          <p><strong>State:</strong> {generalInfo.state}</p>
          <p><strong>Zip:</strong> {generalInfo.zip}</p>

          <h3>Practical Experience</h3>
          <p><strong>Job Title:</strong> {practicalExperience.jobtitle}</p>
          <p><strong>Company Name:</strong> {practicalExperience.companyname}</p>
          <p><strong>Location:</strong> {practicalExperience.location}</p>
          <p><strong>Start Date:</strong> {practicalExperience.startdate}</p>
          <p><strong>End Date:</strong> {practicalExperience.enddate}</p>
          <p><strong>Description:</strong> {practicalExperience.description}</p>
        </div>

        <button onClick={() => setIsSubmitted(false)}>Return to Form</button>
      </div>
    );
  }

  return (
    <>
      <h1 id='title'>CV generator</h1>
      <p>First fill in your personal information <br /> Ensure you review the information you enter</p>

      <div  id='content'>
        <GeneralInfo 
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <hr />
        <PracticalExperience 
          practicalExperience={practicalExperience}
          setPracticalExperience={setPracticalExperience}
        />
        <span id='submit-button' onClick={SubmitForm}>Submit</span>
      </div>
    </>
  )
}

export default App
