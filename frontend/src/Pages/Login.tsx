import React, { useState } from 'react'
import logo from "../image/logo 3.png"
import {Link, useNavigate } from "react-router-dom"
import axios from 'axios';
interface userdetails{
  email: string,
  password: string
}

const obj = {
  email: '',
  password: ''
};
function Login() {

// const [email,setEmail]=useState<string>("")
// const [password,setPasword]=useState<string>("")
const [formData, setFormData] = useState<userdetails>(obj);
const navigate = useNavigate()
const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  // console.log(name,value)
  setFormData({ ...formData, [name]: value });
};

const handleSubmit=(e:React.FormEvent<HTMLFormElement> )=>{
    e.preventDefault()
    axios
    .post(`https://impossible-seal-coat.cyclic.app/user/login`,formData)
    .then((res) => {
      console.log(res);
       if(res.data.token){
        dataset(res.data.token)
       localStorage.setItem("id", res.data.id)
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('name', res.data.name);
      alert(res.data.msg);
      
         navigate("/")
       }
       else {
           alert("User not found")
       }
    })
    .catch((err) => alert("Wrong Credentials"));

  console.log(formData);
  setFormData(obj);
}

const dataset = (token:any)=> {
  axios.get(`https://impossible-seal-coat.cyclic.app/user`, {
    headers:{
      "Content-Type":"application/json",
      "Authorization": `Bearer ${token}`
   }
   })
   .then((res) =>{
    // console.log(res.data.data)
      res.data.data.map((el:any) => {
           console.log(el.diet[0], "from dash board");
            localStorage.setItem("plan" , el.diet[0]||"beginners")
           return 
      })
   })
   .catch((err) => console.log(err))
}
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" onSubmit={handleSubmit} >
      
      <div>
        <div className="flex items-center justify-between">
          <label placeholder="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
          <div className="text-sm">
          </div>
        </div>
        <div className="mt-2">
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label placeholder="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" value={formData.password} onChange={handleChange} type="password"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

   <Link to='/signup'> <p className="mt-10 text-center text-sm text-black-600">
      Not a member?
    </p></Link>
  </div>
</div>
  )
}

export default Login