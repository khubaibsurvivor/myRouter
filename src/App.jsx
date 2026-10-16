import { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import heroImg from './assets/hero.png'
import {link} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Auther from './Pages/Auther.jsx'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },{
      path : "/about",
      element: <About/>
    }
  ])

function App() {
  const [count, setCount] = useState(0)

  return (<>
  
  
  
  <Home />

  
  
  </>
  )
}

export default App
