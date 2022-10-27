---
id: 587d824a367417b2b2512c46
title: Дізнайтесь як працює твердження JavaScript
challengeType: 2
forumTopicId: 301589
dashedName: learn-how-javascript-assertions-work
---

# --description--

Робота над цими завданнями передбачає написання коду одним із таких методів:

- Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте ці завдання локально.
- Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання цих завдань.
- Для виконання проєкту скористуйтеся будь-яким конструктором сайтів на ваш розсуд. Впевніться, що ви зберегли усі файли з нашого GitHub репозиторію.

Завершивши роботу, переконайтеся, що робоча демоверсія вашого проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту у поле `Solution Link`.

# --instructions--

У межах `tests/1_unit-tests.js` під тестом з міткою `#1` в наборі `Basic Assertions` змініть кожне `assert`, або `assert.isNull`, або `assert.isNotNull` щоб пройти тест, який має оцінити `true`. Не змінюйте аргументи, передані до тверджень.

# --hints--

Необхідно пройти усі тести.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для першого твердження `isNull` або`isNotNull`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'isNull', 'Null is null');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для другого твердження `isNull` або `isNotNull`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'isNotNull', '1 is not null');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
