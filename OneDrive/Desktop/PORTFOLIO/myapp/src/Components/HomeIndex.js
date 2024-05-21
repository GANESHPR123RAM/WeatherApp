import React from 'react'
import Homepage from './Homepage'
import Projact from './Projact'
import Carousel from './Carousel'
import Experience from './Experience'
import Thought from './Thought'
import Contact from '../Components/Contactus'


function HomeIndex() {
  return (
    <>
    <div className=" overflow-x-hidden">
    <Homepage/>
    <Carousel/>
    <Projact/>
    <Experience/>
    <Thought/>
    <Contact/>
    </div>
    </>
  )
}

export default HomeIndex
