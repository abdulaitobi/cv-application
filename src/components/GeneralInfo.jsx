import { useState } from 'react'

function GeneralInfo({generalInfo, setGeneralInfo}) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGeneralInfo({
            ...generalInfo,
            [name]: value
        })};

    return (
    <div className='general-info'>
        <h2>Personal Information</h2>
        <form className='general-info-form'>
            <label htmlFor='first-name'>*First Name:</label>
            <input type='text' id='first-name' name='firstname' value={generalInfo.firstname} onChange={handleChange}/>  
            <label htmlFor='last-name'>*Last Name:</label>
            <input type='text' id='last-name' name='lastname' value={generalInfo.lastname} onChange={handleChange}/>
            <label htmlFor='email'>*Email:</label>
            <input type='email' id='email' name='email' value={generalInfo.email} onChange={handleChange}/>
            <label htmlFor='phone'>*Phone:</label>
            <input type='tel' id='phone' name='phone' value={generalInfo.phone} onChange={handleChange}/>
            <label htmlFor='city'>*City:</label>
            <input type='text' id='city' name='city' value={generalInfo.city} onChange={handleChange}/>
            <label htmlFor='state'>*State:</label>
            <input type='text' id='state' name='state' value={generalInfo.state} onChange={handleChange}/>
            <label htmlFor='zip'>*Zip:</label>
            <input type='text' id='zip' name='zip' value={generalInfo.zip} onChange={handleChange}/>
        </form>
    </div>
    )
}

export default GeneralInfo