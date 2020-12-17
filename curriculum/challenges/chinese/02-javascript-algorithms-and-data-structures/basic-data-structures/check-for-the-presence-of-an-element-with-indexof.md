---
id: 587d7b7b367417b2b2512b14
title: 使用 indexOf() 检查元素是否存在
challengeType: 1
forumTopicId: 301154
---

# --description--

由于数组可以在任意时间被修改或者说*被改变（mutated）*，我们不能保证某个数据在一个给定数组中的位置，甚至不能保证该元素还存在于该数组中。幸运的是，JavaScript 给我们提供了另一个内置方法`indexOf()`。这个方法让我们可以便捷地检查某个元素是否存在于一个数组中。`indexOf()`方法接受一个元素作为输入参数，并返回该元素在数组中的位置（索引）；若该元素不存在于数组中则返回`-1`。

例如：

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // 返回 -1
fruits.indexOf('oranges'); // 返回 2
fruits.indexOf('pears'); // 返回 1，即第一个出现的 'pears' 元素在数组中的索引为 1
```

# --instructions--

`indexOf()`在快速检查一个数组中是否存在某个元素时非常有用。我们已经定义了一个`quickCheck`函数，它接受一个数组和一个元素作为输入参数。请修改这个函数，利用`indexOf()`方法，使得当输入的数组中含有输入的元素时，函数返回`true`；不含有输入的元素时，函数返回`false`。

# --hints--

`quickCheck(["squash", "onions", "shallots"], "mushrooms")`应该返回`false`

```js
assert.strictEqual(
  quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'),
  false
);
```

`quickCheck(["squash", "onions", "shallots"], "onions")`应该返回`true`

```js
assert.strictEqual(
  quickCheck(['onions', 'squash', 'shallots'], 'onions'),
  true
);
```

`quickCheck([3, 5, 9, 125, 45, 2], 125)`应该返回`true`

```js
assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
```

`quickCheck([true, false, false], undefined)`应返回`false`

```js
assert.strictEqual(quickCheck([true, false, false], undefined), false);
```

`quickCheck`函数应该使用`indexOf()`方法

```js
assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1);
```

# --solutions--

