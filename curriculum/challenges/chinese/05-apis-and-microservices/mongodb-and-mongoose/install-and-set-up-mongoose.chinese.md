---
id: 587d7fb6367417b2b2512c06
title: Install and Set Up Mongoose
challengeType: 2

videoUrl: ''
localeTitle: Install and Set Up Mongoose
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
  - text: "在 package.json 文件中应该有 'mongodb' 依赖。"
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/file/package.json").then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, "mongodb"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: "在 package.json 文件中应该有 'mongoose' 依赖。"
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/file/package.json").then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, "mongoose"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: "'mongoose' 应该已经连接数据库。"
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/is-mongoose-ok").then(data => {assert.isTrue(data.isMongooseOk, "mongoose is not connected")}, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              