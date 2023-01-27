---
id: 587d824e367417b2b2512c56
title: Testar se um valor é de um tipo de estrutura de dados específico
challengeType: 2
forumTopicId: 301601
dashedName: test-if-a-value-is-of-a-specific-data-structure-type
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`#typeOf` afirma que o tipo do valor é a string fornecida, conforme determinado pelo `Object.prototype.toString`.

# --instructions--

Em `tests/1_unit-tests.js`, no teste de número `#17` no grupo de testes `Objects`, modifique cada `assert` para `assert.typeOf` ou para `assert.notTypeOf`, de maneira que cada teste passe (seja `true`). Não altere os argumentos passados às afirmações.

# --hints--

Todos os testes devem passar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a primeira afirmação - `typeOf` ou `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'typeOf',
        'myCar is typeOf Object'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a segunda afirmação - `typeOf` ou `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'typeOf',
        'Car.model is a String'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a terceira afirmação - `typeOf` ou `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'notTypeOf',
        'Plane.wings is a Number (not a String)'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a quarta afirmação - `typeOf` ou `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'typeOf',
        'Plane.engines is an Array'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a quinta afirmação - `typeOf` ou `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[4].method,
        'typeOf',
        'Car.wheels is a Number'
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
