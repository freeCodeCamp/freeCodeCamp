# Як додати тести Cypress

При внесенні змін до JavaScript, CSS або HTML, які можуть змінити функціональність або макет сторінки, важливо додати відповідні інтеграційні тести [Cypress](https://docs.cypress.io).

Щоб дізнатися, як писати тести Cypress, або «специфікації», будь ласка, зверніться до офіційної [документації Cypress](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html).

## Куди додати тест

- Тести Cypress знаходяться в каталозі `./cypress`.

- Тести Cypress для модуля навчальної програми знаходяться у відповідному каталозі навчальної програми, тобто `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## Як проводити тести

> [!NOTE] Якщо ви використовуєте Gitpod, див. [налаштування Cypress-Gitpod](how-to-add-cypress-tests.md#cypress-gitpod-setup)

### 1. Переконайтеся, що MongoDB і клієнтські програми запущені

- [Запустіть MongoDB і заповнiть базу даних](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Запустіть клієнтський застосунок freeCodeCamp і сервер API](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Запустіть тести Cypress

Щоб запустити тести кінцевої збірки, замініть `dev` на `prd` нижче.

- Щоб запустити всі тести в каталозі `./cypress`:

  ```bash
  pnpm run cypress:dev:run
  ```

- Щоб запустити один тест:

  ```bash
  pnpm run cypress run --spec=cypress/<path_to_test_file>
  ```

  Наприклад:

  ```bash
  pnpm run cypress run --spec=cypress/e2e/default/landing.ts
  ```

- Щоб створити збірку розробки, запустіть сервер розробки і виконайте всі наявні тести cypress:

  ```bash
  pnpm run e2e:dev:run
  ```

## Налаштування Cypress-Gitpod

### 1. Переконайтеся, що середовище розробки запущене

Якщо запуск середовища Gitpod не розробив середовище автоматично:

- Дотримуйтесь [посібнику з налаштування MongoDB](https://www.mongodb.com/basics/get-started).
- Створіть конфігураційний файл.

```bash
pnpm run create:shared
```

- Заповніть базу даних

```bash
pnpm run seed
```

- Розробіть сервер та клієнта

```bash
pnpm run develop
```

### 2. Встановіть інструменти збірки Cypress

```bash
pnpm run cypress:install-build-tools
```

- Якщо керований в терміналі, виберіть розкладку клавіатури за мовою/регіоном

Тепер [Cypress можна запустити](how-to-add-cypress-tests.md#_2-run-the-cypress-tests)
