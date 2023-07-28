import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css"
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='text-yellow'>hello</h2>
    
        <Home/>
    </>
  )
}

export default App
