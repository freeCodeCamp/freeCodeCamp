---
id: 587d7fb6367417b2b2512c06
title: Install and Set Up Mongoose
challengeType: 2
forumTopicId: 301540
localeTitle: Установить и настроить Mongoose
---

## Description
<section id='description'>
Добавьте mongodb и mongoose в пакет проекта.json. Тогда требуй мангуста. Сохраните свой URI базы данных mLab в личном файле .env как MONGO_URI. Подключитесь к базе данных, используя mongoose.connect ( <Your URI> )
</section>

## Instructions
<section id='instructions'>
Add mongodb and mongoose to the project’s <code>package.json</code>. Then require mongoose. Store your mLab database URI in the private <code>.env</code> file as <code>MONGO_URI</code>. Connect to the database using <code>mongoose.connect(&lt;Your URI>)</code>

<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"mongodb" dependency should be in package.json'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/file/package.json').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, 'mongodb'); }, xhr => { throw new Error(xhr.responseText); })
  - text: '"mongoose" dependency should be in package.json'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/file/package.json').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, 'mongoose'); }, xhr => { throw new Error(xhr.responseText); })
  - text: '"mongoose" should be connected to a database'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/is-mongoose-ok').then(data => {assert.isTrue(data.isMongooseOk, 'mongoose is not connected')}, xhr => { throw new Error(xhr.responseText); })

```

</section>
