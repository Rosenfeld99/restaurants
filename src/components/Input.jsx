import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Input = () => {
    const inputRef = useRef()

    const navigate = useNavigate()

    const handelerSearch = () =>{
      let searchQ = inputRef.current.value
      if (!searchQ)return;
      navigate(`/?s=${searchQ}`)
    }

    const handelerEnter = (e) =>{
      if (e.key == 'Enter') {
        handelerSearch()
      }
    }
    

  return (
    <div>
        <div className=' bg-slate-600 h-64 text-4xl py-20 text-center'>
            <p className=" text-[white]">The quick food</p>
            <div className="p-5">
              <input ref={inputRef} onKeyDown={(e)=> handelerEnter(e)} type="text" placeholder="Search city..." className="input input-bordered w-full max-w-xs" />
              <button onClick={ handelerSearch } className="btn btn-active ms-3">Lets Go!</button>
            </div>
        </div>
    </div>
  )
}

export default Input