import React, { useEffect, useState } from 'react'
import Input from './Input'
import List from './List'
import { useDispatch, useSelector } from 'react-redux';
import {seractItem} from '../fetrues/RestaSlice'
import { useSearchParams } from 'react-router-dom';
import Loading from './Loading';

const Home = () => {

  const [loading,setLoading] = useState(false)
  const [data,setData] = useState([])
  const [querys] = useSearchParams()
  const dispatch = useDispatch()

  const restaurant_Ar = useSelector(state => state.RestaSlice.restaurant_Ar)
  // console.log(restaurant_Ar);
  
  useEffect(()=>{
    
    let searchQ = querys.get('s') || "rehovot";
    console.log(querys.get('s') || "rehovot");
    getData(searchQ)
  },[querys])

  const getData = (searchQ) =>{
    setLoading(true)
        setTimeout(()=>{
        let filter_Ar = restaurant_Ar.filter((item) => (item.city === searchQ.toLowerCase()))
        dispatch(seractItem({searchName:searchQ}))
        setData(filter_Ar)
        setLoading(false)
        if (filter_Ar.length === 0)setData(false)
      },500)
  }

  console.log(data);

  return (
    <div className='min-h-screen'>
        <Input/>
        {data && <p className='text-lg text-center py-4'>resluts for city : <b>{querys.get('s') || "rehovot"}</b></p>}
        {loading && <Loading/>}
        {!data && <h2 className='p-3 '> Not results! <p className='fs-6 py-3'>Try agen...</p></h2>}
        <List data={data}/>
    </div>
  )
}

export default Home