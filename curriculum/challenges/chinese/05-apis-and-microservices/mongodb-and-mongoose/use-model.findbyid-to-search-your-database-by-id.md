---
id: 587d7fb7367417b2b2512c0d
challengeType: 2
forumTopicId: 301544
title: 使用 model.findById() 方法，根据 _id 来搜索数据
---

## Description
<section id='description'>
在保存 document 的时候，MongoDB 会自动为它添加 <code>_id</code> 字段，并给该字段设置一个唯一的仅包含数字和字母的值。通过 <code>_id</code> 搜索是一个十分常见的操作，为此，Mongoose 提供了一个专门的方法。
</section>

## Instructions
<section id='instructions'>
执行<code>Model.findById() -> Person</code>，使用 <code>personId</code> 作为搜索参数，根据 <code>_id</code> 找到对应的（唯一的）person。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应成功地根据 Id 找到对应的数据
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
