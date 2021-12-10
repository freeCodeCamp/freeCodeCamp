---
id: 587d824d367417b2b2512c51
title: Перевірте, чи містить масив предмет
challengeType: 2
forumTopicId: 301603
dashedName: test-if-an-array-contains-an-item
---

# --description--

Нагадуємо, що цей проєкт створено на основі наступного стартового проєкту[ Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) або кальковано з [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

# --instructions--

У межах `tests/1_unit-tests.js` під тестом з міткою `#12` в наборі `Arrays` змініть кожний `assert` на `assert.include` або `assert.notInclude`, щоб полегшити проходження тесту (варто оцінювати як `true`). Не змінюйте аргументи, передані до тверджень.

# --hints--

Всі тести повинні бути успішно пройдені.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=11').then(
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
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=11').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'notInclude',
        "It's summer in july..."
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
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=11').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'include',
        'JavaScript is a backend language !!'
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
