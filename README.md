<p align="center">
  <a href="https://imersao.fullcycle.com.br/evento/" target="blank"><img src="https://events-fullcycle.s3.amazonaws.com/events-fullcycle/media/images/b68b976e7d1f4e04b70b1507bffeda28.png"/></a>
</p>

## Desafio Nest.js
### FASE 02
#### Informações do desafio
Neste desafio, você deve criar uma aplicação Nest.js com Docker que rode na porta 3000.


Esta aplicação precisa expor 2 rotas de API Rest:

- Listar assets - GET /api/assets
- Criar assets - POST /api/assets
- Criar orders - POST /api/orders
- Listar orders - GET /api/orders

Um asset tem os seguintes dados:

- id (é informado pelo usuário)
- symbol (símbolo do ativo)

Uma order tem os seguintes dados:

- id automático do banco
- asset_id (relacionado com Asset)
- price
- status (open, pending, closed) (não pode deixar mandar o status no POST)

O ORM a ser usado é o Prisma ORM e o banco de dados precisa ser o Mongo, image: bitnami/mongodb:5.0.17


Crie o arquivo api.http para fazer as chamadas HTTP. Ao rodar o docker compose up já precisa subir logo de cara o projeto com o Nest.js rodando + o MongoDB.


Bons estudos!


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

