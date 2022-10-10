---
id: 587d824e367417b2b2512c58
title: Запуск функціональних тестів на кінцевих точках API за допомогою Chai-HTTP
challengeType: 2
forumTopicId: 301593
dashedName: run-functional-tests-on-api-endpoints-using-chai-http
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Mocha дозволяє вам тестувати асинхронні операції, такі як виклики в кінцевих точках API з плагіном `chai-http`.

Приклад тесту за допомогою `chai-http` для набору `'GET /hello?name=[name] => "hello [name]"'`:

```js
suite('GET /hello?name=[name] => "hello [name]"', function () {
  test('?name=John', function (done) {
    chai
      .request(server)
      .get('/hello?name=John')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200');
        assert.equal(res.text, 'hello John', 'Response should be "hello John"');
        done();
      });
  });
});
```

Тест відправляє запит `GET` до сервера з ім’ям як рядок запиту URL (`?name=John`). У функії зворотного виклику методу `end` відповідь об'єкта (`res`) отримується і містить властивість `status`.

Перший `assert.equal` перевіряє, чи стан дорівнює `200`. Другий `assert.equal` перевіряє, що рядок відповіді (`res.text`) містить `"hello John"`.

Також зверніть увагу на параметр `done` у функції тесту зворотного виклику. Виклик без аргументу в кінці тесту є необхідним, щоб асинхронна операція була завершена.

# --instructions--

У межах `tests/2_functional-tests.js`, змініть тест `'Test GET /hello with no name'` (`// #1`) для перевірки відповідей `status` та `text` для проходження тесту. Не змінюйте аргументи, передані до тверджень.

Не має бути запитів URL. Без імені запиту URL кінцева точка відповідає `hello Guest`.

# --hints--

Необхідно пройти всі тести

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Перевірте значення `res.status` == 200

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
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

Перевірте значення `res.text` == `'hello Guest'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.text');
      assert.match(data.assertions[1].args[1], /('|")hello Guest\1/);
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
