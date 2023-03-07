import { useState } from 'react'

import { Header } from './components/Header'
import { ToDo } from './components/ToDo'

import './global.css'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper}>
      <Header/>
      <ToDo/>
    </div>
  )
}

export default App
