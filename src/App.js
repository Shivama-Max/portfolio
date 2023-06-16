import {React, useEffect} from "react";
import Aos from 'aos';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css'
import Hero from "./components/UI/Hero";
import Skills from "./components/UI/Skills";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
import Darkmode from 'darkmode-js';


const options = {
  bottom: '64px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '', // default: ''
  autoMatchOsTheme: false // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();


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
