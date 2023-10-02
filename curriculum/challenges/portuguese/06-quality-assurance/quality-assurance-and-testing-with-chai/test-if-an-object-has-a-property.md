---
id: 587d824e367417b2b2512c55
title: Testar se um objeto tem uma propriedade
challengeType: 2
forumTopicId: 301604
dashedName: test-if-an-object-has-a-property
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`property` afirma que o objeto factual possui uma determinada propriedade.

# --instructions--

Em `tests/1_unit-tests.js`, no teste de número `#16` no grupo de testes `Objects`, modifique cada `assert` para `assert.property` ou para `assert.notProperty`, de maneira que cada teste passe (seja `true`). Não altere os argumentos passados às afirmações.

# --hints--

Todos os testes devem passar.

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

Você deve escolher o método correto para a primeira afirmação - `property` ou `notProperty`.

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

Você deve escolher o método correto para a segunda afirmação - `property` ou `notProperty`.

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

Você deve escolher o método correto para a terceira afirmação - `property` ou `notProperty`.

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
