import React from 'react'

const Item = ({item}) => {
  
    return (
      <div>{item.title} | {item.price} </div>
      
    )
  
}

export default Item