---
id: 587d7fb7367417b2b2512c0a
title: Create Many Records with model.create()
challengeType: 2
isHidden: false
localeTitle: 使用 model.create() 创建许多记录
---

## Description
<section id='description'>
有时你需要创建很多的 model 实例。例如：在使用初始数据为数据库初始化时，<code>Model.create()</code>接受一组像<code>[{name:'John', ...}, {...}, ...]</code>的数组作为第一个参数，并将其保存到数据库。
</section>

## Instructions
<section id='instructions'>
使用<code>arrayOfPeople</code>作为<code>Model.create()</code>的参数创建很多个 people 实例。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应当可以一次性创建多个 item（项目）。
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/create-many-people'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''John'', age: 24, favoriteFoods: [''pizza'', ''salad'']}, {name: ''Mary'', age: 21, favoriteFoods: [''onions'', ''chicken'']}])}).then(data => { assert.isArray(data, ''the response should be an array''); assert.equal(data.length, 2, ''the response does not contain the expected number of items''); assert.equal(data[0].name, ''John'', ''The first item is not correct''); assert.equal(data[0].__v, 0, ''The first item should be not previously edited''); assert.equal(data[1].name, ''Mary'', ''The second item is not correct''); assert.equal(data[1].__v, 0, ''The second item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
