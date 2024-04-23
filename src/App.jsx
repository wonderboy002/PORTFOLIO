import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
    </>
  )
}

export default App
