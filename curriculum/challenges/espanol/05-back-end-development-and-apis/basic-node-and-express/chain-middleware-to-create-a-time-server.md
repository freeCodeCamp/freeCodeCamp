---
id: 587d7fb1367417b2b2512bf4
title: Encadenando Middlewares para crear un servidor horario
challengeType: 2
forumTopicId: 301510
dashedName: chain-middleware-to-create-a-time-server
---

# --description--

Un middleware se puede montar en una ruta especifica usando `app.METHOD(path, middlewareFunction)`. El middleware también se puede encadenar dentro de una definición de ruta.

Veamos el siguiente ejemplo:

```js
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});
```

Este método es útil para dividir las operaciones del servidor en unidades más pequeñas. Lo que lleva a una mejor estructura de nuestra aplicación y a la posibilidad de reutilizar código en diferentes lugares. Este método también se puede utilizar para realizar ciertas validaciones de los datos. En cada punto de la pila del middleware puedes bloquear la ejecución de la cadena actual y darle el control a funciones diseñadas específicamente para el manejo de errores. O puedes pasar el control a la siguiente ruta que concuerde, para manejar casos especiales. Veremos cómo en la sección avanzada de Express.

# --instructions--

En la ruta `app.get('/now', ...)` encadena una función del middleware con el controlador final. En la función del middleware debes añadir la hora actual al objeto de petición en la clave `req.time`. Puedes utilizar `new Date().toString()`. En el controlador, responde con un objeto JSON, tomando la estructura `{time: req.time}`.

**Nota:** La prueba no pasará si no encadenas el middleware. Si montas la función en otro lugar, la prueba fallará, incluso si el resultado de salida es correcto.

# --hints--

El endpoint /now debe tener el middleware montado

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/chain-middleware-time').then(
    (data) => {
      assert.equal(
        data.stackLength,
        2,
        '"/now" route has no mounted middleware'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

El endpoint `/now` debe devolver la hora actual.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/chain-middleware-time').then(
    (data) => {
      var now = new Date();
      assert.isAtMost(
        Math.abs(new Date(data.time) - now),
        20000,
        'the returned time is not between +- 20 secs from now'
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
