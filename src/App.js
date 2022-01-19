import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import Contacts from './components/Contacts';
import AddNewContact from './components/AddNewContact'

function App() {
  const [showAdd, setShowAdd] = useState(true) 
  const [contacts, setContact] = useState(getContacts)
  const [currentIndex, setCurrentIndex] = useState(-1)

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
    if(currentIndex === -1){
      var id = contacts.length
      var obj = {id, ...data}
      setContact([...contacts, obj])
      localStorage.setItem('list', JSON.stringify([...contacts, obj]))
    }else{
      const list = getContacts()
      list[currentIndex] = {id:list[currentIndex].id, name:data.name, phone:data.phone}
      setContact(list)
      console.log(list);
      localStorage.setItem('list', JSON.stringify(list))
      // window.location.reload()
      setCurrentIndex(-1)
    }
  }

  const onDelete = id => {
    setContact(contacts.filter((i) => i.id !== id))
    localStorage.setItem("list", JSON.stringify(contacts.filter((i) => i.id !== id)));
  }

  const onEdit = data => {
    console.log(data);
    setCurrentIndex(data.id)
  }

  return (
    <div className="App">
      <Header handleShowAdd={handleShowAdd} formOpened={showAdd}/>
      {showAdd && <AddNewContact onAdd={onAdd} contacts={contacts} currentIndex={currentIndex}/>}
      {contacts.length > 0 ? <Contacts contacts={contacts} onDelete={onDelete} onEdit={onEdit}/> : 'No contacts'}
    </div>
  );
}

export default App;
