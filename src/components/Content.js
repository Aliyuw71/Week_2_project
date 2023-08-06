import ListItems from "./ListItems"

function Contents({items, handleCheck, handleDelete}) {
  return (
    <main>
        {items.length ?(
           <ListItems 
                items = {items}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
           />
        ):(<p className= "emptyList">
         Your list is empty 
        </p>)}
    </main>
  )
}

export default Contents