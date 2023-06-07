---
id: 5895f70cf9fc0f352b528e66
title: Serialización de un objeto de usuario
challengeType: 2
forumTopicId: 301563
dashedName: serialization-of-a-user-object
---

# --description--

Serialización y deserialización son conceptos importantes en lo que respecta a la autentificación. Para serializar un objeto significa convertir su contenido en una pequeña *key* que puede ser deserializada en el objeto original. Esto es lo que nos permite saber quién se ha comunicado con el servidor sin tener que enviar los datos de autentificación, como el nombre de usuario y la contraseña, en cada petición de una nueva página.

Para configurar esto apropiadamente, necesita tener una función serializada y una función deserialización. En Passport, esto puede ser creado con:

```javascript
passport.serializeUser(cb);
passport.deserializeUser(cb);
```

La función callback pasada a `serializeUser` es llamada con dos argumentos: el objeto usuario completo, y un callback usado por passport.

El callback espera dos argumentos: Un error, si existe, y una clave única para identificar el usuario que deberíar ser devuelto en el callback. Utilizarás el usuario `_id` en el objeto. Este está garantizado a ser único, ya que es generado por MongoDB.

Similarmente, `deserializeUser` es llamado con dos argumentos: la llave única, y la función callback.

Este callback espera dos argumentos: Un error, si existe, y el objeto usuario completo. Para obtener el objeto usuario completo, haga una consulta de búsqueda para un Mongo `_id`, como se muestra a continuación:


```javascript
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  });
});
```

Agrega las dos funciones anteriores a tu servidor. La clase `ObjectID` viene desde el paquete `mongodb`. `mongodb@~3.6.0` ya ha sido agregada como una dependencia. Declara esta clase con:

```javascript
const { ObjectID } = require('mongodb');
```

El `deserializeUser` arrojará un error hasta que configures la conexión de la base de datos. Así que, por ahora, comenta la llamada `myDatabase.findOne`, y llama `done(null, null)` en la `deserializeUser` función callback.

Envía tu página cuando tu creas la tienes correctamente. Si te encuentras errores, puedes <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#serialization-of-a-user-object-4" target="_blank" rel="noopener noreferrer nofollow">comprobar el proyecto completado hasta este punto</a>.

# --hints--

Debes serializar el objeto usuario correctamente.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /passport.serializeUser/gi,
    'You should have created your passport.serializeUser function'
  );
  assert.match(
    data,
    /null,\s*user._id/gi,
    'There should be a callback in your serializeUser with (null, user._id)'
  );
}
```

Debes deserializar el objeto usuario correctamente.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /passport.deserializeUser/gi,
    'You should have created your passport.deserializeUser function'
  );
  assert.match(
    data,
    /null,\s*null/gi,
    'There should be a callback in your deserializeUser with (null, null) for now'
  );
}
```

MongoDB debe ser una dependencia.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'mongodb',
    'Your project should list "mongodb" as a dependency'
  );
}
```

Mongodb debe ser requerido apropiadamente incluyendo el ObjectId.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')mongodb\1/gi,
    'You should have required mongodb'
  );
  assert.match(
    data,
    /new ObjectID.*id/gi,
    'Even though the block is commented out, you should use new ObjectID(id) for when we add the database'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
