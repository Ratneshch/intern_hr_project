import React from 'react'
import HeroPage from "../components/HeroPage"; 
import Services from '../components/Services';
import UseCases from '../components/Usecases';
import TrustedBrands from '../components/TrustedBrand';
import Reviews from '../components/Reviews';
import Page2 from '../pages/Page2';
import ContactPage from '../pages/ContactPage'
import Details from '../components/Details';
import UseCases from '../components/UseCases';
const Home = () => {
  return (
    <div>
      <HeroPage />
         <Page2 />
         <Details />
      <TrustedBrands />
      <Services />
      <UseCases />
      <Reviews/>
      <ContactPage/>
    </div>
  )
}

export default Home