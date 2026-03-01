'use client';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/data/content';
import styles from './WhatsAppFloat.module.css';

export default function WhatsAppFloat() {
    return (
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className={styles.float} aria-label="Fale conosco pelo WhatsApp">
            <MessageCircle size={28} strokeWidth={2.5} />
            <span className={styles.tooltip}>Fale Conosco</span>
        </a>
    );
}
