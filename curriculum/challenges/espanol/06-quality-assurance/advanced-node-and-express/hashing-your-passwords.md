---
id: 58a25c98f9fc0f352b528e7f
title: Hashing de contraseñas
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

Volviendo a la sección de seguridad de la información, puedes recordar que almacenar contraseñas en texto plano *nunca* está bien. Ahora es el momento de implementar BCrypt para resolver este problema.

`bcrypt@~5.0.0` Ha sido agregado como una dependencia, así que requiérelo en tu servidor. Necesitarás manejar el hashing en 2 áreas clave: donde manejas el registro/guardado de una nueva cuenta, y cuando compruebas que una contraseña es correcta al iniciar sesión.

Actualmente en nuestra ruta de registro, se inserta la contraseña de un usuario en la base de datos así: `password: req.body.password`. Una forma sencilla de implementar el guardado de un hash en su lugar es agregar lo siguiente antes de tu lógica de base de datos `const hash = bcrypt.hashSync(req.body.password, 12);`, y sustituir el `req.body.password` en el guardado de la base de datos por sólo `password: hash`.

Finalmente, en nuestra estrategia de autenticación, comprobamos lo siguiente en nuestro código antes de completar el proceso: `if (password !== user.password) { return done(null, false); }`. Después de realizar los cambios anteriores, ahora `user.password` es un hash. Antes de hacer un cambio en el código existente, nota que la sentencia está comprobando si la contraseña **no** es igual entonces devuelve no autenticado. Con esto en mente, tu código podría verse como se muestra a continuación para verificar correctamente la contraseña introducida contra el hash:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

¡Eso es todo lo que se necesita para implementar una de las características de seguridad más importantes cuando tienes que almacenar contraseñas!

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes consultar el <a href="https://gist.github.com/camperbot/dc16cca09daea4d4151a9c36a1fab564" target="_blank" rel="noopener noreferrer nofollow">proyecto completado hasta este momento</a>.

# --hints--

BCrypt debe ser una dependencia.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'bcrypt',
        'Your project should list "bcrypt" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

BCrypt debe ser correctamente requerido e implementado.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')bcrypt\1/gi,
        'You should have required bcrypt'
      );
      assert.match(
        data,
        /bcrypt.hashSync/gi,
        'You should use hash the password in the registration'
      );
      assert.match(
        data,
        /bcrypt.compareSync/gi,
        'You should compare the password to the hash in your strategy'
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
