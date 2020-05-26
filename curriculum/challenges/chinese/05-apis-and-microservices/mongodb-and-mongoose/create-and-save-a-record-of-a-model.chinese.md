---
id: 587d7fb6367417b2b2512c09
title: Create and Save a Record of a Model
challengeType: 2
isHidden: false
localeTitle: 用模型来创建并保存一条记录
---

## Description
<section id='description'>
在本挑战中创建保存一条记录。
</section>

## Instructions
<section id='instructions'>
使用 Person 的 constructor（构造器）函数可以创建一个 document 对象，该对象包含<code>name</code>、<code>age</code>和<code>favoriteFoods</code>字段。这些字段的类型必须符合 Person Schema 里面定义的类型。然后调用<code>document.save()</code>。使用 Node 惯例传递 callback。通常情况下，所有的 CRUD（增查改删）方法都会像下面一样作为最后一个参数去执行一个<code>callback()</code>。

```js
/* Example */

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
  - text: 成功创建一条 db 并保存。
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
