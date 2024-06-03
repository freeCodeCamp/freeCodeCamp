---
id: 587d824e367417b2b2512c57
title: Comprueba si un objeto es una instancia de un constructor
challengeType: 2
forumTopicId: 301605
dashedName: test-if-an-object-is-an-instance-of-a-constructor
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`#instanceOf` verifica que un objeto es una instancia de un constructor.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#18` in the `Objects` suite, change each `assert` to either `assert.instanceOf` or `assert.notInstanceOf` to make the test pass (should evaluate to `true`). No modifiques los argumentos pasados ​​a los verificadores.

# --hints--

Todas las pruebas deben pasar.

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

Debe elegir el método correcto para la primera aserción - `instanceOf` vs `notInstanceOf`.

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

Debe elegir el método correcto para la segunda aserción - `instanceOf` vs `notInstanceOf`.

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

Debe elegir el método correcto para la tercera aserción - `instanceOf` vs `notInstanceOf`.

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

Debe elegir el método correcto para la cuarta aserción - `instanceOf` vs `notInstanceOf`.

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
