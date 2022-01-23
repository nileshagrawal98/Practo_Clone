// import logo from './logo.svg';
// import logo from './logo.svg';
import './App.css';
import React from "react";
import Homepage from "./componentsCH/homepage/homepage";
import Login from "./componentsCH/login/login";
import Register from "./componentsCH/register/register";
import OTP from './componentsCH/OTP/otp';
import Auth from './componentsCH/Auth/Auth';
import {useState} from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Medicines } from './components/Medicines';
import { Acne } from './components/Acne';
import { Body } from './components/Body';

import { ProductsDetails } from "./components/ProductsDetails"
import { Cart } from './components/Cart';






function App() {

  const  [user, setLoginUser] = useState({});

  return (
    <div className="App">

    <Router>

      <Routes>

        <Route path="/" element={<Medicines />}></Route>

        <Route path="/acne" element={<Acne />}></Route>

        <Route path="/body" element={<Body />}></Route>

        <Route path="/:type/:userid" element={<ProductsDetails />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        <Route exact path="/" 
            element={
              user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Register  setLoginUser={setLoginUser}/>
            } 
          />
          <Route exact path="/login" 
            element={
              <Login setLoginUser={setLoginUser}/>
              } 
          />          
          <Route exact path="/register" element={<Register />} /> 

          <Route exact path="/Auth" element={<Auth /> } />

          <Route exact path="/OTP" element={<OTP />} />

          <Route path="*" element={<div>404 page not found</div>}></Route>

      </Routes>

    </Router>


    </div>
  );
}

export default App;

