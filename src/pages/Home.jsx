import React from 'react'
import HeroPage from "../components/HeroPage"; 
import Services from '../components/Services';
import UseCases from '../components/Usecases';
import TrustedBrands from '../components/TrustedBrand';
const Home = () => {
  return (
    <div>
      <HeroPage />
         <Page2 />
      <TrustedBrands />
    
      
      <Services />
      <UseCases />
    </div>
  )
}

export default Home