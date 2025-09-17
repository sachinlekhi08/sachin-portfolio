import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sachin from './Components/Sachin/Sachin'
import About from './Components/About/About'
import Service from './Components/service/Service'
import Mywork from './Components/Mywork/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Sachin />
      <About />
      <Service />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
