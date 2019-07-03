---
id: 587d7fb7367417b2b2512c0a
title: Create Many Records with model.create()
challengeType: 2

videoUrl: ''
localeTitle: Create Many Records with model.create()
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
  - text: 应当可以一次性创建多个 item（项目）。
    testString: 'getUserInput => $.ajax({url: getUserInput("url") + "/_api/create-many-people", type: "POST", contentType:"application/json", data: JSON.stringify([{name: "John", age: 24, favoriteFoods: ["pizza", "salad"]}, {name: "Mary", age: 21, favoriteFoods: ["onions", "chicken"]}])}).then(data => { assert.isArray(data, "the response should be an array"); assert.equal(data.length, 2, "the response does not contain the expected number of items"); assert.equal(data[0].name, "John", "The first item is not correct"); assert.equal(data[0].__v, 0, "The first item should be not previously edited"); assert.equal(data[1].name, "Mary", "The second item is not correct"); assert.equal(data[1].__v, 0, "The second item should be not previously edited"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              