---
id: 587d824d367417b2b2512c52
title: Verificare se un valore è una stringa
challengeType: 2
forumTopicId: 301599
dashedName: test-if-a-value-is-a-string
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonato da <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`isString` or `isNotString` asserisce che il valore effettivo è una stringa.

# --instructions--

All'interno di `tests/1_unit-tests.js`, sotto il test etichettato con `#13`, nella suite `Strings`, cambia ogni asserzione `assert` in `assert.isString` o `assert.isNotString` per far passare il test (dovrebbe risultare `true`). Non alterare gli argomenti passati alle asserzioni.

# --hints--

Tutti i test dovrebbero essere superati.

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

Dovresti scegliere il metodo corretto per la prima asserzione - `isString` oppure `isNotString`.

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

Dovresti scegliere il metodo corretto per la seconda asserzione - `isString` oppure `isNotString`.

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

Dovresti scegliere il metodo corretto per la terza asserzione - `isString` oppure `isNotString`.

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
