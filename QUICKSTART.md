# ⚡ Quick Start - RushConnect Consultoria v2.0

## Comece em 2 minutos

### 1️⃣ Entenda a Estrutura
```
┌─────────────────────────────────────────────┐
│  index.html   → Estrutura (HTML semântico)  │
│  style.css    → Visual (estilos)            │
│  script.js    → Comportamento (JS)          │
│  data.js      → Conteúdo (textos, métricas)│ ← EDITE AQUI!
└─────────────────────────────────────────────┘
```

### 2️⃣ Mude Algo em data.js
```javascript
// Abra data.js e procure por:
const siteData = {
    contact: {
        email: 'seu@email.com',  // ← MUDE AQUI
        phone: '+55629999999999'  // ← OU AQUI
    }
}
```

### 3️⃣ Recarregue a Página
Dados atualizados em **TODOS** os lugares automaticamente! ✨

---

## 📋 Tarefas Comuns (1 minuto cada)

### Atualizar Telefone
```javascript
// data.js
contact: {
    phone: '+55629999999999',      // ← Mude
    phoneDisplay: '(62) 9 9999-9999'
}
```

### Adicionar Depoimento
```javascript
// data.js
testimonials: {
    list: [
        // ... existentes
        {
            text: 'Novo depoimento aqui',
            author: 'Nome',
            role: 'Cargo',
            rating: 5
        }
    ]
}
```

### Novo Serviço
```javascript
// data.js
services: {
    list: [
        // ... existentes
        {
            title: 'Novo Serviço',
            description: 'Descrição',
            icon: 'star',
            cta: 'Botão'
        }
    ]
}
```

### Atualizar Métrica
```javascript
// data.js
metrics: {
    list: [
        {
            value: '100+',  // ← Mude de 20+ para 100+
            label: 'Projetos'
        }
    ]
}
```

---

## 🔍 Como Testar

```javascript
// F12 → Console do navegador

// Ver todos os dados
console.log(siteData);

// Mudar algo
siteData.company.name = 'Teste';

// Re-renderizar
renderAllContent();

// Viu mudar na página? ✅
```

---

## 📚 Documentação Completa

| Doc | O que tem | Quando ler |
|-----|----------|-----------|
| **README.md** | Visão geral | Primeira vez |
| **ARCHITECTURE.md** | Explicação técnica | Entender profundo |
| **USAGE.md** | 8 tarefas práticas | Quando precisa fazer algo |
| **DELIVERY.md** | Checklist de entrega | Validação |

---

## 🚀 Checklist Básico

- [ ] Abri data.js
- [ ] Entendi que tudo está em `siteData`
- [ ] Testei mudar algo no console
- [ ] Recarreguei a página
- [ ] Vi a mudança aparecer
- [ ] Estou pronto! ✅

---

**Pronto?** Abra `data.js` e comece! 🎉
