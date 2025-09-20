import React from 'react'
import '../../app/globals.css'
import styles from './block.module.css'

export default function Block({title, description}) {
    return (
        <div className={styles.block}>
            <h2 className="subtitle">{title}</h2>
            <p className="description">{description}</p>
        </div>
    )
}
