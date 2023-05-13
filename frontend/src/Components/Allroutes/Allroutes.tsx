
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
import PrivateRoute from "./PrivateRoute";

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homeui />} />
        <Route path="/mylogin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotF />}></Route>
        <Route path="/workout" element={<Workout />}></Route>
        <Route path="/dashboard" element={<PrivateRoute><DashBoard /></PrivateRoute>}></Route>
        <Route path="/dietplan" element={<PrivateRoute><DietPlan /></PrivateRoute>}></Route>
        <Route path="/exeplan" element={<PrivateRoute><ExeUser /></PrivateRoute>}></Route>

      </Routes>

    </div>
  );
}

export default Allroutes;
