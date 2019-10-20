---
id: 587d8249367417b2b2512c3e
title: Disable Client-Side Caching with helmet.noCache()
challengeType: 2
videoUrl: ''
localeTitle: Deshabilitar el caché del lado del cliente con helmet.noCache ()
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Si está lanzando una actualización para su sitio web, y desea que los usuarios descarguen siempre la versión más reciente, puede (intentar) desactivar el almacenamiento en caché en el navegador del cliente. Puede ser útil en el desarrollo también. El almacenamiento en caché tiene beneficios de rendimiento, que perderá, así que solo use esta opción cuando exista una necesidad real. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El middleware helmet.noCache () debe ser montado correctamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "nocache"); assert.equal(data.headers["cache-control"], "no-store, no-cache, must-revalidate, proxy-revalidate"); }, xhr => { throw new Error(xhr.responseText); })'

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
