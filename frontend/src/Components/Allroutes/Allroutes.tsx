import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../../Pages/Login'
import Signup from '../../Pages/Signup'
import DashBoard from '../../Pages/DashBoard'
 
function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/mylogin" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/dashBoard" element={<DashBoard/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes
