'use client';
import { motion } from 'framer-motion';
import { Award, Eye, Heart, Shield, Cpu, Cog, Users, MapPin, Zap, Target, Hammer, TrendingUp } from 'lucide-react';
import { WHATSAPP_URL } from '@/data/content';
import styles from './page.module.css';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const TIMELINE = [
    { year: '2009', title: 'O Início de Tudo', desc: 'Em uma oficina modesta em Alpestre, RS, nasce a Mekatronis — fruto da determinação de transformar chapas de aço em tecnologia de ponta. O sonho: fabricar routers CNC 100% nacionais que pudessem competir com os importados.' },
    { year: '2012', title: 'Primeiras Entregas', desc: 'Após anos de protótipos e testes incansáveis, as primeiras máquinas saem da fábrica rumo a marcenarias do Sul do Brasil. O boca a boca começa — cada cliente vira um evangalista da marca.' },
    { year: '2015', title: 'Presença Nacional', desc: 'A fama da robustez e do suporte Mekatronis cruza fronteiras estaduais. Máquinas operando do Amazonas ao Rio Grande do Sul comprovam: qualidade não tem distância.' },
    { year: '2018', title: 'Marco: 200 Máquinas', desc: 'Duzentas máquinas entregues, duzentas histórias de transformação. Marceneiros artesanais se tornaram industriais. Luthiers ganharam precisão. Artistas descobriram novas possibilidades.' },
    { year: '2020', title: 'Linha Premium', desc: 'Lançamento dos modelos com servomotores Yaskawa, ATC automático e 4º eixo rotativo. A Mekatronis entra no mercado de alta performance sem perder a essência: fabricação artesanal com coração de engenheiro.' },
    { year: '2023', title: 'Meio Milhar', desc: 'Mais de 500 máquinas entregues com zero recall. Um feito raro na indústria nacional que reflete nosso compromisso obsessivo com a qualidade de cada solda, cada fio, cada componente.' },
    { year: '2026', title: 'Referência Brasileira', desc: '17 anos de estrada. Centenas de sonhos materializados em aço e tecnologia. E o melhor: ainda estamos só começando.' },
];

const VALUES = [
    { icon: Hammer, title: 'Feito à Mão', desc: 'Cada máquina é soldada, montada e calibrada artesanalmente. Não somos linha de montagem — somos artesãos de tecnologia.' },
    { icon: Target, title: 'Precisão Obsessiva', desc: 'Tolerância de ±0.05mm. Porque para um luthier ou marceneiro, cada décimo de milímetro é a diferença entre o bom e o extraordinário.' },
    { icon: Users, title: 'Gente que Cuida', desc: 'Nosso suporte não é um robô. É o Mauricio, é o técnico que instalou sua máquina, é alguém que conhece sua realidade e se importa.' },
    { icon: Shield, title: 'Sem Dependência', desc: 'Fabricante nacional = peças sempre disponíveis, sem alfândega, sem câmbio, sem incertezas. Sua produção nunca para por falta de uma peça.' },
    { icon: Zap, title: 'Potência Real', desc: 'Spindles de 2.2kW a 9kW, servomotores de alto torque e estrutura que não vibra. Velocidade de corte de verdade, não de catálogo.' },
    { icon: TrendingUp, title: 'ROI Comprovado', desc: 'Clientes relatam payback em menos de 12 meses. Uma Mekatronis não é custo — é o investimento que muda o patamar do seu negócio.' },
];

const NUMEROS = [
    { value: '500+', label: 'Máquinas Entregues' },
    { value: '17', label: 'Anos de Experiência' },
    { value: '0', label: 'Recalls' },
    { value: '27', label: 'Estados Atendidos' },
];

