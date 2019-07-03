---
id: 587d7fb6367417b2b2512c09
title: Create and Save a Record of a Model
challengeType: 2

videoUrl: ''
localeTitle: Create and Save a Record of a Model
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
  - text: 成功创建一条 db 并保存。
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/create-and-save-person").then(data => { assert.isString(data.name, ""item.name" should be a String"); assert.isNumber(data.age, "28", ""item.age" should be a Number"); assert.isArray(data.favoriteFoods, ""item.favoriteFoods" should be an Array"); assert.equal(data.__v, 0, "The db item should be not previously edited"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              