---
id: 587d8247367417b2b2512c36
title: Install and Require Helmet
localeTitle: Instalar y Requerir Casco
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> . 
Helmet lo ayuda a proteger sus aplicaciones Express configurando varios encabezados HTTP. Instale el paquete, luego requiéralo. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La dependencia de "casco" debería estar en package.json '
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/package.json").then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "helmet"); }, xhr => { throw new Error(xhr.responseText); })'

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
