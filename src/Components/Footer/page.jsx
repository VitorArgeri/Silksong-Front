import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <p className={styles.text}>© 2025 Silksong Project. Todos os direitos reservados.</p>
            <p className={styles.text}>Desenvolvido por <a href="https://github.com/VitorArgeri" target="_blank" rel="noopener noreferrer" className={styles.name}>Vitor Argeri</a></p>
        </div>
    )
}
