# Guia de Uso & Exemplos - RushConnect Consultoria

## 🎓 Introdução

Este guia mostra **como usar, manter e expandir** a landing page seguindo a arquitetura profissional implementada.

---

## 📝 Tarefa 1: Atualizar Informações de Contato

### Cenário
O telefone ou email da empresa mudou.

### Como fazer

**Arquivo:** `data.js`

```javascript
const siteData = {
    // ...
    contact: {
        email: 'novo.email@rushconnect.com.br',  // ← MUDE AQUI
        phone: '+55629999999999',                  // ← MUDE AQUI
        phoneDisplay: '(62) 9 9999-9999',         // ← MUDE AQUI
        socialMedia: []
    },
    // ...
}
```

**Resultado:**
- ✅ Email atualizado no header
- ✅ Email atualizado no footer
- ✅ Email no CTA final
- ✅ Links `mailto:` funcionam
- ✅ JSON-LD atualizado para SEO

**Sem alterar nada em HTML ou CSS!**

---

## 📝 Tarefa 2: Adicionar um Novo Depoimento

### Cenário
Um cliente novo pediu para adicionar seu feedback no site.

### Como fazer

**Arquivo:** `data.js`

```javascript
const siteData = {
    // ...
    testimonials: {
        title: 'Depoimentos de Clientes',
        subtitle: 'Histórias de sucesso e transformação digital',
        list: [
            // ... depoimentos existentes
            {
                id: 'testimonial-4',  // ID único
                text: 'Excelente trabalho! A RushConnect entregou a solução dentro do prazo e com qualidade excepcional. Recomendo!',
                author: 'Roberto Oliveira',
                role: 'Founder - TechStartup Nova',
                rating: 5
            }
        ]
    },
    // ...
}
```

### Após salvar:

```bash
# No navegador, o novo depoimento aparecerá automaticamente
# sem necessidade de reload manual
```

**Sem editar HTML!** JavaScript renderiza automaticamente.

---

## 📝 Tarefa 3: Mudar Textos da Seção "Sobre"

### Cenário
A empresa quer revisar o texto sobre sua missão.

### Como fazer

**Arquivo:** `data.js`

```javascript
const siteData = {
    // ...
    about: {
        title: 'Sobre a RushConnect',  // ← Editar se necessário
        subtitle: 'Somos a ponte entre sua visão e a excelência técnica',  // ← Editar se necessário
        content: [
            'Novo parágrafo 1 com a missão revisada...',
            'Novo parágrafo 2 com visão e valores...'
        ],
        values: [
            {
                title: 'Expertise Técnica Profunda',
                description: 'Descrição revisada aqui...',
                icon: 'brain'
            },
            // ... restante dos valores
        ]
    },
    // ...
}
```

**Resultado:** Seção inteira atualizada automaticamente.

---

## 📝 Tarefa 4: Adicionar um Novo Serviço

### Cenário
A empresa oferece um novo serviço: "Treinamento Técnico"

### Como fazer

**Arquivo:** `data.js`

```javascript
const siteData = {
    // ...
    services: {
        title: 'Nossos Serviços',
        subtitle: 'Soluções completas para impulsionar seu negócio',
        list: [
            // ... serviços existentes
            {
                id: 'treinamento',                    // ID único
                title: 'Treinamento Técnico',
                description: 'Programas de capacitação para equipes técnicas. Transferência de conhecimento em arquitetura, padrões de design e melhores práticas.',
                icon: 'graduation-cap',               // Font Awesome icon
                cta: 'Solicitar Treinamento'
            }
        ]
    },
    // ...
}
```

**Resultado:**
- ✅ Novo card aparece na seção de serviços
- ✅ Automático responsivo
- ✅ Ícone renderizado dinamicamente
- ✅ CTA funciona

---

## 📝 Tarefa 5: Atualizar Métricas de Sucesso

### Cenário
A empresa entregou mais 5 projetos e quer atualizar as métricas.

### Como fazer

**Arquivo:** `data.js`

```javascript
const siteData = {
    // ...
    metrics: {
        title: 'Resultados que Falam por Si',
        list: [
            {
                value: '25+',  // ← ATUALIZE DE 20+ PARA 25+
                label: 'Projetos Entregues'
            },
            {
                value: '95%',
                label: 'Retenção de Clientes'
            },
            {
                value: '8+',
                label: 'Anos de Experiência'
            },
            {
                value: '15',
                label: 'Especialistas Dedicados'
            }
        ]
    },
    // ...
}
```

**Resultado:** Número atualizado automaticamente na página.

---

## 🛠️ Tarefa 6: Estender com Nova Seção (Blog)

### Cenário
Adicionar uma seção de "Artigos Recentes" à landing page.

