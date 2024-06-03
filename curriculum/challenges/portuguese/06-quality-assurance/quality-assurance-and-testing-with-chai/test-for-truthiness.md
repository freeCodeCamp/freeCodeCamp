---
id: 587d824b367417b2b2512c49
title: Testar a veracidade
challengeType: 2
forumTopicId: 301596
dashedName: test-for-truthiness
---

# --description--

Lembrete, esse projeto está sendo construido conforme o seguinte projeto inicial em <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, ou clonado de <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`isTrue()` testará o valor booleano `true` e `isNotTrue()` passará quando receber qualquer coisa menos o valor booleano de `true`.

```js
assert.isTrue(true, 'This will pass with the boolean value true');
assert.isTrue('true', 'This will NOT pass with the string value "true"');
assert.isTrue(1, 'This will NOT pass with the number value 1');
```

`isFalse()` e `isNotFalse()` também existem e se comportam da mesma forma que seus correspondentes true, exceto porque buscam o valor booleano `false`.

# --instructions--

Em `tests/1_unit-tests.js`, no teste de número `#4`, no grupo de testes `Basic Assertions`, modifique cada `assert` para `assert.isTrue` ou para `assert.isNotTrue`, de maneira que cada teste passe (seja avaliado como `true`). Não altere os argumentos passados às afirmações.

# --hints--

Todos os testes devem passar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a primeira afirmação - `isTrue` ou `isNotTrue`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'isTrue', 'True is true');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a segunda afirmação - `isTrue` ou `isNotTrue`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isTrue',
        'Double negation of a truthy value is true'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve escolher o método correto para a terceira afirmação - `isTrue` ou `isNotTrue`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'isNotTrue',
        'A truthy object is not true - neither is a false one'
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
