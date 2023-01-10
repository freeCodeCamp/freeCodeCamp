---
id: 587d824e367417b2b2512c57
title: Testar se um objeto é uma instância de um construtor
challengeType: 2
forumTopicId: 301605
dashedName: test-if-an-object-is-an-instance-of-a-constructor
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`#instanceOf` afirma que um objeto é uma instância de um construtor.

# --instructions--

Em `tests/1_unit-tests.js`, no teste de número `#18` no grupo de testes `Objects`, modifique cada `assert` para `assert.instanceOf` ou para `assert.notInstanceOf`, de maneira que cada teste passe (seja `true`). Não altere os argumentos passados às afirmações.

# --hints--

Todos os testes devem passar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a primeira afirmação - `instanceOf` ou `notInstanceOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'notInstanceOf',
        'myCar is not an instance of Plane'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a segunda afirmação - `instanceOf` ou `notInstanceOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'instanceOf',
        'airlinePlane is an instance of Plane'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a terceira afirmação - `instanceOf` ou `notInstanceOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'instanceOf',
        'everything is an Object in JavaScript...'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a quarta afirmação - `instanceOf` ou `notInstanceOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'notInstanceOf',
        'myCar.wheels is not an instance of String'
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
