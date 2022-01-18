import './App.css';
import Header from './components/Header';
import { useState } from 'react'
import Contacts from './components/Contacts';
import AddNewContact from './components/AddNewContact'

function App() {
  const [showAdd, setShowAdd] = useState(false) 
  const [contacts, setContact] = useState(getContacts)
  const [editUser, setEditUser] = useState([])

  function handleShowAdd() {
    setShowAdd(!showAdd)
  }
  
  function getContacts(){
    if(JSON.parse(localStorage.getItem('list')) === null){
      localStorage.setItem('list', JSON.stringify([]))
    } 
    return JSON.parse(localStorage.getItem('list'))
  }

  const onAdd = data => {
    var id = contacts.length;
    var obj = {id, ...data}
    setContact([...contacts, obj])
    localStorage.setItem('list', JSON.stringify([...contacts, obj]))
  }

  const onDelete = id => {
    setContact(contacts.filter((i) => i.id !== id))
    localStorage.setItem("list", JSON.stringify(contacts.filter((i) => i.id !== id)));
  }

  const onEdit = data => {
    setEditUser({id: data.id, name: data.name, phone: data.phone})
    console.log('edit');
  }

  return (
    <div className="App">
      <Header handleShowAdd={handleShowAdd} formOpened={showAdd}/>
      {showAdd && <AddNewContact onAdd={onAdd} editUser={editUser}/>}
      {contacts.length > 0 ? <Contacts contacts={contacts} onDelete={onDelete} onEdit={onEdit}/> : 'No contacts'}
    </div>
  );
}

export default App;
