import React from 'react'
import '../App.css'

const Contact = ({ index, contact, onDelete, onEdit, onDoubleClick }) => {
   
    const handleDelete=()=>{
        onDelete(contact.id)
    }
    const handleEdit = () =>{
        onEdit(contact)
    }

    return (
        <div className='contact'>
            <div onDoubleClick={onDoubleClick}>
                <h3>{index+1}. {contact.name}</h3>
            </div>
            <h4>{contact.phone}</h4>
            <div style={{marginTop: 17}}>
                <button className='btn' onClick={handleEdit} >Edit</button>
                <button className='btn' onClick={handleDelete} >Delete</button>
            </div>
        </div>
    )
}

export default Contact
