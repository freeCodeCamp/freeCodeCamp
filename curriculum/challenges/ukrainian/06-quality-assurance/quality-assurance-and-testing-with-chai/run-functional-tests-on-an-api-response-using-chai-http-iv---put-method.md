---
id: 587d824f367417b2b2512c5b
title: Запустіть функціональні тести на відповіді API за допомогою методу Chai-HTTP IV - PUT
challengeType: 2
forumTopicId: 301591
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iv---put-method
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Ця вправа схожа на попередню.

Тепер ви знаєте, як перевірити запит `PUT`. Прийшла ваша черга зробити все з нуля.

# --instructions--

У межах `tests/2_functional-tests.js` змініть `'Send {surname: "da Verrazzano"}'` тесту (`// #4`) і використайте методи `put` та `send`, щоб перевірити кінцеву точку `'/travellers'`.

Надішліть наступний об'єкт JSON зі своїм запитом PUT:

```json
{
  "surname": "da Verrazzano"
}
```

Перевірте наступне у межах зворотнього виклику `request.end`:

1.  `status` повинен бути `200`
2.  `type` повинен бути `application/json`
3.  `body.name` повинен бути `Giovanni`
4.  `body.surname` повинен бути `da Verrazzano`

Дотримуйтесь порядку тверджень вище, оскільки ми залежимо від нього. Не забудьте видалити `assert.fail()` після завершення.

# --hints--

Всі тести повинні бути успішно пройдені

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Ви повинні перевірити, чи `res.status` має значення 200

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
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

Ви повинні перевірити, чи `res.type` має значення `'application/json'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
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

Ви повинні перевірити, чи `res.body.name` має значення `'Giovanni'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'equal');
      assert.equal(data.assertions[2].args[0], 'res.body.name');
      assert.match(data.assertions[2].args[1], /('|")Giovanni\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Ви повинні перевірити, чи `res.body.surname` має значення `'da Verrazzano'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'equal');
      assert.equal(data.assertions[3].args[0], 'res.body.surname');
      assert.match(data.assertions[3].args[1], /('|")da Verrazzano\1/);
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
