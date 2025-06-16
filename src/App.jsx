import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logo from './pages/Logo.jsx';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Footer from './components/Footer.jsx';
import Projects from './pages/Projects.jsx';

function App() {
  

  return (
    <>
<BrowserRouter>
<Navbar/>
<Logo/>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/contact" element={<Contact />} />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
</Routes>
<Footer/>

</BrowserRouter>
    
    </>
  )
}

export default App
