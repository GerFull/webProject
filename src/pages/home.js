import React from 'react'
import Bestseller from '../components/bestseller/bestseller'
import Gallery from '../components/gallery/gallery'
import Menu from '../components/menu/menu'

function Home() {
   return (
      <div>
         <Menu/>
         <Gallery/>
         <Bestseller/>
      </div>
   )
}

export default Home
