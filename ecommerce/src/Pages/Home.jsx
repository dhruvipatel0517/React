import React from 'react'
import ProductBar from '../Components/ProductBar'
import NavBar from '../Layout/NavBar'
import Hero from '../Components/Home/Hero'
import DeatilsBar from '../Components/Home/Detailsbar'
import CategoryBar from '../Components/Home/CatogoryBar'
import Offer from '../Components/Home/Offer'
import DealCard from '../ui/DealCard'
import DiscontBar from '../Components/Home/DiscountBar'
import Newsletter from '../Components/Home/NewsLetter'
import DealBar from '../Components/Home/DealBar'

const Home = () => {
  return (
    <>
      <Hero />
      <DeatilsBar />
      <CategoryBar />
      <ProductBar /> 
      {/* <NavBar /> */}
      <Offer />
      <DealBar />
      <DiscontBar />
      <Newsletter />
    </>
  )
}

export default Home