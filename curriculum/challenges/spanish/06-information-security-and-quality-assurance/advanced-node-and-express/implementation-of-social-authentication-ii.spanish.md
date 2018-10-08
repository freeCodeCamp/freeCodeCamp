---
id: 589a69f5f9fc0f352b528e71
title: Implementation of Social Authentication II
localeTitle: Implementación de la autenticación social II
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socialauth/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-socialauth/'>GitHub</a> . 
La última parte de la configuración de la autenticación de Github es crear la propia estrategia. Para esto, deberá agregar la dependencia de &#39;passport-github&#39; a su proyecto y requerirlo como GithubStrategy como <code>const GitHubStrategy = require(&#39;passport-github&#39;).Strategy;</code> . 
Para configurar la estrategia Github, debe indicar al <b>pasaporte</b> que <b>use</b> una <b>GithubStrategy</b> instanciada, que acepta 2 argumentos: un objeto (que contiene <em>clientID</em> , <em>clientSecret</em> y <em>callbackURL</em> ) y una función que debe llamarse cuando un usuario se autentica correctamente, lo cual determine si el usuario es nuevo y qué campos guardar inicialmente en el objeto de la base de datos del usuario. Esto es común en muchas estrategias, pero algunas pueden requerir más información como se describe en el github README de esa estrategia específica; Por ejemplo, Google también requiere un <em>alcance</em> que determine qué tipo de información solicita su devolución y le pide al usuario que apruebe dicho acceso. La estrategia actual que estamos implementando tiene su uso descrito <a>aquí</a> , ¡pero lo estamos haciendo todo aquí en freeCodeCamp! 
Así es como debe verse su nueva estrategia en este punto: <pre> passport.use (nuevo GitHubStrategy ({ 
clientID: process.env.GITHUB_CLIENT_ID, 
clientSecret: process.env.GITHUB_CLIENT_SECRET, 
callbackURL: / * INSERT CALLBACK URL ENTRADO EN GERE AQUÍ * / 
}, 
función (accessTenene) profile, cb) { 
console.log (profile); 
// Base de datos lógica aquí con devolución de llamada que contiene nuestro objeto de usuario 
} 
)); </pre> 
Su autenticación no será exitosa todavía, y en realidad arrojará un error, sin la lógica de la base de datos y la devolución de llamada, ¡pero debe iniciar sesión en su consola con su perfil de Github si lo intenta! 
Envía tu página cuando creas que lo has hecho bien. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Dependencia añadida
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "passport-github", "Your project should list "passport-github" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Dependencia requerida
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")passport-github("|")/gi, "You should have required passport-github"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Estrategia de Github configurada correctamente hasta ahora
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /passport.use.*new GitHubStrategy/gi, "Passport should use a new GitHubStrategy"); assert.match(data, /callbackURL:( |)("|").*("|")/gi, "You should have a callbackURL"); assert.match(data, /process.env.GITHUB_CLIENT_SECRET/g, "You should use process.env.GITHUB_CLIENT_SECRET"); assert.match(data, /process.env.GITHUB_CLIENT_ID/g, "You should use process.env.GITHUB_CLIENT_ID"); }, xhr => { throw new Error(xhr.statusText); })'

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