export default function SobrePage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <motion.span className={styles.heroBadge}
                        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        DESDE 2009 • ALPESTRE, RS
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        Nós não vendemos máquinas.<br />
                        <span className={styles.heroAccent}>Nós construímos possibilidades.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                        A Mekatronis nasceu da convicção de que o Brasil pode — e deve — fabricar sua própria tecnologia CNC.
                    </motion.p>
                </div>
            </section>

            {/* QUEM SOMOS */}
            <motion.section className={`section ${styles.story}`}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                <div className="container">
                    <motion.span className="section-label" variants={fadeUp}>A NOSSA ESSÊNCIA</motion.span>
                    <motion.h2 className="section-title" variants={fadeUp}>De Alpestre Para o Brasil Inteiro</motion.h2>
                    <motion.div className={styles.aboutText} variants={fadeUp}>
                        <p>
                            Imagine uma cidadezinha de 8 mil habitantes no interior do Rio Grande do Sul. Agora imagine que dali saem routers CNC que competem de igual para igual com máquinas importadas que custam três vezes mais. Essa é a <strong>Mekatronis</strong>.
                        </p>
                        <p>
                            A <strong>Mekatronis Ind. e Com. de Máquinas LTDA</strong> foi fundada por Mauricio Moreira com uma ideia simples e poderosa: <em>por que depender de máquinas importadas se temos capacidade de fabricar aqui?</em> Desde 2009, provamos que a resposta está em cada router que sai da nossa fábrica — projetado com engenharia brasileira, montado com componentes de classe mundial e entregue com o compromisso de quem coloca o nome na máquina.
                        </p>
                        <p>
                            Nossas estruturas são fabricadas em <strong>aço carbono reforçado</strong> com soldas MIG especiais que garantem rigidez absoluta. Os trilhos são <strong>guias lineares HIWIN</strong> de precisão. Os fusos, <strong>esferas retificadas C5</strong> com folga zero. A eletrônica? <strong>Servomotores Yaskawa e Delta</strong>, inversores <strong>WEG</strong>, CLPs <strong>Schneider</strong>. Cada componente é escolhido a dedo porque sabemos que uma máquina CNC não pode falhar — ela é o coração da produção do nosso cliente.
                        </p>
                        <p>
                            Atendemos <strong>marceneiros</strong> que querem escalar a produção sem perder qualidade. <strong>Luthiers</strong> que precisam de cavidades perfeitas em madeiras exóticas. <strong>Arquitetos</strong> que criam painéis decorativos impossíveis de fazer à mão. <strong>Empreendedores</strong> que transformaram uma ideia em fábrica graças à automação CNC. Em cada história de sucesso de um cliente, tem um pedaço de Mekatronis.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* NÚMEROS */}
            <section className={styles.numeros}>
                <div className={styles.numerosOverlay} />
                <div className={`container ${styles.numerosContent}`}>
                    <div className={styles.numerosGrid}>
                        {NUMEROS.map((n, i) => (
                            <motion.div key={i} className={styles.numItem}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                                <span className={styles.numValue}>{n.value}</span>
                                <span className={styles.numLabel}>{n.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <motion.section className={`section ${styles.story}`}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                <div className="container">
                    <motion.span className="section-label" variants={fadeUp}>NOSSA JORNADA</motion.span>
                    <motion.h2 className="section-title" variants={fadeUp}>17 Anos de Aço, Suor e Inovação</motion.h2>
                    <div className={styles.timeline}>
                        {TIMELINE.map((item, i) => (
                            <motion.div key={i} className={styles.tlItem} variants={fadeUp}>
                                <div className={styles.tlDot} />
                                <div className={styles.tlContent}>
                                    <span className={styles.tlYear}>{item.year}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* VALORES */}
            <motion.section className={`section ${styles.values}`}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
                <div className="container">
                    <motion.span className="section-label" variants={fadeUp}>POR QUE MEKATRONIS</motion.span>
                    <motion.h2 className="section-title" variants={fadeUp}>O Que Nos Torna Diferentes</motion.h2>
                    <div className={styles.vGrid}>
                        {VALUES.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <motion.div key={i} className={styles.vCard} variants={fadeUp}>
                                    <div className={styles.vIcon}><Icon size={28} /></div>
                                    <h3>{v.title}</h3>
                                    <p>{v.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* FUNDADOR */}
            <section className={`section ${styles.founder}`}>
                <div className="container">
                    <div className={styles.fGrid}>
                        <div className={styles.fAvatar}>M</div>
                        <div className={styles.fInfo}>
                            <span className="section-label">O HOMEM POR TRÁS DA MÁQUINA</span>
                            <h2>Mauricio Moreira</h2>
                            <p>
                                Mauricio não é o tipo de empresário que fica atrás de uma mesa. Você vai encontrá-lo no chão de fábrica, soldando uma estrutura, calibrando um fuso ou atendendo pessoalmente o WhatsApp de um cliente às 22h de uma sexta-feira. Ele fundou a Mekatronis porque acredita que o interior do Brasil pode ser polo de alta tecnologia — e dedica cada dia a provar que está certo.
                            </p>
                            <p style={{ marginTop: '12px', fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--green)' }}>
                                "Meu nome vai em cada máquina. Isso significa que eu garanto pessoalmente cada solda, cada fio, cada entrega."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.aboutCta}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ color: 'var(--white)', marginBottom: '16px' }}>
                        Pronto para transformar sua produção?
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Fale diretamente com nossa equipe e descubra qual router CNC é ideal para o seu negócio.
                    </motion.p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"
                        style={{ fontSize: '1.05rem', padding: '18px 36px' }}>
                        Falar com a Mekatronis
                    </a>
                </div>
            </section>
        </>
    );
}
