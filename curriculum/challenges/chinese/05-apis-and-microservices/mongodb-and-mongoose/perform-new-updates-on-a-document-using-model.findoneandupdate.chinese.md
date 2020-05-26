---
id: 587d7fb8367417b2b2512c0f
title: Perform New Updates on a Document Using model.findOneAndUpdate()
challengeType: 2
isHidden: false
forumTopicId: 301542
localeTitle: 使用 model.findOneAndUpdate() 对文档执行新的更新
---

## Description
<section id='description'>
mongoose 的最新版本简化了 documents 的更新。 但是一些高级的用法 (比如 pre/post 钩子, 验证) 更复杂, 所以老方法更常用。当通过 Id 进行搜索时还可以使用 <code>findByIdAndUpdate()</code>。
</section>

## Instructions
<section id='instructions'>
使用 personName 作为搜索的关键词查找 person，并将查到的 person 的年龄设为 20 岁。
提示: 我们想要你返更新后的 document，你可以把 <code>findOneAndUpdate()</code> 的第三个参数设置为 <code>{new: true}</code>。 默认情况下，这些方法返回未被修改的数据。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 对一个 item（项目）的  findOneAndUpdate  操作成功
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-update'', {name:''Dorian Gray'', age: 35, favoriteFoods:[''unknown'']}).then(data => { assert.equal(data.name, ''Dorian Gray'', ''item.name is not what expected''); assert.equal(data.age, 20, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''unknown''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''findOneAndUpdate does not increment version by design !!!''); }, xhr => { throw new Error(xhr.responseText); })'

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
