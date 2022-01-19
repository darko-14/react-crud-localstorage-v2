import React from 'react'
import Contact from './Contact'
import '../App.css'
import ContactDetails from './ContactDetails'
import { useState } from 'react'

const Contacts = ({ contacts, onDelete, onEdit }) => {
    const [showDetails, setShowDetails] = useState(false)



    return (
        <div className='contacts'>
            {
                contacts.map((contact, index) => {
                    return <div key={index}>
                        {showDetails && <ContactDetails contact={contact}/>}
                        <Contact 
                         
                        contact={contact} 
                        index={index} 
                        onDelete={onDelete} 
                        onEdit={onEdit} 
                        onDoubleClick={() => setShowDetails(!showDetails)}/>
                        </div>
                })
            }
        </div>
    )
}

export default Contacts
