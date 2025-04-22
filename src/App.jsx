import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/about'




function App() {
  return (
    <div className="w-full text-white bg-zinc-900 min-h-screen">
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <About/>
    </div>
  )
}

export default App