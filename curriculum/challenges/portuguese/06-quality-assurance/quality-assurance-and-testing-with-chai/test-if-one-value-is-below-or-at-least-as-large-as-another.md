---
id: 587d824c367417b2b2512c4e
title: Testar se um valor estiver abaixo ou se for pelo menos tão grande quanto outro
challengeType: 2
forumTopicId: 301606
dashedName: test-if-one-value-is-below-or-at-least-as-large-as-another
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

# --instructions--

Em `tests/1_unit-tests.js`, no teste classificado como `#9` e na suíte `Comparisons`, modifique cada `assert` para `assert.isBelow` ou para `assert.isAtLeast`, de maneira que cada teste passe (seja avaliado como `true`). Não altere os argumentos passados às afirmações.

# --hints--

Todos os testes devem passar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a primeira afirmação - `isBelow` ou `isAtLeast`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isAtLeast',
        '5 is at least (>=) 5'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a segunda afirmação - `isBelow` ou `isAtLeast`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isAtLeast',
        '2 * Math.random() is at least 0'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a terceira afirmação - `isBelow` ou `isAtLeast`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'isBelow', '1 is smaller than 2');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a quarta afirmação - `isBelow` ou `isAtLeast`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'isBelow',
        '2/3 (0.6666) is smaller than 1'
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
