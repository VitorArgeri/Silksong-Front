import React from 'react'
import styles from './page.module.css'
import Header from '../Components/Header/page'

export default function page() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.heroSection}>
                <div className={styles.heroImageDiv}>
                    <img src="/Img/Background-Hero.png" className={styles.backgroundHeroImage} />
                    <img src="/Img/Silksong-Logo.png" className={styles.heroImage} />
                </div>
            </div>
        </div>
    )
}
