/**
 * ==================== SCRIPT.JS ====================
 * 
 * RushConnect Consultoria - Landing Page
 * 
 * Responsabilidades:
 * 1. Injetar dados do siteData no DOM
 * 2. Gerenciar interações e comportamentos
 * 3. Otimizar performance com lazy loading e observers
 * 4. Manter acessibilidade e semântica HTML
 * 
 * Arquitetura:
 * - Renderização: funções puras que geram HTML
 * - Inicialização: funções que ativam interações
 * - Utilitários: helpers reutilizáveis
 */

// ==================== INICIALIZAÇÃO ====================
/**
 * Ponto de entrada principal
 * Executa todas as funções de inicialização quando o DOM está pronto
 */
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se siteData existe
    if (typeof siteData === 'undefined') {
        console.error('siteData não foi carregado. Verifique se data.js foi incluído antes de script.js');
        return;
    }

    // Injetar conteúdo do siteData
    renderAllContent();

    // Inicializar funcionalidades interativas
    initializeMenuToggle();
    initializeCurrentYear();
    initializeScrollAnimations();
    initializeContactLinks();
    updateOrganizationSchema();
});

// ==================== RENDERIZAÇÃO DE CONTEÚDO ====================
/**
 * Função mestra que renderiza todo o conteúdo do site
 * Centraliza a injeção de dados do siteData
 */
function renderAllContent() {
    renderHeader();
    renderHero();
    renderAbout();
    renderServices();
    renderProcesses();
    renderTestimonials();
    renderCTAFinal();
    renderFooter();
}

/**
 * Renderiza o header com dados dinâmicos
 */
function renderHeader() {
    const headerEmail = document.getElementById('headerEmail');
    const headerPhone = document.getElementById('headerPhone');

    if (headerEmail) {
        headerEmail.href = `mailto:${siteData.contact.email}`;
    }
    if (headerPhone) {
        headerPhone.href = `tel:${siteData.contact.phone}`;
    }
}

/**
 * Renderiza a seção hero
 */
function renderHero() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.getElementById('heroButtons');

    if (heroTitle) heroTitle.textContent = siteData.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = siteData.hero.subtitle;

    if (heroButtons) {
        heroButtons.innerHTML = `
            <a href="${siteData.hero.cta.primary.action}" class="btn btn-primary">
                <i class="fas fa-${siteData.hero.cta.primary.icon}"></i> ${siteData.hero.cta.primary.text}
            </a>
            <a href="${siteData.hero.cta.secondary.action}" class="btn btn-secondary">
                <i class="fas fa-${siteData.hero.cta.secondary.icon}"></i> ${siteData.hero.cta.secondary.text}
            </a>
        `;
    }
}

/**
 * Renderiza a seção sobre
 */
function renderAbout() {
    const aboutTitle = document.getElementById('aboutTitle');
    const aboutSubtitle = document.getElementById('aboutSubtitle');
    const aboutText = document.getElementById('aboutText');
    const valuesGrid = document.getElementById('valuesGrid');

    if (aboutTitle) aboutTitle.textContent = siteData.about.title;
    if (aboutSubtitle) aboutSubtitle.textContent = siteData.about.subtitle;

    if (aboutText) {
        aboutText.innerHTML = siteData.about.content
            .map(paragraph => `<p>${paragraph}</p>`)
            .join('');
    }

    if (valuesGrid) {
        valuesGrid.innerHTML = siteData.about.values
            .map(value => `
                <div class="value-card">
                    <i class="fas fa-${value.icon}"></i>
                    <h3>${value.title}</h3>
                    <p>${value.description}</p>
                </div>
            `)
            .join('');
    }
}

/**
 * Renderiza a seção de serviços
 */
function renderServices() {
    const servicesTitle = document.getElementById('servicesTitle');
    const servicesSubtitle = document.getElementById('servicesSubtitle');
    const servicesGrid = document.getElementById('servicesGrid');

    if (servicesTitle) servicesTitle.textContent = siteData.services.title;
    if (servicesSubtitle) servicesSubtitle.textContent = siteData.services.subtitle;

    if (servicesGrid) {
        servicesGrid.innerHTML = siteData.services.list
            .map(service => `
                <article class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-${service.icon}"></i>
                    </div>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <a href="#contato" class="btn-link">${service.cta} <i class="fas fa-arrow-right"></i></a>
                </article>
            `)
            .join('');
    }
}

/**
 * Renderiza a seção de processos
 */
function renderProcesses() {
    const processesTitle = document.getElementById('processesTitle');
    const processesSubtitle = document.getElementById('processesSubtitle');
    const timelineContainer = document.getElementById('timelineContainer');

    if (processesTitle) processesTitle.textContent = siteData.processes.title;
    if (processesSubtitle) processesSubtitle.textContent = siteData.processes.subtitle;

    if (timelineContainer) {
        timelineContainer.innerHTML = siteData.processes.steps
            .map(step => `
                <div class="timeline-item">
                    <div class="timeline-number">${step.number}</div>
                    <div class="timeline-content">
                        <i class="fas fa-${step.icon}"></i>
                        <h4>${step.title}</h4>
                        <p>${step.description}</p>
                    </div>
                </div>
            `)
            .join('');
    }
}

