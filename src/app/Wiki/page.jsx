"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Header from '../../Components/Header/page'
import Footer from '../../Components/Footer/page'
import WikiSection from '../../Components/WikiSection/page'
import styles from './wiki.module.css'
import '../globals.css'

export default function Wiki() {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)

    const searchForCharacters = async () => {
        setLoading(true)
        try {
            const response = await axios.get('http://localhost:4001/characters')
            const data = response.data;
            console.log('Dados recebidos:', data)
            console.log('Primeiro character:', data[0])
            setCharacters(data)
        } catch (error) {
            console.error('Erro ao buscar personagens:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.introduction}>
                <h1 className="title">Wiki Silksong</h1>
                <p className="description">Nesta página você encontrará informações sobre os mais derivados inimigos e NPCS de Hollow Knight: Silksong</p>

                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={searchForCharacters} disabled={loading}>
                        {loading ? "Carregando..." : "Buscar Personagens"}
                    </button>
                </div>
            </div>

            <div className={styles.heroSection}>
                <WikiSection title={"Non-Playable-Characters (NPCs)"} description={"Informações sobre NPCs em Hollow Knight: Silksong"} type={"NPC"} characters={characters} />
                <WikiSection title={"Inimigos Comuns"} description={"Informações sobre inimigos comuns em Hollow Knight: Silksong"} type={"Enemy"} characters={characters} />
                <WikiSection title={"Chefes (Bosses)"} description={"Informações sobre chefes em Hollow Knight: Silksong"} type={"Boss"} characters={characters} />
            </div>
            <Footer />
        </div>
    )
}
