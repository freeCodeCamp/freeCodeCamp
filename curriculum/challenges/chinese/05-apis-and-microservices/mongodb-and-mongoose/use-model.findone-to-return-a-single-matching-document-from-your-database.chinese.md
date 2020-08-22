---
id: 587d7fb7367417b2b2512c0c
title: Use model.findOne() to Return a Single Matching Document from Your Database
localeTitle: 使用model.findOne（）从数据库中返回单个匹配文档
challengeType: 2
---

## Description
<section id='description'> 
Model.findOne（）的行为类似于.find（），但它只返回一个文档（不是数组），即使有多个项目也是如此。在按声明为唯一的属性进行搜索时，它尤其有用。使用Model.findOne（） - &gt; Person，找到一个在她的收藏夹中有某种食物的人。使用函数参数food作为搜索键。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 找一个项应该成功
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-by-food'', {name: ''Gary'', age: 46, favoriteFoods: [''chicken salad'']}).then(data => { assert.equal(data.name, ''Gary'', ''item.name is not what expected''); assert.deepEqual(data.favoriteFoods, [''chicken salad''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
