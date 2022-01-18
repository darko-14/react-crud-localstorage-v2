import React from 'react'
import '../App.css'

const ContactDetails = ({contact}) => {
    return (
        <div className='details'>
            <h1>{contact.id}</h1>
            <p>{contact.name}</p>
            <p>{contact.phone}</p>
            <button>close</button>
        </div>
    )
}

export default ContactDetails
