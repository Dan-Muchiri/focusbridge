import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero/Hero'
import Clients from './sections/Clients/Clients'
import Services from './sections/Services/Services'
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Testimonials from './sections/Testimonials/Testimonials';

function App() {
  return (
    <>
    <Router>
      <Hero/>
      <Clients/>
      <Services/>
      <Contact/>
      <Testimonials/>
      <Footer/>
    </Router>
      
    </>
  )
}

export default App
