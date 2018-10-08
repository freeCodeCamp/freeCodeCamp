---
id: 587d8247367417b2b2512c37
title: Hide Potentially Dangerous Information Using helmet.hidePoweredBy()
localeTitle: Ocultar información potencialmente peligrosa mediante el uso de helmet.hidePoweredBy ()
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> . 
piratas informáticos pueden explotar vulnerabilidades conocidas en Express / Node si ven que su sitio funciona con Express. X-Powered-By: Express se envía en todas las solicitudes que vienen de Express de forma predeterminada. El middleware helmet.hidePoweredBy () eliminará el encabezado X-Powered-By. También puede establecer explícitamente el encabezado a otra cosa, para despedir a las personas. por ejemplo, app.use (helmet.hidePoweredBy ({setTo: &#39;PHP 4.2.0&#39;})) 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.hidePoweredBy () middleware debe montarse correctamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "hidePoweredBy"); assert.notEqual(data.headers["x-powered-by"], "Express")}, xhr => { throw new Error(xhr.responseText); })'

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
