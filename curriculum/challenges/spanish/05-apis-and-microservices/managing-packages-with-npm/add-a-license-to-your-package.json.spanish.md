---
id: 587d7fb4367417b2b2512bfe
title: Add a License to Your package.json
localeTitle: Agregue una licencia a su paquete.json
challengeType: 2
---

## Description
<section id='description'> 
El campo de licencia es donde usted informa a los usuarios de su proyecto sobre lo que pueden hacer con él. 
Algunas licencias comunes para proyectos de código abierto incluyen MIT y BSD. http://choosealicense.com es un gran recurso si desea obtener más información acerca de qué licencia podría adaptarse a su proyecto. 
No se requiere información de licencia. Las leyes de derechos de autor en la mayoría de los países le otorgarán la propiedad de lo que crea de forma predeterminada. Sin embargo, siempre es una buena práctica indicar explícitamente lo que los usuarios pueden y no pueden hacer. 
Ejemplo 
<code>"license": "MIT",</code> 
Instrucciones 
Rellene el campo de licencia en el paquete.json de su proyecto de Glitch cuando lo considere adecuado. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json debería tener una clave de "licencia" válida
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.license, ''"license" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
