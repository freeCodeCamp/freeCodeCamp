---
id: 587d7fb9367417b2b2512c12
title: Chain Search Query Helpers to Narrow Search Results
localeTitle: 链搜索查询帮助缩小搜索结果
challengeType: 2
---

## Description
<section id='description'> <code>0</code>如果未将回调作为Model.find（）（或其他搜索方法）的最后一个参数传递，则不执行查询。您可以将查询存储在变量中以供以后使用。这种对象使您可以使用链接语法构建查询。当您最终链接方法.exec（）时，将执行实际的数据库搜索。将回调传递给最后一个方法。有很多查询助手，这里我们将使用最“着名”的助手。 <code>0</code>找到的人喜欢“burrito”。按名称对它们进行排序，将结果限制为两个文档，并隐藏它们的年龄。链.find（）,. sort（）,. limit（），。select（），然后是.exec（）。将done（错误，数据）回调传递给exec（）。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 链接查询助手应该成功
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/query-tools'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''Pablo'', age: 26, favoriteFoods: [''burrito'', ''hot-dog'']}, {name: ''Bob'', age: 23, favoriteFoods: [''pizza'', ''nachos'']}, {name: ''Ashley'', age: 32, favoriteFoods: [''steak'', ''burrito'']}, {name: ''Mario'', age: 51, favoriteFoods: [''burrito'', ''prosciutto'']} ]) }).then(data => { assert.isArray(data, ''the response should be an Array''); assert.equal(data.length, 2, ''the data array length is not what expected''); assert.notProperty(data[0], ''age'', ''The returned first item has too many properties''); assert.equal(data[0].name, ''Ashley'', ''The returned first item name is not what expected''); assert.notProperty(data[1], ''age'', ''The returned second item has too many properties''); assert.equal(data[1].name, ''Mario'', ''The returned second item name is not what expected'');}, xhr => { throw new Error(xhr.responseText); })'

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
