"use client"
import React from 'react'
import styles from './header.module.css'
import { useState } from 'react';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>SilksongProject</h1>
                <nav className={styles.nav}>
                    <a href="/" className={styles.navItem}>Home</a>
                    <a href="/Wiki" className={styles.navItem}>Wiki</a>
                    <a href="/Sobre" className={styles.navItem}>Sobre</a>
                    <a href="/Contato" className={styles.navItem}>Contato</a>
                </nav>
            </div>
            <div className={styles.line}></div>
        </div>
    )
}