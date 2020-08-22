---
id: 587d7fb7367417b2b2512c0b
title: Use model.find() to Search Your Database
localeTitle: 使用model.find（）搜索数据库
challengeType: 2
---

## Description
<section id='description'> <code>0</code>使用Model.find（） - &gt; [Person]查找具有给定名称的所有人<code>0</code>在最简单的用法中，Model.find（）接受查询文档（JSON对象）作为第一个参数，然后接受回调。它返回一个匹配数组。它支持极其广泛的搜索选项。在文档中查看它。使用函数参数personName作为搜索关键字。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 找到与标准对应的所有项目都应该成功
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-all-by-name'', {name: ''r@nd0mN4m3'', age: 24, favoriteFoods: [''pizza'']}).then(data => { assert.isArray(data, ''the response should be an Array'');  assert.equal(data[0].name, ''r@nd0mN4m3'', ''item.name is not what expected''); assert.equal(data[0].__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
