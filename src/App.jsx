import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/programs'
import Title from './components/Title/Title'
import About from './components/about/About'
import Campus from './components/campus/campus'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
  <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our program' title='What we Choose'/>
        <Programs/>

        <About/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>

      </div>
  </div>
  )
}

export default App