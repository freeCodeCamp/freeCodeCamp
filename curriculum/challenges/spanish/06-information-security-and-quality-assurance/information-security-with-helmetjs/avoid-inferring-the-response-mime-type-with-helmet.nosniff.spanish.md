---
id: 587d8248367417b2b2512c3a
title: Avoid Inferring the Response MIME Type with helmet.noSniff()
challengeType: 2
videoUrl: ''
localeTitle: Evite Inferir el Tipo MIME de Respuesta con helmet.noSniff ()
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Los navegadores pueden usar el contenido o el rastreo de MIME para adaptarse a diferentes tipos de datos que provienen de una respuesta. Anulan los encabezados de tipo de contenido para adivinar y procesar los datos. Si bien esto puede ser conveniente en algunos escenarios, también puede llevar a algunos ataques peligrosos. Este middleware establece el encabezado X-Content-Type-Options en nosniff. Esto indica al navegador que no omita el tipo de contenido proporcionado. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El middleware helmet.noSniff () se debe montar correctamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "nosniff"); assert.equal(data.headers["x-content-type-options"], "nosniff"); }, xhr => { throw new Error(xhr.responseText); })'

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
