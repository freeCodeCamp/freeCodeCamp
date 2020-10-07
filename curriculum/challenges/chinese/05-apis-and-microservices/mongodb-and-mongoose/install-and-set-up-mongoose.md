---
id: 587d7fb6367417b2b2512c06
challengeType: 2
forumTopicId: 301540
title: 安装和设置 Mongoose
---

## Description
<section id='description'>
在 package.json 文件中添加 mongodb 和 mongoose 作为项目依赖，然后引入 Mongoose。之后，将 MongoDB Atlas 的 URI 作为 MONGO_URI 字段存储在私有的 <code>.env</code> 文件中。然后使用单引号或双引号包裹 URI，最后通过以下的代码片段来连接数据库：

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true }); 
```

</section>

<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"mongodb" 应在 package.json 中作为依赖项定义'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/file/package.json'').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, ''mongodb''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '"mongoose" 应在 package.json 中作为依赖项定义'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/file/package.json'').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, ''mongoose''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '应使用 "mongoose" 连接数据库'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/is-mongoose-ok'').then(data => {assert.isTrue(data.isMongooseOk, ''mongoose is not connected'')}, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
