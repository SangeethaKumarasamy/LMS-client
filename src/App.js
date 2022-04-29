import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from "react-router-dom";

import Home from "./Components/Home";
import ManagerLogin from "./Components/ManagerLogin";
import EmployeeLogin from "./Components/EmployeeLogin";
import HRLogin from "./Components/HrLogin";
import AdminLogin from "./Components/AdminLogin";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import EmployeeDashboard from "./Components/Employee/EmployeeDashboard";
import HRDashboard from "./Components/HR/HrDashboard";
import ManagerDashboard from "./Components/Manager/ManagerDashboard";

function App({ history }) {
  return (
    <div>
      <Router>
        <Routes history={history}>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/managerlogin" element={<ManagerLogin/>} />
          <Route exact path="/emplogin" element={<EmployeeLogin/>} />
          <Route exact path="/hrlogin" element={<HRLogin/>} />
          <Route exact path="/adminlogin" element={<AdminLogin/>} />
          <Route path="/admindashboard" element={<AdminDashboard/>} />
          <Route path="/empdashboard" element={<EmployeeDashboard/>} />
          <Route path="/hrdashboard" element={<HRDashboard/>} />
          <Route path="/managerdashboard" element={<ManagerDashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

