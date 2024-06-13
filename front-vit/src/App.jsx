import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Aboutme from "./Pages/Aboutme";
import Contactme from "./Pages/Contactme";
import Register from "./Pages/Registation"
import EmployeeComtroller from "./Pages/EmployeeComtroller";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Aboutme" element={<Aboutme/>}/>
        <Route path="/Contactme" element={<Contactme/>}/>
        <Route path ="/Register" element={<Register/>}/>
        <Route path ="/EmployeeComtroller" element={<EmployeeComtroller/>}/>
      </Routes>
    </div>
  )
}


