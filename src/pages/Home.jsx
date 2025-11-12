import React from 'react'
import HeroPage from "../components/HeroPage"; 
import Services from '../components/Services';
import UseCases from '../components/Usecases';
import TrustedBrands from '../components/TrustedBrand';
import Page2 from "../pages/Page2";
import ContactPage from "../pages/ContactPage";
const Home = () => {
  return (
    <div>
      <HeroPage />
         <Page2 />
      <TrustedBrands />
    
      
      <Services />
      <UseCases />
      <ContactPage />
    </div>
  )
}

export default Home