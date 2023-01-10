# Як додати тести Cypress

При внесенні змін до JavaScript, CSS або HTML, які можуть змінити функціональність або макет сторінки, важливо додати відповідні інтеграційні тести  [Cypress](https://docs.cypress.io).

Щоб дізнатися, як писати тести Cypress, або «специфікації», будь ласка, зверніться до офіційної [документації Cypress](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html).

## Куди додати тест

- Тести Cypress знаходяться у директорії `./cypress`.

- Тести Cypress для модуля навчальної програми знаходяться у відповідній директорії навчальної програми, тобто `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## Як проводити тести

> [!NOTE] Якщо ви використовуєте GitPod, див. [налаштування Cypress-GitPod](how-to-add-cypress-tests.md#cypress-gitpod-setup)

### 1. Переконайтеся, що MongoDB і клієнтські програми запущені

- [Запустіть MongoDB і заповнiть базу даних](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Запустіть клієнтський додаток freeCodeCamp і сервер API](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Запустіть тести cypress

Щоб запустити тести продакшн збірок, замініть `dev` на `prd` нижче.

- Щоб запустити всі тести у директорії `./cypress`:

  ```console
  npm run cypress:dev:run
  ```

- Для запуску одного тесту:

  ```console
  npm run cypress -- run --spec=cypress/<path_to_test_file>
  ```

  Наприклад:

  ```console
  npm run cypress -- run --spec=cypress/e2e/default/landing.js
  ```

- Щоб створити збірку розробки, запустіть сервер розробки і виконайте всі наявні тести cypress:

  ```console
  npm run e2e:dev:run
  ```

## Налаштування Cypress-GitPod

### 1. Переконайтеся, що середовище розробки запущене

Якщо запуск середовища GitPod не призвів до автоматичної розробки середовища:

- Запустіть базу даних

```console
mongod
```

- Заповніть базу даних

```console
npm run seed
```

- Розробіть сервер та клієнта

```console
npm run develop
```

### 2. Встановіть інструменти збірки Cypress

```console
npm run cypress:install-build-tools
```

- Якщо керований в терміналі, виберіть розкладку клавіатури за мовою/регіоном

Тепер [Cypress можна запустити](how-to-add-cypress-tests.md#_2-run-the-cypress-tests)
