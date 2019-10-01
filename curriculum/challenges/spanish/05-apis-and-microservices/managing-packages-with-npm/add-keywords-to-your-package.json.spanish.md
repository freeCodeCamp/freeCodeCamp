---
id: 587d7fb4367417b2b2512bfd
title: Add Keywords to Your package.json
localeTitle: Añadir palabras clave a su package.json
challengeType: 2
---

## Description
<section id='description'> 
El campo de palabras clave es donde puede describir su proyecto usando palabras clave relacionadas. 
Ejemplo 
<code>"keywords": [ "descriptive", "related", "words" ],</code> 
Como puede ver, este campo está estructurado como una matriz de cadenas entre comillas dobles. 
Instrucciones 
Agregue una serie de cadenas adecuadas al campo de palabras clave en el paquete.json de su proyecto de Glitch. 
Una de las palabras clave debe ser freecodecamp. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json debe tener una clave de "palabras clave" válida
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.keywords, ''"keywords" is missing''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: El campo "palabras clave" debería ser una matriz "
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.isArray(packJson.keywords, ''"keywords" is not an array''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '"palabras clave" debe incluir "freecodecamp"'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);     assert.include(packJson.keywords, ''freecodecamp'', ''"keywords" does not include "freecodecamp"''); },  xhr => { throw new Error(xhr.responseText); })'

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
