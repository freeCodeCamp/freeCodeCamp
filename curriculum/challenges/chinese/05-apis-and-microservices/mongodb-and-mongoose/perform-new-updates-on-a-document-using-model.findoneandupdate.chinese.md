---
id: 587d7fb8367417b2b2512c0f
title: Perform New Updates on a Document Using model.findOneAndUpdate()
localeTitle: 使用model.findOneAndUpdate（）对文档执行新更新
challengeType: 2
---

## Description
<section id='description'> <code>0</code>最新版本的mongoose具有简化文档更新的方法。一些更高级的功能（即前/后挂钩，验证）与此方法的行为不同，因此Classic方法在许多情况下仍然有用。在按Id搜索时可以使用findByIdAndUpdate（）。 <code>0</code>按名称查找人员并将其年龄设置为20.使用函数参数personName作为搜索关键字。 <code>0</code>提示：我们希望您返回更新的文档。为此，您需要将选项文档{new：true}作为findOneAndUpdate（）的第三个参数传递。默认情况下，这些方法返回未修改的对象。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: findOneAndUpdate项应该成功
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-update'', {name:''Dorian Gray'', age: 35, favoriteFoods:[''unknown'']}).then(data => { assert.equal(data.name, ''Dorian Gray'', ''item.name is not what expected''); assert.equal(data.age, 20, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''unknown''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''findOneAndUpdate does not increment version by design !!!''); }, xhr => { throw new Error(xhr.responseText); })'

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
