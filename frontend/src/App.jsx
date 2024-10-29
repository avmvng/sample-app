import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About'
import Help from './Help'
import Nav from './Nav'
import Home from './Home'
import Submit from './Submit'

const App = () => {
  return (
    <div className="container">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
