---
id: 587d824f367417b2b2512c5a
title: Запустіть функціональне тестування на відповідь API за допомогою Chai-HTTP III - PUT методу
challengeType: 2
forumTopicId: 301590
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iii---put-method
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Коли ви протестуєте `PUT` запит, ви часто будете посилати дані разом з ним. Дані, які ви включаєте до вашого `PUT` запиту, називаються тілом запиту.

Щоб відправити `PUT` запит і об'єкт JSON до `'/travellers'`, ви можете використовувати плагіни `chai-http`, `put` і `send` методи:

```js
chai
  .request(server)
  .put('/travellers')
  .send({
    "surname": [last name of a traveller of the past]
  })
  ...
```

І маршрут відповідає:

```json
{
  "name": [first name],
  "surname": [last name],
  "dates": [birth - death years]
}
```

Перегляньте код сервера для різних відповідей на кінцевій точці `'/travellers'`.

# --instructions--

У межах  `tests/2_functional-tests.js` змініть `'Send {surname: "Colombo"}'`, перевірте (`// #3`) та використайте методи `put` та `send`, щоб перевірити кінцеву точку `'/travellers'`.

Надішліть наступний об'єкт JSON з вашим PUT-запитом:

```json
{
  "surname": "Colombo"
}
```

Перевірте наступне у межах виклику `request.end`:

1.  `status` має бути `200`
2.  `type` має бути `application/json`
3.  `body.name` має бути `Cristoforo`
4.  `body.surname` має бути `Colombo`

Дотримуйтесь порядку тверджень вище - ми покладаємося на нього. Також обов'язково видаліть `assert.fail()` після завершення.

# --hints--

Необхідно пройти усі тести.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Ви повинні перевірити, чи значення `res.status` становить 200.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'equal');
      assert.equal(data.assertions[0].args[0], 'res.status');
      assert.equal(data.assertions[0].args[1], '200');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Перевірте значення `res.type` на `'application/json'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.type');
      assert.match(data.assertions[1].args[1], /('|")application\/json\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Перевірте значення `res.body.name` на `'Cristoforo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'equal');
      assert.equal(data.assertions[2].args[0], 'res.body.name');
      assert.match(data.assertions[2].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Перевірте значення `res.body.surname` на `'Colombo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'equal');
      assert.equal(data.assertions[3].args[0], 'res.body.surname');
      assert.match(data.assertions[3].args[1], /('|")Colombo\1/);
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
