import styles from './Header.module.css'
import { Rocket } from 'phosphor-react'

export function Header () {
  return(
    <div className={styles.header}>
      <Rocket size={25} color={'var(--blue)'} />
      <h1 className={styles.title}>todo</h1>
    </div>
  )
}