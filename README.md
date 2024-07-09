# Gym Node API

Bem-vindo ao Gym Node API! Este projeto é uma aplicação desenvolvida em Node.js para gerenciar academias e check-ins de usuários, inspirado no modelo de negócios do GymPass. Este repositório faz parte dos meus estudos e prática de desenvolvimento de software, focando em requisitos funcionais, regras de negócio e requisitos não-funcionais.

## Descrição

O Gym Node API é uma aplicação robusta que permite aos usuários se cadastrarem, realizarem check-ins em academias próximas e gerenciarem seus perfis e histórico de atividades. Administradores têm a capacidade de validar check-ins e cadastrar novas academias, garantindo uma experiência de usuário segura e eficiente.

## Tecnologias Utilizadas

- **Node.js**: Plataforma JavaScript para construção do backend.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Fastify**: Framework web rápido e de baixa sobrecarga para Node.js.
- **Prisma**: ORM para Node.js e TypeScript.
- **PostgreSQL**: Banco de dados relacional para persistência de dados.
- **JWT (JSON Web Token)**: Para autenticação segura de usuários.
- **bcryptjs**: Para criptografia de senhas.

## Testes

Nesse projeto foram implementados testes unitários e testes de integração (E2E).

### Testes Unitários

Verificar se cada unidade individual do código (por exemplo, funções ou métodos) está funcionando corretamente.

```bash
yarn test
```

### Testes End-to-End (E2E)

Validar o fluxo completo da aplicação, simulando interações reais de usuários.

```bash
yarn test:e2e
```

### Testes de Cobertura

Medir a quantidade de código coberto pelos testes, garantindo que as partes críticas do código sejam verificadas.

```bash
yarn test:coverage
```

## Instalação

Para começar a usar o Gym Node API, siga os passos abaixo:

```bash
git clone git@github.com:lucascordeiroaraujo/gym-node-api.git
cd gym-node-api
yarn
yarn server
yarn start:dev
```

## Requisitos Funcionais

- Deve ser possível se cadastrar;
- Deve ser possível se autenticar;
- Deve ser possível obter o perfil de um usuário logado;
- Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- Deve ser possível o usuário obter o seu histórico de check-ins;
- Deve ser possível o usuário buscar academias próximas (até 10km);
- Deve ser possível o usuário buscar academias pelo nome;
- Deve ser possível o usuário realizar check-in em uma academia;
- Deve ser possível validar o check-in de um usuário;
- Deve ser possível cadastrar uma academia;

## Regras de Negócio

- O usuário não deve poder se cadastrar com um e-mail duplicado;
- O usuário não pode fazer 2 check-ins no mesmo dia;
- O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- O check-in só pode ser validado até 20 minutos após ser criado;
- O check-in só pode ser validado por administradores;
- A academia só pode ser cadastrada por administradores;

## Requisitos Não-Funcionais

- A senha do usuário precisa estar criptografada;
- Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- Todas listas de dados precisam estar paginadas com 20 itens por página;
- O usuário deve ser identificado por um JWT (JSON Web Token);
