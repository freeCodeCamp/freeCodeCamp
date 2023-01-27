---
id: 5895f70df9fc0f352b528e68
title: Estrategias de autenticación
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

Una estrategia es una manera de autenticar a un usuario. Puedes utilizar una estrategia para permitir que los usuarios se autentiquen basándose en la información guardada localmente (si les haces registrarse primero) o desde una variedad de proveedores como Google o GitHub. Para este proyecto, usaremos el agente intermedio Passport. Passport provee un comprensivo set de estrategias que soportan la autenticación usando un nombre de usuario y una contraseña, GitHub, Google, y más.

`passport-local@~1.0.0` has already been added as a dependency. Add it to your server as follows:

```javascript
const LocalStrategy = require('passport-local');
```

Tell passport to **use** an instantiated `LocalStrategy` object with a few settings defined. Make sure this (as well as everything from this point on) is encapsulated in the database connection since it relies on it!:

```javascript
passport.use(new LocalStrategy((username, password, done) => {
  myDataBase.findOne({ username: username }, (err, user) => {
    console.log(`User ${username} attempted to log in.`);
    if (err) return done(err);
    if (!user) return done(null, false);
    if (password !== user.password) return done(null, false);
    return done(null, user);
  });
}));
```

Esto es definir el proceso a utilizar cuando intentas autenticar a alguien localmente. Primero, intenta encontrar un usuario en tu base de datos con el nombre de usuario introducido. Luego, comprueba que la contraseña coincida. Finalmente, si no han aparecido errores que hayas comprobado (por ejemplo, una contraseña incorrecta), se devuelve el objeto `user` y están autenticados.

Muchas estrategias están configuradas usando diferentes ajustes. Generalmente, es fácil de configurar basándose en el README en el repositorio de esa estrategia. Un buen ejemplo de esto es la estrategia de GitHub, donde no necesitamos preocuparnos por un nombre de usuario o una contraseña porque el usuario será enviado a la página de autenticación de GitHub para autenticarse. Siempre que hayan iniciado sesión y estén de acuerdo, GitHub nos devuelve su perfil para que lo utilicemos.

En el siguiente paso, configurarás cómo llamar realmente a la estrategia de autenticación para validar a un usuario basándote en los datos del formulario.

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#authentication-strategies-6" target="_blank" rel="noopener noreferrer nofollow">consultar el proyecto realizado hasta este momento</a>.

# --hints--

Passport-local debe ser una dependencia.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport-local',
    'Your project should list "passport-local " as a dependency'
  );
}
```

Passport-local debe ser correctamente requerido y configurado.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport-local("|')/,
    'You should have required passport-local'
  );
  assert.match(
    data,
    /new LocalStrategy/,
    'You should have told passport to use a new strategy'
  );
  assert.match(
    data,
    /findOne/,
    'Your new local strategy should use the findOne query to find a username based on the inputs'
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
