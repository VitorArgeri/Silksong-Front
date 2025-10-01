"use client"
import styles from './wikiSection.module.css'
import '@/app/globals.css'
import Link from 'next/link'

export default function WikiSection({ title, description, type, characters }) {
    const charactersArray = Array.isArray(characters) ? characters : [];

    const charactersFilter = charactersArray.filter(character => {
        return character?.type === type;
    });

    return (
        <div className={styles.container}>
            <h2 className='subtitle'>{title}</h2>
            <p className='description'>{description}</p>
            <div className={styles.charactersGrid}>
                {charactersFilter.length > 0 ? (
                    charactersFilter.map((character) => (
                        <Link key={character.id} href={`/${character.id}`} className={styles.characterCard} style={{
                                backgroundImage: `url(${character.imgUrl})`
                            }}
                        >
                            <p className={styles.characterName}>{character.name}</p>
                        </Link>
                    ))
                ) : (
                    <p className={styles.noResults}>
                        {charactersArray.length === 0
                            ? "Clique no botão 'Buscar Personagens' para carregar os dados!"
                            : `Nenhum character encontrado para o tipo: ${type}`
                        }
                    </p>
                )}
            </div>
        </div>
    )
}
