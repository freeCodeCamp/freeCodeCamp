---
id: 587d7fb6367417b2b2512c09
challengeType: 2
forumTopicId: 301536
title: 创建并保存模型记录
---

## Description
<section id='description'>
在这个挑战中，你需要给之前创建的模型添加一条数据。
</section>

## Instructions
<section id='instructions'> 
用我们在上一个挑战中写好的 Person 构造函数创建 document 实例：将包含 <code>name</code>、<code>age</code> 和 <code>favoriteFoods</code> 的对象传给构造函数。它们的数据类型必须符合我们在 Person 原型中定义的类型。然后在返回的 document 实例上调用方法 <code>document.save()</code>。同时，我们需要像之前提到过的那样，为它传一个回调函数。在 Mongoose 中，所有的 CRUD 方法接收的最后一个参数都是回调函数。 

```js
/* 示例 */

// ...
person.save(function(err, data) {
  //   ...do your stuff here...
});
```

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应成功地创建数据，并保存到数据库
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/create-and-save-person'').then(data => { assert.isString(data.name, ''"item.name" should be a String''); assert.isNumber(data.age, ''28'', ''"item.age" should be a Number''); assert.isArray(data.favoriteFoods, ''"item.favoriteFoods" should be an Array''); assert.equal(data.__v, 0, ''The db item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
