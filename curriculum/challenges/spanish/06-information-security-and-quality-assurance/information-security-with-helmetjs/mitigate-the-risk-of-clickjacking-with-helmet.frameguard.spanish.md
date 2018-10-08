---
id: 587d8247367417b2b2512c38
title: Mitigate the Risk of Clickjacking with helmet.frameguard()
localeTitle: Mitigue el riesgo de clickjacking con helmet.frameguard ()
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> . 
Su página podría colocarse en un <code>&lt;frame&gt;</code> o <code>&lt;iframe&gt;</code> sin su consentimiento. Esto puede resultar en ataques de clickjacking, entre otras cosas. Clickjacking es una técnica para engañar a un usuario para que interactúe con una página diferente de lo que el usuario cree que es. Esto se puede obtener ejecutando su página en un contexto malicioso, mediante iframing. En ese contexto, un hacker puede poner una capa oculta sobre su página. Los botones ocultos se pueden utilizar para ejecutar scripts incorrectos. Este middleware establece el encabezado X-Frame-Options. Se restringe quién puede poner su sitio en un marco. Tiene tres modos: DENY, SAMEORIGIN y ALLOW-FROM. 
No necesitamos que nuestra aplicación sea enmarcada. Debería usar el uso de <code>helmet.frameguard()</code> pasa con el objeto de configuración <code>{action: &#39;deny&#39;}</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El middleware helmet.frameguard () debe ser montado correctamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "frameguard", "helmet.frameguard() middleware is not mounted correctly"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: helmet.frameguard () 'action' se debe establecer en 'DENY'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.property(data.headers, "x-frame-options"); assert.equal(data.headers["x-frame-options"], "DENY");}, xhr => { throw new Error(xhr.responseText); })'

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
