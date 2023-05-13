
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login";
import Signup from "../../Pages/Signup";
import Homeui from "../../Pages/Middle/Homeui";
import PageNotF from "../../Pages/PageNotF";
import Workout from "../../Pages/Workout";
import DashBoard from "../../Pages/Dashboard";
import DietPlan from "../../Pages/DietPlan";
import ExeUser from "../../Pages/ExeUser";

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homeui />} />
        <Route path="/mylogin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotF />}></Route>
        <Route path="/workout" element={<Workout />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/dietplan" element={<DietPlan />}></Route>
        <Route path="/exeplan" element={<ExeUser />}></Route>

      </Routes>

    </div>
  );
}

export default Allroutes;
