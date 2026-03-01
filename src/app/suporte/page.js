'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Wrench, Package, BookOpen, ChevronDown, ChevronUp, GraduationCap, Clock, PhoneCall, Shield, Droplets, Settings, Gauge, Plug, Repeat, CircleDot } from 'lucide-react';
import { FAQ_ITEMS, WHATSAPP_URL } from '@/data/content';
import styles from './page.module.css';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const SERVICES = [
    {
        icon: GraduationCap,
        title: 'Instalação & Treinamento',
        desc: 'Não entregamos uma máquina — entregamos um operador pronto. Nossa equipe viaja até o seu local, instala o router, calibra cada eixo com relógio comparador, e treina você e sua equipe até que todos estejam confiantes. Você não vai ficar sozinho no primeiro corte.',
        items: ['Instalação completa no seu espaço', 'Calibração de precisão com instrumentos', 'Treinamento prático de operação', 'Manual técnico e material de apoio', 'Primeiro projeto acompanhado'],
    },
    {
        icon: PhoneCall,
        title: 'Suporte que Funciona',
        desc: 'Nosso suporte não é aquele menu de opções que nunca te leva a lugar nenhum. É o Mauricio no WhatsApp às 21h de uma quinta-feira. É o técnico que conhece sua máquina pelo número de série. É gente de verdade resolvendo problemas reais — geralmente em minutos.',
        items: ['WhatsApp direto com a equipe técnica', 'Diagnóstico remoto por vídeo-chamada', 'Tempo médio de resposta: 15 minutos', 'Atendimento presencial quando necessário', 'Sem robôs, sem filas, sem enrolação'],
    },
    {
        icon: Package,
        title: 'Peças Sempre Disponíveis',
        desc: 'Sabe aquele pesadelo de esperar 60 dias por uma peça da China? Com a Mekatronis isso não existe. Somos fabricantes nacionais — todas as peças estão em estoque, prontas para envio. Sua máquina não para. Seu faturamento não para.',
        items: ['Estoque permanente de todas as peças', 'Envio expresso em até 48h para todo Brasil', 'Peças 100% originais e garantidas', 'Sem dependência de importação', 'Preços justos, sem surpresas cambiais'],
    },
];

const MAINTENANCE = [
    { icon: Droplets, title: 'Lubrificação das Guias', period: 'Semanal', desc: 'As guias lineares HIWIN são o sistema circulatório da sua máquina. Aplique graxa EP2 nos pontos indicados no manual toda semana. São 5 minutos que garantem anos de suavidade no deslocamento.' },
    { icon: Settings, title: 'Limpeza do Spindle', period: 'Diária', desc: 'O spindle é o coração do router. No final de cada jornada, remova resíduos de MDF, cavacos e pó acumulado. Verifique o aperto da pinça e o sistema de refrigeração. Um spindle limpo é um spindle que dura.' },
    { icon: Gauge, title: 'Calibração dos Eixos', period: 'Mensal', desc: 'Com um relógio comparador, verifique a precisão dos eixos X, Y e Z. Desvios acima de 0.1mm devem ser corrigidos nos parâmetros do CNC. Precisão não é negociável — é o que diferencia um hobbysta de um profissional.' },
    { icon: Plug, title: 'Inspeção Elétrica', period: 'Trimestral', desc: 'Conexões, terminais, cabos de alimentação, ventilação do painel elétrico. Limpe os filtros, verifique os disjuntores e garanta que tudo esteja firme. Prevenção elétrica evita paradas inesperadas e danos caros.' },
    { icon: Repeat, title: 'Correias & Acoplamentos', period: 'Anual', desc: 'Inspecione correias de transmissão em busca de rachaduras, desgaste ou folga excessiva. Substitua preventivamente — o custo de uma correia nova é infinitamente menor que o custo de uma parada não-programada.' },
    { icon: CircleDot, title: 'Verificação dos Fusos', period: 'Semestral', desc: 'Os fusos de esferas são a espinha dorsal da precisão. Verifique a folga axial e a pré-carga conforme o manual técnico. Em caso de dúvida, nossa equipe faz o diagnóstico remoto por vídeo.' },
];

export default function SuportePage() {
    const [openFaq, setOpenFaq] = useState(null);
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        Suporte de Verdade.<br />
                        <span className={styles.heroAccent}>De gente para gente.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        Você comprou uma Mekatronis? Então ganhou um time inteiro torcendo pelo seu sucesso.
                    </motion.p>
                </div>
            </section>

            {/* SERVIÇOS */}
            <motion.section className={`section ${styles.services}`}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
                <div className="container">
                    <motion.span className="section-label" variants={fadeUp}>NOSSO COMPROMISSO</motion.span>
                    <motion.h2 className="section-title" variants={fadeUp}>Três Pilares, Uma Promessa</motion.h2>
                    <div className={styles.sGrid}>
                        {SERVICES.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <motion.div key={i} className={styles.sCard} variants={fadeUp}>
                                    <div className={styles.sIcon}><Icon size={32} /></div>
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                    <ul>{s.items.map((item, j) => <li key={j}>✓ {item}</li>)}</ul>
                                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto', fontSize: '0.85rem', padding: '12px 24px' }}>
                                        <MessageCircle size={16} /> Solicitar Suporte
                                    </a>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* MANUTENÇÃO */}
            <motion.section className={`section ${styles.maintenance}`}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
                <div className="container">
                    <motion.span className="section-label" variants={fadeUp}>CUIDANDO DA SUA MÁQUINA</motion.span>
                    <motion.h2 className="section-title" variants={fadeUp}>Guia de Manutenção Preventiva</motion.h2>
                    <motion.p className={styles.mainDesc} variants={fadeUp}>
                        Uma máquina CNC é como um carro de corrida: exige cuidado periódico para entregar performance máxima. O cronograma abaixo foi criado pela nossa engenharia para garantir que seu router Mekatronis opere com precisão e confiabilidade por décadas. E se tiver qualquer dúvida, é só chamar — estamos sempre por perto.
                    </motion.p>
                    <div className={styles.mainGrid}>
                        {MAINTENANCE.map((m, i) => {
                            const Icon = m.icon;
                            return (
                                <motion.div key={i} className={styles.mainCard} variants={fadeUp}>
                                    <div className={styles.mainHeader}>
                                        <div className={styles.mainIcon}><Icon size={20} /></div>
                                        <span className={styles.mainPeriod}>{m.period}</span>
                                    </div>
                                    <h4>{m.title}</h4>
                                    <p>{m.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* FAQ */}
            <section className={`section ${styles.faq}`}>
                <div className="container">
                    <span className="section-label">DÚVIDAS FREQUENTES</span>
                    <h2 className="section-title">Perguntas que Sempre Recebemos</h2>
                    <div className={styles.faqList}>
                        {FAQ_ITEMS.map((item, i) => (
                            <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}>
                                <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    <span>{item.q}</span>
                                    {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                <div className={styles.faqA} style={{ maxHeight: openFaq === i ? '300px' : '0' }}>
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
