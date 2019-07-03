---
id: 587d7fb8367417b2b2512c10
title: Delete One Document Using model.findByIdAndRemove
challengeType: 2

videoUrl: ''
localeTitle: Delete One Document Using model.findByIdAndRemove
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
  - text: 成功删除一个 item(项目)。
    testString: 'getUserInput => $.post(getUserInput("url") +"/_api/remove-one-person", {name:"Jason Bourne", age: 36, favoriteFoods:["apples"]}).then(data => { assert.equal(data.name,"Jason Bourne","item.name is not what expected"); assert.equal(data.age, 36,"item.age is not what expected"); assert.deepEqual(data.favoriteFoods, ["apples"],"item.favoriteFoods is not what expected"); assert.equal(data.__v, 0); assert.equal(data.count, 0,"the db items count is not what expected"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              