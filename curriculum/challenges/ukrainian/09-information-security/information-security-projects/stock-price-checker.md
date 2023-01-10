---
id: 587d824a367417b2b2512c44
title: Перевірка ціни на ринку акцій
challengeType: 4
forumTopicId: 301572
dashedName: stock-price-checker
---

# --description--

Створіть повний пакет додатку JavaScript, який функціонально схожий до <a href="https://stock-price-checker.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://stock-price-checker.freecodecamp.rocks/</a>.

Оскільки всі надійні API цін на акції вимагають API-ключа, ми створили обхідний шлях. Використайте <a href="https://stock-price-checker-proxy.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://stock-price-checker-proxy.freecodecamp.rocks/</a>, щоб отримати актуальну інформацію про ціни на акції без необхідності підписуватись на власний ключ.

Робота над цим проєктом передбачає написання коду за допомогою одного з наступних методів:

-   Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-project-stockchecker/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте свій проєкт локально.
-   Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-stockchecker" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання свого проєкту.
-   Для виконання проєкту використайте конструктор сайту на власний вибір. Переконайтеся, що приєднали усі файли з нашого репозиторію GitHub.

Якщо ви використовуєте Replit, виконайте наступні кроки для налаштування проєкту:

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.

Після завершення переконайтеся, що демоверсія проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту в полі «Посилання на рішення». За бажанням введіть посилання на початковий код проєкту в полі «Посилання на GitHub».

# --instructions--

1.  Встановіть `NODE_ENV` на `test` без лапок та встановіть `DB` на свій рядок з'єднання MongoDB
2.  Завершіть проєкт в `routes/api.js` або створивши обробник/контролер
3.  Ви додаватимете будь-які функції безпеки до `server.js`
4.  Ви створюватимете усі функціональні тести в `tests/2_functional-tests.js`

**Примітка** конфіденційності: згідно з вимогою, що на IP приймається лише одне вподобання, вам доведеться зберігати IP адреси. Важливо дотримуватися законів про конфіденційність даних, як-от загального регламенту про захист даних. Один із варіантів – отримати дозвіл на збереження даних користувача, однак все ж простіше зробити їх анонімними. Не забудьте зробити ваші IP адреси анонімними, перш ніж зберігати їх до бази даних у цьому завданні. Для цього ви можете хешувати дані, скоротити їх чи просто змінити частину IP адреси на 0.

Напишіть наступні тести в `tests/2_functional-tests.js`:

-   Перегляд однієї акції: запит GET до `/api/stock-prices/`
-   Перегляд однієї акції та вподобання: запит GET до `/api/stock-prices/`
-   Перегляд тієї самої акції та знову вподобання: запит GET до `/api/stock-prices/`
-   Перегляд двох акцій: запит GET до `/api/stock-prices/`
-   Перегляд двох акцій та вподобання: запит GET до `/api/stock-prices/`

# --hints--

Ви можете надати власний проєкт, а не URL-адресу прикладу.

```js
(getUserInput) => {
  assert(
    !/.*\/stock-price-checker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

Ви повинні налаштувати політику безпеки вмісту так, щоб дозволити завантаження скриптів та CSS лише зі свого сервера.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("script-src 'self'")
  );
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("style-src 'self'")
  );
};
```

Ви можете надіслати запит `GET` до `/api/stock-prices`, передаючи символ акції NASDAQ в параметр запиту `stock`. Повернений об'єкт міститиме властивість під назвою `stockData`.

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  assert.property(parsed, 'stockData');
};
```

Властивість `stockData` містить символ `stock` як рядок, `price` як число та `likes` як число.

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker.price, 'number');
  assert.typeOf(ticker.likes, 'number');
  assert.typeOf(ticker.stock, 'string');
};
```

Ви також можете передати поле `like` як `true` (булеве), щоб ваше вподобання було додано до акцій. Приймається лише одне вподобання на IP.

```js

```

Якщо ви передасте 2 акції, то поверненим значенням буде масив з інформацією про обидві акції. Замість `likes` буде показано `rel_likes` (різниця між вподобаннями на обох акціях) для обох об'єктів `stockData`.

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG&stock=MSFT'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker, 'array');
  assert.property(ticker[0], 'rel_likes');
  assert.property(ticker[1], 'rel_likes');
};
```

Усі 5 функціональних тестів завершено та успішно пройдено.

```js
async (getUserInput) => {
  const tests = await fetch(getUserInput('url') + '/_api/get-tests');
  const parsed = await tests.json();
  assert.isTrue(parsed.length >= 5);
  parsed.forEach((test) => {
    assert.equal(test.state, 'passed');
  });
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
