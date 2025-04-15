import React from 'react'
import Navbar from './components/navbar'
import Landingpage from './components/landingpage'
import Marque from './components/Marque'
import Eyes from './components/Eyes'
import LocomotiveScroll from 'locomotive-scroll';
import Feature from './components/Feature'
import Space from './components/Space'

function App() {

const scroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <Landingpage/>
      <Marque/>
      <Feature/>
      <Eyes/>
      <Space/>
    </div>
  )
}

export default App
