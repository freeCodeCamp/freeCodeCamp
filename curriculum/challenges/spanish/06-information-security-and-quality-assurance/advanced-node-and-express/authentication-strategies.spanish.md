---
id: 5895f70df9fc0f352b528e68
title: Authentication Strategies
challengeType: 2
videoUrl: ''
localeTitle: Estrategias de autenticación
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Una estrategia es una forma de autenticar a un usuario. Puede usar una estrategia para permitir que los usuarios se autentiquen basándose en la información guardada localmente (si primero los registra) o de una variedad de proveedores como Google o GitHub. Para este proyecto estableceremos una estrategia local. Para ver una lista de las 100 estrategias, visite el sitio de Pasaportes <a href="http://passportjs.org/">aquí</a> . Agregue el <em>pasaporte local</em> como una dependencia y agréguelo a su servidor de la siguiente manera: <code>const LocalStrategy = require(&#39;passport-local&#39;);</code> Ahora tendrá que decirle al pasaporte que <b>use</b> un objeto LocalStartegy instanciado con algunas configuraciones definidas. ¡Asegúrese de que esto, así como todo, a partir de este momento esté encapsulado en la conexión de la base de datos ya que depende de ello! <pre> passport.use (nueva LocalStrategy (
  función (nombre de usuario, contraseña, hecho) {
    db.collection (&#39;usuarios&#39;). findOne ({nombre de usuario: nombre de usuario}, función (err, usuario) {
      console.log (&#39;Usuario&#39; + nombre de usuario + &#39;intentó iniciar sesión&#39;);
      if (err) {return done (err); }
      if (! user) {return done (null, false); }
      if (password! == user.password) {return done (null, false); }
      retorno realizado (nulo, usuario);
    });
  }
)); </pre> Esto es definir el proceso a seguir cuando intentamos autenticar a alguien localmente. Primero, trata de encontrar un usuario en nuestra base de datos con el nombre de usuario ingresado, luego verifica que la contraseña coincida, y finalmente, si no aparece ningún error que verifiquemos, como una contraseña incorrecta, se devuelve el objeto de los usuarios y son autenticado Sin embargo, muchas estrategias se configuran con diferentes configuraciones, en general, es fácil configurarlo en función del README en ese repositorio de estrategias. Un buen ejemplo de esto es la estrategia de GitHub en la que no debemos preocuparnos por un nombre de usuario o contraseña, ya que el usuario será enviado a la página de autenticación de GitHub para autenticarse y siempre que inicie sesión y acepte, GitHub devuelve su perfil para que usemos En el siguiente paso, configuraremos cómo llamar realmente a la estrategia de autenticación para validar a un usuario en base a los datos del formulario. Envíe su página cuando crea que la tiene hasta este punto. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Pasaporte local es una dependencia
    testString: ' getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "passport-local", "Your project should list "passport-local " as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Pasaporte local correctamente requerido y configuración
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")passport-local("|")/gi, "You should have required passport-local"); assert.match(data, /new LocalStrategy/gi, "You should have told passport to use a new strategy"); assert.match(data, /findOne/gi, "Your new local strategy should use the findOne query to find a username based on the inputs"); }, xhr => { throw new Error(xhr.statusText); })'

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
