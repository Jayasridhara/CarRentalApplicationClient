import React from 'react'
import Hero from '../component/Hero'
import FeaturedSection from '../component/FeaturedSection'
import Banner from '../component/Banner'
import Testimonial from '../component/Testimonial'
import NewsLetter from '../component/NewsLetter'
import Footer from '../component/Footer'

function Home() {
  return (
    <>
       <Hero/> 
       <FeaturedSection/>
       <Banner/>
       <Testimonial/>
       <NewsLetter/>
       
    </>
  )
}

export default Home