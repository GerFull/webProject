import React from 'react'
import About from '../components/about/about'
import BestSellers from '../components/Best-sellers/Best-sellers'
import Footer from '../components/footer/footer'
import Gallery from '../components/gallery/gallery'
import Menu from '../components/menu/menu'

function Home() {
   
   return (
      <div>
         <Menu/>
         <Gallery/>
         <BestSellers/>
         <About/>
         <Footer/>
      </div>
   )
}

export default Home
