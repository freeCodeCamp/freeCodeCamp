---
id: 587d824b367417b2b2512c4a
title: Usa las Igualdades dobles para comprobar la Igualdad Estricta
challengeType: 2
forumTopicId: 301609
dashedName: use-the-double-equals-to-assert-equality
---

# --description--

Recuerda, este proyecto se está construyendo partir de una plantilla en <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> o clonado de <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`equal()` compara objetos usando `==`.

# --instructions--

Dentro de `tests/1_unit-tests.js` bajo la prueba etiquetada `#5` en `Equality` suite, cambia cada `assert` a `assert.equal` o `assert.notEqual`, para pasar la prueba (debe evaluarse como `true`). No modifiques los argumentos pasados ​​a los verificadores.

# --hints--

Todas las pruebas deben pasar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Debe elegir el método correcto para la primera aserción - `equal` vs `notEqual`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'equal',
        'Numbers are coerced into strings with == '
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Debe elegir el método correcto para la segunda aserción - `equal` vs `notEqual`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'notEqual',
        ' == compares object references'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Debe elegir el método correcto para la tercera aserción - `equal` vs `notEqual`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'equal',
        "6 * '2' is 12 ! It should be equal to '12'"
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Debe elegir el método correcto para la cuarta aserción - `equal` vs `notEqual`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'notEqual', "6 + '2' is '62'...");
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
