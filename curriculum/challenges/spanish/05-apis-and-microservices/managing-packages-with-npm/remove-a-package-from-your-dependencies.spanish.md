---
id: 587d7fb5367417b2b2512c04
title: Remove a Package from Your Dependencies
localeTitle: Retire un paquete de sus dependencias
challengeType: 2
---

## Description
<section id='description'> 
Ahora ha probado algunas formas en que puede administrar las dependencias de su proyecto usando la sección de dependencias de package.json. Ha incluido paquetes externos al agregarlos al archivo e incluso le ha dicho a npm qué tipo de versiones desea utilizando caracteres especiales como la tilde (~) o el caret (^). 
¿Pero qué sucede si desea eliminar un paquete externo que ya no necesita? Es posible que ya lo haya adivinado: simplemente elimine la "clave" correspondiente: par de valores para eso de sus dependencias. 
Este mismo método se aplica a la eliminación de otros campos en su package.json y 
Instrucciones 
Elimine el momento del paquete de sus dependencias. 
Asegúrese de tener la cantidad correcta de comas después de quitarla. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"dependencias" no debe incluir "momento"'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.notProperty(packJson.dependencies, ''moment'', ''"dependencies" still includes "moment"''); }, xhr => { throw new Error(xhr.responseText); })'

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
