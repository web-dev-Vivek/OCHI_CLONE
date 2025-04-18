import React from 'react'
import Navbar from './components/Navbar.jsx'
import Landingpage from './components/Landingpage.jsx'
import Marquee from './components/Marquee.jsx'


function App() {
  return (
    <div class="w-full h-screen text-white">
      <Navbar/>
      <Landingpage/>
      <Marquee/>
    </div>
  )
}

export default App