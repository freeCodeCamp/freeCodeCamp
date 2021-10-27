---
id: 587d7fb1367417b2b2512bf3
title: Implementa un Middleware de registro de peticiones a nivel raíz
challengeType: 2
forumTopicId: 301514
dashedName: implement-a-root-level-request-logger-middleware
---

# --description--

Anteriormente, se te presentó la función de middleware `express.static()`. Ahora es el momento de ver lo que es un middleware con más detalle. Las funciones de Middleware son funciones que toman 3 argumentos: el objeto de la petición, el objeto de respuesta y la siguiente función en el ciclo petición-respuesta de la aplicación. Estas funciones ejecutan algún código que puede tener efectos secundarios en la aplicación, y normalmente agregan información a los objetos de la petición o respuesta. También pueden terminar el ciclo enviando una respuesta cuando se cumple alguna condición. Si no envían la respuesta cuando han terminado, comienzan la ejecución de la siguiente función en la pila de ejecución. Esto hace que se llame al tercer argumento, `next()`.

Veamos el siguiente ejemplo:

```js
function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}
```

Supongamos que montaste esta función en una ruta. Cuando una solicitud coincide con la ruta, muestra la cadena “I'm a middleware…”, luego ejecuta la siguiente función en la pila de ejecución. En este ejercicio, vas a construir un middleware a nivel raíz. Como has visto en el desafío 4, para montar una función middleware a nivel raíz, puedes usar el método `app.use(<mware-function>)`. En este caso, la función se ejecutará para todas las peticiones, pero también se pueden establecer condiciones más específicas. Por ejemplo, si quieres que una función se ejecute sólo para solicitudes POST, puedes usar `app.post(<mware-function>)`. Existen métodos análogos para todos los verbos HTTP (GET, DELETE, PUT, …).

# --instructions--

Construye un simple registrador. Para cada petición, debe registrar en la consola una cadena con el siguiente formato: `method path - ip`. Un ejemplo se vería así: `GET /json - ::ffff:127.0.0.1`. Ten en cuenta que hay un espacio entre `method` y `path` y que el guión que separa `path` e `ip` está rodeado por un espacio en ambos lados. Puedes obtener el método de solicitud (http verb), la ruta de ruta relativa y la ip del cliente desde el objeto de la petición usando `req.method`, `req.path` y `req.ip`. Recuerda llamar a `next()` cuando hayas terminado, o tu servidor permanecerá bloqueado permanentemente. Asegúrate de tener abiertos los "registros" y comprueba lo que sucede cuando llega una solicitud.

**Nota:** Express evalúa las funciones en el orden en que aparecen en el código. Esto también es cierto para los middleware. Si quieres que funcione para todas las rutas, debe montarse antes que ellas.

# --hints--

El middleware de registro a nivel raíz debe estar activo

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/root-middleware-logger').then(
    (data) => {
      assert.isTrue(
        data.passed,
        'root-level logger is not working as expected'
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
