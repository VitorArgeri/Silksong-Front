import React from 'react'
import Header from '../../Components/Header/page'
import Footer from '../../Components/Footer/page'
import WikiSection from '../../Components/WikiSection/page'
import styles from './wiki.module.css'
import '../globals.css'

export default function Wiki() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.introduction}>
                <h1 className='title'>Wiki Silksong</h1>
                <p className='description'>Nesta página você encontrará informações sobre os mais derivados inimigos e NPCS de Hollow Knight: Silksong</p>
            </div>
            <div className={styles.heroSection}>
                <WikiSection title={"Non-Playable-Characters (NPCs)"} description={"Informações sobre NPCs em Hollow Knight: Silksong"} type={"NPC"}     characters={charactersData}/>
                <WikiSection title={"Inimigos Comuns"} description={"Informações sobre inimigos comuns em Hollow Knight: Silksong"} type={"enemy"} characters={charactersData}/>
                <WikiSection title={"Chefes (Bosses)"} description={"Informações sobre chefes em Hollow Knight: Silksong"} type={"boss"} characters={charactersData}/>
            </div>
            <Footer />
        </div>
    )
}
