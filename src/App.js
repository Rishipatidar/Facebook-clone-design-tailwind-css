import React from 'react';
// import { Route,Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from "./component/Log/Login"
// import Profile from './component/Prof/Profile';
import Watchmain from "./component/Watchmain/watchmain";
// import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Login/> */}
    <Watchmain/>
    {/* <Routes> */}
    {/* <Route exact path="/" element={<Login/>} /> */}
    {/* <Route exact path="/home" element={<Profile/>}/> */}
    {/* </Routes> */}
    </>
  );
}

export default App;
