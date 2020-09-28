---
id: 587d7fb6367417b2b2512c06
title: Install and Set Up Mongoose
localeTitle: Instalar e configurar o mangusto
challengeType: 2
---

## Description
<section id='description'> 
Adicione mongodb e mangusto ao package.json do projeto. Então exija mangusto. Armazene seu URI do banco de dados mLab no arquivo .env privado como MONGO_URI. Conecte-se ao banco de dados usando mongoose.connect ( <Your URI> ) 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "'mongodb' dependência deve estar em package.json"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/file/package.json'').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, ''mongodb''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: "'mongoose' dependência deve estar em package.json"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/file/package.json'').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, ''mongoose''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: "'mangusto' deve ser conectado a um banco de dados"
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
