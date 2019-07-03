---
id: 587d7fb9367417b2b2512c12
title: Chain Search Query Helpers to Narrow Search Results
challengeType: 2

videoUrl: ''
localeTitle: Chain Search Query Helpers to Narrow Search Results
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
  - text: Chaining query helpers should succeed
    testString: 'getUserInput => $.ajax({url: getUserInput("url") +"/_api/query-tools", type:"POST", contentType:"application/json", data: JSON.stringify([{name:"Pablo", age: 26, favoriteFoods: ["burrito","hot-dog"]}, {name:"Ashley", age: 32, favoriteFoods: ["steak","burrito"]}, {name:"Mario", age: 51, favoriteFoods: ["burrito","prosciutto"]} ]) }).then(data => { assert.isArray(data,"the response should be an Array"); assert.equal(data.length, 2,"the data array length is not what expected"); assert.notProperty(data[0],"age","The returned first item has too many properties"); assert.equal(data[0].name,"Ashley","The returned first item name is not what expected"); assert.notProperty(data[1],"age","The returned second item has too many properties"); assert.equal(data[1].name,"Mario","The returned second item name is not what expected");}, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              