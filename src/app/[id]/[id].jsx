"use client"
import { useState, useEffect, use } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import styles from './id.module.css'

export default function Character() {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const characterId = params.id;

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get(`/api/characters/${characterId}`);
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

    if (!character) {
        return <div>Personagem não encontrado</div>;
    }

    return (
        <div>

        </div>
    )
}
