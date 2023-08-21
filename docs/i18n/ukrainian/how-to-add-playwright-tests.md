# Як додати тести Playwright

## Встановлення:

To install Playwright run:

```console
pnpm run playwright:install-build-tools
```

Alternatively you can follow official documentation referenced below:

Щоб встановити та налаштувати Playwright на своїй машині, див. [документацію](https://playwright.dev/docs/intro#installing-playwright)

Щоб дізнатися, як писати тести Playwright, або «специфікації», зверніться до офіційної [документації Playwright](https://playwright.dev/docs/writing-tests).


## Куди додати тест

- Тести Playwright знаходяться в каталозі `./e2e`.

- Файли тестів Playwright завжди мають розширення `.spec.ts`.

## Як проводити тести


### 1. Переконайтеся, що MongoDB і клієнтські програми запущені

- [Запустіть MongoDB і заповнiть базу даних](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Запустіть клієнтський застосунок freeCodeCamp і сервер API](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Запустіть тести Playwright

Щоб запустити тести Playwright, зверніть увагу на інформацію нижче

- Make sure you navigate to the e2e repo first
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

- (MacOs and Linux) If running Playwright results in an error due to kernel dependencies, run the following command:

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
  pnpm run create:config
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