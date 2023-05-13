import React, { useState } from 'react'
import logo from "../image/logo 3.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface exer {
    "title":string;
    "Targetbodypart":string,
    "exercise": Array<string>,
    "cardio" :string ,
    "image":string
}

interface userdetails {
    email:string;
    password:string;
    name:string;
    age:number;
    height:number;
    weight:number;
    exercise:exer[];
    diet:exer[]
}

let obj ={
  email:"",
  password:"",
  name:"",
  age:0,
  height:0,
  weight:0,
  exercise:[],
  diet:[]
}

function Signup() {
const [data,setData]=useState<userdetails>(obj)
const navigate = useNavigate()
const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  const { name, value,type } = e.target;
  const val = type == "number" ? +value : value;
  // console.log(name,value)
  setData({ ...data, [name]: val });
}

const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const {email,password,name,age,height,weight,exercise,diet} = data
    if(!email || !password || !name || !age  || !exercise || !height || !weight || !diet){
      alert("All fields are required")
    }
    console.log(data)
   axios
   .post("https://impossible-seal-coat.cyclic.app/user/register",data)
   .then((res)=>{
    console.log(res.data.msg)
       navigate("/mylogin")
  })
   .catch((err)=>{console.log("User Already exist")})

   setData(obj)
}

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 text-left">
  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
    <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" ></div>
  </div>
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black-900">Sign up for new account</h2>
  </div>
  <form action="#" onSubmit={handleSubmit}  className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div >
      <div>
        <label  className="block text-sm font-semibold leading-6 text-black-900">Name</label>
        <div className="mt-2.5">
          <input type="text" name="name" id="first-name" value={data.name} onChange={handleChange}  className="block w-full rounded-md border-0 px-3.5 py-2 text-black-900 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2 mt-3">
        <label  className="block text-sm font-semibold leading-6 text-black-900">Email</label>
        <div className="mt-2.5">
          <input type="email" name="email" id="email" value={data.email} onChange={handleChange}  className="block w-full rounded-md border-0 px-3.5 py-2 text-black-900 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2 mt-3">
        <label  className="block text-sm font-semibold leading-6 text-black-900">Password</label>
        <div className="mt-2.5">
          <input type="paswword" name="password" id="password"  value={data.password} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-black-900 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      {/* <div className="sm:col-span-2 mt-3">
        <label  className="block text-sm font-semibold leading-6 text-black-900">Phone number</label>
        <div className="relative mt-2.5">
          
          <input type="number" name="mobile" id="phone-number" value={data.mobile} onChange={handleChange} className="block w-full  rounded-md border-0 px-3.5 py-2  text-black-900 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div> */}
      <div className="sm:col-span-2 mt-3">
        <label  className="block text-sm font-semibold leading-6 text-black-900">Age</label>
        <div className="mt-2.5">
        <input type="number" name="age" id="age" value={data.age} onChange={handleChange} className="block w-full  rounded-md border-0 px-3.5 py-2  text-black-900 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div  className="grid grid-cols-1 gap-x-8 gap-y-6 mt-3 sm:grid-cols-2">
      <div>
        <label  className="block text-sm font-semibold leading-6 text-gray-900">Weight</label>
        <div className="mt-2.5">
          <input type="number" name="weight" id="weight" value={data.weight} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label  className="block text-sm font-semibold leading-6 text-gray-900">Height</label>
        <div className="mt-2.5">
          <input type="Number" placeholder='height in meter' name="height" id="height" value={data.height} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      </div>
     
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
    </div>
  </form>
</div>
  )
}

export default Signup