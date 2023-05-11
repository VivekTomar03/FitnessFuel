import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../../Pages/Login'
import Signup from '../../Pages/Signup'
 
function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/mylogin" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
    </div>
  )
}

export default Allroutes
