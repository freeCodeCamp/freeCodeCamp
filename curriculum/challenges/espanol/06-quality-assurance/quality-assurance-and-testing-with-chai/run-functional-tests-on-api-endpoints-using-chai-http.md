---
id: 587d824e367417b2b2512c58
title: Ejecutar pruebas funcionales en API Endpoints usando Chai-HTTP II
challengeType: 2
forumTopicId: 301593
dashedName: run-functional-tests-on-api-endpoints-using-chai-http
---

# --description--

Como recordatorio, este proyecto está siendo construido con base en el siguiente proyecto inicial <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Repl.it</a>, o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Mocha te permite comprobar operaciones asíncronas como llamadas a los endpoints de la API con un complemento llamado `chai-http`.

El siguiente es un ejemplo de una prueba usando `chai-http` para una suite llamada `'GET /hello?name=[name] => "hello [name]"'`:

```js
suite('GET /hello?name=[name] => "hello [name]"', function () {
  test('?name=John', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/hello?name=John')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200');
        assert.equal(res.text, 'hello John', 'Response should be "hello John"');
        done();
      });
  });
});
```

La prueba envía una solicitud `GET` al servidor con un nombre como una cadena de consulta de URL (`?name=John`). En la función callback del método `end`, el objeto de respuesta (`res`) es recibido y contiene la propiedad `status`.

La primera `assert.equal` comprueba si el estado es igual a `200`. El segundo `assert.equal` comprueba que la cadena de respuesta (`res.text`) sea igual a `"hello John"`.

También, ten en cuenta el parámetro `done` en la función callback de la prueba. Llamarlo sin un argumento al final de una prueba es necesario para indicar que la operación asíncrona está completa.

Finally, note the `keepOpen` method just after the `request` method. Normally you would run your tests from the command line, or as part of an automated integration process, and you could let `chai-http` start and stop your server automatically.

However, the tests that run when you submit the link to your project require your server to be up, so you need to use the `keepOpen` method to prevent `chai-http` from stopping your server.

# --instructions--

Within `tests/2_functional-tests.js`, alter the `'Test GET /hello with no name'` test (`// #1`) to assert the `status` and the `text` of the response to make the test pass. Do not alter the arguments passed to the asserts.

There should be no URL query. Without a name URL query, the endpoint responds with `hello Guest`.

# --hints--

All tests should pass

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should test for `res.status` == 200

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'equal');
      assert.equal(data.assertions[0].args[0], 'res.status');
      assert.equal(data.assertions[0].args[1], '200');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should test for `res.text` == `'hello Guest'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.text');
      assert.match(data.assertions[1].args[1], /('|")hello Guest\1/);
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
