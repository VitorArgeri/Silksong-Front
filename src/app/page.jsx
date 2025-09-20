import React from 'react'
import Link from 'next/link'
import './globals.css'
import styles from './page.module.css'
import Header from '../Components/Header/page'
import Footer from '../Components/Footer/page'
import Block from '@/Components/Block/page'

export default function page() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.heroSection}>
                <section className={styles.greetings}>
                    {/* <img src="" alt="" /> */}
                    <h1 className="title">Bem vindo ao Silksong Project!</h1>
                    <p className="subtitle">Saiba mais sobre minha experiência com esta obra-prima</p>
                    <Link href="/Wiki" className={styles.wikiButton}>
                        Explorar Wiki
                    </Link>
                </section>

                <section className={styles.mainContent}>
                    <h2 className="title">Conteúdo Principal</h2>
        
                    <section className={styles.blockSection}>
                        <Block title="Objetivo do Projeto" description="O objetivo com este projeto é documentar minha jornada e experiências quanto ao jogo Hollow Knight: Silksong tendo em mente os personagens e inimigos do jogo." />
                        <Block title="Metodologia" description="Para a documentação, irei utilizar do bestiário do próprio jogo como referência, além de claro, uma seção com minha própria opinião quanto aos personagens e inimigos." />
                    </section>
                </section>
            </div>
            <Footer />
        </div>
    )
}
