import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Course from './components/Course/Course'
import Title from './components/Title/Title'
import About from './components/about/About'
import Camps from './components/Camps/Camps'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
  <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our program' title='What we Choose'/>
        <Course/>

        <About/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Camps/>
        <Title subtitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>

      </div>
  </div>
  )
}

export default App