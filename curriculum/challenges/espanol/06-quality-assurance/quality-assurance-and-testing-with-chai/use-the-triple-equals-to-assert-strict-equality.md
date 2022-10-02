---
id: 587d824b367417b2b2512c4b
title: Usar igualdades triples para comprobar la igualdad estricta
challengeType: 2
forumTopicId: 301610
dashedName: use-the-triple-equals-to-assert-strict-equality
---

# --description--

Recuerda, este proyecto se está construyendo partir de una plantilla en <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> o clonado de <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`strictEqual()` compara objetos usando `===`.

# --instructions--

Dentro de `tests/1_unit-tests.js` bajo la prueba etiquetada `#6` en `Equality` suite, cambia cada `assert` a `assert.strictEqual` o `assert.notStrictEqual`, para que la prueba sea pasada (debe evaluarse como `true`). No modifiques los argumentos pasados ​​a los verificadores.

# --hints--

Todas las pruebas deben pasar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Debe elegir el método correcto para la primera comprobación - `strictEqual` vs. `notStrictEqual`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'notStrictEqual',
        'with strictEqual the type must match'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Debe elegir el método correcto para la segunda aserción - `strictEqual` vs `notStrictEqual`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'strictEqual', '3*2 = 6...');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Debe elegir el método correcto para la tercera aserción - `strictEqual` vs `notStrictEqual`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'strictEqual',
        "6 * '2' is 12. Types match !"
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Debe elegir el método correcto para la cuarta aserción - `strictEqual` vs `notStrictEqual`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'notStrictEqual',
        'Even if they have the same elements, the Arrays are notStrictEqual'
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
