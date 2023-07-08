import React from 'react'
import { commerce } from './lib/commerce'
import Products from './component/products/Products'
import Navbar from './component/Navbar/Navbar'
// import {Products,Navbar} from './component'

function App() {
  return (
    <div>
       <Navbar/>
      <Products/>
     
    </div>
    
  )
}

export default App
