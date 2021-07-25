# Como adicionar testes Cypress

Quando estiver realizando alterações em JavaScript, CSS ou HTML que podem mudar a funcionalidade ou aparência de uma página, é importante incluir os testes de integração [Cypress](https://docs.cypress.io) correspondentes.

Para aprender como escrever testes Cypress ou 'specs', por favor confira a [documentação](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) oficial do Cypress.

> Nota: Quando estiver escrevendo testes para o freeCodeCamp, lembre-se de adicionar `/* global cy */` ao topo do arquivo para evitar complicações com ESLint.

## Onde adicionar um teste

- Testes Cypress estão no diretório `./cypress`.

- Testes do Cypress para um módulo do currículo estão no diretório do currículo correspondente, ou seja, `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## Como executar testes

> [!NOTE] Se estiver usando GitPod, por favor veja essa [configuração sobre Cypress-GitPod](/how-to-add-cypress-tests#cypress-gitpod-setup)

### 1. Veja se as aplicações de cliente e MongoDB estão executando

- [Inicie o MongoDB e crie o banco de dados](/how-to-setup-freecodecamp-locally#step-3-start-mongodb-and-seed-the-database)

- [Inicie também a aplicação de cliente freeCodeCamp e o servidor API](/how-to-setup-freecodecamp-locally#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Execute os testes do Cypress

Para executar testes usando compilações de produção, substitua `dev` por `prd` abaixo.

- Para executar todos os testes no diretório `./cypress`:

  ```console
  npm run cypress:dev:run
  ```

- Para executar um único teste:

  ```console
  npm run cypress:dev:run -- --spec=cypress/pathToYourSpec/youSpecFileName.js
  ```

- Para criar uma versão de compilação, inicie o servidor de desenvolvimento e execute todos os testes cypress contínuos e funcionais existentes:

  ```console
  npm run e2e:dev:run
  ```

## Configuração do Cypress-GitPod

### 1. Certifique-se de estar na _Feature Preview_ do GitPod _a partir de 02/01/2021_

- Visite [GitPod Docs - Feature Preview](https://www.gitpod.io/docs/feature-preview/) para ver como ativar a _Feature Preview_

### 2. Certifique-se que o ambiente de desenvolvimento está em execução

Se o ambiente GitPod não foi criado automaticamente:

- Inicie a base de dados

```console
mongod
```

- Crie a base de dados

```console
npm run seed
```

- Desenvolva o servidor e o cliente

```console
npm run develop
```

### 3. Instale ferramentas de compilação do Cypress

```console
npm run cypress:install-build-tools
```

- Quando solicitado no terminal, selecione o layout do seu teclado por idioma/área

Agora, [Cypress pode ser executado](/how-to-add-cypress-tests#_2-run-the-cypress-tests)
