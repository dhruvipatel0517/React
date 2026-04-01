import React from 'react'
import Home from './Pages/Home'
import { Routes , Route} from 'react-router-dom'
import Product from './Pages/Product'
import NavBar from './Layout/NavBar';
import Collection  from './Pages/Collection';
import Shop from './Pages/Shop';
import Footer from './Layout/Footer';
import Contact from './Pages/ContactUs';
import About from './Pages/AboutUs';


const App = () => {
  return (
    <>
    <NavBar />
     <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/collection' element={<Collection />} />
      <Route path='/shop' element={<Shop /> } />
      <Route path='/shop/:collection' element={<Shop />} />
      <Route path='/product/:id' element = {<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact /> } />
     </Routes>
     <Footer />
  
    </>
  )
};

export default App