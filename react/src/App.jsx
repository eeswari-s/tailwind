import { useState } from 'react'
import './App.css'
import Nav from './Components/nav'
import Header from './Components/Header'
import Features from './Components/Features'
import Body from './Components/Body'
import Hero from './Components/Hero'
import Testimonial from './Components/Testimonial'
import Pricing from './Components/Pricing'
import Block from './Components/Block'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
  <Nav/>
  <Header/>
  <Features/>
  <Body/>
  <Hero/> 
 <Testimonial/>
 <Pricing/>
 <Block/>
 <Footer/>

      </div>
    </>
  )
}

export default App
