# 🐶 FindAFriend API

API desenvolvida como parte do **Desafio 03** da trilha de Node.js da [Rocketseat](https://www.rocketseat.com.br/), onde estou colocando em prática os conceitos de **Node.js**, **SOLID**, **princípios de Clean Architecture**, e testes automatizados.

Esta API tem como objetivo facilitar a adoção de pets, conectando organizações (ONGs) a pessoas interessadas em adotar.

## 🚀 Funcionalidades

- Cadastro de pets
- Listagem de pets disponíveis por cidade
- Filtros por características dos pets
- Visualização de detalhes de um pet
- Cadastro de ORGs (organizações)
- Login de ORGs (autenticação JWT)
- Pets vinculados a ORGs
- Integração via WhatsApp com a ORG para adoção

## 🧠 Conceitos aplicados

- Princípios do SOLID
- Clean Architecture
- Testes automatizados com Vitest
- Hash de senhas com Bcrypt
- Validação de dados com Zod
- Autenticação com JWT
- Prisma ORM e SQLite

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [Vitest](https://vitest.dev/)
- [Zod](https://github.com/colinhacks/zod)
- [JWT](https://jwt.io/)
- [Bcryptjs](https://github.com/dcodeIO/bcrypt.js)

## 📦 Instalação e uso

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/find-a-friend-api.git
cd find-a-friend-api

# Instale as dependências
npm install

# Gere o banco de dados local (SQLite)
npx prisma migrate dev

# Rode a aplicação
npm run dev
```

## 🧪 Rodando os testes

```bash
npm run test
```

Para rodar os testes com cobertura:

```bash
npm run test:coverage
```

## 📌 Regras de negócio

- Pets só podem ser cadastrados por ORGs autenticadas
- Para listar pets, a cidade é obrigatória
- Todos os filtros adicionais são opcionais
- Pets são associados diretamente à ORG que os cadastrou
- A adoção é feita fora da plataforma, via WhatsApp da ORG

---

## 🧑‍💻 Autor

Feito com 💜 por **Filipe** — esse projeto faz parte da minha jornada de aprendizado com a Rocketseat, focando em me tornar um desenvolvedor backend com domínio em arquitetura e boas práticas.

Se quiser trocar uma ideia, me chama no [LinkedIn](https://www.linkedin.com/in/filipe-brochier)!

---