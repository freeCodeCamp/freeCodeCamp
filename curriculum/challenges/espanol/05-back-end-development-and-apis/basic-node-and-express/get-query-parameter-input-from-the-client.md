---
id: 587d7fb2367417b2b2512bf6
title: Obtén la entrada de parámetros de consulta del cliente
challengeType: 2
forumTopicId: 301512
dashedName: get-query-parameter-input-from-the-client
---

# --description--

Otra forma común de obtener la entrada del cliente es codificando los datos después de la ruta, usando una cadena de consulta. La cadena de consulta está delimitada por un signo de interrogación (?), e incluye parejas de campo=valor. Cada pareja está separada por un ampersand (&). Express puede analizar los datos de la cadena de consulta, y llenar el objeto `req.query`. Algunos caracteres, como el porcentaje (%), no pueden estar en URLs y tienen que ser codificados en un formato diferente antes de poder enviarlos. Si usas la API desde JavaScript, puedes usar métodos específicos para codificar/decodificar estos caracteres.

<blockquote>route_path: '/library'<br>actual_request_URL: '/library?userId=546&#x26;bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

Construye un endpoint para el API, montado en `GET /name`. Responde con un documento JSON, tomando la estructura `{ name: 'firstname lastname'}`. Los parámetros del nombre y apellido deben codificarse en una cadena de consulta, por ejemplo, `?first=firstname&last=lastname`.

**Nota:** En el siguiente ejercicio va a recibir datos de una solicitud POST, a la misma ruta `/name`. Si lo deseas, puedes utilizar el método `app.route(path).get(handler).post(handler)`. Esta sintaxis permite encadenar diferentes manejadores de verbos en la misma ruta. Puedes ahorrar un poco de escritura y tener un código más limpio.

# --hints--

Prueba 1 : el endpoint del API debe responder `{ "name": "Mick Jagger" }` cuando se llama al endpoint `/name` con `?first=Mick&last=Jagger`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?first=Mick&last=Jagger').then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "GET /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Prueba 2 : el endpoint del API debe responder `{ "name": "Keith Richards" }` cuando se llama al endpoint `/name` con `?first=Keith&last=Richards`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?last=Richards&first=Keith').then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "GET /name" route does not behave as expected'
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
