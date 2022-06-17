---
id: 587d824c367417b2b2512c4d
title: Comparar as propriedades de dois elementos
challengeType: 2
forumTopicId: 301588
dashedName: compare-the-properties-of-two-elements
---

# --description--
Como lembrete, este projeto está sendo criado a partir do projeto inicial seguinte, no <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> ou pode ser clonado do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub<a>.

# --instructions--

Dentro de `tests/1_unit-tests.js` no teste `#8` na suite `Comparisons`, altere todos os `assert` para `assert.isAbove` ou `assert.isAtMost` para fazer com que o teste passe (seja avaliado como `true`). Não altere os argumentos passados para os asserts.

# --hints--

Todos os testes devem passar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve selecionar o método correto para a primeira asserção - `isAbove` x `isAtMost`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isAtMost',
        '5 is at most (<=) 5'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve selecionar o método correto para a segunda asserção - `isAbove` x `isAtMost`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'isAbove', '1 is greater than 0');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve selecionar o método correto para a terceira asserção - `isAbove` x `isAtMost`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'isAbove',
        'Math.PI = 3.14159265 is greater than 3'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve selecionar o método correto para a quarta asserção - `isAbove` x `isAtMost`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'isAtMost',
        '1 - Math.random() is > 0 and <= 1. É atMost 1 !'
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
  Desafios de back-end não precisam de solução, 
  pois precisariam ser testados contra o projeto funcional completo. 
  Confira nossas diretrizes de contribuição para saber mais.
*/
```
