---
id: 587d7fb7367417b2b2512c0d
title: Use model.findById() to Search Your Database By _id
localeTitle: 使用model.findById（）按_id搜索数据库
challengeType: 2
---

## Description
<section id='description'> <code>0</code>保存文档时，mongodb会自动添加字段_id，并将其设置为唯一的字母数字键。按_id搜索是一种非常频繁的操作，因此mongoose为它提供了一种专用方法。使用Model.findById（） - &gt; Person找到具有给定_id的（仅!!）人物。使用函数参数personId作为搜索关键字。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 找到Id应该成功的项目
    testString: "getUserInput => $.get(getUserInput('url') + '/_api/find-by-id').then(data => { assert.equal(data.name, 'test', 'item.name is not what expected'); assert.equal(data.age, 0, 'item.age is not what expected'); assert.deepEqual(data.favoriteFoods, ['none'], 'item.favoriteFoods is not what expected'); assert.equal(data.__v, 0, 'The item should be not previously edited'); }, xhr => { throw new Error(xhr.responseText); })"

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
