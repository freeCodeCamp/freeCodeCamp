---
id: 587d7fb7367417b2b2512c0c
title: Use model.findOne() to Return a Single Matching Document from Your Database
challengeType: 2
isHidden: false
forumTopicId: 301545
localeTitle: 使用 model.findOne() 从数据库中返回一个匹配的文档
---

## Description
<section id='description'>
<code>Model.findOne()</code>表现像<code>Model.find()</code>，但是它仅仅返回一个 document（而不是一个数组），即使数据库里有很多条 item（项目）。当你按声明成<code>unique</code>的属性进行搜索时，<code>Model.findOne()</code>尤其有用。
</section>

## Instructions
<section id='instructions'>
把 food 作为<code>Model.findOne() -> Person</code>的参数，来找到一个在她的爱好中有某一食物的人。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 成功找到一个 item（项目）。
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
