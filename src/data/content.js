export const WHATSAPP_NUMBER = '5555997154983';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os routers CNC da Mekatronis.')}`;
export const WHATSAPP_QUOTE_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento.')}`;

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/mekatronisroutercnc/',
  facebook: 'https://www.facebook.com/mauricio.moreira.180072',
  youtube: 'https://www.youtube.com/@mekatronis6949/videos',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Galeria', href: '/galeria' },
  { label: 'Vídeos', href: '/videos' },
  { label: 'Clientes', href: '/clientes' },
  { label: 'Suporte', href: '/suporte' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

export const COMPANY_STATS = [
  { number: 17, suffix: '+', label: 'Anos de Experiência' },
  { number: 500, suffix: '+', label: 'Máquinas Entregues' },
  { number: 100, suffix: '%', label: 'Fabricação Nacional' },
  { number: 24, suffix: 'h', label: 'Suporte Técnico' },
];

export const DIFERENCIAIS = [
  {
    icon: 'Factory',
    title: '17 Anos',
    subtitle: 'de Experiência',
    description: 'Mais de uma década e meia fabricando routers CNC industriais com excelência e confiabilidade.',
  },
  {
    icon: 'Target',
    title: 'Precisão',
    subtitle: 'Industrial',
    description: 'Precisão de ±0.05mm com guias lineares e fusos de esferas de alta performance.',
  },
  {
    icon: 'Wrench',
    title: 'Suporte',
    subtitle: 'Completo',
    description: 'Instalação, treinamento e assistência técnica com equipe especializada.',
  },
  {
    icon: 'Flag',
    title: 'Fabricação',
    subtitle: '100% Nacional',
    description: 'Desenvolvimento e fabricação brasileira, com peças de reposição sempre disponíveis.',
  },
];

export const PRODUCTS = [
  {
    slug: 'mk3000',
    name: 'MK3000',
    tagline: 'Router CNC Profissional',
    shortDesc: 'Nossa máquina flagship para produção industrial de grande porte.',
    area: '1850 x 2750 x 200mm',
    image: '/images/products/mekatronisroutercnc-13042023_191550-1017751047.jpg',
    features: ['ATC disponível', 'Servomotor', 'Eixo Z reforçado', 'Mesa com vácuo'],
    specs: {
      'Área útil': '1850 x 2750 x 200mm',
      'Estrutura': 'Aço carbono reforçado',
      'Guias': 'Lineares de precisão',
      'Transmissão': 'Fuso de esferas ou Cremalheira',
      'Spindle': 'A partir de 3CV (customizável)',
      'Motorização': 'Passo ou Servo AC Brushless',
      'Controlador': 'CNC industrial com tela LCD',
      'Velocidade': 'Até 25.000mm/min',
      'Precisão': '±0.05mm',
    },
    optionals: [
      'ATC (Troca Automática de Ferramentas)',
      'Eixo rotativo (4º eixo)',
      'Mesa com vácuo zoneada',
      'Spindle de 6CV ou 10CV',
      'Servomotores AC Brushless',
      'Gabinete fechado com exaustão',
      'Sistema de lubrificação automática',
    ],
    applications: ['Marcenarias', 'Indústria Moveleira', 'Publicidade e Comunicação Visual', 'Portas Decorativas', 'Painéis e Cobogós'],
  },
  {
    slug: 'mk2012',
    name: 'MK2012',
    tagline: 'Router CNC Versátil',
    shortDesc: 'Versátil e compacto, ideal para marcenarias e ateliês de médio porte.',
    area: '2000 x 1200 x 200mm',
    image: '/images/products/mekatronisroutercnc-13042023_203047-1011086327.jpg',
    features: ['Compacta e potente', 'Fuso de esferas', 'Alta precisão', 'Setup rápido'],
    specs: {
      'Área útil': '2000 x 1200 x 200mm',
      'Estrutura': 'Aço carbono reforçado',
      'Guias': 'Lineares de precisão',
      'Transmissão': 'Fuso de esferas',
      'Spindle': 'A partir de 2.2CV',
      'Motorização': 'Motor de passo NEMA 34',
      'Controlador': 'CNC com tela LCD',
      'Velocidade': 'Até 20.000mm/min',
      'Precisão': '±0.05mm',
    },
    optionals: [
      'Spindle de 3CV ou 6CV',
      'Mesa com vácuo',
      'Eixo rotativo',
      'Servomotores',
      'Sistema de exaustão',
    ],
    applications: ['Marcenarias', 'Ateliês de Design', 'Luthieria', 'Protótipos', 'Artesanato de Precisão'],
  },
  {
    slug: 'mk1060',
    name: 'MK1060',
    tagline: 'Router CNC Compacto',
    shortDesc: 'Solução compacta e de alto desempenho para espaços reduzidos.',
    area: '1000 x 600 x 150mm',
    image: '/images/products/mekatronisroutercnc-13042023_203152-76833650.jpg',
    features: ['Formato compacto', 'Alta precisão', 'Fácil operação', 'Custo acessível'],
    specs: {
      'Área útil': '1000 x 600 x 150mm',
      'Estrutura': 'Alumínio estrutural',
      'Guias': 'Lineares de precisão',
      'Transmissão': 'Fuso de esferas',
      'Spindle': '1.5CV (1500W)',
      'Motorização': 'Motor de passo NEMA 23',
      'Controlador': 'CNC com tela LCD',
      'Velocidade': 'Até 15.000mm/min',
      'Precisão': '±0.05mm',
    },
    optionals: [
      'Spindle de 2.2CV',
      'Eixo rotativo',
      'Mesa com garras',
      'Kit de pinças ER',
    ],
    applications: ['Pequenas marcenarias', 'Luthieria', 'Joalheria', 'Protoboards', 'Hobby avançado'],
  },
  {
    slug: 'mk5050',
    name: 'MK5050',
    tagline: 'Router CNC Desktop',
    shortDesc: 'A entrada perfeita para o mundo CNC com qualidade profissional.',
    area: '500 x 500 x 100mm',
    image: '/images/products/mekatronisroutercnc-13042023_203217-4218945673.jpg',
    features: ['Ultra-compacto', 'Plug & play', 'Ideal p/ iniciantes', 'Qualidade Mekatronis'],
    specs: {
      'Área útil': '500 x 500 x 100mm',
      'Estrutura': 'Alumínio estrutural',
      'Guias': 'Lineares',
      'Transmissão': 'Fuso de esferas',
      'Spindle': '800W',
      'Motorização': 'Motor de passo NEMA 23',
      'Controlador': 'CNC USB',
      'Velocidade': 'Até 10.000mm/min',
      'Precisão': '±0.05mm',
    },
    optionals: [
      'Spindle de 1.5CV',
      'Mesa com garras',
      'Gabinete fechado',
    ],
    applications: ['Makers', 'Designers', 'Prototipagem', 'PCB', 'Educação'],
  },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'maquinas', label: 'Nossas Máquinas' },
  { id: 'luthieria', label: 'Luthieria' },
  { id: 'decoracao', label: 'Arte & Decoração' },
  { id: 'paineis', label: 'Painéis & Cobogós' },
  { id: 'moveis', label: 'Móveis' },
];

