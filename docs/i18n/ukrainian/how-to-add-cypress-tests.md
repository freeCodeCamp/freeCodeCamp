# Як додати тести Cypress

При внесенні змін до JavaScript, CSS або HTML, які можуть змінити функціональність або макет сторінки, важливо додати відповідні інтеграційні тести  [Cypress](https://docs.cypress.io).

Щоб дізнатися, як писати тести Cypress, або "специфікації", будь ласка, зверніться до офіційної [документації Cypress](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html).

## Where to add a test

- Тести Cypress знаходяться в каталозі `./cypress`.

- Тести Cypress для модуля навчальної програми знаходяться у відповідному каталозі навчальної програми, тобто `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## Як проводити тести

> [!NOTE] If using GitPod, please see [Cypress-GitPod Setup](how-to-add-cypress-tests#cypress-gitpod-setup)

### 1. Переконайтеся, що MongoDB і клієнтські програми запущені

- [Start MongoDB and seed the database](how-to-setup-freecodecamp-locally#step-3-start-mongodb-and-seed-the-database)

- [Start the freeCodeCamp client application and API server](how-to-setup-freecodecamp-locally#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Запустіть тести cypress

To run tests against production builds, replace `dev` with `prd` below.

- Щоб запустити всі тести в каталозі `./cypress`:

  ```console
  npm run cypress:dev:run
  ```

- Для запуску одного тесту:

  ```console
  npm run cypress:dev:run -- --spec=cypress/pathToYourSpec/youSpecFileName.js
  ```

- Щоб створити збірку розробки, запустіть сервер розробки і виконайте всі існуючі тести cypress:

  ```console
  npm run e2e:dev:run
  ```

## Налаштування Cypress-GitPod

### 1. Ensure Development Environment is Running

If starting the GitPod environment did not automatically develop the environment:

- Start the database

```console
mongod
```

- Seed the database

```console
npm run seed
```

- Develop the server and client

```console
npm run develop
```

### 2. Install Cypress Build Tools

```console
npm run cypress:install-build-tools
```

- When prompted in the terminal, select your keyboard layout by language/area

Now, [Cypress can be run](how-to-add-cypress-tests#_2-run-the-cypress-tests)
