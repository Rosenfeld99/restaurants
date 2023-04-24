import React from 'react'
import {FaTrash,FaPen} from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { delItem } from '../fetrues/RestaSlice'
import { useDispatch, useSelector } from 'react-redux'


const ItemDetailes = () => {

    const dispatch = useDispatch()
    const nav = useNavigate()
    const {id} = useParams()
    const restaurant_Ar = useSelector(state => state.RestaSlice.restaurant_Ar)

    let item = restaurant_Ar.filter((item) => (item.id == id))
    console.log(item);

    
    const onClickDelete = (_id)=>{
        dispatch(delItem({delId : _id}))
        nav(-1)
    }

  return (
    <div className='min-h-screen'>
        { item && item.map((item,i) =>(<div key={item.id} className="card bg-base-100 shadow-xl h-screen md:px-20 p-5 my-20 max-w-3xl mx-auto">
            <figure><img className='w-full min-h-96' src={item.main_image} alt="Album"/></figure>
            <div className="">
                <h2 className="card-title py-4">{item.name} - {item.city}</h2>
                <p>cuisine : <b>{item.cuisine}</b></p>
                <p  className='py-4'>price : <b>{item.price}</b> ₪</p>
                <p>{item.description}</p>
                <div className="card-actions justify-end pt-4">
                    <button onClick={()=> nav(-1)} className="btn btn-primary">Back</button>
                    <button onClick={()=> nav(`/edit/${item.id}`)} className="btn btn-accent"><FaPen/></button>
                    <button onClick={()=> onClickDelete(item.id)} className="btn btn-secondary"><FaTrash/></button>
                </div>
            </div>
        </div>))}
    </div>
  )
}

export default ItemDetailes