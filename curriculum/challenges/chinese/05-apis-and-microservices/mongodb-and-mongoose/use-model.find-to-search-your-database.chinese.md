---
id: 587d7fb7367417b2b2512c0b
title: Use model.find() to Search Your Database
challengeType: 2
isHidden: false
forumTopicId: 301543
localeTitle: 使用 model.find() 查找数据库
---

## Description
<section id='description'>
使用<code>Model.find() -> [Person]</code>来查询给定名称的所有的人。
最简单的用法：<code>Model.find()</code>接受一个查询的 document（一个 JSON 对象）作为第一参数，然后是回调。它将返回匹配到的项目组成的数组。这个支持极其广泛的搜索选项。使用人名作为搜索的关键词，来校验它。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 成功找到所有符合条件的 item（项目）。
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
