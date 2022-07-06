---
id: 5895f70df9fc0f352b528e68
title: Estrategias de autenticación
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

Una estrategia es una manera de autenticar a un usuario. Puedes utilizar una estrategia para permitir que los usuarios se autentiquen basándose en la información guardada localmente (si les haces registrarse primero) o desde una variedad de proveedores como Google o GitHub. Para este proyecto, usaremos el agente intermedio Passport. Passport provee un comprensivo set de estrategias que soportan la autenticación usando un nombre de usuario y una contraseña, GitHub, Google, y más.

Agrega `passport-local@~1.0.0` como dependencia y agrégalo a tu servidor de la siguiente manera: `const LocalStrategy = require('passport-local');`

Ahora tendrás que decirle a passport que **use** un objeto LocalStrategy instanciado con algunas configuraciones definidas. ¡Asegúrate que esto (al igual que todo lo que se haga a partir de ahora) esté encapsulado en la conexión a la base de datos, ya que depende de ella!

```js
passport.use(new LocalStrategy(
  function(username, password, done) {
    myDataBase.findOne({ username: username }, function (err, user) {
      console.log('User '+ username +' attempted to log in.');
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (password !== user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

Esto es definir el proceso a utilizar cuando intentamos autenticar a alguien localmente. Primero, intenta encontrar un usuario en nuestra base de datos con el nombre de usuario introducido, luego comprueba que la contraseña coincida, y finalmente, si no han aparecido los errores que hemos comprobado, como una contraseña incorrecta, se devuelve el objeto del `user` y se autentifica.

Muchas estrategias se configuran con diferentes ajustes, pero generalmente es fácil configurarlo basándose en el README del repositorio de esa estrategia. Un buen ejemplo de esto es la estrategia de GitHub, donde no necesitamos preocuparnos por un nombre de usuario o una contraseña porque el usuario será enviado a la página de autenticación de GitHub para autenticarse. Siempre que hayan iniciado sesión y estén de acuerdo, GitHub nos devuelve su perfil para que lo utilicemos.

En el siguiente paso, ¡configuraremos cómo llamar a la estrategia de autenticación para validar un usuario basado en los datos del formulario!

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes revisar el proyecto completado hasta este punto [aquí](https://gist.github.com/camperbot/53b495c02b92adeee0aa1bd3f3be8a4b).

# --hints--

Passport-local debe ser una dependencia.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport-local',
        'Your project should list "passport-local " as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Passport-local debe ser correctamente requerido y configurado.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport-local("|')/gi,
        'You should have required passport-local'
      );
      assert.match(
        data,
        /new LocalStrategy/gi,
        'You should have told passport to use a new strategy'
      );
      assert.match(
        data,
        /findOne/gi,
        'Your new local strategy should use the findOne query to find a username based on the inputs'
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
