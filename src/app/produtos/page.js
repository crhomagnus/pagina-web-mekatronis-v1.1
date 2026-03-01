'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Check } from 'lucide-react';
import { PRODUCTS, WHATSAPP_URL } from '@/data/content';
import styles from './page.module.css';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function ProdutosPage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <h1>Nossos Produtos</h1>
                    <p>Routers CNC para todas as necessidades — do hobby à indústria pesada</p>
                </div>
            </section>

            {/* Product Grid */}
            <motion.section className={`section ${styles.listing}`}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <div className="container">
                    <div className={styles.grid}>
                        {PRODUCTS.map((p) => (
                            <motion.div key={p.slug} className={`card ${styles.card}`} variants={fadeUp}>
                                <div className={styles.imgWrap}>
                                    <Image src={p.image} alt={p.name} width={600} height={450} className={styles.img} quality={85} />
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.tag}>{p.tagline}</div>
                                    <h2 className={styles.name}>{p.name}</h2>
                                    <p className={styles.area}>Área útil: {p.area}</p>
                                    <p className={styles.desc}>{p.shortDesc}</p>
                                    <ul className={styles.features}>
                                        {p.features.map((f, j) => <li key={j}><Check size={16} /> {f}</li>)}
                                    </ul>
                                    <div className={styles.actions}>
                                        <Link href={`/produtos/${p.slug}`} className="btn btn-primary">
                                            Ver Detalhes <ArrowRight size={16} />
                                        </Link>
                                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ fontSize: '0.85rem', padding: '12px 20px' }}>
                                            <MessageCircle size={16} /> Orçamento
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Comparison Table */}
                    <motion.div className={styles.comparison} initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="section-title" style={{ marginBottom: 'var(--space-6)' }}>Comparativo de Modelos</h2>
                        <div className={styles.tableWrap}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Especificação</th>
                                        {PRODUCTS.map(p => <th key={p.slug}>{p.name}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(PRODUCTS[0].specs).map(key => (
                                        <tr key={key}>
                                            <td><strong>{key}</strong></td>
                                            {PRODUCTS.map(p => <td key={p.slug}>{p.specs[key]}</td>)}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
}
