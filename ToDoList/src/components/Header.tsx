import styles from './Header.module.css'
import { Rocket } from 'phosphor-react'

export function Header () {
  return(
    <div className={styles.header}>
      <Rocket size={25} />
      <h1 className={styles.title}>ToDo</h1>
    </div>
  )
}