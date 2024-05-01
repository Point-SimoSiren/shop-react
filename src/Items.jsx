import React, { useEffect, useState } from 'react'
import Item from './Item'
import AddForm from './AddForm'

const Items = () => {

  // State
  const [items, setItems] = useState([])
  const [showAddForm, setShowAddForm] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/api/Items")
    //fetch("https://shopbackendforreact.azurewebsites.net/api/items")
    .then(res => res.json()) // Change from json to js format
    .then(data => setItems(data)) // Set data to Items state

  }, [])

   
    return (
        <main>

        <button onClick={() => setShowAddForm(true)}>Add new item</button>

        {showAddForm && <AddForm />}


            {items && items.map(item => (
                <Item key={item.id} item={item} />
            ))}  
        </main>
    )
  }

export default Items