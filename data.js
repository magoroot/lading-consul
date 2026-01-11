/**
 * ==================== SITE DATA ==================== 
 * 
 * Objeto central contendo todos os dados editáveis do site
 * Mantém separação clara entre conteúdo e apresentação
 * Facilita manutenção, atualizações e evolução futura
 * 
 * Estrutura:
 * - company: dados institucionais
 * - contact: informações de contato
 * - hero: seção principal
 * - about: seção sobre
 * - services: catálogo de serviços
 * - processes: fluxo de trabalho
 * - testimonials: depoimentos de clientes
 * - metrics: números de sucesso
 */

const siteData = {
    // ==================== COMPANY ====================
    company: {
        name: 'RushConnect Consultoria',
        shortName: 'RushConnect',
        tagline: 'Consultoria de Tecnologia & Projetos de Software',
        description: 'Especialistas em desenvolvimento sob demanda, arquitetura de soluções e transformação digital. Transforme sua visão em realidade com parceiros de confiança.',
        founded: 2016,
        location: {
            city: 'Trindade',
            state: 'Goiás',
            country: 'Brasil',
            fullAddress: 'Trindade, Goiás, Brasil'
        }
    },

    // ==================== CONTACT ====================
    contact: {
        email: 'contato@rushconnect.com.br',
        phone: '+5562999999999',
        phoneDisplay: '(62) 9 9999-9999',
        socialMedia: [
            // Exemplo para extensão futura
            // { name: 'linkedin', url: 'https://linkedin.com/company/rushconnect' },
            // { name: 'github', url: 'https://github.com/rushconnect' }
        ]
    },

    // ==================== HERO SECTION ====================
    hero: {
        title: 'Projetos de Software e Consultoria que Transformam seu Negócio',
        subtitle: 'Especialistas em desenvolvimento sob demanda, arquitetura de soluções e transformação digital. Transforme sua visão em realidade com parceiros de confiança.',
        cta: {
            primary: {
                text: 'Falar com um Consultor',
                action: '#contato',
                icon: 'calendar-check'
            },
            secondary: {
                text: 'Conheça nossos Serviços',
                action: '#servicos',
                icon: 'arrow-down'
            }
        }
    },

    // ==================== ABOUT SECTION ====================
    about: {
        title: 'Sobre a RushConnect',
        subtitle: 'Somos a ponte entre sua visão e a excelência técnica',
        content: [
            'A RushConnect é uma consultoria especializada em projetos de software sob demanda, arquitetura de soluções e transformação digital. Com anos de experiência no mercado de tecnologia, unimos expertise técnica profunda com um compromisso genuíno com os resultados dos nossos clientes.',
            'Entendemos os desafios únicos das empresas que buscam parceiros confiáveis para executar projetos complexos. Não somos uma fábrica de software e nem um grande bureau impessoal – somos especialistas focados em entregar soluções arquitetonicamente sólidas, escaláveis e que geram valor real ao seu negócio.'
        ],
        values: [
            {
                title: 'Expertise Técnica Profunda',
                description: 'Equipes com especialistas em arquitetura, cloud, desenvolvimento full-stack e boas práticas de engenharia de software.',
                icon: 'brain'
            },
            {
                title: 'Arquitetura de Soluções',
                description: 'Design arquitetural robusto e assessments técnicos que garantem escalabilidade e sustentabilidade do seu projeto.',
                icon: 'drafting-compass'
            },
            {
                title: 'Foco em Projetos',
                description: 'Especialistas em projetos under-the-radar que demandam visão, liderança técnica e entrega de qualidade excepcional.',
                icon: 'target'
            },
            {
                title: 'Compromisso com Resultados',
                description: 'Parceria genuína com nossos clientes, colocando o sucesso do seu projeto acima de tudo.',
                icon: 'handshake'
            }
        ]
    },

    // ==================== SERVICES SECTION ====================
    services: {
        title: 'Nossos Serviços',
        subtitle: 'Soluções completas para impulsionar seu negócio',
        list: [
            {
                id: 'desenvolvimento',
                title: 'Desenvolvimento Sob Demanda',
                description: 'Plataformas SaaS, dashboards analíticos, APIs robustas e aplicações customizadas construídas com as mais modernas tecnologias e arquitetura escalável.',
                icon: 'laptop-code',
                cta: 'Solicitar Orçamento'
            },
            {
                id: 'arquitetura',
                title: 'Arquitetura de Soluções',
                description: 'Design arquitetural alinhado à sua estratégia empresarial. Assessments técnicos, consultoria em decisões arquiteturais e roadmaps de tecnologia.',
                icon: 'sitemap',
                cta: 'Agendar Consulta'
            },
            {
                id: 'modernizacao',
                title: 'Modernização e Refatoração',
                description: 'Migração para cloud, refatoração de legado, automação de processos e transformação digital que mantém o negócio em operação.',
                icon: 'sync-alt',
                cta: 'Explorar Opções'
            }
        ]
    },

    // ==================== PROCESSES SECTION ====================
    processes: {
        title: 'Nosso Processo',
        subtitle: 'Do zero ao lançamento completo com excelência',
        steps: [
            {
                number: '01',
                title: 'Concepção',
                description: 'Entendimento profundo do seu desafio, objetivos e contexto do negócio. Definição clara do escopo e requisitos.',
                icon: 'lightbulb'
            },
            {
                number: '02',
                title: 'Design e Arquitetura',
                description: 'Design UX/UI pensado na experiência do usuário. Arquitetura técnica robusta e documentação clara.',
                icon: 'pencil-ruler'
            },
            {
                number: '03',
                title: 'Desenvolvimento',
                description: 'Desenvolvimento iterativo com tecnologias atualizadas, code review rigoroso e boas práticas de engenharia.',
                icon: 'code'
            },
            {
                number: '04',
                title: 'Testes e QA',
                description: 'Testes automatizados, manual testing abrangente e garantia de qualidade em todos os aspectos da solução.',
                icon: 'flask'
            },
            {
                number: '05',
                title: 'Deploy e Operação',
                description: 'Deploy em produção seguro, monitoramento contínuo e suporte técnico para garantir funcionamento impecável.',
                icon: 'rocket'
            },
            {
                number: '06',
                title: 'Crescimento',
                description: 'Otimizações baseadas em dados, melhorias contínuas e escalabilidade para acompanhar o crescimento do seu negócio.',
                icon: 'chart-line'
            }
        ]
    },

    // ==================== TESTIMONIALS SECTION ====================
    testimonials: {
        title: 'Depoimentos de Clientes',
        subtitle: 'Histórias de sucesso e transformação digital',
        list: [
            {
                id: 'testimonial-1',
                text: 'A RushConnect foi fundamental para transformar nossa visão em uma plataforma SaaS de classe mundial. Em apenas 4 meses, saímos do conceito para o lançamento no mercado. A expertise técnica e a dedicação do time foi impressionante.',
                author: 'Marco Silva',
                role: 'CEO - TechStartup Brasil',
                rating: 5
            },
            {
                id: 'testimonial-2',
                text: 'Procurávamos uma consultoria que entendesse não apenas de tecnologia, mas também dos desafios reais do nosso negócio. A RushConnect entregou exatamente isso: uma solução arquitetonicamente sólida e alinhada com nossa estratégia.',
                author: 'Fernanda Costa',
                role: 'Diretora de Tecnologia - Fintech Inovadora',
                rating: 5
            },
            {
                id: 'testimonial-3',
                text: 'Tínhamos um legado complexo que precisava ser modernizado. O time da RushConnect não apenas refatorou o sistema, como implementou uma arquitetura cloud escalável. Resultado: 60% de redução em custos e sistema 3x mais rápido.',
                author: 'João Ribeiro',
                role: 'CTO - Empresa Consolidada 500+',
                rating: 5
            }
        ]
    },

    // ==================== METRICS SECTION ====================
    metrics: {
        title: 'Resultados que Falam por Si',
        list: [
            {
                value: '20+',
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

    // ==================== CTA FINAL SECTION ====================
    ctaFinal: {
        title: 'Transforme seu Negócio com a RushConnect',
        description: 'Agende uma consulta gratuita com nossos especialistas e descubra como podemos ajudar seu projeto a alcançar novos patamares.',
        button: {
            text: 'Agendar Consulta Gratuita',
            icon: 'envelope',
            action: 'mailto:contato@rushconnect.com.br?subject=Consulta%20Gratuita%20-%20RushConnect'
        }
    },

    // ==================== FOOTER NAVIGATION ====================
    footer: {
        sections: [
            { label: 'Sobre', anchor: '#sobre' },
            { label: 'Serviços', anchor: '#servicos' },
            { label: 'Processos', anchor: '#processos' },
            { label: 'Depoimentos', anchor: '#depoimentos' },
            { label: 'Contato', anchor: '#contato' }
        ],
        copyright: 'RushConnect Consultoria. Todos os direitos reservados.',
        hostedOn: 'GitHub Pages'
    }
};

// Exportar para uso em módulos (se necessário no futuro)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteData;
}
