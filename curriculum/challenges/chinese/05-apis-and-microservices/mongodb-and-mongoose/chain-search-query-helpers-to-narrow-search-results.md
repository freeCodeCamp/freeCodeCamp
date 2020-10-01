---
id: 587d7fb9367417b2b2512c12
challengeType: 2
forumTopicId: 301533
title: 通过链式调用搜索查询辅助函数来缩小搜索结果
---

## Description
<section id='description'>
如果不给 <code>Model.find()</code>（或者别的搜索方法）的最后一个参数传入回调函数, 查询将不会执行。你可以将查询条件存储在变量中供以后使用，我们也可以通过链式调用这类变量来构建新的查询字段。实际的数据库操作会在最终调用 <code>.exec()</code> 方法时执行。需要注意的是，你必须给 <code>exec()</code> 传一个回调方法。Mongoose 为我们提供了许多查询辅助函数, 这里我们使用最著名的一种。 
</section>

## Instructions
<section id='instructions'> 
找出喜欢 <code>burrito</code> 的人并按 <code>name</code> 进行排序。同时，我们需要隐藏他们的 <code>age</code> 属性。结果应限制在两个 document 内。请链式调用 <code>.find()</code>、<code>.sort()</code>、<code>.limit()</code> 和 <code>.select()</code>。最后调用 <code>.exec()</code>，并传入给它传入 <code>done(err, data)</code> 回调函数。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 链接查询辅助函数应该成功
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
