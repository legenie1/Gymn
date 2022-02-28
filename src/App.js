import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Feauture from './Components/Feauture';
import Header from './Components/Header';
import Navbar from './Components/Navbar'
import Offer from './Components/Offer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feauture />
      <Offer />
      <About />
      <Contact />
    </div>
  );
}

export default App;
