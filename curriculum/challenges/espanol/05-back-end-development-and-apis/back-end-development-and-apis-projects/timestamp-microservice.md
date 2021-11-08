---
id: bd7158d8c443edefaeb5bdef
title: Microservicio de marca de tiempo
challengeType: 4
forumTopicId: 301508
dashedName: timestamp-microservice
---

# --description--

Construye una aplicación full stack de JavaScript que sea funcionalmente similar a esta: <https://timestamp-microservice.freecodecamp.rocks/>. Trabajar en este proyecto implicará escribir tu código utilizando uno de los siguientes métodos:

-   Clona [este repositorio de GitHub](https://github.com/freeCodeCamp/boilerplate-project-timestamp/) y completa tu proyecto localmente.
-   Usa [nuestro proyecto de inicio en Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-timestamp) para completar tu proyecto.
-   Utiliza un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio de GitHub.

Cuando hayas terminado, asegúrate de que un demo funcional de tu proyecto esté alojado en algún lugar público. Luego, envía la URL en el campo `Solution Link`. Opcionalmente, también envía un enlace al código fuente de tu proyecto en el campo `GitHub Link`.

# --hints--

Debes proporcionar tu propio proyecto, no la URL de ejemplo.

```js
(getUserInput) => {
  assert(
    !/.*\/timestamp-microservice\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

Una solicitud para `/api/:date?` con una fecha válida debe devolver un objeto JSON con una clave `unix` que es una marca de tiempo Unix de la fecha de entrada en milisegundos

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.unix,
        1482624000000,
        'Should be a valid unix timestamp'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Una petición para `/api/:date?` con una fecha válida debe devolver un objeto JSON con una clave `utc` que es una cadena de la fecha de entrada en el formato: `Thu, 01 Jan 1970 00:00:00 GMT`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.utc,
        'Sun, 25 Dec 2016 00:00:00 GMT',
        'Should be a valid UTC date string'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Una petición a `/api/1451001600000` debe devolver `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/1451001600000').then(
    (data) => {
      assert(
        data.unix === 1451001600000 &&
          data.utc === 'Fri, 25 Dec 2015 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Tu proyecto puede manejar fechas que pueden ser analizadas con éxito por `new Date(date_string)`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/05 October 2011').then(
    (data) => {
      assert(
        data.unix === 1317772800000 &&
          data.utc === 'Wed, 05 Oct 2011 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Si la fecha de entrada no es válida, la api devuelve un objeto con la estructura `{ error : "Invalid Date" }`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/this-is-not-a-date').then(
    (data) => {
      assert.equal(data.error.toLowerCase(), 'invalid date');
    },
    (xhr) => {
      assert(xhr.responseJSON.error.toLowerCase() === 'invalid date');
    }
  );
```

Un parámetro de fecha vacío debe devolver la hora actual en un objeto JSON con una clave `unix`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      assert.approximately(data.unix, now, 20000);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Un parámetro de fecha vacío debe devolver la hora actual en un objeto JSON con una clave `utc`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      var serverTime = new Date(data.utc).getTime();
      assert.approximately(serverTime, now, 20000);
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