### Passo 1: Adicionar dados em `data.js`

```javascript
const siteData = {
    // ... seções existentes
    
    blog: {
        title: 'Artigos Recentes',
        subtitle: 'Insights sobre tecnologia, consultoria e transformação digital',
        list: [
            {
                id: 'artigo-1',
                title: 'API REST: Boas Práticas em 2026',
                excerpt: 'Descubra como construir APIs robustas e escaláveis...',
                date: '2026-01-10',
                link: '/blog/api-rest',
                category: 'Desenvolvimento'
            },
            {
                id: 'artigo-2',
                title: 'Cloud Native: Arquitetura do Futuro',
                excerpt: 'Entenda padrões e práticas de aplicações cloud native...',
                date: '2026-01-05',
                link: '/blog/cloud-native',
                category: 'Arquitetura'
            }
        ]
    },
    
    // ... restante de siteData
};
```

### Passo 2: Adicionar HTML em `index.html`

```html
<!-- Adicionar antes do footer, após seção de depoimentos -->

<!-- ========== SEÇÃO BLOG ========== -->
<section id="blog" class="blog" aria-labelledby="blogTitle">
    <div class="container">
        <div class="section-header">
            <h2 id="blogTitle"></h2>
            <p id="blogSubtitle"></p>
        </div>

        <div class="blog-grid" id="blogGrid">
            <!-- Injetado dinamicamente -->
        </div>

        <div style="text-align: center; margin-top: var(--spacing-xxl);">
            <a href="/blog" class="btn btn-secondary">Ver Todos os Artigos</a>
        </div>
    </div>
</section>
```

### Passo 3: Adicionar renderização em `script.js`

```javascript
/**
 * Renderiza a seção de blog
 */
function renderBlog() {
    const blogTitle = document.getElementById('blogTitle');
    const blogSubtitle = document.getElementById('blogSubtitle');
    const blogGrid = document.getElementById('blogGrid');

    if (blogTitle) blogTitle.textContent = siteData.blog.title;
    if (blogSubtitle) blogSubtitle.textContent = siteData.blog.subtitle;

    if (blogGrid) {
        blogGrid.innerHTML = siteData.blog.list
            .map(article => `
                <article class="blog-card">
                    <div class="blog-category">${article.category}</div>
                    <h3>${article.title}</h3>
                    <p>${article.excerpt}</p>
                    <div class="blog-meta">
                        <time datetime="${article.date}">
                            ${new Date(article.date).toLocaleDateString('pt-BR')}
                        </time>
                    </div>
                    <a href="${article.link}" class="btn-link">Ler artigo <i class="fas fa-arrow-right"></i></a>
                </article>
            `)
            .join('');
    }
}

// Chamar em renderAllContent():
function renderAllContent() {
    renderHeader();
    renderHero();
    renderAbout();
    renderServices();
    renderProcesses();
    renderTestimonials();
    renderBlog();  // ← ADICIONAR AQUI
    renderCTAFinal();
    renderFooter();
}
```

### Passo 4: Adicionar CSS em `style.css`

```css
/* ==================== SEÇÃO BLOG ==================== */
.blog {
    padding: var(--spacing-xxl) 0;
    background: var(--color-gray-light);
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}

.blog-card {
    background: var(--color-white);
    padding: var(--spacing-lg);
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition: var(--transition);
    border-top: 4px solid var(--color-royal-blue);
    display: flex;
    flex-direction: column;
}

.blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(20, 58, 117, 0.2);
}

.blog-category {
    display: inline-block;
    padding: 4px 12px;
    background: var(--color-light-blue);
    color: var(--color-royal-blue);
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    width: fit-content;
}

.blog-card h3 {
    font-family: var(--font-poppins);
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-navy);
    margin-bottom: var(--spacing-md);
    line-height: 1.4;
    flex-grow: 1;
}

.blog-card p {
    color: var(--color-text);
    margin-bottom: var(--spacing-md);
    font-size: 0.95rem;
    line-height: 1.6;
}

.blog-meta {
    font-size: 0.85rem;
    color: var(--color-gray-dark);
    margin-bottom: var(--spacing-md);
}

.blog-meta time {
    font-style: italic;
}
```

### Resultado
- ✅ Nova seção blog aparece no site
- ✅ Dados centralizados em `siteData`
- ✅ Renderização automática
- ✅ Fácil adicionar novos artigos sem HTML

---

## 🔌 Tarefa 7: Integrar com uma API (Exemplo)

### Cenário
Você quer consumir depoimentos de uma API externa em vez de dados estáticos.

### Como fazer

**Arquivo:** `script.js`

