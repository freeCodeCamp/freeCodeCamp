---
id: 587d824a367417b2b2512c44
title: Перевірка ціни на ринку акцій
challengeType: 4
forumTopicId: 301572
dashedName: stock-price-checker
---

# --description--

Напишіть повний пакет програми JavaScript, що функціонально подібний до цього: <https://stock-price-checker.freecodecamp.rocks/>.

Оскільки всі надійні API цін на акції вимагають API-ключа, ми створили обхідний шлях. Користуйтесь <https://stock-price-checker-proxy.freecodecamp.rocks/>, аби отримувати актуальну інформацію про ціни на акції без необхідності підписуватись на власний ключ.

При роботі над цим проєктом Ви будете писати код, використовуючи один із наступних методів:

-   Дублюйте [цей репозиторій GitHub](https://github.com/freeCodeCamp/boilerplate-project-stockchecker/) та завершіть свій проєкт локально.
-   Використовуйте [наш стартовий проєкт Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-stockchecker) для завершення Вашого проєкту.
-   Використовуйте конструктор сайту на власний розсуд, щоб завершити проєкт. Впевніться, що Ви включили усі файли з нашого репозиторію GitHub.

Коли Ви завершите роботу, переконайтесь, що робоча демоверсія Вашого проєкту розміщена у вільному доступі. Потім введіть URL-адресу проєкту у поле `Solution Link`. За бажанням також введіть посилання на вихідний код проєкту у полі `GitHub Link`.

# --instructions--

1.  Встановіть `NODE_ENV` до `test` без лапок та встановіть `DB` на ваш MongoDB
2.  Завершіть проект в `routes/api.js` або через створення обробника/контролера
3.  Додайте будь-які заходи безпеки до `server.js`
4.  Створіть усі функціональні тести в `tests/2_functional-tests.js`

**Зверніть увагу** на питання конфіденційності: вам доведеться зберегти IP-адресу. Важливо дотримуватися законів про конфіденційність даних, як от загального регламенту про захист даних. Один із варіантів — отримати дозвіл на збереження даних користувача, однак все ж простіше зробити їх анонімними. Не забудьте зробити ваші IP-адреси анонімними, перш ніж зберігати їх до бази даних у цьому завданні. Для цього ви можете скористатися хеш-функцією, методом truncate чи просто змінити частину IP-адреси на 0.

Напишіть наступні тести в `tests/2_functional-tests.js`:

-   Перегляд однієї акції: запит GET до `/api/stock-prices/`
-   Якщо Ви переглянули одну акцію й вона Вам сподобалась: запит GET в `/api/stock-prices/`
-   Якщо Ви переглянули ту ж саму акцію й обрали її знову: запит GET в `/api/stock-prices/`
-   Якщо Ви переглянули дві акції: запит GET в `/api/stock-prices/`
-   Якщо Ви переглянули дві акції та вони Вам сподобались: запит GET в `/api/stock-prices/`

# --hints--

Ви можете додати свій проєкт, а не URL-посилання прикладу.

```js
(getUserInput) => {
  assert(
    !/.*\/stock-price-checker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

Ви маєте налаштувати політику безпеки вмісту так, щоб дозволити завантаження скриптів та CSS лише з вашого сервера.

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

Ви можете надіслати запит `GET` до `/api/stock-prices`, передаючи символ акції NASDAQ в параметр запиту `stock`. Отриманий об'єкт міститиме властивість із назвою `stockData`.

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  assert.property(parsed, 'stockData');
};
```

Властивість `stockData` включає символ `stock` у вигляді строки, `price` та `likes` у вигляді чисел.

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

Ви також можете передати поле `like` як `true` (логічний тип), аби ваші вподобання було додано до акції(й). Приймається лише одне вподобання на IP.

```js

```

Якщо Ви передасте 2 акції, то отриманим значенням буде масив із інформацією про обидві акції. Замість `likes` буде показано `rel_likes` (різниця між уподобаннями на обох акціях) для обох об'єктів `stockData`.

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
