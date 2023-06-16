import {React, useEffect} from "react";
import Aos from 'aos';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css'
import Hero from "./components/UI/Hero";
import Skills from "./components/UI/Skills";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";


function App() {

  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Skills/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
    </>
    
  );
}

export default App;
