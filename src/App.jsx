import React from "react";
import Navbar from "./components/Navbar"; 

import "./i18n";
<<<<<<< HEAD
import Home from "./pages/Home"; 
import Page2 from "./pages/Page2";
import ContactPage from "./pages/ContactPage";
=======
import Home from "./pages/Home";
import Footer from "./components/Footer";
>>>>>>> b9c73e2fc2ac6f9bb0ec223cc59416f19ee4d037

const App = () => {
  return (
    <div className="font-[Poppins] relative overflow-hidden">
    
      <Navbar />
<<<<<<< HEAD
<Home/> 
<Page2/>
<ContactPage/>
     
=======
      <Home/>
      <Footer />
>>>>>>> b9c73e2fc2ac6f9bb0ec223cc59416f19ee4d037
      
    </div>
  );
};

export default App;
