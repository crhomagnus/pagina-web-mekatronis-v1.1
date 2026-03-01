---
description: Como iniciar, desenvolver, testar e deployar o site Mekatronis Router CNC
---

# Mekatronis Website — Workflow de Desenvolvimento

## Pré-requisitos
- Node.js 18+
- npm ou yarn

## 1. Iniciar o Ambiente de Desenvolvimento

// turbo
```bash
cd /home/king/mekatronis-site && npm run dev
```

> O servidor roda em `http://localhost:3000`. Primeira compilação de cada página pode levar ~10s (Turbopack).

## 2. Se aparecer erro "OS file watch limit reached"

```bash
sudo sysctl -w fs.inotify.max_user_watches=524288
```

Para tornar permanente:
```bash
echo 'fs.inotify.max_user_watches=524288' | sudo tee -a /etc/sysctl.conf
```

## 3. Estrutura do Projeto

```
src/
├── app/                    # Páginas (Next.js App Router)
│   ├── page.js             # Home
│   ├── sobre/page.js       # Sobre Nós
│   ├── suporte/page.js     # Suporte & Manutenção
│   ├── galeria/page.js     # Galeria de Trabalhos
│   ├── contato/page.js     # Contato
│   ├── produtos/           # Catálogo + slug dinâmico
│   ├── videos/page.js      # Vídeos
│   ├── clientes/page.js    # Clientes
│   ├── blog/page.js        # Blog
│   ├── globals.css          # Design system global
│   └── layout.js           # Layout raiz (SEO, fontes)
├── components/             # Componentes reutilizáveis
│   ├── Header.jsx          # Navbar
│   ├── Footer.jsx          # Footer
│   ├── BrandTicker.jsx     # Logo ticker de marcas
│   └── WhatsAppFloat.jsx   # Botão flutuante WhatsApp
└── data/
    └── content.js          # Dados centralizados (WhatsApp, produtos, galeria, etc.)
```

## 4. Onde Editar (Guia Rápido)

| O que mudar | Onde editar |
|------------|-------------|
| Número do WhatsApp | `src/data/content.js` → `WHATSAPP_NUMBER` |
| Links de redes sociais | `src/data/content.js` → `SOCIAL_LINKS` |
| Endereço / contato | `src/data/content.js`, `src/app/contato/page.js`, `src/components/Footer.jsx` |
| Produtos do catálogo | `src/data/content.js` → `PRODUCTS` |
| Imagens da galeria | Colocar JPG em `public/images/gallery/`, editar `GALLERY_IMAGES` em `content.js` |
| FAQ do suporte | `src/data/content.js` → `FAQ_ITEMS` |
| Marcas do ticker | `src/components/BrandTicker.jsx` → array `BRANDS` |
| Cores / fontes globais | `src/app/globals.css` → variáveis CSS no `:root` |
| Fonte do logo | `public/fonts/earth.ttf` + `--font-logo` em `globals.css` |

## 5. Adicionar Novas Imagens à Galeria

1. Copie a imagem para `public/images/gallery/`
2. Edite `src/data/content.js` → array `GALLERY_IMAGES`
3. Adicione: `{ src: '/images/gallery/nome.jpg', title: 'Título', category: 'categoria' }`
4. Categorias válidas: `maquinas`, `luthieria`, `decoracao`, `paineis`, `moveis`

## 6. Verificar Todas as Páginas

// turbo
```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/ && echo " /" && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/sobre && echo " /sobre" && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/suporte && echo " /suporte" && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/galeria && echo " /galeria" && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/contato && echo " /contato" && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/produtos && echo " /produtos"
```

> Todas devem retornar `200`.

## 7. Build de Produção

```bash
cd /home/king/mekatronis-site && npm run build
```

## 8. Commit das Alterações

```bash
cd /home/king/mekatronis-site && git add -A && git commit -m "descrição da alteração"
```

## 9. Convenções de Estilo

- **CSS Modules**: cada página tem seu `.module.css` correspondente
- **Glassmorphism**: `background: rgba(255,255,255,0.8)` + `backdrop-filter: blur(10px)` + `border: 1px solid rgba(0,0,0,0.06)`
- **Gradientes de fundo**: usar tons sutis `#f0f4f1 → #e8ede9` para seções alternadas
- **Animações**: usar `framer-motion` com variantes `fadeUp`
- **Responsividade**: breakpoints em 1024px, 768px, 640px, 480px
- **Fonte do logo**: variável `var(--font-logo)` (Earth font)
- **Cores primárias**: `--green`, `--green-light`, `--green-gradient`
