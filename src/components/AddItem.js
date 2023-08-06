import React from 'react'
import {FaPlus} from "react-icons/fa"
function AddItem({newItems, handleInputItems, handleSubmitNewItem}) {
  return (
    <form action="" className='Addform' onSubmit={handleSubmitNewItem}>
      <input type="text"
             className='Addinput'
             required
             autoFocus
             placeholder='Add Item'
             value={newItems}
             onChange={handleInputItems}
      />
      <button type='submit'
              aria-label='Add Item'
              className='addbutton'
      >
              <FaPlus />
      </button>
    </form>
  )
}

export default AddItem