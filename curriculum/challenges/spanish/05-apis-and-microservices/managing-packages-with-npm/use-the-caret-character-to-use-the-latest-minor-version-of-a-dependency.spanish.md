---
id: 587d7fb5367417b2b2512c03
title: Use the Caret-Character to Use the Latest Minor Version of a Dependency
localeTitle: Use el Caret-Character para usar la última versión menor de una dependencia
challengeType: 2
---

## Description
<section id='description'> 
De manera similar a como aprendimos acerca de la tilde (~) en el último desafío, permite a npm instalar el último PATCH para una dependencia, el caret (^) también permite que npm instale actualizaciones futuras. La diferencia es que el compás permitirá tanto las actualizaciones MENORES como los PARCHES. 
En este momento, su versión actual de moment debería ser ~ 2.10.2, que permite que npm se instale en la última versión 2.10.x. Si, en cambio, utilizáramos el caret (^) como nuestro prefijo de versión, a npm se le permitiría actualizar a cualquier versión 2.xx. 
Ejemplo 
<code>"some-package-name": "^1.3.8" allows updates to any 1.xx version.</code> 
Instrucciones 
Use el carácter de intercalación (^) para prefijar la versión del momento en sus dependencias y permita que npm la actualice a cualquier nueva versión MINOR. 
Tenga en cuenta que los números de versión en sí no deben cambiarse. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"dependencias" debe incluir "momento"'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: La versión "moment" debe coincidir con "^ 2.x.x" '
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\^2\./, ''Wrong version of "moment". It should be ^2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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
