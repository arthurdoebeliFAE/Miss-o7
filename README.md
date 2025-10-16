# 🎭 API de Piadas - Microsserviço Educacional

> Aprenda conceitos fundamentais de backend através de uma API REST divertida

![Node.js](https://img.shields.io/badge/Node.js-20-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![React](https://img.shields.io/badge/React-18-blue)

## 📚 Sobre o Projeto

Este é um **microsserviço educacional** desenvolvido para ensinar conceitos fundamentais de desenvolvimento backend:
- 🖥️ **Servidores HTTP** - Como funcionam e como criar um
- 📍 **Endpoints REST** - Estruturação de rotas e métodos HTTP
- 🔄 **APIs JSON** - Manipulação e estruturação de dados
- 💾 **Armazenamento em memória** - Gerenciamento de dados sem banco de dados

O projeto contém **15 piadas** em português organizadas em **3 categorias** diferentes, servidas através de uma API REST completa com interface web interativa.

## ✨ Funcionalidades

### Backend (API REST)
- ✅ Retorna piadas aleatórias
- ✅ Filtra piadas por categoria
- ✅ Lista categorias disponíveis
- ✅ Health check do servidor
- ✅ Tratamento de erros completo
- ✅ Validação de requisições

### Frontend (Interface Web)
- ✅ Interface interativa para testar a API
- ✅ Documentação visual dos endpoints
- ✅ Filtro de categorias
- ✅ Exibição de resposta JSON
- ✅ Estados de loading e erro
- ✅ Design responsivo
- ✅ Modo escuro por padrão

## 🚀 Como Executar

### Pré-requisitos
- Node.js 20 ou superior
- npm ou yarn

### Instalação e Execução

```bash
# Clonar o repositório
git clone <url-do-repositorio>
cd api-piadas

# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev
```

O servidor estará disponível em `http://localhost:5000`

## 📡 Documentação da API

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### 1. Obter Piada Aleatória
```http
GET /api/piada
```

**Resposta de Sucesso (200)**
```json
{
  "id": 1,
  "texto": "Por que o livro de matemática se suicidou? Porque tinha muitos problemas!",
  "categoria": "trocadilhos"
}
```

---

#### 2. Obter Piada por Categoria
```http
GET /api/piada/categoria/:categoria
```

**Parâmetros**
- `categoria` (string): `trocadilhos`, `programacao`, ou `infantil`

**Resposta de Sucesso (200)**
```json
{
  "id": 6,
  "texto": "Por que programadores preferem o modo escuro? Porque a luz atrai bugs!",
  "categoria": "programacao"
}
```

**Resposta de Erro (404)**
```json
{
  "error": "Categoria não encontrada",
  "message": "Categoria \"teste\" não encontrada",
  "categoriasDisponiveis": ["trocadilhos", "programacao", "infantil"]
}
```

---

#### 3. Listar Categorias
```http
GET /api/categorias
```

**Resposta de Sucesso (200)**
```json
[
  {
    "nome": "trocadilhos",
    "descricao": "Piadas com jogos de palavras e duplo sentido"
  },
  {
    "nome": "programacao",
    "descricao": "Piadas sobre programação e tecnologia"
  },
  {
    "nome": "infantil",
    "descricao": "Piadas leves e divertidas para todas as idades"
  }
]
```

---

#### 4. Health Check
```http
GET /api/health
```

**Resposta de Sucesso (200)**
```json
{
  "status": "online",
  "uptime": 3600,
  "timestamp": "2025-10-15T12:00:00.000Z"
}
```

## 🧪 Testando a API

### Opção 1: Interface Web
Acesse `http://localhost:5000` no navegador e use a interface interativa.

### Opção 2: cURL

```bash
# Obter piada aleatória
curl http://localhost:5000/api/piada

# Obter piada de programação
curl http://localhost:5000/api/piada/categoria/programacao

# Listar categorias
curl http://localhost:5000/api/categorias

# Verificar status do servidor
curl http://localhost:5000/api/health
```

### Opção 3: JavaScript (fetch)

```javascript
// Obter piada aleatória
fetch('http://localhost:5000/api/piada')
  .then(res => res.json())
  .then(piada => console.log(piada.texto));

// Obter piada filtrada
fetch('http://localhost:5000/api/piada/categoria/trocadilhos')
  .then(res => res.json())
  .then(piada => console.log(piada));
```

### Opção 4: Postman / Insomnia
Importe as requisições ou crie manualmente usando as URLs acima.

## 🎓 Conceitos Aprendidos

### O que é um Servidor?

Um **servidor** é um programa que está sempre rodando, aguardando e processando requisições HTTP. 

No nosso projeto:
- É a aplicação **Express.js** configurada para escutar na porta 5000
- Ele é a "casa" onde todos os endpoints vivem
- Permanece ativo esperando receber requisições

### O que é um Endpoint?

Um **endpoint** é uma rota específica dentro do servidor que executa uma ação particular.

Exemplos no nosso projeto:
- `GET /api/piada` - retorna uma piada aleatória
- `GET /api/categorias` - lista as categorias
- `GET /api/health` - verifica o status do servidor

Cada endpoint tem:
- Um **método HTTP** (GET, POST, PUT, DELETE)
- Um **caminho único** (/api/piada)
- Uma **função específica** (retornar piada)

### 📖 Analogia

**Servidor = Prédio**
- Está sempre lá, funcionando
- Tem um endereço (localhost:5000)
- Contém vários apartamentos

**Endpoint = Apartamento**
- Tem um número/endereço específico (rota)
- Executa uma função particular
- Múltiplos apartamentos no mesmo prédio

## 🏗️ Estrutura do Projeto

```
api-piadas/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes Shadcn UI
│   │   ├── pages/         # Páginas (Home)
│   │   ├── lib/           # Utilitários
│   │   └── App.tsx        # App principal
│   └── index.html
├── server/                # Backend Express
│   ├── routes.ts         # Definição de rotas/endpoints
│   ├── storage.ts        # Armazenamento em memória
│   └── index.ts          # Configuração do servidor
├── shared/               # Código compartilhado
│   └── schema.ts         # Schemas TypeScript
├── design_guidelines.md  # Diretrizes de design
└── README.md            # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js 20** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **TypeScript** - Tipagem estática para JavaScript

### Frontend
- **React 18** - Biblioteca para interfaces
- **Vite** - Build tool rápido
- **TanStack Query** - Gerenciamento de estado do servidor
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn UI** - Componentes acessíveis e estilizados

## 📊 Categorias de Piadas

### 🎭 Trocadilhos
Piadas com jogos de palavras e duplo sentido

### 💻 Programação
Piadas sobre desenvolvimento de software e tecnologia

### 🎈 Infantil
Piadas leves e divertidas para todas as idades

## 🎯 Objetivos Educacionais

Este projeto foi criado para:

1. ✅ Entender a diferença entre **servidor** e **endpoint**
2. ✅ Aprender a criar uma **API REST** funcional
3. ✅ Praticar **manipulação de dados** em JavaScript
4. ✅ Compreender **requisições e respostas HTTP**
5. ✅ Estruturar **respostas JSON** adequadamente
6. ✅ Implementar **tratamento de erros** em APIs
7. ✅ Desenvolver uma **interface web** consumindo a API

## 💡 Próximos Passos

Desafios para expandir o projeto:

- [ ] Adicionar endpoint POST para criar novas piadas
- [ ] Implementar sistema de votação (like/dislike)
- [ ] Adicionar mais categorias
- [ ] Persistir dados em banco de dados
- [ ] Implementar paginação para listar todas as piadas
- [ ] Adicionar autenticação para criar piadas
- [ ] Criar testes automatizados
- [ ] Deploy em produção (Vercel, Railway, etc.)

## 📝 Licença

Este é um projeto educacional de código aberto. Sinta-se livre para usar, modificar e compartilhar.

## 👤 Autor

Projeto educacional desenvolvido para ensinar conceitos de backend e APIs REST.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
- Adicionar novas piadas
- Melhorar a documentação
- Reportar bugs
- Sugerir novas funcionalidades

---

**Divirta-se aprendendo! 🎉**
