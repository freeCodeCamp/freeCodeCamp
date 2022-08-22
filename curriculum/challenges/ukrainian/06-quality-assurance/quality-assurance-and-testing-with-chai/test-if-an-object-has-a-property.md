---
id: 587d824e367417b2b2512c55
title: Перевірка об'єкта на властивість
challengeType: 2
forumTopicId: 301604
dashedName: test-if-an-object-has-a-property
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`property` стверджує, що певний об'єкт має задану властивість.

# --instructions--

У межах `tests/1_unit-tests.js` під тестом з міткою `#16` у наборі `Objects` змініть кожний `assert` на `assert.property` або `assert.notProperty`, щоб забезпечити проходження тесту. (Має мати значення `true`). Не змінюйте аргументи, передані до тверджень.

# --hints--

Всі тести повинні бути успішно пройдені.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для першого твердження –`property` у порівнянні з `notProperty`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'notProperty',
        'A car has not wings'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для другого твердження –`property` у порівнянні з `notProperty`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'property',
        'planes have engines'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для третього твердження –`property` у порівнянні з `notProperty`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'property', 'Cars have wheels');
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
