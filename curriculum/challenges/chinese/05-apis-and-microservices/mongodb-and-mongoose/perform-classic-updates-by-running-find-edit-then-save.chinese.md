---
id: 587d7fb8367417b2b2512c0e
title: Perform Classic Updates by Running Find, Edit, then Save
challengeType: 2

videoUrl: ''
localeTitle: Perform Classic Updates by Running Find, Edit, then Save
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
  - text: 对一个 item（项目）的 Find-edit-update 操作成功
    testString: 'getUserInput => $.post(getUserInput("url") +"/_api/find-edit-save", {name:"Poldo", age: 40, favoriteFoods:["spaghetti"]}).then(data => { assert.equal(data.name,"Poldo","item.name is not what expected"); assert.equal(data.age, 40,"item.age is not what expected"); assert.deepEqual(data.favoriteFoods, ["spaghetti","hamburger"],"item.favoriteFoods is not what expected"); assert.equal(data.__v, 1,"The item should be previously edited"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              