# Como adicionar testes Cypress

Quando estiver realizando alterações em JavaScript, CSS ou HTML que podem mudar a funcionalidade ou aparência de uma página, é importante incluir os testes de integração [Cypress](https://docs.cypress.io) correspondentes.

Para aprender como escrever testes Cypress ou 'specs', por favor confira a [documentação](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) oficial do Cypress.

## Onde adicionar um teste

- Testes Cypress estão no diretório `./cypress`.

- Testes do Cypress para um módulo do currículo estão no diretório do currículo correspondente, ou seja, `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## Como executar testes

> [!NOTE] Se estiver usando Gitpod, veja essa [configuração sobre Cypress-Gitpod](how-to-add-cypress-tests.md#cypress-gitpod-setup)

### 1. Veja se as aplicações de cliente e MongoDB estão executando

- [Inicie o MongoDB e crie o banco de dados](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Inicie também a aplicação de cliente freeCodeCamp e o servidor API](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Execute os testes do Cypress

Para executar testes usando compilações de produção, substitua `dev` por `prd` abaixo.

- Para executar todos os testes no diretório `./cypress`:

  ```bash
  pnpm run cypress:dev:run
  ```

- Para executar um único teste:

  ```bash
  pnpm run cypress run --spec=cypress/<caminho_para_o_arquivo_de_teste>
  ```

  Por exemplo:

  ```bash
  pnpm run cypress run --spec=cypress/e2e/default/landing.ts
  ```

- Para criar uma versão de compilação, inicie o servidor de desenvolvimento e execute todos os testes cypress contínuos e funcionais existentes:

  ```bash
  pnpm run e2e:dev:run
  ```

## Configuração do Cypress-Gitpod

### 1. Certifique-se que o ambiente de desenvolvimento está em execução

Se o ambiente Gitpod não foi criado automaticamente:

- Siga o [guia de instalação do MongoDB](https://www.mongodb.com/basics/get-started).
- Crie um arquivo de configuração.

```bash
pnpm run create:shared
```

- Crie a base de dados

```bash
pnpm run seed
```

- Desenvolva o servidor e o client

```bash
pnpm run develop
```

### 2. Instale as ferramentas de compilação do Cypress

```bash
pnpm run cypress:install-build-tools
```

- Quando solicitado no terminal, selecione o layout do seu teclado por idioma/área

Agora, [o Cypress pode ser executado](how-to-add-cypress-tests.md#_2-run-the-cypress-tests)

## Troubleshooting

### Unable to Connect to Port 8000

If Cypress fails to run with the following error:

```
CypressError: `cy.visit()` failed trying to load:

http://localhost:3000/signin

We attempted to make an http request to this URL but the request failed without a response.

We received this error at the network level:

  > Error: connect ECONNREFUSED 127.0.0.1:8000

Common situations why this would fail:
  - you don't have internet access
  - you forgot to run / boot your web server
  - your web server isn't accessible
  - you have weird network configuration settings on your computer

This error occurred while creating the session. Because the session setup failed, we failed the test.
```

You can resolve the issue by:
- Going to the root `package.json` file and adding `--host 0.0.0.0` to the `develop:client` command:
    ```json
    "scripts": {
      "develop:client": "cd ./client && pnpm run develop --host 0.0.0.0"
    }
    ```
- Then, re-running `pnpm run develop`
