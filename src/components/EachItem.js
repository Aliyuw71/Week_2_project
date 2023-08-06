import React from 'react'
import {FaTrashAlt} from "react-icons/fa"

function EachItem({item, handleCheck,handleDelete}) {
  return (
    <li className='item'>
    <input 
    type="checkbox"
    checked = {item.checked}
    onChange={()=>handleCheck(item.id)}
    className='input'/>
     <label
        onDoubleClick={()=>handleCheck(item.id)}
        style={(item.checked) ? {textDecoration : "line-through"}: null}
     >
        {item.item}
     </label>

     <FaTrashAlt 
     onClick={()=> handleDelete(item.id)}
     role='button'
     tabIndex='0'
     className='trash'/>
</li>
  )
}

export default EachItem