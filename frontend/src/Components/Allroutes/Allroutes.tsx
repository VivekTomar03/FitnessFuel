import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login";
import Signup from "../../Pages/Signup";
import Homeui from "../../Pages/Middle/Homeui";
import PageNotF from "../../Pages/PageNotF";
import Workout from "../../Pages/Workout";
// import Navbar from "../../Pages/Navbar";
// import Footer from "../../Pages/Footer";

function Allroutes() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homeui />} />
        <Route path="/mylogin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotF />}></Route>
        <Route path="/workout" element={<Workout />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default Allroutes;
