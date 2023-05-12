import React, { useState } from 'react'
import logo from "../image/logo 2.png"
const DashBoard = () => {
    const [value,setValue] =  useState<string>("")
    const [macro,setMacro] = useState<Number>(0)
    if(value == "begginers") setMacro(1800)
    if(value == "intermediate") setMacro(2500)
    if(value == "expert") setMacro(3000)

  return (
    <div>
       <img src={logo} alt="" width="100%"/> 
       <div className='flex justify-center gap-20px border-4 border-teal-600 border-solid w-fit m-auto mb-8'>
        <div style={{border:"2px solid red" , padding:"20px" , margin:"10px",fontSize:"50px"}}>Macro</div>
        <div >
            
            <select name="" id="" style={{marginTop:"20px"}} onChange={(e) => setValue(e.target.value)}>
            <option value="">Choose Option</option>
                <option value="begginers">Begginers</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">expert</option>

            </select>
           
        </div>
        <div style={{margin:"20px"}}>
        <button style={{marginRight:"20px",border:"1px solid gray",padding:"5px",borderRadius:"10px",color:"white",backgroundColor:"#424242"}}> See Your Diet Plan</button>
            <button style={{marginRight:"20px",border:"1px solid gray",padding:"5px",borderRadius:"10px",color:"white",backgroundColor:"#424242"}}>See Your Exercise Schedule</button>
        </div>
       </div>
    </div>
    
  )
}

export default DashBoard