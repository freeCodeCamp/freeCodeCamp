---
id: 587d7fb6367417b2b2512c06
title: Instala y configura Mongoose
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

Trabajar en estos desafíos implica escribir tu código usando uno de los siguientes métodos:

- Clona [este repositorio de GitHub](https://github.com/freeCodeCamp/boilerplate-mongomongoose/) y completa estos desafíos localmente.
- Usa [nuestro proyecto inicial de Replit](https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose) para completar estos desafíos.
- Utiliza un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio de GitHub.

Cuando hayas terminado, asegúrate de que un demo funcional de tu proyecto esté alojado en algún lugar público. Luego, envía la URL en el campo `Solution Link`.

En este desafío, configurarás una base de datos de MongoDB Atlas e importarás los paquetes necesarios para conectarse a él.

Sigue <a href='https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/' rel='noopener noreferrer' target='_blank'>este tutorial</a> para configurar una base de datos alojada en MongoDB Atlas.

# --instructions--

Añade `mongodb@~3.6.0` y `mongoose@~5.4.0` al `package.json` del proyecto. Luego, requiere mongoose como `mongoose` en `myApp.js`. Crea un archivo `.env` y añade una variable `MONGO_URI`. Su valor debe ser tu URI de base de datos de MongoDB Atlas. Asegúrate de envolver la URI con comillas simples o dobles, y recuerda que no puedes usar espacios alrededor de `=` en las variables de entorno. Por ejemplo, `MONGO_URI='VALUE'`. Cuando hayas terminado, conéctate a la base de datos usando la siguiente sintaxis:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

la dependencia "mongodb" debe estar en package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongodb');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

la dependencia "mongoose" debe estar en package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

"mongoose" debe estar conectado a una base de datos

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/is-mongoose-ok').then(
    (data) => {
      assert.isTrue(data.isMongooseOk, 'mongoose is not connected');
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
