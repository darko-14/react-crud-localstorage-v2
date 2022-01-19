import React from 'react'
import '../App.css'

const ContactDetails = ({contact}) => {
    return (
        <div className='details'>
            <h1>Contact Info</h1>
            <p>{contact.id+1}. {contact.name}</p>
            <p>{contact.phone}</p>
        </div>
    )
}

export default ContactDetails
