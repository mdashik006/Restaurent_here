import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import Cart from './components/Cart';


function App() {
  const [cartarry, setcartarry] = useState([])
  return (
    <>
      <BrowserRouter>
      <Navbar cartarry={cartarry} />
        <div className="container-fluid main ">
          <Routes>
              <Route index path='/Restaurent_here' element={<Home/>} />
              <Route path='/Menu' element={<Menu cartarry={cartarry} setcartarry={setcartarry}/>}></Route>
              <Route path='/Cart' element={<Cart cartarry={cartarry} setcartarry={setcartarry}/>}></Route>
          </Routes>
        </div>
    </BrowserRouter>
    </>
  )
}

export default App
