import React from 'react'
import Home from "../sections/Home.jsx"
import AboutUs from '../sections/AboutUs.jsx'
import Contact from '../sections/Contact.jsx'
import Services from '../sections/Services.jsx'
import Footer from '../sections/Footer.jsx'


const Main = () => {
  return (
    <div>
       <Home/>   
       <AboutUs/>
       <Contact/>
       <Services/>
       <Footer/>
    </div>
  )
}

export default Main
