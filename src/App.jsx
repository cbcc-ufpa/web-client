import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//Components
import Home from './pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home></Home>
    </div>
  )
}

export default App
