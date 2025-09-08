import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MyServices from './components/MyServices'
import MyLatestWork from './components/MyLatestWork'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-[#161513] text-white'>
      <Navbar />
      <Hero />
      <About />
      <MyServices />
      <MyLatestWork />
      <GetInTouch />
      <Footer/>
    </div>
  )
}

export default App