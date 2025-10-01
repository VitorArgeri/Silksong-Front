"use client"
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import styles from './id.module.css'
import Header from '@/Components/Header/page';
import Footer from '@/Components/Footer/page';

export default function Character() {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const characterId = params.id;

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get(`http://localhost:4001/characters/${characterId}`);
                setCharacter(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar personagem:', error);
                setLoading(false);
            }
        };

        if (characterId) {
            fetchCharacter();
        }
    }, [characterId]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!character) {
        return <div>Personagem não encontrado</div>;
    }

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainContent} style={{
                backgroundImage: "url('/Img/Wallpaper-Boss.jpg')"
            }}>
                <div className={styles.highlight}>{character.name}</div>
                <section className={styles.characterSection}>
                    <div className={styles.imageContainer}>
                        <img src={character.imgUrl} alt={character.name} className={styles.characterImage} />
                    </div>
                    <div className={styles.division}></div>
                    <div className={styles.textContainer}>
                        <div className={styles.characterBlock}>
                            <p className={styles.characterTopic}>Dificuldade</p>
                            <p className={styles.characterItem}>{character.difficulty}</p>
                        </div>
                        <div className={styles.characterBlock}>
                            <p className={styles.characterTopic}>Papel no Jogo</p>
                            <p className={styles.characterItem}>{character.type}</p>
                        </div>
                        <div className={styles.characterBlock}>
                            <p className={styles.characterTopic}>Localização</p>
                            <p className={styles.characterItem}>{character.location}</p>
                        </div>
                        <div className={styles.characterBlock}>
                            <p className={styles.characterTopic}>Descrição</p>
                            <p className={styles.characterItem}>{character.description}</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}