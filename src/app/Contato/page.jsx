"use client"
import { useState } from 'react';
import React from 'react'
import '../globals.css'
import styles from './contato.module.css'
import Header from '@/Components/Header/page'
import Footer from '@/Components/Footer/page'

export default function Contato() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className={styles.container}>
            <Header />
                <main className={styles.mainContent}>
                    <section className={styles.contactInfo}>
                        <h1 className="title">Contato</h1>
                        <p className="description">Se você tiver alguma dúvida, sugestão ou quiser entrar em contato comigo, sinta-se à vontade para enviar um e-mail para: <span className={styles.email}>vitor.argeri@gmail.com</span></p>
                    </section>
                    <section className={styles.contactForm}>
                        <h2 className={styles.formTitle}>Formulário de Contato</h2>
                        <form className={styles.form} action="https://formsubmit.co/vitor.argeri@gmail.com" method="POST">
                            <div className={styles.inputGroup}>
                                <label htmlFor="name" className={styles.label}>Nome:</label>
                                <input type="text" id="name" name="name" className={styles.input} maxLength="50" placeholder="Digite seu nome completo" required value={name} onChange={(e)=>setName(e.target.value)} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email" className={styles.label}>E-mail:</label>
                                <input type="email" id="email" name="email" className={styles.input} maxLength="100" placeholder="exemplo@email.com" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="message" className={styles.label}>Mensagem:</label>
                                <textarea id="message" name="message" rows="4" className={styles.textarea} maxLength="500" placeholder="Escreva sua mensagem sobre o SilksongProject, dúvidas ou sugestões..." required value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                            </div>
                            <div className={styles.submitButtonContainer}>
                                <button type="submit" className={styles.submitButton}>Enviar</button>
                            </div>
                        </form>
                    </section>
                </main>
            <Footer />
        </div>
    )
}
