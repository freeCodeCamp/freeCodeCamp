---
id: 587d7fb8367417b2b2512c0f
title: Perform New Updates on a Document Using model.findOneAndUpdate()
challengeType: 2

videoUrl: ''
localeTitle: Perform New Updates on a Document Using model.findOneAndUpdate()
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
  - text: 对一个 item（项目）的  findOneAndUpdate  操作成功
    testString: 'getUserInput => $.post(getUserInput("url") +"/_api/find-one-update", {name:"Dorian Gray", age: 35, favoriteFoods:["unknown"]}).then(data => { assert.equal(data.name,"Dorian Gray","item.name is not what expected"); assert.equal(data.age, 20,"item.age is not what expected"); assert.deepEqual(data.favoriteFoods, ["unknown"],"item.favoriteFoods is not what expected"); assert.equal(data.__v, 0,"findOneAndUpdate does not increment version by design !!!"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              