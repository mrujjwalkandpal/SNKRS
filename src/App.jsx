import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Navbar from './components/Navbar/Navbar'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
  <>
  <Router>
  <Navbar/>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>

  </Router>
  </>
  )
}

export default App