---
id: 587d824e367417b2b2512c56
title: Перевірте, чи має значення конкретний тип структури даних
challengeType: 2
forumTopicId: 301601
dashedName: test-if-a-value-is-of-a-specific-data-structure-type
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`#typeOf` стверджує, що тип значення - це заданий рядок, що визначено `Object.prototype.toString`.

# --instructions--

У межах `tests/1_unit-tests.js` під тестом з міткою `#17` в наборі `Objects` змініть кожний `assert` на `assert.typeOf` або `assert.notTypeOf` щоб полегшити проходження тесту (варто оцінювати як `true`). Не змінюйте аргументи, передані до тверджень.

# --hints--

Всі тести повинні бути успішно пройдені.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для першого твердження – `typeOf` або `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'typeOf',
        'myCar is typeOf Object'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для другого твердження –`typeOf` або `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'typeOf',
        'Car.model is a String'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для третього твердження –`typeOf` або `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'notTypeOf',
        'Plane.wings is a Number (not a String)'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для четвертого твердження –`typeOf` або `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'typeOf',
        'Plane.engines is an Array'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для п'ятого твердження –`typeOf` або `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[4].method,
        'typeOf',
        'Car.wheels is a Number'
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
