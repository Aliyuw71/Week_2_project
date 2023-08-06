import React from 'react'
import EachItem from './EachItem'


function ListItems({items, handleCheck, handleDelete}) {
  return (
    <ul>
            {items.map((item) =>(
                <EachItem 
                    key={item.id}
                    item = {item}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                />
            ))}
       </ul>
  )
}

export default ListItems