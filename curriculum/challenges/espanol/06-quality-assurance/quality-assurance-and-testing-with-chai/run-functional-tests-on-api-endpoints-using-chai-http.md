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

# --instructions--

Dentro de `tests/2_functional-tests.js`, modifica la prueba `'Test GET /hello with no name'` (`// #1`) para afirmar él `status` y el `text` de la respuesta para hacer que la prueba pase. No modifiques los argumentos pasados ​​a los verificadores.

No debe haber ninguna consulta de URL. Sin una consulta de nombre URL, el endpoint responde con `hello Guest`.

# --hints--

Todas las pruebas deben pasar

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

Debe comprobar si `res.status` == 200

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

Debes probar que `res.text` == `'hello Guest'`

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
