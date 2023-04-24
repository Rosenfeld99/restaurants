import React from 'react'
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux';
import { addItem } from '../fetrues/RestaSlice';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {

    const{register , handleSubmit , formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const nav = useNavigate()

    const onSubForm = (_BodyData)=>{
        _BodyData.id = Date.now()
        dispatch(addItem({newItem : _BodyData}))
        console.log(_BodyData);
        nav(-1)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubForm)} className=" min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Add restaurant!</h1>
                <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa magni consequatur molestiae.</p>
            </div>
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">name restaurant</span>
                    </label>
                    {errors.name && <div className="text-[red]">* Enter valid name</div>}
                    <input type="text" {...register("name",{required:true, minLength:2})} placeholder="Enter restaurant" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">city</span>
                    </label>
                    {errors.city && <div className="text-[red]">* Enter valid name</div>}
                    <input type="text" {...register("city",{required:true, minLength:2})} placeholder="Enter city" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text">price</span>
                    </label>
                    {errors.price && <div className="text-[red]">* Enter valid price</div>}
                    <input type="number" {...register("price",{required:true, minLength:1})} placeholder="Enter city" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text">main image</span>
                    </label>
                    {errors.main_image && <div className="text-[red]">* Enter valid main image</div>}
                    <input {...register("main_image",{required:true, minLength:2})} type="text" placeholder="Enter main image" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text">images</span>
                    </label>
                    <input type="text" placeholder="Enter images" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text">cuisine</span>
                    </label>
                    {errors.cuisine && <div className="text-[red]">* Enter valid cuisine</div>}
                    <input {...register("cuisine",{required:true, minLength:2})} type="text" placeholder="Enter cuisine" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text">description</span>
                    </label>
                    {errors.description && <div className="text-[red]">* Enter valid description</div>}
                    <textarea {...register("description",{required:true, minLength:2})} rows={3} type="text" placeholder="Enter description" className="input input-bordered" />

                    </div>
                    <div className="mt-6 flex justify-center">
                        <button className="btn btn-primary w-80 me-4">Add restaurant</button>
                        <button className="btn w-20" onClick={nav(-1)}>Back</button>
                    </div>
                </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddItem