# Як додати тести Playwright

## Встановлення

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

## Найкращі практики для написання тестів e2e

 Цей розділ детально пояснить найкращі практики написання та документування тестів E2E на основі документації Playwright та кодового стилю нашої спільноти.

### - Визначення елемента DOM

  Завжди використовуйте атрибут `data-playwright-test-label`, щоб ідентифікувати елементи DOM. Цей атрибут використовують, щоб ідентифікувати елементи в DOM лише для тестування Playwright. Його не використовують для стилізації або будь-чого іншого.

  Наприклад:

  ```html
  <div data-playwright-test-label="landing-page-figure">
    <img src="..." alt="..." />
  </div>
  ```

  Переконайтесь, що використовуєте метод getByTestId, щоб ідентифікувати елементи в тестовому файлі.

  Наприклад:

  ```ts
  const landingPageFigure = page.getByTestId('landing-page-figure');
  ```

### - Імпорт

  Завжди починайте необхідні імпорти на початку файлу.

  Наприклад:

  ```ts
  import { test, expect, type Page } from '@playwright/test';
  ```

### - Константи

  Визначте будь-які константні елементи, набори даних чи конфігурації, використані в тестах, для спрощеного посилання.

  Наприклад:

  ```ts
  const landingPageElements = { ... };
  const superBlocks = [ ... ];
  ```

### - Спільний контекст

 Якщо тести залежать від спільного контексту (наприклад, завантаженої сторінки), використайте хуки beforeAll та afterAll, щоб налаштувати та розбити контекст.

  Наприклад:

  ```ts
  let page: Page;

  beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  afterAll(async () => {
    await page.close();
  });
  ```

### - Описові назви тестів

 Кожен тестовий блок повинен мати чітку і лаконічну назву, описуючи саме те, що перевіряє.

  Наприклад:

  ```ts
  test('The component landing-top renders correctly', async ({ page }) => {
    ...
  });
  ```

### - Людиносприйнятні твердження

  Кожне твердження має бути максимально розбірливим для людини. Таким чином простіше зрозуміти, що робить тест та чого очікувати.

  Наприклад:

  ```ts
  await expect(landingHeading1).toHaveText('Learn to code — for free.');
  ```

### - Дотримуйтесь принципу DRY

  Переконайтеся, що тести не повторюють однаковий код знову і знову. Якщо однаковий код повторюється, реорганізуйте його як цикл або функцію.

  Наприклад:

  ```ts
  for (const logo of await logos.all()) {
    await expect(logo).toBeVisible();
  }
  ```

### - Тести для мобільних екранів

  Використайте аргумент isMobile, щоб запустити тести, які містять логіку, що змінюється для мобільних екранів.

  Наприклад:

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

### - Групові тести

  Згрупуйте пов’язані тести, використовуючи описові блоки. Таким чином простіше зрозуміти, що роблять тести та чого очікувати.

  Наприклад:

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

- [Запустіть MongoDB і заповнiть базу даних](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

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

  Наприклад:

  ```console
  npx playwright test landing-page.spec.ts
  ```

- Щоб запустити набір файлів тестів у відповідних папках:

  ```console
  npx playwright test <pathToFolder1> <pathToFolder2>
  ```

  Наприклад:

  ```console
  npx playwright test tests/todo-page/ tests/landing-page/
  ```

- Щоб запустити тест із заголовком:

  ```console
  npx playwright test -g <title>
  ```

  Наприклад:

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
