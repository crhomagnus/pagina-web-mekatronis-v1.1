'use client';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Facebook, Youtube, Phone, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_URL, SOCIAL_LINKS } from '@/data/content';
import styles from './page.module.css';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function ContatoPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <h1>Contato</h1>
                    <p>Estamos prontos para atender você</p>
                </div>
            </section>

            <motion.section className={`section ${styles.contact}`}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
                <div className="container">
                    <div className={styles.grid}>
                        <motion.div className={styles.mainCard} variants={fadeUp}>
                            <div className={styles.wpIcon}><MessageCircle size={48} /></div>
                            <h2>Fale pelo WhatsApp</h2>
                            <p>O jeito mais rápido de falar com a gente. Tire dúvidas, solicite orçamentos ou agende uma visita técnica.</p>
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                                className="btn btn-whatsapp" style={{ fontSize: '1.1rem', padding: '20px 40px', width: '100%', justifyContent: 'center' }}>
                                <MessageCircle size={22} /> Iniciar Conversa
                            </a>
                        </motion.div>

                        <div className={styles.infoCol}>
                            <motion.div className={styles.infoCard} variants={fadeUp}>
                                <Phone size={24} className={styles.infoIcon} />
                                <div>
                                    <h4>Telefone</h4>
                                    <a href="tel:+5555997154983">(55) 99715-4983</a>
                                </div>
                            </motion.div>
                            <motion.div className={styles.infoCard} variants={fadeUp}>
                                <MapPin size={24} className={styles.infoIcon} />
                                <div>
                                    <h4>Localização</h4>
                                    <p>Av. Farrapos 07 - Centro<br />Alpestre, RS — CEP 98480-000<br />(fundos Vinícola Alpes)</p>
                                </div>
                            </motion.div>
                            <motion.div className={styles.infoCard} variants={fadeUp}>
                                <Clock size={24} className={styles.infoIcon} />
                                <div>
                                    <h4>Horário</h4>
                                    <p>Seg a Sex: 8h às 18h<br />Sáb: 8h às 12h</p>
                                </div>
                            </motion.div>
                            <motion.div className={styles.socialCard} variants={fadeUp}>
                                <h4>Redes Sociais</h4>
                                <div className={styles.socialLinks}>
                                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={24} /> Instagram</a>
                                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={24} /> Facebook</a>
                                    <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer"><Youtube size={24} /> YouTube</a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}
