import React from 'react'
import '../App.css'

const Header = ({ handleShowAdd, formOpened }) => {
    return (
        <div className='header'>
            Contact List App
            <button onClick={handleShowAdd}>{formOpened ? 'Close' : 'Add'}</button>
        </div>
    )
}

export default Header
