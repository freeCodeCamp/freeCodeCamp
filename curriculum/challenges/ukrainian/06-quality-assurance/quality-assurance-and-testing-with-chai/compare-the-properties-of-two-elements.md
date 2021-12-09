---
id: 587d824c367417b2b2512c4d
title: Порівняйте властивості двох елементів
challengeType: 2
forumTopicId: 301588
dashedName: compare-the-properties-of-two-elements
---

# --description--

Нагадуємо, що цей проєкт будується на основі наступного стартового проєкту на [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai), або клонується з [ GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

# --instructions--

У межах `test/1_unit-tests.js` під тестом з міткою `#8` у наборі `Comparisons` змініть кожне `assert` на `assert.isAbove` або `assert.isAtMost`, щоб тест міг бути успішно пройдений (слід оцінити як `true`). Не змінюйте аргументи, передані до тверджень.

# --hints--

Всі тести повинні бути успішно пройдені.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Ви повинні вибрати правильний метод для першого твердження - `isAbove` або `isAtMost`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isAtMost',
        '5 is at most (<=) 5'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Ви повинні вибрати правильний метод для другого твердження - `isAbove` або `isAtMost`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'isAbove', '1 is greater than 0');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Ви повинні обрати правильний метод третього твердження - `isAbove` або `isAtMost`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'isAbove',
        'Math.PI = 3.14159265 is greater than 3'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Ви повинні вибрати правильний метод для четвертого твердження - `isAbove` або `isAtMost`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'isAtMost',
        '1 - Math.random() is > 0 and <= 1. It is atMost 1 !'
      );
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
