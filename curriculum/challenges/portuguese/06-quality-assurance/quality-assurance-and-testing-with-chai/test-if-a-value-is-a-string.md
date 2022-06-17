---
id: 587d824d367417b2b2512c52
title: Testar se o valor é uma string
challengeType: 2
forumTopicId: 301599
dashedName: test-if-a-value-is-a-string
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`isString` ou `isNotString` afirma que o valor atual é uma string.

# --instructions--

Em `tests/1_unit-tests.js`, no teste de número `#13` no grupo de testes `Strings`, modifique cada `assert` para `assert.isString` ou para `assert.isNotString`, de maneira que cada teste passe (seja `true`). Não altere os argumentos passados às afirmações.

# --hints--

Todos os testes devem passar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a primeira afirmação - `isString` ou `isNotString`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isNotString',
        'A float number is not a string'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a segunda afirmação - `isString` ou `isNotString`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isString',
        'environment vars are strings (or undefined)'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a terceira afirmação - `isString` ou `isNotString`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'isString', 'A JSON is a string');
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
