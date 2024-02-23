---
id: 5895f70cf9fc0f352b528e67
title: Implementa la serialización de un usuario Passport
challengeType: 2
forumTopicId: 301556
dashedName: implement-the-serialization-of-a-passport-user
---

# --description--

En este momento, no estás cargando ningún objeto usuario ya que la base de datos no está configurada. Conéctate a la base de datos una vez, cuando arranca el servidor, y mantén la conexión durante todo el ciclo de vida de la app. Para ello, establece el valor de la variable de entorno `MONGO_URI` con la cadena de conexión a la base de datos (por ejemplo `mongodb+srv://<username>:<password>@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority`). Esto se utiliza en el archivo `connection.js`.

*Si tienes problemas configurando una base de datos gratis en MongoDB Atlas, échale un vistazo a este <a href="https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/" target="_blank" rel="noopener noreferrer nofollow">tutorial</a>.*

Por tanto, el objetivo es, en primer lugar, conectarse a la base de datos y, a continuación, comenzar a escuchar peticiones. El objetivo de este enfoque es no permitir peticiones antes de establecer conexión con la base de datos o si hay algún error durante el proceso de conexión. Para conseguirlo, agrupa el código de serialización y de las rutas como se muestra en el siguiente ejemplo:

```javascript
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  // Be sure to change the title
  app.route('/').get((req, res) => {
    // Change the response to render the Pug template
    res.render('index', {
      title: 'Connected to Database',
      message: 'Please login'
    });
  });

  // Serialization and deserialization here...

  // Be sure to add this...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('index', { title: e, message: 'Unable to connect to database' });
  });
});
// app.listen out here...
```

Asegúrate de descomentar el código `myDataBase` en `deserializeUser`, y edita tu `done(null, null)` para incluir el `doc`.

Envía tu página cuando creas que lo has hecho bien. Si tienes errores, <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implement-the-serialization-of-a-passport-user-5" target="_blank" rel="noopener noreferrer nofollow">aquí puedes comprobar el proyecto completado hasta este punto</a>.

# --hints--

La conexión a la base de datos debe estar presente.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /Connected to Database/gi,
    'You successfully connected to the database!'
  );
}
```

La deserialización ahora debe ser correcta usando la BD y `done(null, null)` debe ser llamado con el `doc`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /null,\s*doc/gi,
    'The callback in deserializeUser of (null, null) should be altered to (null, doc)'
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
