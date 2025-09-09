import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <p className={styles.text}>© 2024 Silksong Project. Todos os direitos reservados.</p>
            <p className={styles.text}>Desenvolvido por <strong className={styles.name}>Vitor Argeri</strong></p>
        </div>
    )
}