export const GALLERY_CATEGORY_DESCRIPTIONS = {
  maquinas: 'Conheça os routers CNC Mekatronis: máquinas robustas fabricadas em aço carbono reforçado, com guias lineares de precisão e fusos de esferas. Cada equipamento é projetado e montado artesanalmente em nossa fábrica em Alpestre/RS.',
  luthieria: 'A precisão de ±0.05mm das nossas máquinas permite a usinagem de corpos de guitarra, baixo e outros instrumentos com cavidades perfeitas — inclusive em madeiras nobres exóticas como imbuia, freijó e louro faia.',
  decoracao: 'Nossos routers CNC executam esculturas em alto relevo, entalhes artísticos e peças decorativas com nível de detalhe impressionante, transformando blocos de madeira em verdadeiras obras de arte.',
  paineis: 'Corte e fresagem de painéis decorativos, cobogós, divisórias e revestimentos com padrões geométricos complexos — perfeitos para projetos de arquitetura e interiores.',
  moveis: 'Do corte de peças estruturais à usinagem de encaixes precision-fit, nossos routers CNC aceleram a produção moveleira com repetibilidade e acabamento impecável.',
};

export const GALLERY_IMAGES = [
  /* === Nossas Máquinas === */
  { src: '/images/gallery/mekatronisroutercnc-03062023_153005-4285837156.jpg', title: 'Linha de Produção Mekatronis', category: 'maquinas' },
  { src: '/images/gallery/mekatronisroutercnc-03062023_154351-4135409067.jpg', title: 'Montagem de Router CNC', category: 'maquinas' },
  { src: '/images/gallery/mekatronisroutercnc-03062023_161237-3209547143.jpg', title: 'Fábrica Mekatronis — Múltiplas Máquinas', category: 'maquinas' },
  { src: '/images/gallery/mekatronisroutercnc-06072023_200826-3571733716.jpg', title: 'Router CNC Mekatronis Pronto', category: 'maquinas' },
  { src: '/images/gallery/mekatronisroutercnc-15022021_184140-3262507128.jpg', title: 'Detalhe — Mesa com Vácuo e Spindle', category: 'maquinas' },
  { src: '/images/gallery/mekatronisroutercnc-25012021_141142-3330598846.jpg', title: 'Router CNC Compacto com Painel CNC', category: 'maquinas' },
  { src: '/images/gallery/mekatronisroutercnc-25062021_140026-2465713904.jpg', title: 'Detalhe — Spindle e Estrutura Reforçada', category: 'maquinas' },
  { src: '/images/gallery/mekatronisroutercnc-25062021_140342-2995339545.jpg', title: 'MK1500 — Router CNC com Eixo Z', category: 'maquinas' },
  { src: '/images/gallery/mekatronisroutercnc-26022021_093607-2654148548.jpg', title: 'Router com 4º Eixo Rotativo', category: 'maquinas' },

  /* === Luthieria === */
  { src: '/images/gallery/mekatronisroutercnc-09072023_010659-1713963452.jpg', title: 'Corpo de Guitarra — Imbuia Figured', category: 'luthieria' },
  { src: '/images/gallery/mekatronisroutercnc-09072023_010746-576286203.jpg', title: 'Corpo de Guitarra — Quilted Maple', category: 'luthieria' },
  { src: '/images/gallery/mekatronisroutercnc-09072023_010838-4143631005.jpg', title: 'Corpo de Baixo Jazz Bass — Freijó', category: 'luthieria' },
  { src: '/images/gallery/mekatronisroutercnc-09072023_010910-266453138.jpg', title: 'Corpo de Guitarra — Louro Faia Exótico', category: 'luthieria' },
  { src: '/images/gallery/mekatronisroutercnc-09072023_011022-2206624655.jpg', title: 'Corpo de Baixo — Imbuia Natural', category: 'luthieria' },

  /* === Arte & Decoração === */
  { src: '/images/gallery/mekatronisroutercnc-09072023_010729-2313989085.jpg', title: 'Santa Ceia — Entalhe em Alto Relevo', category: 'decoracao' },

  /* === Painéis & Cobogós === */
  { src: '/images/gallery/mekatronisroutercnc-09072023_012609-6072294.jpg', title: 'Painel Geométrico Decorativo — Teto', category: 'paineis' },

  /* === Móveis === */
  { src: '/images/gallery/mekatronisroutercnc-03062023_165425-4051876477.jpg', title: 'Cadeira Infantil em MDF — Corte CNC', category: 'moveis' },
];

