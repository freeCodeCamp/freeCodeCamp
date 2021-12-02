---
id: 5895f70cf9fc0f352b528e66
title: Serialización de un objeto de usuario
challengeType: 2
forumTopicId: 301563
dashedName: serialization-of-a-user-object
---

# --description--

Serialización y deserialización son conceptos importantes en lo que respecta a la autentificación. Para serializar un objeto significa convertir su contenido en una pequeña *key* que puede ser deserializada en el objeto original. Esto es lo que nos permite saber quién se ha comunicado con el servidor sin tener que enviar los datos de autentificación, como el nombre de usuario y la contraseña, en cada petición de una nueva página.

Para configurarlo correctamente, necesitamos tener una función serializada y una función deserializada. En Passport los creamos con `passport.serializeUser( OURFUNCTION )` y `passport.deserializeUser( OURFUNCTION )`

El `serializeUser` es llamado con 2 argumentos, el objeto de usuario completo y un callback usado por passport. Una clave única para identificar que el usuario debe ser devuelto en el callback, el más fácil de usar es el `_id` del usuario en el objeto. Debe ser único ya que es generado por MongoDB. De manera similar, `deserializeUser` es llamado con esa clave y también una función de callback para passport, pero, esta vez, tenemos que tomar esa clave y devolver el objeto de usuario completo al callback. Para hacer una consulta de búsqueda para Mongo `_id`, tendrás que crear `const ObjectID = require('mongodb').ObjectID;`, y para usarlo llama a `new ObjectID(THE_ID)`. Asegúrate de agregar `mongodb@~3.6.0` como una dependencia. Puedes ver esto en los ejemplos siguientes:

```js
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  });
});
```

NOTA: Este `deserializeUser` arrojará un error hasta que establezcamos la BD en el siguiente paso, así que por ahora comenta todo el bloque y simplemente llama a `done(null, null)` en la función `deserializeUser`.

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes revisar el proyecto completado hasta este punto [aquí](https://gist.github.com/camperbot/7068a0d09e61ec7424572b366751f048).

# --hints--

Debes serializar correctamente la función de usuario.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
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
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Debes deserializar correctamente la función de usuario.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
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
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

MongoDB debe ser una dependencia.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'mongodb',
        'Your project should list "mongodb" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Mongodb debe ser requerido correctamente, incluyendo el ObjectId.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
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
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
