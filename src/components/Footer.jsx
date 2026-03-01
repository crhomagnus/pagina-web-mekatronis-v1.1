import Link from 'next/link';
import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS, WHATSAPP_URL } from '@/data/content';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <div>
                            <strong className={styles.logoName}>MEKATRONIS</strong>
                            <span className={styles.logoSub}>Router CNC</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Há mais de 17 anos fabricando routers CNC industriais com tecnologia, robustez e precisão. 100% brasileiro.
                    </p>
                </div>

                <div className={styles.links}>
                    <h4 className={styles.colTitle}>Navegação</h4>
                    {NAV_LINKS.slice(0, 6).map((link) => (
                        <Link key={link.href} href={link.href} className={styles.link}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className={styles.contact}>
                    <h4 className={styles.colTitle}>Contato</h4>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                        <MessageCircle size={18} /> WhatsApp
                    </a>
                    <a href="tel:+5555997154983" className={styles.contactItem}>
                        <Phone size={18} /> (55) 99715-4983
                    </a>
                    <div className={styles.contactItem}>
                        <MapPin size={18} /> Alpestre, RS — Brasil
                    </div>
                </div>

                <div className={styles.social}>
                    <h4 className={styles.colTitle}>Redes Sociais</h4>
                    <div className={styles.socialIcons}>
                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={24} /></a>
                        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={24} /></a>
                        <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={24} /></a>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <p>© {new Date().getFullYear()} Mekatronis Router CNC. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
