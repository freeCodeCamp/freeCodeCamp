---
id: 587d824c367417b2b2512c4c
title: Підтвердьте глибоку рівність за допомогою .deepEqual та .notDeepEqual
challengeType: 2
forumTopicId: 301587
dashedName: assert-deep-equality-with--deepequal-and--notdeepequal
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>  або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`deepEqual()` підтверджує, що два об'єкти однакові.

# --instructions--

У межах `tests/1_unit-tests.js` під тестом з міткою `#7` в наборі `Equality` змініть кожний `assert` на `assert.deepEqual` або `assert.notDeepEqual`, щоб пройти тест (повинен дорівнювати `true`). Не змінюйте аргументи, передані до тверджень.

# --hints--

Всі тести повинні бути успішно пройдені.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Ви повинні обрати правильний метод для першого твердження: `deepEqual` або `notDeepEqual`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'deepEqual',
        'The order of the keys does not matter'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Ви повинні обрати правильний метод для другого твердження: `deepEqual` або `notDeepEqual`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'notDeepEqual',
        'The position of elements within an array does matter'
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
