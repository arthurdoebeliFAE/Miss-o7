# API de Piadas - Microsserviço Educacional

## Visão Geral
Microsserviço backend educacional desenvolvido em Node.js com Express para ensinar conceitos fundamentais de servidores, endpoints e APIs REST através de uma aplicação prática e divertida de piadas.

## Objetivos do Projeto
- Compreender o funcionamento da lógica do lado do servidor
- Aprender a diferença entre servidor e endpoints
- Praticar criação de APIs REST
- Manipular dados em memória
- Estruturar respostas JSON

## Stack Tecnológico

### Backend
- **Node.js 20** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **TypeScript** - Tipagem estática
- **Armazenamento em memória** - Lista pré-definida de piadas

### Frontend
- **React 18** - Biblioteca UI
- **Vite** - Build tool
- **TanStack Query** - Gerenciamento de estado do servidor
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn UI** - Componentes acessíveis

## Arquitetura

### Estrutura de Dados
```typescript
interface Piada {
  id: number;
  texto: string;
  categoria: string;
}

interface Categoria {
  nome: string;
  descricao: string;
}
```

### Endpoints da API

1. **GET /api/piada**
   - Retorna uma piada aleatória de qualquer categoria
   - Resposta: `{ id, texto, categoria }`

2. **GET /api/piada/categoria/:categoria**
   - Retorna uma piada aleatória da categoria especificada
   - Parâmetros: categoria (trocadilhos, programacao, infantil)
   - Resposta: `{ id, texto, categoria }`

3. **GET /api/categorias**
   - Lista todas as categorias disponíveis
   - Resposta: `[{ nome, descricao }, ...]`

4. **GET /api/health**
   - Verifica status e uptime do servidor
   - Resposta: `{ status, uptime, timestamp }`

## Design System

### Paleta de Cores
- **Primary**: Purple (280° 70% 65%) - Profissional e divertido
- **Accent**: Amber (45° 95% 60%) - Estados de sucesso
- **Background**: Navy-charcoal (220° 20% 12%) no modo escuro
- **Surface**: Elevated (220° 18% 18%)

### Tipografia
- **Interface**: Inter - Moderna e legível
- **Código**: JetBrains Mono - Monospace para desenvolvedores

### Layout
- Single-page application
- Design responsivo (mobile-first)
- Duas colunas no desktop (40% docs + 60% teste)
- Componentes acessíveis (WCAG)

## Conceitos Educacionais

### Servidor vs Endpoint

**Servidor**: É o programa que está sempre executando, aguardando e processando requisições HTTP. No nosso caso, é a aplicação Express.js rodando na porta 5000. É a "casa" onde todos os endpoints vivem.

**Endpoint**: É uma rota específica dentro do servidor que executa uma ação particular. Por exemplo, `GET /api/piada` é um endpoint que retorna uma piada. Cada endpoint tem seu próprio método HTTP e caminho único.

**Analogia**: Se o servidor é um prédio, os endpoints são os apartamentos individuais. Cada apartamento tem um endereço específico e uma função própria.

## Estado Atual do Desenvolvimento

### ✅ Concluído
- [x] Definição de schemas TypeScript
- [x] Configuração do design system
- [x] Interface web completa e responsiva
- [x] Componentes React com Shadcn UI
- [x] Layout educacional com documentação visual
- [x] Estados de loading e erro

### 🚧 Em Progresso
- [ ] Implementação dos endpoints backend
- [ ] Lista de 15+ piadas em português
- [ ] Sistema de filtragem por categoria
- [ ] Validação de requisições

### 📋 Próximos Passos
- [ ] Integração frontend-backend
- [ ] Testes end-to-end
- [ ] README com instruções de uso
- [ ] Documentação da API

## Como Executar

```bash
# Instalar dependências (já instaladas via Replit)
npm install

# Executar em desenvolvimento
npm run dev

# O servidor estará disponível em:
# - Frontend: http://localhost:5000
# - API: http://localhost:5000/api/*
```

## Estrutura de Arquivos

```
├── client/               # Frontend React
│   ├── src/
│   │   ├── components/  # Componentes Shadcn UI
│   │   ├── pages/       # Páginas da aplicação
│   │   ├── lib/         # Utilitários
│   │   └── App.tsx      # Componente raiz
│   └── index.html       # HTML principal
├── server/              # Backend Express
│   ├── routes.ts        # Definição de rotas
│   ├── storage.ts       # Armazenamento em memória
│   └── index.ts         # Servidor Express
├── shared/              # Código compartilhado
│   └── schema.ts        # Schemas TypeScript
└── design_guidelines.md # Diretrizes de design

```

## Observações de Desenvolvimento

- Utiliza armazenamento em memória (MemStorage) para simplicidade educacional
- Todas as piadas são em português brasileiro
- Interface otimizada para aprendizado de conceitos backend
- Código documentado e de fácil compreensão
- Design focado em desenvolvedores aprendendo backend

## Recursos Educacionais

Este projeto é ideal para:
- Desenvolvedores iniciantes aprendendo backend
- Estudantes de ciência da computação
- Bootcamps e cursos de programação
- Portfolio de projetos práticos
- Demonstração de conceitos REST
