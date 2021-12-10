---
id: 587d824d367417b2b2512c53
title: Перевірте, чи містить рядковий тип підрядок
challengeType: 2
forumTopicId: 301597
dashedName: test-if-a-string-contains-a-substring
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного початкового проєкту на [ Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) або копіюється з [ GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

`include()` та `notInclude()` також працює і для рядків! `include()` перевіряє, чи містить фактичний рядок очікуваний підрядок.

# --instructions--

У межах `tests/1_unit-tests.js` під тестом з міткою `#14` в наборі `Strings` змініть кожний `assert` на `assert.include` або `assert.notInclude` щоб полегшити проходження тесту (варто оцінювати як `true`). Не змінюйте аргументи, передані до тверджень.

# --hints--

Всі тести повинні бути успішно пройдені.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для першого твердження `include` або `notInclude`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'include',
        "'Arrow' contains 'row'..."
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Потрібно обрати правильний метод для другого твердження `include` або `notInclude`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'notInclude',
        "... a 'dart' doesn't contain a 'queue'"
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
