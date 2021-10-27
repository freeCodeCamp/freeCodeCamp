---
id: 587d7fb2367417b2b2512bf8
title: Obtén datos de las peticiones POST
challengeType: 2
forumTopicId: 301511
dashedName: get-data-from-post-requests
---

# --description--

Monta un manejador POST en la ruta `/name`. Es la misma ruta de antes. Hemos preparado un formulario en la página principal html. Se enviarán los mismos datos del ejercicio 10 (Query string). Si el "body-parser" está configurado correctamente, debe encontrar los parámetros en el objeto `req.body`. Echa un vistazo al ejemplo de la biblioteca:

<blockquote>route: POST '/library'<br>urlencoded_body: userId=546&#x26;bookId=6754 <br>req.body: {userId: '546', bookId: '6754'}</blockquote>

Responde con el mismo objeto JSON que antes: `{name: 'firstname lastname'}`. Prueba si tu endpoint funciona usando el formulario html que proporcionamos en la página principal de la aplicación.

Nota: Hay varios métodos de http diferentes a GET y POST. Y por convención hay una correspondencia entre el verbo http y la operación que se va a ejecutar en el servidor. La asignación convencional es:

POST (a veces PUT): Crea un nuevo recurso usando la información enviada con la solicitud,

GET: Lee un recurso existente sin modificarlo,

PUT o PATCH (a veces POST): Actualiza un recurso usando los datos enviados,

DELETE => Elimina un recurso.

También hay un par de otros métodos que se utilizan para negociar una conexión con el servidor. A excepción de GET, todos los demás métodos mencionados anteriormente pueden tener un payload (es decir, los datos en el cuerpo de la solicitud). El middleware body-parser también funciona con estos métodos.

# --hints--

Prueba 1: El endpoint de tu API debe responder con el nombre correcto

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/name', { first: 'Mick', last: 'Jagger' }).then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "POST /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Prueba 2: El endpoint de tu API debe responder con el nombre correcto

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/name', {
    first: 'Keith',
    last: 'Richards'
  }).then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "POST /name" route does not behave as expected'
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
