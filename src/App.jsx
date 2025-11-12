import React from "react";
import Navbar from "./components/Navbar"; 

import "./i18n";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-[Poppins] relative overflow-hidden">
    
      <Navbar />
      <Home/>
      <Footer />
      
    </div>
  );
};

export default App;
