---
id: 587d824c367417b2b2512c4d
title: Confrontare le proprietà di due elementi
challengeType: 2
forumTopicId: 301588
dashedName: compare-the-properties-of-two-elements
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonato da <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

# --instructions--

All'interno di `tests/1_unit-tests.js`, sotto il test etichettato con `#8`, nella suite `Comparisons`, cambia ogni `assert` in `assert.isAbove` o `assert.isAtMost` per far superare il test (dovrebbe risultare `true`). Non alterare gli argomenti passati alle asserzioni.

# --hints--

Tutti i test dovrebbero essere superati.

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

Dovresti scegliere il metodo corretto per la prima asserzione - `isAbove` oppure `isAtMost`.

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

Dovresti scegliere il metodo corretto per la seconda asserzione - `isAbove` oppure `isAtMost`.

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

Dovresti scegliere il metodo corretto per la terza asserzione - `isAbove` oppure `isAtMost`.

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

Dovresti scegliere il metodo corretto per la quarta asserzione - `isAbove` oppure `isAtMost`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'isAtMost',
        '1 - Math.random() is > 0 and <= 1. It is atMost 1 !'
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
