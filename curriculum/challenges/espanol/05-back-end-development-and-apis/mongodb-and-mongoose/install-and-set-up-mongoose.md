---
id: 587d7fb6367417b2b2512c06
title: Instala y configura Mongoose
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

Trabajar en estos desafíos implica escribir tu código usando uno de los siguientes métodos:

- Clone este repositorio de <a href="https://github.com/freeCodeCamp/boilerplate-mongomongoose/" target="_blank" rel="noopener noreferrer nofollow"> GitHub</a> y complete estos desafíos localmente.
- Usa <a href="https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose" target="_blank" rel="noopener noreferrer nofollow">nuestro proyecto de inicio Replit</a> para completar estos desafíos.
- Utiliza un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio de GitHub.

Si usas Replit, sigue estos pasos para configurar el proyecto:

-   Empieza importando el proyecto en Replit.
-   A continuación, verás una ventana de `.replit`.
-   Selecciona `Use run command` y has clic el botón `Done`.

Una vez que hayas acabado, asegúrate de que un demo funcional del proyecto esté alojado en algún sitio público. A continuación, introduce la URL en el campo enlace a la solución.

En este desafío, configurarás una base de datos de MongoDB Atlas e importarás los paquetes necesarios para conectarse a él.

Sigue <a href='https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/' target="_blank" rel="noopener noreferrer nofollow">este tutorial</a> para configurar una base de datos alojada en MongoDB Atlas.

# --instructions--

`mongoose@^5.11.15` ha sido añadido al archivo `package.json` de tu proyecto. Primero, requiere mongoose como `mongoose` en `myApp.js`. A continuación, crea un archivo `.env` y añade una variable `MONGO_URI` a él. Su valor debe ser tu URI de base de datos de MongoDB Atlas. Asegúrate de envolver la URI con comillas simples o dobles, y recuerda que no puedes usar espacios alrededor de `=` en las variables de entorno. Por ejemplo, `MONGO_URI='VALUE'`.

**Nota:** Si estás usando Replit, no puedes crear un archivo `.env`. En su lugar, utiliza la pestaña integrada <dfn>SECRETS</dfn> para añadir la variable. <em>No</em> envuelvas los valores con comillas al usar la pestaña <em>SECRETS</em>.

When you are done, connect to the database by calling the `connect` method within your `myApp.js` file by using the following syntax:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

La dependencia "versión mongoose ^5.11.15" debe estar en package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
      assert.match(
        packJson.dependencies.mongoose,
        /^\^5\.11\.15/,
        'Wrong version of "mongoose". It should be ^5.11.15'
      );
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
