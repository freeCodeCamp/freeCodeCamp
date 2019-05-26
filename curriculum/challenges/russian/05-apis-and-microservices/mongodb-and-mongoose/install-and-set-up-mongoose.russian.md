---
id: 587d7fb6367417b2b2512c06
title: Install and Set Up Mongoose
localeTitle: Установить и настроить Mongoose
challengeType: 2
---

## Description
<section id='description'> 
Добавьте mongodb и mongoose в пакет проекта.json. Тогда требуй мангуста. Сохраните свой URI базы данных mLab в личном файле .env как MONGO_URI. Подключитесь к базе данных, используя mongoose.connect ( <Your URI> ) 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Зависимость "mongodb" должна быть в package.json
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/file/package.json'').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, ''mongodb''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Зависимость "mongoose" должна быть в package.json
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/file/package.json'').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, ''mongoose''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: «Мангуст» должен быть подключен к базе данных »
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
