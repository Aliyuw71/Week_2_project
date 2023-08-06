import './index.css';
import Header from './components/Header';
import Contents from './components/Content';
import Footer from './components/Footer';
import AddItem from "./components/AddItem"
import { useState } from 'react';
function App() {
  const [items, setItems] = useState(
  
    [
        {
            "id": 1,
            "checked" : false,
            "item": "Almond"
        },
        {
            
            "id": 2,
            "checked" : false,
            "item": "Banana"
        },
        {
            
            "id": 3,
            "checked" : false,
            "item": "Mango"
        },
        {
            
            "id": 4,
            "checked" : false,
            "item": "Orange"
        }
    ]
)
const [newItems, setNewItems] = useState("")
const handleCheck = (id) =>{
    const forCheck = items.map((item) => (
        (item.id === id)? {...item, checked : !item.checked} : item
    ))
    setItems(forCheck)
}
const handleDelete = (id) =>{
    const forDelete = items.filter((item) =>(item.id !== id))
    setItems(forDelete)
}
const handleInputItems = (e) =>{
  setNewItems(e.target.value)
}
//code for each Items to be added 
const AddedItems = (item) =>{
  const id = items.length ? items[items.length - 1].id + 1 : 1
  const myItem = {id, checked : false, item}
  const updatedItems = [...items, myItem]
  setItems(updatedItems)
}
const handleSubmitNewItem = (e) =>{
  e.preventDefault()
  if(!newItems) return;
    AddedItems(newItems);
    setNewItems('')
}
  return (
    <div className="App">
      
      <Header />
      <AddItem 
        newItems = {newItems}
        handleInputItems= {handleInputItems}
        handleSubmitNewItem = {handleSubmitNewItem}
      />
      <Contents 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete= {handleDelete}
      />
      <Footer 
        items={items}
      />
    </div>
  );
}

export default App;
