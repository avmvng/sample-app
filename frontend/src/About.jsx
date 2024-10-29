import React from 'react'
import './App.css'
import { Button } from './Button'
import "./Button.css"
import { useState, useEffect } from 'react'

const About = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="about-container">
    <h1>
      do i need an about page?
    </h1>
    <Button variant="default" size="lg" onClick={() => setCount(count + 1)}>
      sample button
    </Button>
    <p id="counter">
      you clicked {count} times
    </p>
    </div>
  )
}

export default About
