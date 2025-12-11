import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is Counting the Number</h1>
      <h1>using the vite + React</h1>
      <Greeting />
    </>
  )
}

export default App
