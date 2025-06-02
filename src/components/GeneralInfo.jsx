import { useState } from 'react'

function savePersonalInfo() {
    let personalInfo = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value
    }
    if (!personalInfo.firstName || !personalInfo.lastName || !personalInfo.email || !personalInfo.phone || !personalInfo.city || !personalInfo.state || !personalInfo.zip) {
        alert('Please fill in all required fields.');
        return;
    }
    alert('Personal information saved successfully!');
    console.log('Personal Information Saved:', personalInfo);
}

function GeneralInfo() {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')

    return (
    <div className='general-info'>
        <h2>Personal Information</h2>
        <form className='general-info-form'>
            <label htmlFor='first-name'>*First Name:</label>
            <input type='text' id='first-name' name='first-name' value={firstname} onChange={(e) => setFirstName(e.target.value)}/>  
            <label htmlFor='last-name'>*Last Name:</label>
            <input type='text' id='last-name' name='last-name' value={lastname} onChange={(e) => setLastName(e.target.value)}/>
            <label htmlFor='email'>*Email:</label>
            <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor='phone'>*Phone:</label>
            <input type='tel' id='phone' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <label htmlFor='city'>*City:</label>
            <input type='text' id='city' name='city' value={city} onChange={(e) => setCity(e.target.value)}/>
            <label htmlFor='state'>*State:</label>
            <input type='text' id='state' name='state' value={state} onChange={(e) => setState(e.target.value)}/>
            <label htmlFor='zip'>*Zip:</label>
            <input type='text' id='zip' name='zip' value={zip} onChange={(e) => setZip(e.target.value)}/>
            <input type="button" value="Save" onClick={savePersonalInfo}/>
        </form>
    </div>
    )
}

export default GeneralInfo