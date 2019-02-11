---
id: 587d7fb6367417b2b2512c06
title: Install and Set Up Mongoose
localeTitle: Instalar y configurar la mangosta
challengeType: 2
---

## Description
<section id='description'> 
Agregue mongodb y mongoose al package.json del proyecto. Entonces requiere mangosta. Almacene su URI de la base de datos de mLab en el archivo .env privado como MONGO_URI. Conéctese a la base de datos utilizando mongoose.connect ( <Your URI> ) 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La dependencia "mongodb" debería estar en package.json '
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/file/package.json'').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, ''mongodb''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'La dependencia de "mongoose" debe estar en package.json'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/file/package.json'').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, ''mongoose''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '"mangosta" debe estar conectada a una base de datos'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/is-mongoose-ok'').then(data => {assert.isTrue(data.isMongooseOk, ''mongoose is not connected'')}, xhr => { throw new Error(xhr.responseText); })'

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
