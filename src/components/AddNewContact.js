import React, { useEffect } from 'react'
import '../App.css'
import { useState } from 'react'

const AddNewContact = ({ onAdd, contacts, currentIndex }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(()=>{
        if(currentIndex >= 0){
            setName(contacts[currentIndex].name)
            setPhone(contacts[currentIndex].phone)
        }
    }, [currentIndex])


    const handleAdd = (e) => {
        e.preventDefault();
  
        onAdd({name, phone})
        setName('')
        setPhone('')
        
    }
   

    return (
        <form className='form' onSubmit={handleAdd}>
            <h2>Add new contact</h2>
            <input type='text' value={name} placeholder='Enter name here.' onChange={(e)=>{setName(e.target.value)}} required/><br />
            <input type='text' value={phone} placeholder='Enter phone here.' onChange={(e)=>{setPhone(e.target.value)}} required/><br />
            <input type='submit' />
        </form>
    )
}

export default AddNewContact
