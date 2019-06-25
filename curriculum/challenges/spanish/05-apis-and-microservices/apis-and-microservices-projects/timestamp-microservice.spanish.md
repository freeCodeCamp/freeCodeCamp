---
id: bd7158d8c443edefaeb5bdef
title: Timestamp Microservice
localeTitle: Marca de tiempo microservicio
challengeType: 4
isRequired: true
---

## Description
<section id='description'> 
Cree una aplicación de JavaScript de pila completa que sea funcionalmente similar a esto: <a href='https://curse-arrow.glitch.me/' target='_blank'>https://curse-arrow.glitch.me/</a> . 
Trabajar en este proyecto implicará que escriba su código en Glitch en nuestro proyecto de inicio. Después de completar este proyecto, puede copiar su URL de error público (en la página de inicio de su aplicación) en esta pantalla para probarlo. Opcionalmente, puede optar por escribir su proyecto en otra plataforma, pero debe ser visible públicamente para nuestras pruebas. 
Inicie este proyecto en Glitch usando <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-timestamp/' target='_blank'>este enlace</a> o clone <a href='https://github.com/freeCodeCamp/boilerplate-project-timestamp/'>este repositorio</a> en GitHub! Si utiliza Glitch, recuerde guardar el enlace a su proyecto en un lugar seguro. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Debe manejar una fecha válida y devolver la marca de tiempo de Unix correcta'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/2016-12-25'').then(data => { assert.equal(data.unix, 1482624000000, ''Should be a valid unix timestamp''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Debe manejar una fecha válida y devolver la cadena UTC correcta'
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/api/timestamp/2016-12-25'').then(data => { assert.equal(data.utc, ''Sun, 25 Dec 2016 00:00:00 GMT'', ''Should be a valid UTC date string''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Debe manejar una fecha de Unix válida y devolver la marca de tiempo de Unix correcta'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/1482624000000'').then(data => { assert.equal(data.unix, 1482624000000) ;  }, xhr => { throw new Error(xhr.responseText); })'
  - text: Debe devolver el mensaje de error esperado para una fecha no válida
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/this-is-not-a-date'').then(data => { assert.equal(data.error.toLowerCase(), ''invalid date'');}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Debería manejar un parámetro de fecha vacío y devolver la hora actual en formato unix'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp'').then(data => { var now = Date.now(); assert.approximately(data.unix, now, 20000) ;}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Debe manejar un parámetro de fecha vacío y devolver la hora actual en formato UTC'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp'').then(data => { var now = Date.now(); var serverTime = (new Date(data.utc)).getTime(); assert.approximately(serverTime, now, 20000) ;}, xhr => { throw new Error(xhr.responseText); })'

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
