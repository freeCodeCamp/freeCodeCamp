---
id: 587d7fb7367417b2b2512c0a
title: Create Many Records with model.create()
localeTitle: 使用model.create（）创建许多记录
challengeType: 2
---

## Description
<section id='description'> <code>0</code>有时您需要创建模型的许多实例，例如，在使用初始数据为数据库播种时。 Model.create（）接受一个对象数组，如[{name：'John'，...}，{...}，...]作为第一个参数，并将它们全部保存在db中。使用函数参数arrayOfPeople使用Model.create（）创建许多人。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 一次创建多个数据库项应该会成功
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/create-many-people'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''John'', age: 24, favoriteFoods: [''pizza'', ''salad'']}, {name: ''Mary'', age: 21, favoriteFoods: [''onions'', ''chicken'']}])}).then(data => { assert.isArray(data, ''the response should be an array''); assert.equal(data.length, 2, ''the response does not contain the expected number of items''); assert.equal(data[0].name, ''John'', ''The first item is not correct''); assert.equal(data[0].__v, 0, ''The first item should be not previously edited''); assert.equal(data[1].name, ''Mary'', ''The second item is not correct''); assert.equal(data[1].__v, 0, ''The second item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
