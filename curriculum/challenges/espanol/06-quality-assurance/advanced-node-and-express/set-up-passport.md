---
id: 5895f70cf9fc0f352b528e65
title: Configura Passport
challengeType: 2
forumTopicId: 301565
dashedName: set-up-passport
---

# --description--

¡Es hora de configurar *Passport* para que finalmente podamos empezar a permitir que un usuario se registre o inicie sesión en una cuenta! Además de Passport, usaremos Express-session para manejar sesiones. La sesión express tiene muchas funciones avanzadas que puedes usar, pero por ahora solo vamos a usar lo básico! Usar este middleware te guarda el id de la sesión como una cookie en el cliente y nos permite acceder a los datos de la sesión usando ese id en el servidor. De esta manera guardamos información personal de la cuenta fuera de la cookie usada por el cliente para verificar en nuestro servidor que están autentificadas y mantener la *llave* para acceder a los datos guardados en el servidor.

`passport@~0.4.1` y `express-session@~1.17.1` ya están instalados, y los dos están apuntados como dependencias en tu archivo `package.json`.

Necesitarás configurar la configuración de sesión ahora e inicializar Passport. Asegurate de primero crear las variables 'session' y 'passport' para requerir 'express-session' y 'passport' respectivamente.

Para configurar tu aplicación express para usar la sesión definiremos sólo algunas opciones básicas. Asegúrate de agregar 'SESSION_SECRET' a tu archivo .env y dale un valor aleatorio. ¡Esto es usado para computar el hash usado para encriptar tus cookie!

```js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

También puedes seguir adelante y decirle a tu aplicación express que **usé** 'passport.initialize()' y 'passport.session()'. (Por ejemplo, `app.use(passport.initialize());`)

Envía tu página cuando pienses que la tengas correcto. Si te encuentras con errores, puedes consultar el <a href="https://gist.github.com/camperbot/4068a7662a2f9f5d5011074397d6788c" target="_blank" rel="noopener noreferrer nofollow">proyecto completado hasta este momento</a>.

# --hints--

Passport y Express-session deben ser dependencias.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport',
        'Your project should list "passport" as a dependency'
      );
      assert.property(
        packJson.dependencies,
        'express-session',
        'Your project should list "express-session" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Las dependencias deben ser requeridas correctamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport("|')/gi,
        'You should have required passport'
      );
      assert.match(
        data,
        /require.*("|')express-session("|')/gi,
        'You should have required express-session'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

La aplicación Express debe usar nuevas dependencias.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.initialize/gi,
        'Your express app should use "passport.initialize()"'
      );
      assert.match(
        data,
        /passport.session/gi,
        'Your express app should use "passport.session()"'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

La sesión y el secreto de la sesión deben estar configurados correctamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /secret *: *process\.env(\.SESSION_SECRET|\[(?<q>"|')SESSION_SECRET\k<q>\])/g,
        'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'
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
