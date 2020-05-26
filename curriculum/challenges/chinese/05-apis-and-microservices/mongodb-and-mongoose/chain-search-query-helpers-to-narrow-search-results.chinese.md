---
id: 587d7fb9367417b2b2512c12
title: Chain Search Query Helpers to Narrow Search Results
challengeType: 2
isHidden: false
forumTopicId: 301533
localeTitle: 通过链搜索查询帮助器缩小搜索结果
---

## Description
<section id='description'>
如果不给 <code>Model.find()</code> (或者别的搜索方法)传递回调函数，作为的最后一个参数, 则不执行查询。你可以将查询存储在变量中供以后使用，这类对象可以使用链接语法构建查询。 当你最终链接 <code>.exec()</code> 方法时，将执行实际的数据库操作。最后将回调传递给 <code>exec()</code> 方法。 有很多的查询助手, 这里我们使用最 '著名' 的一种。 
</section>

## Instructions
<section id='instructions'>
找到喜欢 "burrito" 的人，按照名字排序, 限制结果为两个 document, 并且隐藏他们的年龄。 使用链路 <code>.find()</code>, <code>.sort()</code>, <code>.limit()</code>, <code>.select()</code>,  然后 <code>.exec()</code>。将 <code>done(err, data)</code> 回调传给 <code>exec()</code> 方法。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Chaining query helpers should succeed
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/query-tools'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''Pablo'', age: 26, favoriteFoods: [''burrito'', ''hot-dog'']}, {name: ''Bob'', age: 23, favoriteFoods: [''pizza'', ''nachos'']}, {name: ''Ashley'', age: 32, favoriteFoods: [''steak'', ''burrito'']}, {name: ''Mario'', age: 51, favoriteFoods: [''burrito'', ''prosciutto'']} ]) }).then(data => { assert.isArray(data, ''the response should be an Array''); assert.equal(data.length, 2, ''the data array length is not what expected''); assert.notProperty(data[0], ''age'', ''The returned first item has too many properties''); assert.equal(data[0].name, ''Ashley'', ''The returned first item name is not what expected''); assert.notProperty(data[1], ''age'', ''The returned second item has too many properties''); assert.equal(data[1].name, ''Mario'', ''The returned second item name is not what expected'');}, xhr => { throw new Error(xhr.responseText); })'

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
