import React from 'react'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'

import Footer from './Components/Footer/Footer'
import Work from './Components/Work/Work'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Footer />
    </div>
  )
}

export default App