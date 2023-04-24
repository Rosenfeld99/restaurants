import React from 'react'
import Item from './Item'


const List = ({data}) => {

  

  return (
    <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 m-3 gap-5'>
      { data && data.map((item,i) =>(<div key={i}>
        <Item item={item}/>
      </div>))}
    </div>
  )
}

export default List