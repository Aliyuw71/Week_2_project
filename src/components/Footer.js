import React from 'react'

function Footer({items}) {
  return (
    <footer>
    
        <p>You have {items.length} {items.length === 1 ?("item"):("items")}</p>
    </footer>
  )
}

export default Footer