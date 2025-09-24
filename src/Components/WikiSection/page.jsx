import styles from './wikiSection.module.css'
import '@/app/globals.css'

export default function WikiSection({ title, description, type, characters }) {
    return (
        <div className={styles.container}>
            <h2 className='subtitle'>{title}</h2>
            <p className='description'>{description}</p>
            <div className={styles.charactersGrid}>
                {characters?.map((character) => {
                    if (character.type === type) {
                        return (
                            <div key={character.id} className={styles.characterCard}>
                                <div className={styles.characterImageContainer}>
                                    <img src={character.image} alt={character.name} className={styles.characterImage} />
                                </div>
                                <p className={styles.characterName}>{character.name}</p>
                            </div>
                        )
                    }
                    return null
                })}
            </div>
        </div>
    )
}
