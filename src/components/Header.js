import React from 'react'
import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>The Weather.</h1>
        <p className={styles.description}>Use the query board below and search to find the current weather, along with other atmospheric conditions, currently in cities around the world.</p>
      </header>
  )
}

export default Header;