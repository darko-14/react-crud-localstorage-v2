import React from 'react'
import '../App.css'

const Button = ({ title, color, handleShowAdd }) => {
    return (
        <button className='btn' style={{ backgroundColor: color}} onClick={handleShowAdd} >{title}</button>
    )
}

export default Button
