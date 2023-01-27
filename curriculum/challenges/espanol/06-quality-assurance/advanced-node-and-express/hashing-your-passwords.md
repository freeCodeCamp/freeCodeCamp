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

Currently on your registration route, you insert a user's plaintext password into the database like so: `password: req.body.password`. Hash the passwords instead by adding the following before your database logic: `const hash = bcrypt.hashSync(req.body.password, 12);`, and replacing the `req.body.password` in the database saving with just `password: hash`.

On your authentication strategy, you check for the following in your code before completing the process: `if (password !== user.password) return done(null, false);`. Después de realizar los cambios anteriores, ahora `user.password` es un hash. Antes de hacer un cambio en el código existente, nota que la sentencia está comprobando si la contraseña **no** es igual entonces devuelve no autenticado. With this in mind, change that code to look as follows to properly check the password entered against the hash:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

That is all it takes to implement one of the most important security features when you have to store passwords.

Envía tu página cuando creas que lo has hecho bien. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#hashing-your-passwords-1" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

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
