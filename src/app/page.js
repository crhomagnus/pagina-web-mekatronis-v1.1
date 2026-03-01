'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, MessageCircle, ArrowRight, Star, ChevronLeft, ChevronRight, Factory, Target, Wrench, Flag } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_QUOTE_URL, PRODUCTS, COMPANY_STATS, DIFERENCIAIS, GALLERY_IMAGES, TESTIMONIALS } from '@/data/content';
import BrandTicker from '@/components/BrandTicker';
import styles from './page.module.css';

/* ========= Animated Counter ========= */
function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ========= Icon Map ========= */
const ICON_MAP = { Factory, Target, Wrench, Flag };

/* ========= Fade In Wrapper ========= */
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

function Section({ children, className = '', id }) {
  return (
    <motion.section id={id} className={`section ${className}`}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
      variants={stagger}>
      {children}
    </motion.section>
  );
}

/* ========= HOME PAGE ========= */
export default function HomePage() {
  const [galleryIdx, setGalleryIdx] = useState(0);
  const visibleCount = 4;
  const maxIdx = Math.max(0, GALLERY_IMAGES.length - visibleCount);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <video className={styles.heroVideo} autoPlay muted loop playsInline poster="/images/hero/hero-bg.jpg">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <motion.span className={styles.heroBadge}
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            🇧🇷 Fabricação 100% Nacional
          </motion.span>
          <motion.h1 className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
            MEKATRONIS<br /><span>ROUTER CNC</span>
          </motion.h1>
          <motion.p className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            17 Anos Transformando Ideias em Realidade com Precisão Industrial
          </motion.p>
          <motion.div className={styles.heroCtas}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={20} /> Fale Conosco
            </a>
            <Link href="/produtos" className="btn btn-outline-white">
              Ver Produtos <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
        <motion.div className={styles.scrollIndicator}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* ===== BRAND TICKER ===== */}
      <BrandTicker />

      {/* ===== DIFERENCIAIS ===== */}
      <Section className={styles.diferenciais}>
        <div className="container">
          <motion.span className="section-label" variants={fadeUp}>POR QUE MEKATRONIS</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>Diferenciais que Fazem a Diferença</motion.h2>
          <div className={styles.difGrid}>
            {DIFERENCIAIS.map((item, i) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <motion.div key={i} className={styles.difCard} variants={fadeUp}>
                  <div className={styles.difIcon}><Icon size={40} strokeWidth={1.5} /></div>
                  <h3 className={styles.difTitle}>{item.title}</h3>
                  <span className={styles.difSub}>{item.subtitle}</span>
                  <p className={styles.difDesc}>{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ===== PRODUTOS ===== */}
      <Section className={styles.products} id="produtos-destaque">
        <div className="container">
          <motion.span className="section-label" variants={fadeUp}>LINHA DE PRODUTOS</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>Nossas Máquinas</motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Routers CNC para todas as necessidades — do hobby profissional à indústria pesada
          </motion.p>
          <div className={styles.prodGrid}>
            {PRODUCTS.map((p, i) => (
              <motion.div key={p.slug} className={`card ${styles.prodCard}`} variants={fadeUp}>
                <div className={styles.prodImgWrap}>
                  <Image src={p.image} alt={p.name} width={600} height={450}
                    className={styles.prodImg} quality={85} />
                </div>
                <div className={styles.prodInfo}>
                  <h3 className={styles.prodName}>{p.name}</h3>
                  <p className={styles.prodArea}>{p.area}</p>
                  <ul className={styles.prodFeatures}>
                    {p.features.map((f, j) => (
                      <li key={j}>✓ {f}</li>
                    ))}
                  </ul>
                  <Link href={`/produtos/${p.slug}`} className="btn btn-primary" style={{ width: '100%' }}>
                    Ver Detalhes <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== NÚMEROS ===== */}
      <section className={styles.numbers}>
        <div className={styles.numbersOverlay} />
        <div className={`container ${styles.numbersContent}`}>
          <div className={styles.numbersGrid}>
            {COMPANY_STATS.map((stat, i) => (
              <div key={i} className={styles.numItem}>
                <span className={styles.numValue}>
                  <Counter end={stat.number} suffix={stat.suffix} />
                </span>
                <span className={styles.numLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALERIA PREVIEW ===== */}
      <Section className={styles.galleryPreview}>
        <div className="container">
          <motion.span className="section-label" variants={fadeUp}>PORTFÓLIO</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>Trabalhos Realizados</motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Veja o que é possível criar com nossas máquinas CNC
          </motion.p>
          <motion.div className={styles.carousel} variants={fadeUp}>
            <button className={styles.carouselBtn} onClick={() => setGalleryIdx(Math.max(0, galleryIdx - 1))}
              disabled={galleryIdx === 0}><ChevronLeft size={24} /></button>
            <div className={styles.carouselTrack}>
              <div className={styles.carouselSlider}
                style={{ transform: `translateX(-${galleryIdx * (100 / visibleCount)}%)` }}>
                {GALLERY_IMAGES.map((img, i) => (
                  <div key={i} className={styles.carouselItem}>
                    <Image src={img.src} alt={img.title} width={400} height={300}
                      className={styles.carouselImg} quality={80} />
                    <div className={styles.carouselOverlay}>
                      <span>{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className={styles.carouselBtn} onClick={() => setGalleryIdx(Math.min(maxIdx, galleryIdx + 1))}
              disabled={galleryIdx >= maxIdx}><ChevronRight size={24} /></button>
          </motion.div>
          <motion.div style={{ textAlign: 'center', marginTop: 'var(--space-5)' }} variants={fadeUp}>
            <Link href="/galeria" className="btn btn-secondary">
              Ver Galeria Completa <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ===== DEPOIMENTO ===== */}
      <Section className={styles.testimonial}>
        <div className="container">
          <motion.span className="section-label" variants={fadeUp}>DEPOIMENTOS</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>O que Nossos Clientes Dizem</motion.h2>
          <motion.div className={styles.testGrid} variants={stagger}>
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <motion.div key={i} className={styles.testCard} variants={fadeUp}>
                <div className={styles.testStars}>
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="#FFC107" color="#FFC107" />)}
                </div>
                <p className={styles.testText}>"{t.text}"</p>
                <div className={styles.testAuthor}>
                  <div className={styles.testAvatar}>{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.city}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== CTA FINAL ===== */}
      <section className={styles.finalCta}>
        <div className={styles.ctaOverlay} />
        <div className={`container ${styles.ctaContent}`}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            Pronto para Revolucionar sua Produção?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Entre em contato e receba um orçamento personalizado para sua necessidade
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"
              style={{ fontSize: '1.1rem', padding: '20px 40px' }}>
              <MessageCircle size={24} /> Solicitar Orçamento
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
