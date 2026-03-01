'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';
import styles from './page.module.css';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function ClientesPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <h1>Nossos Clientes</h1>
                    <p>Quem confia na Mekatronis transforma sua produção</p>
                </div>
            </section>
            <motion.section className={`section ${styles.depoimentos}`}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                <div className="container">
                    <div className={styles.grid}>
                        {TESTIMONIALS.map((t, i) => (
                            <motion.div key={i} className={styles.card} variants={fadeUp}>
                                <div className={styles.stars}>{[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="#FFC107" color="#FFC107" />)}</div>
                                <p className={styles.text}>"{t.text}"</p>
                                <div className={styles.author}>
                                    <div className={styles.avatar}>{t.name.charAt(0)}</div>
                                    <div><strong>{t.name}</strong><span>{t.city}</span></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </>
    );
}
