---
id: 587d7fb7367417b2b2512c0b
title: Use model.find() to Search Your Database
challengeType: 2

videoUrl: ''
localeTitle: Use model.find() to Search Your Database
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
  - text: 成功找到所有符合条件的 item（项目）。
    testString: 'getUserInput => $.post(getUserInput("url") + "/_api/find-all-by-name", {name: "r@nd0mN4m3", age: 24, favoriteFoods: ["pizza"]}).then(data => { assert.isArray(data, "the response should be an Array");  assert.equal(data[0].name, "r@nd0mN4m3", "item.name is not what expected"); assert.equal(data[0].__v, 0, "The item should be not previously edited"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              