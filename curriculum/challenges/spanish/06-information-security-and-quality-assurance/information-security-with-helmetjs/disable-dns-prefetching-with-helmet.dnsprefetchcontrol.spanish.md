---
id: 587d8248367417b2b2512c3d
title: Disable DNS Prefetching with helmet.dnsPrefetchControl()
localeTitle: Deshabilitar la búsqueda previa de DNS con helmet.dnsPrefetchControl ()
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> . 
Para mejorar el rendimiento, la mayoría de los navegadores obtienen registros DNS para los enlaces en una página. De esa manera, la dirección IP de destino ya se conoce cuando el usuario hace clic en un enlace. Esto puede llevar a un uso excesivo del servicio DNS (si posee un sitio web grande, visitado por millones de personas ...), problemas de privacidad (un intruso podría inferir que se encuentra en una determinada página) o alteración de las estadísticas de la página (algunos enlaces pueden Aparecen visitados aunque no lo sean). Si tiene altas necesidades de seguridad, puede desactivar la búsqueda previa de DNS, a costa de una penalización de rendimiento. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El middleware helmet.dnsPrefetchControl () se debe montar correctamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "dnsPrefetchControl"); assert.equal(data.headers["x-dns-prefetch-control"], "off"); }, xhr => { throw new Error(xhr.responseText); })'

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
