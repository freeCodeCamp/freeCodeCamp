---
id: 587d8250367417b2b2512c5d
title: Запуск функціональних тестів за допомогою Headless Browser
challengeType: 2
forumTopicId: 301595
dashedName: run-functional-tests-using-a-headless-browser
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

На сторінці знаходиться вхідна форма. Дані надсилаються до кінцевої точки `PUT /travellers` як запит AJAX.

Коли запит успішно виконано, код клієнта додає `<div>`, що містить інформацію у відповідь на DOM.

Ось приклад використання Zombie.js для взаємодії з формою:

```js
test('Submit the surname "Polo" in the HTML form', function (done) {
  browser.fill('surname', 'Polo').then(() => {
    browser.pressButton('submit', () => {
      browser.assert.success();
      browser.assert.text('span#name', 'Marco');
      browser.assert.text('span#surname', 'Polo');
      browser.assert.elements('span#dates', 1);
      done();
    });
  });
});
```

Спершу метод `fill` об'єкта `browser` заповнює поле форми `surname` зі значенням `'Polo'`. `fill` повертає Promise, тоді `then` вимикається.

У межах зворотного виклику `then` метод `pressButton` об'єкта `browser` використовується для виклику слухача події форми `submit`. Метод `pressButton` є асинхронним.

Як тільки відповідь буде отримана від запиту AJAX, виникає кілька тверджень:

1.  Статус відповіді `200`
2.  Текст усередині елемента `<span id='name'></span>` збігається з `'Marco'`
3.  Текст усередині елемента `<span id='surname'></span>` збігається з `'Polo'`
4.  Є елемент `1` `<span id='dates'></span>`.

Зрештою, запущено зворотний виклик `done`, який необхідний для асинхронного тесту.

# --instructions--

У межах `tests/2_functional-tests.js` у тесті `'Submit the surname "Colombo" in the HTML form'` (`// #5`) потрібно автоматизувати такі умови:

1.  Впишіть у форму прізвище `Colombo`
2.  Натисніть кнопку підтвердження

У межах кнопки зворотного виклику `pressButton`:

1.  Підтвердьте, що статус – OK `200`
2.  Підтвердьте, що текст всередині елемента `span#name` – це `'Cristoforo'`
3.  Підтвердьте, що текст всередині елемента `span#surname` – це `'Colombo'`
4.  Підтвердьте, що елемент(и) `span#dates` існують і їхній підрахунок дорівнює `1`

Не забудьте видалити виклик `assert.fail()`.

# --hints--

Необхідно пройти всі тести.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Вам слід підтвердити, що запит headless browser був успішним.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'browser.success');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Підтвердьте, що текст всередині елемента `span#name`> – це `'Cristoforo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'browser.text');
      assert.match(data.assertions[1].args[0], /('|")span#name\1/);
      assert.match(data.assertions[1].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Підтвердьте, що текст всередині елемента `span#surname` – це `'Colombo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'browser.text');
      assert.match(data.assertions[2].args[0], /('|")span#surname\1/);
      assert.match(data.assertions[2].args[1], /('|")Colombo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Підтвердьте, що елемент `span#dates` існує, а його підрахунок - 1.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'browser.elements');
      assert.match(data.assertions[3].args[0], /('|")span#dates\1/);
      assert.equal(data.assertions[3].args[1], 1);
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
