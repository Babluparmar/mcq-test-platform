import React, { useState } from 'react'

const FormPage = () => {
    const [firstName, setFirstName] = useState('') 
    const [lastName, setLastName] = useState('') 
    const [email, setEmail] = useState('')  

    function validateForm() {

        if (firstName.length == 0) {
            alert('Invalid Form, First Name can not be empty')
            return
        }

        if (email.length == 0) {
            alert('Invalid Form, Email Address can not be empty')
            return
        }

        alert('Form is valid')
    }

    return (
        <div className="main">
            <form>
            <h1>Form Page</h1>
                <input
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <select
                    id="genderSelect"
                >
                    <option value="">-- Select --</option>
                    <option value="usa">Male</option>
                    <option value="canada">Female</option>
                </select>
                <button
                 className='submitbutton'
                    type="submit"
                    onClick={() => {
                        validateForm()
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FormPage