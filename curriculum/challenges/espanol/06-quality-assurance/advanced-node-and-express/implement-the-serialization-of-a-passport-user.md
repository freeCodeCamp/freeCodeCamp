---
id: 5895f70cf9fc0f352b528e67
title: Implementa la serialización de un usuario Passport
challengeType: 2
forumTopicId: 301556
dashedName: implement-the-serialization-of-a-passport-user
---

# --description--

Ahora mismo, no estamos cargando un objeto de usuario real ya que no hemos configurado nuestra base de datos. Esto puede hacerse de muchas maneras, pero para nuestro proyecto nos conectaremos a la base de datos una vez cuando iniciemos el servidor y mantendremos una conexión persistente durante todo el ciclo de vida de la aplicación. Para hacer esto, agrega la cadena de conexión de tu base de datos (por ejemplo: `mongodb+srv://:@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority`) a la variable de entorno `MONGO_URI`. Esto se utiliza en el archivo `connection.js`.

*Puedes configurar una base de datos gratuita en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).*

Ahora queremos conectarnos a nuestra base de datos y empezar a escuchar las peticiones. El propósito de esto es no permitir peticiones antes de que nuestra base de datos esté conectada o si hay un error en la base de datos. Para lograr esto, querrás englobar tu serialización y las rutas de tu aplicación en el siguiente código:

```js
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  // Be sure to change the title
  app.route('/').get((req, res) => {
    //Change the response to render the Pug template
    res.render('pug', {
      title: 'Connected to Database',
      message: 'Please login'
    });
  });

  // Serialization and deserialization here...

  // Be sure to add this...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('pug', { title: e, message: 'Unable to login' });
  });
});
// app.listen out here...
```

Asegúrate de descomentar el código `myDataBase` en `deserializeUser`, y edita tu `done(null, null)` para incluir el `doc`.

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes revisar el proyecto completado hasta este punto [aquí](https://gist.github.com/camperbot/175f2f585a2d8034044c7e8857d5add7).

# --hints--

La conexión a la base de datos debe estar presente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /Connected to Database/gi,
        'You successfully connected to the database!'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

La deserialización ahora debe ser correcta usando la BD y `done(null, null)` debe ser llamado con el `doc`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /null,\s*doc/gi,
        'The callback in deserializeUser of (null, null) should be altered to (null, doc)'
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
