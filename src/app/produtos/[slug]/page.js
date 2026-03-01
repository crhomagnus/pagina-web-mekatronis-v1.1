'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Check, ChevronRight, Home } from 'lucide-react';
import { PRODUCTS, WHATSAPP_QUOTE_URL } from '@/data/content';
import styles from './page.module.css';

const TABS = ['Especificações', 'Opcionais', 'Aplicações'];

export default function ProductPage() {
    const params = useParams();
    const product = PRODUCTS.find(p => p.slug === params.slug);
    const [activeTab, setActiveTab] = useState(0);
    const related = PRODUCTS.filter(p => p.slug !== params.slug).slice(0, 3);

    if (!product) {
        return (
            <div style={{ padding: '200px 20px', textAlign: 'center' }}>
                <h2>Produto não encontrado</h2>
                <Link href="/produtos" className="btn btn-primary" style={{ marginTop: 20 }}>Ver Todos os Produtos</Link>
            </div>
        );
    }

    const whatsappMsg = `Olá! Gostaria de solicitar um orçamento para o ${product.name}.`;
    const wpUrl = `https://wa.me/5555997154983?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <>
            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
                <div className="container">
                    <Link href="/"><Home size={14} /></Link>
                    <ChevronRight size={14} />
                    <Link href="/produtos">Produtos</Link>
                    <ChevronRight size={14} />
                    <span>{product.name}</span>
                </div>
            </div>

            {/* Product Hero */}
            <section className={`section ${styles.productHero}`}>
                <div className="container">
                    <div className={styles.heroGrid}>
                        <motion.div className={styles.gallery}
                            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                            <div className={styles.mainImage}>
                                <Image src={product.image} alt={product.name} width={800} height={600}
                                    className={styles.img} quality={90} priority />
                            </div>
                        </motion.div>

                        <motion.div className={styles.details}
                            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <span className={styles.tag}>{product.tagline}</span>
                            <h1 className={styles.title}>MEKATRONIS {product.name}</h1>
                            <div className={styles.areaBox}>
                                <span className={styles.areaLabel}>Área de trabalho:</span>
                                <span className={styles.areaValue}>{product.area}</span>
                            </div>
                            <ul className={styles.highlights}>
                                {product.features.map((f, i) => (
                                    <li key={i}><Check size={18} /> {f}</li>
                                ))}
                            </ul>
                            <a href={wpUrl} target="_blank" rel="noopener noreferrer"
                                className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem', padding: '18px 32px' }}>
                                <MessageCircle size={22} /> Solicitar Orçamento
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tabs */}
            <section className={`section ${styles.tabsSection}`}>
                <div className="container">
                    <div className={styles.tabs}>
                        {TABS.map((tab, i) => (
                            <button key={i} className={`${styles.tab} ${activeTab === i ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab(i)}>{tab}</button>
                        ))}
                    </div>
                    <div className={styles.tabContent}>
                        {activeTab === 0 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <table className={styles.specTable}>
                                    <tbody>
                                        {Object.entries(product.specs).map(([key, val]) => (
                                            <tr key={key}>
                                                <td className={styles.specKey}>{key}</td>
                                                <td className={styles.specVal}>{val}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </motion.div>
                        )}
                        {activeTab === 1 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <ul className={styles.optList}>
                                    {product.optionals.map((opt, i) => (
                                        <li key={i}><Check size={18} /> {opt}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                        {activeTab === 2 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <ul className={styles.appList}>
                                    {product.applications.map((app, i) => (
                                        <li key={i}><ArrowRight size={16} /> {app}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className={`section ${styles.related}`}>
                <div className="container">
                    <h2 className="section-title">Outros Modelos</h2>
                    <div className={styles.relGrid}>
                        {related.map(p => (
                            <Link key={p.slug} href={`/produtos/${p.slug}`} className={`card ${styles.relCard}`}>
                                <div className={styles.relImgWrap}>
                                    <Image src={p.image} alt={p.name} width={400} height={300} className={styles.relImg} quality={80} />
                                </div>
                                <div className={styles.relInfo}>
                                    <h3>{p.name}</h3>
                                    <p>{p.area}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
