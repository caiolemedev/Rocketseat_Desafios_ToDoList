import styles from './Header.module.css'
import { Rocket } from 'phosphor-react'

export function Header () {
  return(
    <div>
      <Rocket size={25} />
      <h1>ToDo</h1>
    </div>
  )
}