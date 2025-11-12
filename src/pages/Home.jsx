import React from 'react'
import HeroPage from "../components/HeroPage"; 
import Services from '../components/Services';
import UseCases from '../components/Usecases';
import TrustedBrands from '../components/TrustedBrand';
import Reviews from '../components/Reviews';
const Home = () => {
  return (
    <div>
      <HeroPage />
      <TrustedBrands />
      <Services />
      <UseCases />
      <Reviews/>
    </div>
  )
}

export default Home