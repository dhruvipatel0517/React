import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from "./Layout/Navbar"
import Product from "./Pages/Product"
import Home from './Pages/Home'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Routes>
    </>
  )
}

export default App