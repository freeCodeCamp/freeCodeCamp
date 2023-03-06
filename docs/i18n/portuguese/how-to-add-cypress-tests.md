# Como adicionar testes Cypress

Quando estiver realizando alterações em JavaScript, CSS ou HTML que podem mudar a funcionalidade ou aparência de uma página, é importante incluir os testes de integração [Cypress](https://docs.cypress.io) correspondentes.

Para aprender como escrever testes Cypress ou 'specs', por favor confira a [documentação](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) oficial do Cypress.

## Onde adicionar um teste

- Testes Cypress estão no diretório `./cypress`.

- Testes do Cypress para um módulo do currículo estão no diretório do currículo correspondente, ou seja, `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## Como executar testes

> [!NOTE] Se estiver usando GitPod, por favor veja essa [configuração sobre Cypress-GitPod](how-to-add-cypress-tests.md#cypress-gitpod-setup)

### 1. Veja se as aplicações de cliente e MongoDB estão executando

- [Inicie o MongoDB e crie o banco de dados](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Inicie também a aplicação de cliente freeCodeCamp e o servidor API](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Execute os testes do Cypress

Para executar testes usando compilações de produção, substitua `dev` por `prd` abaixo.

- Para executar todos os testes no diretório `./cypress`:

  ```console
  pnpm run cypress:dev:run
  ```

- Para executar um único teste:

  ```console
  pnpm run cypress -- run --spec=cypress/<path_to_test_file>
  ```

  Por exemplo:

  ```console
  pnpm run cypress -- run --spec=cypress/e2e/default/landing.js
  ```

- Para criar uma versão de compilação, inicie o servidor de desenvolvimento e execute todos os testes cypress contínuos e funcionais existentes:

  ```console
  pnpm run e2e:dev:run
  ```

## Configuração do Cypress-GitPod

### 1. Certifique-se que o ambiente de desenvolvimento está em execução

Se o ambiente GitPod não foi criado automaticamente:

- Inicie a base de dados

```console
mongod
```

- Crie a base de dados

```console
pnpm run seed
```

- Desenvolva o servidor e o client

```console
pnpm run develop
```

### 2. Instale as ferramentas de compilação do Cypress

```console
pnpm run cypress:install-build-tools
```

- Quando solicitado no terminal, selecione o layout do seu teclado por idioma/área

Agora, [o Cypress pode ser executado](how-to-add-cypress-tests.md#_2-run-the-cypress-tests)
