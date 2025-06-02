import { useState } from "react";

function savePracticalExperience() {
    let practicalExperience = {
        jobTitle: document.getElementById('job-title').value,
        companyName: document.getElementById('company-name').value,
        location: document.getElementById('location').value,
        startDate: document.getElementById('start-date').value,
        endDate: document.getElementById('end-date').value,
        description: document.getElementById('description').value
    }
    if (!practicalExperience.jobTitle || !practicalExperience.companyName || !practicalExperience.location || !practicalExperience.startDate || !practicalExperience.endDate || !practicalExperience.description) {
        alert('Please fill in all required fields.');
        return;
    }
    alert('Practical Experience saved successfully!');
    console.log('Practical Experience Saved:', practicalExperience);
}

function PracticalExperience() {
    const [jobTitle, setJobTitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    
    return (
        <>  
            <h2>Practical Experience</h2>
            <div>
                <form className="practical-experience-form">
                    <label htmlFor="job-title">*Job Title:</label>
                    <input type="text" id="job-title" name="job-title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}/>
                    <label htmlFor="company-name">*Company Name:</label>
                    <input type="text" id="company-name" name="company-name" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
                    <label htmlFor="location">*Location:</label>
                    <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                    <label htmlFor="start-date">*Start Date:</label>
                    <input type="date" id="start-date" name="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                    <label htmlFor="end-date">*End Date:</label>
                    <input type="date" id="end-date" name="end-date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                    <label htmlFor="description">*Description:</label>
                    <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <input type="button" value="Save" onClick={savePracticalExperience}/>
                </form>
            </div>
        </>
    );
}
export default PracticalExperience;