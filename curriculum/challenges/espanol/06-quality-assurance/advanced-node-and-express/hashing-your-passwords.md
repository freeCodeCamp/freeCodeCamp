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

Actualmente, en la ruta de registro estás insertando en la base de datos contraseñas de usuario en texto plano: `password: req.body.password`. En su lugar, haz un hashing de las contraseñas añadiendo lo siguiente antes de la lógica de la base de datos: `const hash = bcrypt.hashSync(req.body.password, 12);` y reemplazando `req.body.password` en el guardado en la base da datos por simplemente lo siguiente: `password: hash`.

En la estrategia de autenticación, comprobamos lo siguiente antes de completar el proceso: `if (password !== user.password) return done(null, false);`. Después de realizar los cambios anteriores, ahora `user.password` es un hash. Antes de hacer un cambio en el código existente, nota que la sentencia está comprobando si la contraseña **no** es igual entonces devuelve no autenticado. Con esto en mente, cambia el código según el siguiente fragmento para constrastar la contraseña introducida frente al hash:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

Esto es todo lo necesario para implementar una de las características de seguridad más importantes cuando se almacenan contraseñas.

Envía tu página cuando creas que lo has hecho bien. Si tienes problemas, <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#hashing-your-passwords-1" target="_blank" rel="noopener noreferrer nofollow"> aquí puedes echar un vistazo al proyecto completado hasta este punto</a>.

# --hints--

BCrypt debe ser una dependencia.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json()
  assert.property(
    packJson.dependencies,
    'bcrypt',
    'Your project should list "bcrypt" as a dependency'
  );
}
```

BCrypt debe ser correctamente requerido e implementado.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
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
