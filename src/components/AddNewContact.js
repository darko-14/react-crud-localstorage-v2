import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'

const AddNewContact = ({ onAdd, editUser }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(
        () => {
            if(editUser === null){
                return
            }else{
                setName(editUser.name)
                setPhone(editUser.phone)
            }
        }
    )

    const handleAdd = (e) => {
        e.preventDefault();

    
        onAdd({name,phone})
        setName('')
        setPhone('')
        
    }
    function handleChange(e){
        
        setName(e.target.value)
        setPhone(e.target.value)
    }

    return (
        <form className='form' onSubmit={handleAdd}>
            <h2>Add new contact</h2>
            <input type='text' value={editUser !== null ? editUser.name : name} placeholder='Enter name here.' onChange={handleChange} required/><br />
            <input type='text' value={editUser !== null ? editUser.phone : phone} placeholder='Enter phone here.' onChange={handleChange} required/><br />
            <input type='submit' />
        </form>
    )
}

export default AddNewContact
