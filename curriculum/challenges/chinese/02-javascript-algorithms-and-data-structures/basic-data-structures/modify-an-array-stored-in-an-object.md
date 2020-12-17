---
id: 587d7b7d367417b2b2512b1f
title: 修改存储在对象中的数组
challengeType: 1
forumTopicId: 301163
---

# --description--

现在你已经接触到 JavaScript 对象的所有运算。你可以增加、修改和移除键值对，检查某个键是否存在，并且遍历一个对象中的所有键。在你继续学习 JavaScript 的过程中，你会看到对象的更多用法。另外，后续的《高级数据结构》课程还会介绍 ES6 的 <dfn>Map</dfn> 和 <dfn>Set</dfn> 对象。这两种对象都跟一般的对象相似，但它们提供了一些额外的特性。现在你已经学到了数组和对象的基础知识，你已经可以继续用 JavaScript 来解决更加复杂的问题了！

# --instructions--

请你看一下代码编辑器中我们提供的对象。`user`对象包含 3 个键。`data`对象包含 5 个键，其中一个包含一个`friends`数组。从这个例子你可以看到对象作为数据结构是多么的灵活。我们已经写了`addFriend`函数的一部分，请你完成这个函数，使其接受一个`user`对象，将`friend`参数中的名字添加到`user.data.friends`数组中并返回该数组。

# --hints--

`user`对象应该包含`name`、`age`和`data`三个键。

```js
assert('name' in user && 'age' in user && 'data' in user);
```

`addFriend`函数应该接受一个`user`对象和一个`friend`字符串作为输入参数，并将 friend 插入到`user`对象的`friends`数组中。

```js
assert(
  (function () {
    let L1 = user.data.friends.length;
    addFriend(user, 'Sean');
    let L2 = user.data.friends.length;
    return L2 === L1 + 1;
  })()
);
```

`addFriend(user, "Pete")`应该返回`["Sam", "Kira", "Tomo", "Pete"]`。

```js
assert.deepEqual(
  (function () {
    delete user.data.friends;
    user.data.friends = ['Sam', 'Kira', 'Tomo'];
    return addFriend(user, 'Pete');
  })(),
  ['Sam', 'Kira', 'Tomo', 'Pete']
);
```

# --solutions--

