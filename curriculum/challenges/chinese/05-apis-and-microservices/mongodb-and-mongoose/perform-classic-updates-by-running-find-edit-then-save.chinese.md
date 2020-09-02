---
id: 587d7fb8367417b2b2512c0e
title: 'Perform Classic Updates by Running Find, Edit, then Save'
localeTitle: '通过运行查找，编辑然后保存来执行经典更新'
challengeType: 2
---

## Description
<section id='description'> <code>0</code>在过去的好时光中，如果您想编辑文档并能够以某种方式使用它，例如在服务器响应中将其发回，则需要执行此操作。 Mongoose有一个专用的更新方法：Model.update（）。它与低级mongo驱动程序绑定。它可以批量编辑符合特定条件的许多文档，但它不会发回更新的文档，只会发送“状态”消息。此外，它使模型验证变得困难，因为它只是直接调用mongo驱动程序。 <code>0</code>使用参数personId作为搜索关键字，通过_id（使用上述任何方法）查找人物。将“hamburger”添加到她最喜欢的食物列表中（您可以使用Array.push（））。然后 - 在find回调中 -  save（）更新的Person。 
[*]提示：如果你的Schema中你将favoriteFoods声明为一个数组而没有指定类型（即[String]），这可能会很棘手。在那种情况下，favorsFoods默认为Mixed type，你必须使用document.markModified（'edited-field'）手动将其标记为已编辑。 （http://mongoosejs.com/docs/schematypes.html  -  #Mixed） 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 查找 - 编辑 - 更新项目应该成功
    testString: "getUserInput => $.post(getUserInput('url') + '/_api/find-edit-save', {name:'Poldo', age: 40, favoriteFoods:['spaghetti']}).then(data => { assert.equal(data.name, 'Poldo', 'item.name is not what is expected'); assert.equal(data.age, 40, 'item.age is not what expected'); assert.deepEqual(data.favoriteFoods, ['spaghetti', 'hamburger'], 'item.favoriteFoods is not what expected'); assert.equal(data.__v, 1, 'The item should be previously edited'); }, xhr => { throw new Error(xhr.responseText); })"

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
