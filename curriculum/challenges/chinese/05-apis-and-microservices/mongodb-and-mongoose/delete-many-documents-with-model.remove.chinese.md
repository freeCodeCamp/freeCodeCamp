---
id: 587d7fb8367417b2b2512c11
title: Delete Many Documents with model.remove()
challengeType: 2

videoUrl: ''
localeTitle: Delete Many Documents with model.remove()
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
  - text: 一次性成功的删除多个 item(项目)。
    testString: 'getUserInput => $.ajax({url: getUserInput("url") +"/_api/remove-many-people", type:"POST", contentType:"application/json", data: JSON.stringify([{name:"Mary", age: 16, favoriteFoods: ["lollipop"]}, {name:"Mary", age: 21, favoriteFoods: ["steak"]}])}).then(data => { assert.isTrue(!!data.ok,"The mongo stats are not what expected"); assert.equal(data.n, 2,"The number of items affected is not what expected"); assert.equal(data.count, 0,"the db items count is not what expected"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              