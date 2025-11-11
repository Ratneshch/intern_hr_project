import React from "react";
import Navbar from "./components/Navbar"; 

import "./i18n";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="font-[Poppins] relative overflow-hidden">
    
      <Navbar />
<Home/>
     
      
    </div>
  );
};

export default App;
