import { useState } from "react";


function PracticalExperience({practicalExperience, setPracticalExperience}) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPracticalExperience({
            ...practicalExperience,
            [name]: value
        })};
    
    return (
        <>  
            <h2>Practical Experience</h2>
            <div>
                <form className="practical-experience-form">
                    <label htmlFor="job-title">*Job Title:</label>
                    <input type="text" id="job-title" name="jobtitle" value={practicalExperience.jobtitle} onChange={handleChange}/>
                    <label htmlFor="company-name">*Company Name:</label>
                    <input type="text" id="company-name" name="companyname" value={practicalExperience.companyname} onChange={handleChange}/>
                    <label htmlFor="location">*Location:</label>
                    <input type="text" id="location" name="location" value={practicalExperience.location} onChange={handleChange}/>
                    <label htmlFor="start-date">*Start Date:</label>
                    <input type="date" id="start-date" name="startdate" value={practicalExperience.startdate} onChange={handleChange}/>
                    <label htmlFor="end-date">*End Date:</label>
                    <input type="date" id="end-date" name="enddate" value={practicalExperience.enddate} onChange={handleChange}/>
                    <label htmlFor="description">*Description:</label>
                    <textarea id="description" name="description" value={practicalExperience.description} onChange={handleChange}></textarea>
                </form>
            </div>
        </>
    );
}
export default PracticalExperience;