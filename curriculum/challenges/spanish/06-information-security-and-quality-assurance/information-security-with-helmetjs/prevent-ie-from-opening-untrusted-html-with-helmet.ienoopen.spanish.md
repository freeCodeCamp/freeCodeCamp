---
id: 587d8248367417b2b2512c3b
title: Prevent IE from Opening Untrusted HTML with helmet.ieNoOpen()
challengeType: 2
videoUrl: ''
localeTitle: Evita que IE abra HTML no confiable con helmet.ieNoOpen ()
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Algunas aplicaciones web servirán HTML no confiable para descargar. Algunas versiones de Internet Explorer abren esos archivos HTML en el contexto de su sitio. Esto significa que una página HTML no confiable podría comenzar a hacer cosas malas en el contexto de sus páginas. Este middleware establece el encabezado X-Download-Options en noopen. Esto evitará que los usuarios de IE ejecuten descargas en el contexto del sitio de confianza. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El middleware helmet.ieNoOpen () se debe montar correctamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "ienoopen"); assert.equal(data.headers["x-download-options"], "noopen"); }, xhr => { throw new Error(xhr.responseText); })'

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
