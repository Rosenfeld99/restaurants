import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className=''>
        <Link to={`/item/${item.id}`}>
            <div className="card bg-base-100 drop-shadow-md">
                <figure><img className='' src={item.main_image} alt="Shoes" /></figure>
                <div className="card-body text-start">
                        <h2 className="card-title">-- {item.name} --</h2>
                        <p>cuisine - {item.cuisine}</p>
                        <p>city - {item.city}</p>
                        <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Item