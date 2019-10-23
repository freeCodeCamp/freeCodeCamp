---
id: 58965611f9fc0f352b528e6c
title: Logging a User Out
challengeType: 2
videoUrl: ''
localeTitle: Cerrar sesión de un usuario
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Crear la lógica de cierre de sesión es fácil. La ruta simplemente debe no autenticar al usuario y redirigir a la página de inicio en lugar de mostrar cualquier vista. En el pasaporte, la no autenticación de un usuario es tan fácil como llamar a <code>req.logout();</code> antes de redirigir <pre> app.ruta (&#39;/ logout&#39;)
  .get ((req, res) =&gt; {
      req.logout ();
      res.redirect (&#39;/&#39;);
  }); </pre> Es posible que haya notado que tampoco estamos manejando páginas faltantes (404), la forma común de manejar esto en Node es con el siguiente middleware. Continúa y agrega esto después de todas tus otras rutas: <pre> app.use ((req, res, next) =&gt; {
  estado de res. (404)
    .teclee el texto&#39;)
    .send (&#39;No encontrado&#39;);
}); </pre> Envía tu página cuando creas que lo has hecho bien. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ruta de cierre de sesión
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /req.logout/gi, "You should be call req.logout() in youre /logout route"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Cerrar sesión debe redirigir a la página de inicio /
    testString: 'getUserInput => $.get(getUserInput("url")+ "/logout") .then(data => { assert.match(data, /Home page/gi, "When a user logs out they should be redirected to the homepage"); }, xhr => { throw new Error(xhr.statusText); })'

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
