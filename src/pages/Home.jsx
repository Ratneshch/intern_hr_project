import React from 'react'
import HeroPage from "../components/HeroPage"; 
import Services from '../components/Services';
import TrustedBrands from '../components/TrustedBrand';
import Reviews from '../components/Reviews';
import Page2 from '../pages/Page2';
import ContactPage from '../pages/ContactPage'
import Details from '../components/Details';
import UseCases from '../components/UseCases';
import Pricing from '../components/Pricing';
const Home = () => {
  return (
    <div>
      <HeroPage />
         <Page2 />
         <Details />
      <TrustedBrands />
      <Services />
      <UseCases />
      <section id='pricing'>
      <Pricing />
      </section>
      <ContactPage/>
      <Reviews/>
    </div>
  )
}

export default Home