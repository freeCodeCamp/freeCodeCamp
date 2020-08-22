---
id: 587d7fb8367417b2b2512c10
title: Delete One Document Using model.findByIdAndRemove
localeTitle: 使用model.findByIdAndRemove删除一个文档
challengeType: 2
---

## Description
<section id='description'> <code>0</code>通过她的_id删除一个人。您应该使用findByIdAndRemove（）或findOneAndRemove（）方法之一。它们与之前的更新方法类似。他们将删除的文件传递给cb。像往常一样，使用函数参数personId作为搜索关键字。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 删除项目应该会成功
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/remove-one-person'', {name:''Jason Bourne'', age: 36, favoriteFoods:[''apples'']}).then(data => { assert.equal(data.name, ''Jason Bourne'', ''item.name is not what expected''); assert.equal(data.age, 36, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''apples''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0); assert.equal(data.count, 0, ''the db items count is not what expected''); }, xhr => { throw new Error(xhr.responseText); })'

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
