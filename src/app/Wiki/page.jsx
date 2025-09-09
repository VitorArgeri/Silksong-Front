import React from 'react'
import Header from '../../Components/Header/page'
import styles from './wiki.module.css'

export default function Wiki() {
    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.title}>Wiki Silksong</h1>
            <p className={styles.description}>Nesta página você encontrará informações sobre os mais derivados inimigos e NPCS de Hollow Knight: Silksong</p>
            <div className={styles.heroSection}>
            </div>
        </div>
    )
}
