---
id: 587d7fb5367417b2b2512c02
title: Use the Tilde-Character to Always Use the Latest Patch Version of a Dependency
localeTitle: Use el carácter de tilde para usar siempre la última versión de parche de una dependencia
challengeType: 2
---

## Description
<section id='description'> 
En el último desafío, le dijimos a npm que solo incluya una versión específica de un paquete. Es una forma útil de congelar sus dependencias si necesita asegurarse de que las diferentes partes de su proyecto sean compatibles entre sí. Pero en la mayoría de los casos de uso, no querrá perderse la corrección de errores, ya que a menudo incluyen importantes parches de seguridad y (con suerte) no rompen las cosas al hacerlo. 
Para permitir que una dependencia npm se actualice a la última versión de PATCH, puede prefijar la versión de la dependencia con el carácter de tilde (~). En package.json, nuestra regla actual sobre cómo npm puede actualizarse en el momento es usar solo una versión específica (2.10.2), pero queremos permitir la última versión 2.10.x. 
Ejemplo 
<code>"some-package-name": "~1.3.8" allows updates to any 1.3.x version.</code> 
Instrucciones 
Use el carácter de tilde (~) para prefijar la versión de momento en sus dependencias y permita que npm la actualice a cualquier nueva versión de PATCH. 
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
  - text: La versión "moment" debe coincidir con "~ 2.10.2" '
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\~2\.10\.2/, ''Wrong version of "moment". It should be ~2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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
