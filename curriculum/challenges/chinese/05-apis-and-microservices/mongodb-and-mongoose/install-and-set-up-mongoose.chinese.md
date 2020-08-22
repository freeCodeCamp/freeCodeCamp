---
id: 587d7fb6367417b2b2512c06
title: Install and Set Up Mongoose
localeTitle: 安装和设置Mongoose
challengeType: 2
---

## Description
<section id='description'> <code>0</code>将mongodb和mongoose添加到项目的package.json中。然后需要猫鼬。将mLab数据库URI作为MONGO_URI存储在私有.env文件中。使用mongoose.connect连接到数据库（ <Your URI> ） 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"mongodb"依赖应该在package.json'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/file/package.json'').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, ''mongodb''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '"mongoose"依赖应该在package.json'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/file/package.json'').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, ''mongoose''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '"mongoose"应该连接到数据库'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/is-mongoose-ok'').then(data => {assert.isTrue(data.isMongooseOk, ''mongoose is not connected'')}, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
