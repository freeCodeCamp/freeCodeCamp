---
id: 587d7fb8367417b2b2512c0e
challengeType: 2
forumTopicId: 301541
title: '通过执行查找、编辑、保存来执行更新'
---

## Description
<section id='description'>

在传统的应用中，如果想要编辑 document 并在其它地方使用它（比如放到服务器的返回数据中），就必须执行查找、编辑和保存。Mongoose 有一个专用的更新方法 <code>Model.update()</code>，它与底层的 mongo 驱动绑定。通过这个方法，我们可以批量编辑符合特定条件的多个 document。但问题在于，这个方法不会返回更新后的 document，而是返回状态信息。此外，由于它是直接调用 mongo 的底层驱动，因此它让处理 model 的验证变得更加棘手。
</section>

## Instructions
<section id='instructions'>
在这个挑战中，请使用参数 <code>personId</code> 作为字段，在数据库中通过 <code>_id</code> 找到相应的 person（你可以使用之前挑战中的任何一种方法）。然后，将 "hamburger" 添加到它的 <code>favoriteFoods</code> 中（你可以使用 <code>Array.push()</code>）。之后，在 <code>.find()</code> 的回调里通过 <code>.save()</code> 方法更新数据库。

<strong>提示：</strong>如果你在 Schema 中将 <code>favoriteFoods</code> 声明为一个 Array（数组）并且没有指定数组的类型(如 <code>[String]</code>)，那么此时，<code>favoriteFoods</code> 就会是默认的 Mixed 类型。如果想编辑它，就必须执行 <code>document.markModified('edited-field')</code>。请参阅 [Mongoose 文档](https://mongoosejs.com/docs/schematypes.html#Mixed)

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应成功地对一条数据进行查找、编辑和更新
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
