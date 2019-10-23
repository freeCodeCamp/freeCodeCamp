---
id: 587d7fb4367417b2b2512bff
title: Add a Version to Your package.json
localeTitle: Agregue una versión a su package.json
challengeType: 2
---

## Description
<section id='description'> 
La versión es junto con el nombre de uno de los campos requeridos en package.json. Este campo describe la versión actual de su proyecto. 
Ejemplo 
<code>"version": "1.2",</code> 
Instrucciones 
Agregue una versión a package.json en su proyecto de Glitch. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json debería tener una clave de "versión" válida
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.version, ''"version" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
