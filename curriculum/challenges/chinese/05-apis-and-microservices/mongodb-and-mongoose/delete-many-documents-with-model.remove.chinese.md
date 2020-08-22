---
id: 587d7fb8367417b2b2512c11
title: Delete Many Documents with model.remove()
localeTitle: 使用model.remove（）删除许多文档
challengeType: 2
---

## Description
<section id='description'> 
Model.remove（）用于删除与给定条件匹配的所有文档。使用Model.remove（）删除名称为“Mary”的所有人员。将其传递给查询文档，其中设置了“name”字段，当然还有回调。 <code>0</code>注意：Model.remove（）不返回已删除的文档，而是返回包含操作结果和受影响项目数的JSON对象。不要忘记将它传递给done（）回调，因为我们在测试中使用它。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 一次删除多个项目应该会成功
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/remove-many-people'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''Mary'', age: 16, favoriteFoods: [''lollipop'']}, {name: ''Mary'', age: 21, favoriteFoods: [''steak'']}])}).then(data => { assert.isTrue(!!data.ok, ''The mongo stats are not what expected''); assert.equal(data.n, 2, ''The number of items affected is not what expected''); assert.equal(data.count, 0, ''the db items count is not what expected''); }, xhr => { throw new Error(xhr.responseText); })'

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
