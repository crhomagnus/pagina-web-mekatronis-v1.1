'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_URL } from '@/data/content';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
                    <div>
                        <strong className={styles.logoName}>MEKATRONIS</strong>
                        <span className={styles.logoSub}>Router CNC</span>
                    </div>
                </Link>

                <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                    {NAV_LINKS.map((link) => (
                        <Link key={link.href} href={link.href} className={styles.navLink}
                            onClick={() => setMenuOpen(false)}>
                            {link.label}
                        </Link>
                    ))}
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                        className={`${styles.navCta} btn btn-whatsapp`}>
                        <MessageCircle size={18} /> WhatsApp
                    </a>
                </nav>

                <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </header>
    );
}
