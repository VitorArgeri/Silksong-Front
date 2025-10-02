import React from 'react'
import '../globals.css'
import styles from './sobre.module.css'
import Header from '@/Components/Header/page'
import Footer from '@/Components/Footer/page'

export default function Sobre() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainContent}>
                <section className={styles.section}>
                    <h1 className='title'>Sobre o Projeto</h1>
                    <p className='description'>O SilksongProject tem como objetivo principal o compartilhamento da experiência que eu, Vitor Argeri, tive ao longo do tempo com o jogo Hollow knight: Silksong, um jogo que esperei lançar por mais de 6 anos e que finalmente está entre nós.</p>
                </section>
                <section className={styles.section}>
                    <h2 className='subtitle'>Minha história com a Team Cherry</h2>
                    <p className='description'>Em meados de 2019, quando eu tinha apenas 11 anos, eu conheci Hollow Knight, um jogo indie que mudaria minha vida pra sempre. O jogo era incrível, ele te jogava num mundo vasto cheio de lugares para explorar, bosses a serem enfrentados, desafios a serem superados, e aquilo marcou e muito minha pré-adolescência.</p>
                    <p className='description'>Fiquei tão viciado na época que cheguei a fazer 112% do jogo, completando o Path of Pain, o Panteão de Hollownest, o reino que se passa o jogo, o Coliseu dos Tolos e até mesmo a quest da flor delicada. Não é atoa que fiquei tão ansioso para o lançamento de Silksong.</p>
                </section>
                <section className={styles.section}>
                    <h2 className='subtitle'>Silksong</h2>
                    <p className='description'>Finalmente Hollow Knight: Silksong com a Hornet, uma personagem incrível do primeiro jogo que agora é a protagonista, foi lançado. Espero poder fazer o melhor para demonstrar a você que está lendo essa mensagem e a todos que entraram nesse site minha primeira experiência com esta obra prima.</p>
                    <p className='description'>Posso falar com toda tranquilidade que me sinto igual o eu de 11 anos com este jogo, o que é realmente impressionante visto que agora possuo 18. Enfim, aproveitem.</p>
                </section>
            </main>
            <Footer />
        </div>
    )
}
