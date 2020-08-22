---
id: 587d7fb6367417b2b2512c09
title: Create and Save a Record of a Model
localeTitle: 创建并保存模型记录
challengeType: 2
---

## Description
<section id='description'> <code>0</code>使用之前构建的Person构造函数创建文档实例。将具有字段名称，年龄和favoriteFoods的对象传递给构造函数。它们的类型必须符合Person Schema中的类型。然后在返回的文档实例上调用方法document.save（）。使用Node约定传递回调。这是一种常见模式，以下所有CRUD方法都将这样的回调函数作为最后一个参数。 
<code>/* Example */</code> 
<code>// ...</code> 
<code>person.save(function(err, data) {</code> 
<code>// ...do your stuff here...</code> 
<code>});</code> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 创建和保存数据库项应该会成功
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/create-and-save-person'').then(data => { assert.isString(data.name, ''"item.name" should be a String''); assert.isNumber(data.age, ''28'', ''"item.age" should be a Number''); assert.isArray(data.favoriteFoods, ''"item.favoriteFoods" should be an Array''); assert.equal(data.__v, 0, ''The db item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
