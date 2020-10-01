---
id: 587d7fb7367417b2b2512c0b
challengeType: 2
forumTopicId: 301543
title: 使用model.find（）搜索数据库
---

## Description
<section id='description'>
使用 <code>Model.find() -> [Person]</code> 找出符合名字查询条件的所有人。
<code>Model.find()</code> 接收一个查询 document（一个 JSON 对象）作为第一个参数，然后第二个参数是一个回调函数，它会返回由匹配到的数据组成的数组。这个方法支持很多搜索选项，详情请参阅文档。在这个挑战中，请使用 <code>personName</code> 作为搜索条件。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应成功地找到所有符合条件的数据
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-all-by-name'', {name: ''r@nd0mN4m3'', age: 24, favoriteFoods: [''pizza'']}).then(data => { assert.isArray(data, ''the response should be an Array'');  assert.equal(data[0].name, ''r@nd0mN4m3'', ''item.name is not what expected''); assert.equal(data[0].__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
