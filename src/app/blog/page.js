'use client';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ARTICLES = [
    { title: 'Como escolher o Router CNC ideal para sua marcenaria', date: '15 Fev 2026', category: 'Dicas CNC', excerpt: 'Guia completo para ajudar você a escolher a máquina CNC perfeita para o seu tipo de produção.' },
    { title: '5 trabalhos lucrativos que você pode fazer com uma CNC', date: '10 Fev 2026', category: 'Novidades', excerpt: 'Descubra oportunidades de negócio que podem transformar seu investimento em lucro rápido.' },
    { title: 'Manutenção preventiva: como cuidar do seu Router CNC', date: '05 Fev 2026', category: 'Dicas CNC', excerpt: 'Dicas essenciais para manter sua máquina operando com máxima performance por muitos anos.' },
];

export default function BlogPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <h1>Blog</h1>
                    <p>Dicas, novidades e conteúdo sobre CNC e marcenaria</p>
                </div>
            </section>

            <motion.section className={`section ${styles.blog}`}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                <div className="container">
                    <div className={styles.grid}>
                        {ARTICLES.map((a, i) => (
                            <motion.article key={i} className={styles.card} variants={fadeUp}>
                                <div className={styles.cardImg}>
                                    <div className={styles.placeholder}><Clock size={32} /></div>
                                    <span className={styles.badge}>{a.category}</span>
                                </div>
                                <div className={styles.cardInfo}>
                                    <span className={styles.date}>{a.date}</span>
                                    <h3>{a.title}</h3>
                                    <p>{a.excerpt}</p>
                                    <span className={styles.readMore}>Ler mais <ArrowRight size={14} /></span>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                    <div className={styles.comingSoon}>
                        <p>🚧 Mais artigos em breve! Acompanhe nosso Instagram para conteúdo atualizado.</p>
                    </div>
                </div>
            </motion.section>
        </>
    );
}
