import React from "react";
import Navbar from "./components/Navbar"; 

import "./i18n";
import Home from "./pages/Home"; 
import Page2 from "./pages/Page2";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <div className="font-[Poppins] relative overflow-hidden">
    
      <Navbar />
<Home/> 
<Page2/>
<ContactPage/>
     
      
    </div>
  );
};

export default App;