```javascript
/**
 * Renderiza depoimentos (versão com API)
 */
async function renderTestimonials() {
    const testimonialsTitle = document.getElementById('testimonialsTitle');
    const testimonialsSubtitle = document.getElementById('testimonialsSubtitle');
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    const metricsContainer = document.getElementById('metricsContainer');

    // Tentar carregar da API; fallback para dados locais
    let testimonialsList = siteData.testimonials.list;
    
    try {
        const response = await fetch('https://api.rushconnect.com.br/testimonials');
        if (response.ok) {
            const data = await response.json();
            testimonialsList = data.testimonials;  // Usar dados da API
        }
    } catch (error) {
        console.log('API não disponível, usando dados locais:', error);
        // Fallback automático para siteData
    }

    if (testimonialsTitle) testimonialsTitle.textContent = siteData.testimonials.title;
    if (testimonialsSubtitle) testimonialsSubtitle.textContent = siteData.testimonials.subtitle;

    if (testimonialsGrid) {
        testimonialsGrid.innerHTML = testimonialsList
            .map(testimonial => {
                const stars = Array.from({ length: testimonial.rating }, () => '<i class="fas fa-star"></i>').join('');
                return `
                    <article class="testimonial-card">
                        <div class="stars">${stars}</div>
                        <p class="testimonial-text">"${testimonial.text}"</p>
                        <div class="testimonial-author">
                            <h4>${testimonial.author}</h4>
                            <span>${testimonial.role}</span>
                        </div>
                    </article>
                `;
            })
            .join('');
    }

    // Métricas também podem vir de API
    if (metricsContainer) {
        metricsContainer.innerHTML = siteData.metrics.list
            .map(metric => `
                <div class="metric">
                    <div class="metric-number">${metric.value}</div>
                    <p>${metric.label}</p>
                </div>
            `)
            .join('');
    }
}
```

**Vantagem:** Site funciona mesmo se API cair (fallback automático).

---

## 🌙 Tarefa 8: Adicionar Dark Mode (Exemplo Avançado)

### Passo 1: Estender `data.js` com tema

```javascript
const siteData = {
    // ... dados existentes
    theme: {
        mode: 'light',  // 'light' | 'dark'
        colors: {
            light: {
                primary: '#143A75',
                background: '#FFFFFF',
                text: '#1F1F1F'
            },
            dark: {
                primary: '#BFD8FF',
                background: '#0A1A3C',
                text: '#F5F5F5'
            }
        }
    }
};
```

### Passo 2: Adicionar CSS variables em `style.js`

```css
:root {
    /* Light mode (padrão) */
    --color-navy: #0A1A3C;
    --color-royal-blue: #143A75;
    /* ... */
}

/* Dark mode */
html.dark-mode {
    --color-navy: #1A2B4C;
    --color-royal-blue: #BFD8FF;
    --color-white: #0A1A3C;
    --color-text: #F5F5F5;
    /* ... inverte paleta */
}
```

### Passo 3: Adicionar toggle em `script.js`

```javascript
function initializeDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    const isDark = localStorage.getItem('darkMode') === 'true';
    
    if (isDark) {
        document.documentElement.classList.add('dark-mode');
    }

    if (toggle) {
        toggle.addEventListener('click', function() {
            const isCurrentlyDark = document.documentElement.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', isCurrentlyDark);
            siteData.theme.mode = isCurrentlyDark ? 'dark' : 'light';
        });
    }
}
```

---

## ✅ Checklist: Antes de Deploy

- [ ] Todos os dados em `data.js` foram revisados
- [ ] Contatos (email, telefone) estão corretos
- [ ] Links funcionam (testar todos os CTAs)
- [ ] Responsividade testada em mobile/tablet
- [ ] Imagens otimizadas
- [ ] Meta tags revisadas
- [ ] JSON-LD validado
- [ ] Lighthouse score > 90
- [ ] Sem erros no console

---

## 🚀 Deploy no GitHub Pages

```bash
# 1. Criar repositório no GitHub: username.github.io

# 2. Clonar localmente
git clone https://github.com/username/username.github.io.git
cd username.github.io

# 3. Copiar arquivos do projeto
cp /path/to/lading-consul/* .

# 4. Fazer commit
git add .
git commit -m "feat: landing page RushConnect com arquitetura profissional"

# 5. Push
git push origin main

# Site ao vivo em: https://rushconnect.com.br (se domínio configurado)
# ou: https://username.github.io
```

---

## 📞 Suporte

Dúvidas sobre como usar a arquitetura?

1. Verifique [ARCHITECTURE.md](ARCHITECTURE.md)
2. Procure exemplos neste arquivo
3. Teste no console do navegador
4. Abra issue se encontrar bugs

---

**Última atualização:** 11 de janeiro de 2026
