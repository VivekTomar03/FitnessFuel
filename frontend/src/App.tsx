import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";

// import React from 'react';
// import "./App.css";
import Allroutes from "./Components/Allroutes/Allroutes";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
