import { useState } from "react";

function AddExperienceButton({ onAddExperience }) {
    return (
        <button type="button" onClick={onAddExperience}>
            Add Experience
        </button>
    );
}

function PracticalExperience() {
    const [jobTitle, setJobTitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    
    return (
        <div className="practical-experience">
            <h2>Practical Experience</h2>
            <form>
                <label htmlFor="job-title">Job Title:</label>
                <input
                type="text"
                id="job-title"
                name="job-title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                />
                <label htmlFor="company-name">Company Name:</label>
                <input
                type="text"
                id="company-name"
                name="company-name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                />
                <label htmlFor="location">Location:</label>
                <input
                type="text"
                id="location"
                name="location"
                value={location}    
                onChange={(e) => setLocation(e.target.value)}
                />
                <label htmlFor="start-date">Start Date:</label>
            </form>
        </div>
    );
}
export default PracticalExperience;