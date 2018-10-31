---
id: 58a25c98f9fc0f352b528e7f
title: Hashing Your Passwords
challengeType: 2
videoUrl: ''
localeTitle: Hashing tus contraseñas
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Volviendo a la sección de seguridad de la información, puede recordar que almacenar las contraseñas de texto sin formato <em>nunca</em> está bien. Ahora es el momento de implementar BCrypt para resolver este problema. <hr> Agregue BCrypt como una dependencia y solicítelo en su servidor. Tendrá que manejar el hash en 2 áreas clave: donde se manejará el registro / guardar una nueva cuenta y cuando verifique que la contraseña sea correcta al iniciar sesión. Actualmente en nuestra ruta de registro, inserta la contraseña de un usuario en la base de datos como la siguiente: <code>password: req.body.password</code> . Una forma fácil de implementar guardar un hash es agregar lo siguiente antes de la lógica de su base de datos <code>var hash = bcrypt.hashSync(req.body.password, 12);</code> y reemplazando <code>req.body.password</code> en la base de datos guardando solo con <code>password: hash</code> . Finalmente, en nuestra estrategia de autenticación, verificamos lo siguiente en nuestro código antes de completar el proceso: <code>if (password !== user.password) { return done(null, false); }</code> . Después de hacer los cambios anteriores, ahora <code>user.password</code> es un hash. Antes de realizar un cambio en el código existente, observe cómo la declaración está verificando si la contraseña NO es igual y luego devuelva sin autenticarse. Teniendo esto en cuenta, su código podría tener el siguiente aspecto para verificar correctamente la contraseña ingresada contra el hash: <code>if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }</code> Eso es todo lo que se necesita para implementar una de las funciones de seguridad más importantes cuando tiene que almacenar contraseñas! Envía tu página cuando creas que lo has hecho bien. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: BCrypt es una dependencia
    testString: ' getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "bcrypt", "Your project should list "bcrypt" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: BCrypt correctamente requerido e implementado
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")bcrypt("|")/gi, "You should have required bcrypt"); assert.match(data, /bcrypt.hashSync/gi, "You should use hash the password in the registration"); assert.match(data, /bcrypt.compareSync/gi, "You should compare the password to the hash in your strategy"); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
