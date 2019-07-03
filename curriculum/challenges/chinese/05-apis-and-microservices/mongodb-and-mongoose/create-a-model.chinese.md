---
id: 587d7fb6367417b2b2512c07
title: Create a Model
challengeType: 2

videoUrl: ''
localeTitle: Create a Model
---

## Description
<section id='description'>
在 package.json 文件中添加 MongoDB 和 Mongoose 依赖，将 mLab 数据库的 URI 作为 MONGO_URI 变量存储在私有 .env 文件中。然后<code>require('mongoose')</code>，使用<code>mongoose.connect(<Your URI>)</code>命令来连接数据库。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 成功创建一个 Schema 实例。
    testString: 'getUserInput => $.post(getUserInput("url") + "/_api/mongoose-model", {name: "Mike", age: 28, favoriteFoods: ["pizza", "cheese"]}).then(data => { assert.equal(data.name, "Mike", ""model.name" is not what expected"); assert.equal(data.age, "28", ""model.age" is not what expected"); assert.isArray(data.favoriteFoods, ""model.favoriteFoods" is not an Array"); assert.include(data.favoriteFoods, "pizza", ""model.favoriteFoods" does not include the expected items"); assert.include(data.favoriteFoods, "cheese", ""model.favoriteFoods" does not include the expected items"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              