# Як додати тести Playwright

## Installation

Щоб встановити Playwright:

```console
pnpm run playwright:install-build-tools
```

Або ж ви можете дотримуватись офіційної документації:

Щоб встановити та налаштувати Playwright на своїй машині, див. [документацію](https://playwright.dev/docs/intro#installing-playwright)

Щоб дізнатися, як писати тести Playwright, або «специфікації», зверніться до офіційної [документації Playwright](https://playwright.dev/docs/writing-tests).

## Куди додати тест

- Тести Playwright знаходяться в каталозі `./e2e`.

- Файли тестів Playwright завжди мають розширення `.spec.ts`.

## Best Practices for writing e2e tests

 This section will explain in detail about best practices for writing and documenting E2E tests based on playwright documentation and our community code-style.

### - Identifying a DOM element

  Always use the `data-playwright-test-label` attribute to identify DOM elements. This attribute is used to identify elements in the DOM for testing with playwright only. It is not used for styling or any other purpose.

  Наприклад:

  ```html
  <div data-playwright-test-label="landing-page-figure">
    <img src="..." alt="..." />
  </div>
  ```

  Make sure you use the getByTestId method to identify the element in the test file.

  Наприклад:

  ```ts
  const landingPageFigure = page.getByTestId('landing-page-figure');
  ```

### - Imports

  Always start with necessary imports at the beginning of the file.

  Наприклад:

  ```ts
  import { test, expect, type Page } from '@playwright/test';
  ```

### - Constants

  Define any constant elements, data sets, or configurations used throughout your tests for easy reference.

  For example:

  ```ts
  const landingPageElements = { ... };
  const superBlocks = [ ... ];
  ```

### - Shared Context

 If tests depend on a shared context (like a loaded web page), use beforeAll and afterAll hooks to set up and tear down that context.

  For example:

  ```ts
  let page: Page;

  beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  afterAll(async () => {
    await page.close();
  });
  ```

### - Descriptive test names

 Each test block should have a clear and concise name describing exactly what it's testing.

  For example:

  ```ts
  test('The component landing-top renders correctly', async ({ page }) => {
    ...
  });
  ```

### - Human readable assertions

  Each assertion should be as human readable as possible. This makes it easier to understand what the test is doing and what it's expecting.

  For example:

  ```ts
  await expect(landingHeading1).toHaveText('Learn to code — for free.');
  ```

### - Keep it DRY

  Make sure that the tests are not repeating the same code over and over again. If you find yourself repeating the same code, consider refactoring it as a loop or a function.

  For example:

  ```ts
  for (const logo of await logos.all()) {
    await expect(logo).toBeVisible();
  }
  ```

### - Tests for mobile screens

  Use the 'isMobile' argument to run tests that incude logic that varies for mobile screens.

  For example:

  ```ts
  test('The campers landing page figure is visible on desktop and hidden on mobile view', async ({isMobile}) => 
  {
    const landingPageImage = page.getByTestId('landing-page-figure');

    if (isMobile) {
      await expect(landingPageImage).toBeHidden();
    } else {
      await expect(landingPageImage).toBeVisible();
    }
  });
```

### - Group related tests

  Group related tests together using describe blocks. This makes it easier to understand what the tests are doing and what they're testing.

  For example:

  ```ts
  describe('The campers landing page', () => {
    test('The campers landing page figure is visible on desktop and hidden on mobile view', async ({isMobile}) => 
    {
      ...
    });

    test('The campers landing page figure has the correct image', async () => {
      ...
    });
  });
  ```


## Як проводити тести

### 1. Переконайтеся, що MongoDB і клієнтські програми запущені

- [Запустіть MongoDB і заповнiть базу даних](how-to-setup-**freecodecamp**-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Запустіть клієнтський застосунок freeCodeCamp і сервер API](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Запустіть тести Playwright

Щоб запустити тести Playwright, зверніть увагу на інформацію нижче

- Переконайтесь, що перейшли до репозиторію e2e:

  ```console
  cd e2e
  ```

- Щоб запустити тести в режимі помічника UI:

  ```console
  npx playwright test --ui
  ```

- Щоб запустити один тест:

  ```console
  npx playwright test <filename>
  ```

  For example:

  ```console
  npx playwright test landing-page.spec.ts
  ```

- Щоб запустити набір файлів тестів у відповідних папках:

  ```console
  npx playwright test <pathToFolder1> <pathToFolder2>
  ```

  For example:

  ```console
  npx playwright test tests/todo-page/ tests/landing-page/
  ```

- Щоб запустити тест із заголовком:

  ```console
  npx playwright test -g <title>
  ```

  For example:

  ```console
  npx playwright test -g "add a todo item"
  ```

### 3. Налагодження тестів

Оскільки Playwright працює в Node.js, його можна налагодити за допомогою власного налагоджувача. Наприклад, використавши console.log або в IDE

- Налагодження всіх тестів:

  ```console
  npx playwright test --debug
  ```

- Налагодження одного файлу тесту:

  ```console
  npx playwright test example.spec.ts --debug
  ```

### 4. Формування звіту про тести

HTML Reporter надає повний звіт про ваші тести, що дає змогу фільтрувати звіт за браузерами, пройденими тестами, проваленими тестами, пропущеними тестами та ненадійними тестами.

```console
npx playwright show-report 
```

### 5. Розв’язання проблем розробки

Playwright, як правило, є інструментом з дуже малим шансом на помилку. Помічник вже налаштував тести для виконання на машинах з усіма операційними системами, включно з найважливішими дистрибутивами Windows, MacOS і Linux.

- (MacOs та Linux) Якщо запуск Playwright призводить до помилки через залежності ядра, запустіть цю команду:

  ```console
  pnpm run playwright:install-build-tools-linux
  ```

- Поширена помилка в Playwright виглядає так:

  ```console
    Error: page.goto: Could not connect: Connection refused
    =========================== logs ===========================
    navigating to "https://127.0.0.1:8000/", waiting until "load"
    ============================================================  
  ```

  Цю помилку можна виправити за допомогою таких кроків:

  1. **Перевірте URL:** переконайтесь, що URL, на який ви намагаєтесь перейти, правильний та відформатований. Переконайтесь, що в посиланні немає помилок.

  2. **Стан сервера:** перевірте, чи сервер працює та доступний. Ви можете зіткнутися з цією помилкою, якщо сервер не працює або недоступний.

  3. **Доступність порту:** переконайтесь, що порт, згаданий в URL (у цьому випадку 8000) правильний та доступний для використання. Переконайтеся, що жоден інший процес не використовує цей порт.

  4. **Брандмауер та безпечне програмне забезпечення:** брандмауери та безпечне програмне забезпечення іноді можуть блокувати підключення до певних портів. Перевірте налаштування брандмауера, щоб переконатися, що порт дозволений.

  5. **Підключення до мережі:** переконайтесь, що ваша система з’єднана з мережею та може отримати доступ до зовнішніх ресурсів.

- Ще одна поширена помилка в Playwright виглядає так:

  ```console
    Protocol error (Network.getResponseBody): Request content was evicted from inspector cache
  ```

  1. Мережевий запит було зроблено за допомогою методу, який не містить тіла відповіді (наприклад, HEAD або CONNECT).
  2. Мережевий запит було зроблено через безпечне з’єднання (HTTPS), а тіло відповіді недоступне з міркувань безпеки.
  3. Мережевий запит зроблено стороннім ресурсом (наприклад, рекламою чи пікселем відстеження), який не контролюється сценарієм.
  4. Мережевий запит було зроблено сценарієм, який було призупинено або зупинено до отримання відповіді.

**Для отримання додаткової інформації відвідайте офіційну документацію.**

## Налаштування Playwright-Gitpod

### 1. Переконайтеся, що середовище розробки запущене

Якщо запуск середовища Gitpod не розробив середовище автоматично:

- Дотримуйтесь [посібнику з налаштування MongoDB](https://www.mongodb.com/basics/get-started).

- Створіть .env

  ```console
  cp sample.env .env
  ```

- Створіть конфігураційний файл.

  ```console
  pnpm run create:shared
  ```

- Заповніть базу даних

  ```console
  pnpm run seed
  ```

- Розробіть сервер та клієнта

  ```console
  pnpm run develop
  ```

### 2. Встановіть інструменти збірки Playwright

Щоб встановити необхідні залежності для запуску Playwright, виконайте цю команду:

```console
pnpm run playwright:install-build-tools
```

### 3. Запустіть тести Playwright на Gitpod

Щоб запустити всі тести Playwright, виконайте цю команду:

```console
npx playwright test
```
