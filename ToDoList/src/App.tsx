import { useState } from 'react'

import { Header } from './components/Header'
import { ToDo } from './components/ToDo'

import './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>

      <ToDo/>
    </div>
  )
}

export default App