/**
 * Renderiza a seção de depoimentos
 */
function renderTestimonials() {
    const testimonialsTitle = document.getElementById('testimonialsTitle');
    const testimonialsSubtitle = document.getElementById('testimonialsSubtitle');
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    const metricsContainer = document.getElementById('metricsContainer');

    if (testimonialsTitle) testimonialsTitle.textContent = siteData.testimonials.title;
    if (testimonialsSubtitle) testimonialsSubtitle.textContent = siteData.testimonials.subtitle;

    if (testimonialsGrid) {
        testimonialsGrid.innerHTML = siteData.testimonials.list
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

/**
 * Renderiza a seção CTA final
 */
function renderCTAFinal() {
    const ctaTitle = document.getElementById('ctaTitle');
    const ctaDescription = document.getElementById('ctaDescription');
    const ctaButtons = document.getElementById('ctaButtons');
    const contactInfo = document.getElementById('contactInfo');

    if (ctaTitle) ctaTitle.textContent = siteData.ctaFinal.title;
    if (ctaDescription) ctaDescription.textContent = siteData.ctaFinal.description;

    if (ctaButtons) {
        ctaButtons.innerHTML = `
            <a href="${siteData.ctaFinal.button.action}" class="btn btn-primary btn-large">
                <i class="fas fa-${siteData.ctaFinal.button.icon}"></i> ${siteData.ctaFinal.button.text}
            </a>
        `;
    }

    if (contactInfo) {
        contactInfo.innerHTML = `
            <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <div>
                    <h4>E-mail</h4>
                    <a href="mailto:${siteData.contact.email}">${siteData.contact.email}</a>
                </div>
            </div>
            <div class="contact-item">
                <i class="fas fa-phone"></i>
                <div>
                    <h4>Telefone</h4>
                    <a href="tel:${siteData.contact.phone}">${siteData.contact.phoneDisplay}</a>
                </div>
            </div>
            <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <h4>Localização</h4>
                    <p>${siteData.company.location.fullAddress}</p>
                </div>
            </div>
        `;
    }
}

/**
 * Renderiza o footer
 */
function renderFooter() {
    const footerCompanyName = document.getElementById('footerCompanyName');
    const footerCompanyDesc = document.getElementById('footerCompanyDesc');
    const footerLinks = document.getElementById('footerLinks');
    const footerContact = document.getElementById('footerContact');
    const footerCopyright = document.getElementById('footerCopyright');

    if (footerCompanyName) footerCompanyName.textContent = siteData.company.name;
    if (footerCompanyDesc) footerCompanyDesc.textContent = siteData.company.description;

    if (footerLinks) {
        footerLinks.innerHTML = siteData.footer.sections
            .map(section => `<li><a href="${section.anchor}">${section.label}</a></li>`)
            .join('');
    }

    if (footerContact) {
        footerContact.innerHTML = `
            <li><a href="mailto:${siteData.contact.email}">${siteData.contact.email}</a></li>
            <li><a href="tel:${siteData.contact.phone}">${siteData.contact.phoneDisplay}</a></li>
            <li>${siteData.company.location.fullAddress}</li>
        `;
    }

    if (footerCopyright) {
        const year = new Date().getFullYear();
        footerCopyright.innerHTML = `&copy; ${year} ${siteData.footer.copyright}`;
    }
}

// ==================== INTERAÇÕES ====================
/**
 * Gerencia o menu hamburger responsivo
 */
function initializeMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navMenu) return;

    // Toggle ao clicar no botão
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Fechar ao pressionar ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

/**
 * Garante que links de contato sejam atualizados dinamicamente
 */
function initializeContactLinks() {
    // Já renderizado na renderização inicial, mas pode ser expandido aqui
    // para adicionar validação ou tracking
}

/**
 * Adiciona animações ao rolar a página usando Intersection Observer
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos animáveis
    document.querySelectorAll('.service-card, .testimonial-card, .value-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        observer.observe(el);
    });
}

// ==================== UTILITÁRIOS ====================
/**
 * Atualiza o schema JSON-LD com dados do siteData
 */
function updateOrganizationSchema() {
    const schemaScript = document.getElementById('organizationSchema');
    if (!schemaScript) return;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': siteData.company.name,
        'url': 'https://rushconnect.com.br',
        'description': siteData.company.description,
        'areaServed': 'BR',
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': siteData.contact.phone,
            'contactType': 'Sales'
        },
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': siteData.company.location.city,
            'addressRegion': siteData.company.location.state,
            'addressCountry': siteData.company.location.country
        }
    };

    schemaScript.textContent = JSON.stringify(schema, null, 2);
}

// ==================== COMPATIBILIDADE ====================
/**
 * Fallback para navegadores que não suportam scroll suave
 */
if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.documentElement.style.scrollBehavior = 'auto';
}

// ==================== FUTURAS FUNCIONALIDADES ====================
/*
 * Espaço reservado para expansão:
 * - Form de contato com validação e envio
 * - Carousel de depoimentos com setas
 * - Dark mode toggle
 * - Tracking de eventos e analytics
 * - Service worker para PWA
 * - Lazy loading de imagens
 * - Multi-idioma
 */
