---
id: 587d7fb8367417b2b2512c0e
title: 'Perform Classic Updates by Running Find, Edit, then Save'
challengeType: 2
isHidden: false
localeTitle: 通过运行 find、edit、save 来执行经典更新
---

## Description
<section id='description'>

传统应用里，如果你想要编辑 document，然后在某处使用它。你就必须在服务器响应中将其返回。Mongoose 有一个专用的更新方法：<code>Model.update() </code>, 它与低级的 mongo 驱动绑定，可以批量编辑符合特定条件的多个 document，而不用返回更新后的 document，取而代之返回'状态'消息。此外，它使模型校验变得更棘手，因为它是直接调用了 mongo 的驱动程序。
</section>

## Instructions
<section id='instructions'>

使用参数 personId 作为搜索关键字，然后通过 _id 找到一个 person（使用上述任何一种方法）. 将 “hamburger” 添加到她的 favoriteFoods 列中去 (可以使用 <code>Array.push()</code>)。然后在 <code>.find()</code> 的回调里通过 <code>.save()</code> 方法更新。

[*] 提示: 如果你在 Schema 中将 favoriteFoods 声明为一个 Array(数组), 而没有指定数组的类型(如：[String])，结果会让人很意外。 在这种情况下，favoriteFoods 默认为 Mixed 类型。如果想要编辑它，就必须执行 <code>document.markModified（'edited-field'）</code>。(http://mongoosejs.com/docs/schematypes.html - #Mixed)

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 对一个 item（项目）的 Find-edit-update 操作成功
    testString: "getUserInput => $.post(getUserInput('url') + '/_api/find-edit-save', {name:'Poldo', age: 40, favoriteFoods:['spaghetti']}).then(data => { assert.equal(data.name, 'Poldo', 'item.name is not what is expected'); assert.equal(data.age, 40, 'item.age is not what expected'); assert.deepEqual(data.favoriteFoods, ['spaghetti', 'hamburger'], 'item.favoriteFoods is not what expected'); assert.equal(data.__v, 1, 'The item should be previously edited'); }, xhr => { throw new Error(xhr.responseText); })"
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
