---
id: 587d7fb4367417b2b2512c00
title: Expand Your Project with External Packages from npm
localeTitle: Expanda su proyecto con paquetes externos desde npm
challengeType: 2
---

## Description
<section id='description'> 
Una de las razones más importantes para usar un administrador de paquetes es su poderosa administración de dependencias. En lugar de tener que asegurarse manualmente de que obtiene todas las dependencias cada vez que configura un proyecto en una computadora nueva, npm instala automáticamente todo por usted. Pero, ¿cómo puede npm saber exactamente lo que necesita su proyecto? Conoce la sección de dependencias de tu package.json. 
En la sección de dependencias, los paquetes que requiere su proyecto se almacenan con el siguiente formato: 
<code>"dependencies": {</code> 
<code>"package-name": "version",</code> 
<code>"express": "4.14.0"</code> 
<code>}</code> 
Instrucciones 
Agregue la versión 2.14.0 del momento del paquete al campo de dependencias de su paquete.json 
Moment es una biblioteca útil para trabajar con la hora y las fechas. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"dependencias" debe incluir "momento"'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);  assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: La versión "moment" debería ser "2.14.0" '
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);  assert.match(packJson.dependencies.moment, /^[\^\~]?2\.14\.0/, ''Wrong version of "moment" installed. It should be 2.14.0''); }, xhr => { throw new Error(xhr.responseText); })'

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
