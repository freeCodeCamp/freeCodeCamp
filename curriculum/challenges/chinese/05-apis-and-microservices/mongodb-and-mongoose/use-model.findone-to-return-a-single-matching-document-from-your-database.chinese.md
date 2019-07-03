---
id: 587d7fb7367417b2b2512c0c
title: Use model.findOne() to Return a Single Matching Document from Your Database
challengeType: 2

videoUrl: ''
localeTitle: Use model.findOne() to Return a Single Matching Document from Your Database
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
  - text: 成功找到一个 item（项目）。
    testString: 'getUserInput => $.post(getUserInput("url") + "/_api/find-one-by-food", {name: "Gary", age: 46, favoriteFoods: ["chicken salad"]}).then(data => { assert.equal(data.name, "Gary", "item.name is not what expected"); assert.deepEqual(data.favoriteFoods, ["chicken salad"], "item.favoriteFoods is not what expected"); assert.equal(data.__v, 0, "The item should be not previously edited"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              