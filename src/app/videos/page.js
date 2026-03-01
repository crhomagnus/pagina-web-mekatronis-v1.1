'use client';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import styles from './page.module.css';

const VIDEOS = [
    { title: 'MK3000 em Operação', desc: 'Fresagem de porta decorativa em MDF', thumb: '/images/gallery/mekatronisroutercnc-09072023_010659-1713963452.jpg', src: '/videos/machine-operation.mp4', category: 'Máquinas em Operação' },
    { title: 'Entrega e Instalação', desc: 'Processo completo de entrega e configuração', thumb: '/images/gallery/mekatronisroutercnc-09072023_010729-2313989085.jpg', src: '/videos/hero-bg.mp4', category: 'Entregas e Instalações' },
    { title: 'Router CNC Fresando', desc: 'Demonstração de fresagem em 3D', thumb: '/images/gallery/mekatronisroutercnc-09072023_010746-576286203.jpg', src: '/videos/machine-operation.mp4', category: 'Máquinas em Operação' },
    { title: 'Depoimento de Cliente', desc: 'Carlos conta sua experiência', thumb: '/images/gallery/mekatronisroutercnc-09072023_012609-6072294.jpg', src: '/videos/hero-bg.mp4', category: 'Depoimentos' },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function VideosPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <h1>Vídeos</h1>
                    <p>Assista nossas máquinas em ação e conheça histórias de sucesso</p>
                </div>
            </section>

            <motion.section className={`section ${styles.videos}`}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                <div className="container">
                    <div className={styles.grid}>
                        {VIDEOS.map((v, i) => (
                            <motion.div key={i} className={styles.card} variants={fadeUp}>
                                <div className={styles.thumbWrap}>
                                    <img src={v.thumb} alt={v.title} className={styles.thumb} />
                                    <div className={styles.playBtn}><Play size={32} fill="white" /></div>
                                    <span className={styles.badge}>{v.category}</span>
                                </div>
                                <div className={styles.info}>
                                    <h3>{v.title}</h3>
                                    <p>{v.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </>
    );
}
