---
id: 587d7fb7367417b2b2512c0c
challengeType: 2
forumTopicId: 301545
title: 使用 model.findOne() 从数据库中返回一个匹配的 document
---

## Description
<section id='description'>
<code>Model.findOne()</code> 与 <code>Model.find()</code> 十分类似。但就算数据库中有很多条数据可以匹配查找条件，<code>Model.findOne()</code> 也只返回一个 document，而不会返回一个数组。如果查找的条件是一个值唯一的属性，<code>Model.findOne()</code> 会更加适用。
</section>

## Instructions
<section id='instructions'>
用一个特定的 food 作为 <code>Model.findOne() -> Person</code> 的查找参数，来寻找喜欢食物列表中包含给定食物的某一个人。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应成功地找到一个数据
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-by-food'', {name: ''Gary'', age: 46, favoriteFoods: [''chicken salad'']}).then(data => { assert.equal(data.name, ''Gary'', ''item.name is not what expected''); assert.deepEqual(data.favoriteFoods, [''chicken salad''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
