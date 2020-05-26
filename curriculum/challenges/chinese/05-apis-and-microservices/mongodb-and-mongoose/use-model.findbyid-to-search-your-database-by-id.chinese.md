---
id: 587d7fb7367417b2b2512c0d
title: Use model.findById() to Search Your Database By _id
challengeType: 2
isHidden: false
localeTitle: 使用 model.findById() 按 _id 搜索数据库
---

## Description
<section id='description'>
当我们保存一个 document， MongoDB 自动添加 _id 字段，并给该字段设置 unique（唯一）属性。通过 _id 搜索是一个非常频繁的操作，所以 Mongose 为它提供了一个专门的方法。
</section>

## Instructions
<section id='instructions'>
使用人物 Id 作为参数，执行<code>Model.findById() -> Person</code>，找到这个 _id 对应的唯一的一个人。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 通过 Id 成功找到对应的 item（项目）。
    testString: "getUserInput => $.get(getUserInput('url') + '/_api/find-by-id').then(data => { assert.equal(data.name, 'test', 'item.name is not what expected'); assert.equal(data.age, 0, 'item.age is not what expected'); assert.deepEqual(data.favoriteFoods, ['none'], 'item.favoriteFoods is not what expected'); assert.equal(data.__v, 0, 'The item should be not previously edited'); }, xhr => { throw new Error(xhr.responseText); })"
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
