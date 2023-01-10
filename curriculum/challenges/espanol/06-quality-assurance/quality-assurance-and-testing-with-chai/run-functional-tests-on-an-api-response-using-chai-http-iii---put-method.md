---
id: 587d824f367417b2b2512c5a
title: Ejecutar pruebas funcionales en la respuesta de un API usando Chai-HTTP III - método PUT
challengeType: 2
forumTopicId: 301590
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iii---put-method
---

# --description--

Como recordatorio, este proyecto está siendo construido con base en el siguiente proyecto inicial <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Repl.it</a>, o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Cuando se prueba una solicitud `PUT`, a menudo enviarás datos junto con ella. Los datos que incluye con su solicitud `PUT` se llama el body de la petición.

Para enviar una petición `PUT` y un objeto JSON al endpoint `'/travellers'`, puedes usar el complemento `chai-http`, con los métodos `put` y `send`:

```js
chai
  .request(server)
  .put('/travellers')
  .send({
    "surname": [last name of a traveller of the past]
  })
  ...
```

Y la ruta responde con:

```json
{
  "name": [first name],
  "surname": [last name],
  "dates": [birth - death years]
}
```

Vea el código del servidor para las diferentes respuestas del endpoint `'/travellers'`.

# --instructions--

Dentro de `tests/2_functional-tests.js`, arregla el test `'Send {surname: "Colombo"}'` (`// #3`), use los métodos `put` y `send` para testear el endpoint `'/travellers'`.

Enviar el siguiente objeto JSON con su solicitud PUT:

```json
{
  "surname": "Colombo"
}
```

Compruebe lo siguiente dentro del callback `request.end`:

1.  El `status` debe ser `200`
2.  El `type` debe ser `application/json`
3.  El `body.name` debe ser `Cristoforo`
4.  El `body.surname` debe ser `Colombo`

Sigue el orden de las aserciones de arriba - nos basamos en esto. También, asegúrese de eliminar `assert.fail()` una vez completado.

# --hints--

Todas las pruebas deben pasar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Debes comprobar que `res.status` sea 200.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
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

Debes comprobar que `res.type` sea `'application/json'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.type');
      assert.match(data.assertions[1].args[1], /('|")application\/json\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Debes comprobar que `res.body.name` sea `'Cristoforo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'equal');
      assert.equal(data.assertions[2].args[0], 'res.body.name');
      assert.match(data.assertions[2].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Debes comprobar que `res.body.surname` sea `'Colombo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'equal');
      assert.equal(data.assertions[3].args[0], 'res.body.surname');
      assert.match(data.assertions[3].args[1], /('|")Colombo\1/);
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
