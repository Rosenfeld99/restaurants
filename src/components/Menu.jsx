import React from 'react'
import { Link } from 'react-router-dom'
import {MdRestaurantMenu} from 'react-icons/md'

const Menu = () => {
  return (
    <div className='fixed left-3 top-3 z-10'>
        <div className="dropdown ">
            <label tabIndex={0} className="btn btn-info m-1 text-xl shadow-xl text-white "><MdRestaurantMenu/></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded w-52 border-solid border-2 border-info">
                    <li><Link to={'/add'}>Add restaurant</Link></li>
                    <li><Link to={'/'}>Home</Link></li>
                </ul>
            </div>
    </div>
  )
}

export default Menu