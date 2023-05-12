
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login";
import Signup from "../../Pages/Signup";
import Homeui from "../../Pages/Middle/Homeui";
import PageNotF from "../../Pages/PageNotF";
import Workout from "../../Pages/Workout";

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homeui />} />
        <Route path="/mylogin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotF />}></Route>
        <Route path="/workout" element={<Workout />}></Route>
      </Routes>

    </div>
  );
}

export default Allroutes;
