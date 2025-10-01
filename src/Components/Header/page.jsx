import React from 'react'
import styles from './header.module.css'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>SilksongProject</h1>
                <nav className={styles.nav}>
                    <a href="/" className={styles.navItem}>Home</a>
                    <a href="/Wiki" className={styles.navItem}>Wiki</a>
                    <a href="/Sobre" className={styles.navItem}>Sobre</a>
                    <a href="/Contato" className={styles.navItem}>Contato</a>
                </nav>
            </div>
            <div className={styles.line}></div>
        </div>
    )
}