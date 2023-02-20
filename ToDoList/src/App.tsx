import { useState } from 'react'

import { Header } from './components/Header'

import './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>


    </div>
  )
}

export default App