export const TESTIMONIALS = [
  {
    name: 'Carlos Mendes',
    city: 'Bento Gonçalves, RS',
    text: 'A Mekatronis transformou minha marcenaria. A precisão da MK3000 me permitiu aceitar projetos que antes eu tinha que recusar. O investimento se paga em poucos meses.',
    rating: 5,
  },
  {
    name: 'Roberto Silva',
    city: 'São Paulo, SP',
    text: 'Compramos duas MK2012 para nossa indústria e a qualidade do acabamento é impressionante. O suporte técnico da Mekatronis é excepcional, sempre disponíveis quando precisamos.',
    rating: 5,
  },
  {
    name: 'Thiago Oliveira',
    city: 'Curitiba, PR',
    text: 'Como luthier, a precisão é tudo. A MK1060 me dá exatamente o controle que preciso para meus instrumentos. Recomendo a todos os artesãos.',
    rating: 5,
  },
  {
    name: 'Fernando Costa',
    city: 'Fortaleza, CE',
    text: 'Iniciamos com a MK5050 e em menos de um ano já fizemos upgrade para a MK2012. A qualidade Mekatronis é incomparável. Suporte sempre presente.',
    rating: 5,
  },
  {
    name: 'Marcos Pereira',
    city: 'Caxias do Sul, RS',
    text: 'Já tivemos máquinas de outros fabricantes, mas a robustez e durabilidade da Mekatronis está em outro nível. 5 anos de uso intenso sem problemas.',
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  { q: 'Quanto custa um Router CNC da Mekatronis?', a: 'O valor varia conforme o modelo e configurações escolhidas. Entre em contato via WhatsApp para receber um orçamento personalizado de acordo com suas necessidades.' },
  { q: 'Preciso de conhecimento técnico para operar?', a: 'Não necessariamente. Oferecemos treinamento completo na instalação da máquina. Em poucos dias você já estará operando com confiança. Além disso, disponibilizamos suporte contínuo.' },
  { q: 'Qual o prazo de entrega?', a: 'O prazo médio de fabricação é de 30 a 45 dias úteis, dependendo do modelo e configurações. A entrega é feita em todo o Brasil com instalação inclusa.' },
  { q: 'A máquina vem montada?', a: 'Sim! Nossas máquinas são entregues montadas e testadas. Nossa equipe realiza a instalação, calibração e treinamento no local.' },
  { q: 'Quais materiais posso usinar?', a: 'Nossos routers CNC trabalham com madeira, MDF, MDP, compensado, acrílico, ACM, plásticos, espumas, fibras e materiais compostos. Não recomendado para metais ferrosos.' },
  { q: 'Como funciona a garantia?', a: 'Oferecemos garantia de 1 ano para defeitos de fabricação. Além disso, nosso suporte técnico está disponível mesmo após o período de garantia.' },
  { q: 'Vocês oferecem financiamento?', a: 'Sim! Trabalhamos com diversas opções de pagamento, incluindo financiamento via BNDES e linhas de crédito para equipamentos.' },
  { q: 'Qual software devo utilizar?', a: 'Nossas máquinas são compatíveis com os principais softwares CAD/CAM do mercado, como ArtCAM, Aspire/VCarve, Type3, SolidWorks, entre outros.' },
  { q: 'Peças de reposição são facilmente encontradas?', a: 'Sim! Por sermos fabricantes nacionais, todas as peças de reposição estão disponíveis em nosso estoque e podem ser enviadas em até 48 horas.' },
  { q: 'A máquina precisa de instalação elétrica especial?', a: 'Depende do modelo. Modelos menores funcionam em 220V monofásico. Modelos maiores podem necessitar de 220V ou 380V trifásico. Fornecemos as especificações completas.' },
];
