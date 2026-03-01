'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES, GALLERY_CATEGORIES, GALLERY_CATEGORY_DESCRIPTIONS } from '@/data/content';
import styles from './page.module.css';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function GaleriaPage() {
    const [filter, setFilter] = useState('all');
    const [lightbox, setLightbox] = useState(null);

    const filtered = filter === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === filter);

    const openLightbox = (idx) => setLightbox(idx);
    const closeLightbox = () => setLightbox(null);
    const prev = () => setLightbox(i => i > 0 ? i - 1 : filtered.length - 1);
    const next = () => setLightbox(i => i < filtered.length - 1 ? i + 1 : 0);

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <h1>Galeria de Trabalhos</h1>
                    <p>Veja o que é possível criar com nossas máquinas CNC</p>
                </div>
            </section>

            <section className={`section ${styles.gallery}`}>
                <div className="container">
                    <div className={styles.filters}>
                        {GALLERY_CATEGORIES.map(cat => (
                            <button key={cat.id} className={`${styles.filterBtn} ${filter === cat.id ? styles.active : ''}`}
                                onClick={() => setFilter(cat.id)}>{cat.label}</button>
                        ))}
                    </div>

                    {filter !== 'all' && GALLERY_CATEGORY_DESCRIPTIONS[filter] && (
                        <motion.p className={styles.categoryDesc} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            {GALLERY_CATEGORY_DESCRIPTIONS[filter]}
                        </motion.p>
                    )}

                    <motion.div className={styles.grid} initial="hidden" animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.05 } } }} key={filter}>
                        {filtered.map((img, idx) => (
                            <motion.div key={img.src} className={styles.item} variants={fadeUp}
                                onClick={() => openLightbox(idx)} role="button" tabIndex={0}>
                                <Image src={img.src} alt={img.title} width={400} height={300}
                                    className={styles.img} quality={80} />
                                <div className={styles.overlay}>
                                    <span className={styles.overlayTitle}>{img.title}</span>
                                    <span className={styles.overlayCategory}>{img.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div className={styles.lightbox} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} onClick={closeLightbox}>
                        <button className={styles.lbClose} onClick={closeLightbox}><X size={28} /></button>
                        <button className={`${styles.lbNav} ${styles.lbPrev}`} onClick={(e) => { e.stopPropagation(); prev(); }}>
                            <ChevronLeft size={32} /></button>
                        <button className={`${styles.lbNav} ${styles.lbNext}`} onClick={(e) => { e.stopPropagation(); next(); }}>
                            <ChevronRight size={32} /></button>
                        <div className={styles.lbContent} onClick={e => e.stopPropagation()}>
                            <Image src={filtered[lightbox].src} alt={filtered[lightbox].title}
                                width={1200} height={800} className={styles.lbImg} quality={90} />
                            <p className={styles.lbCaption}>{filtered[lightbox].title}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
