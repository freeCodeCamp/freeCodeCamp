---
id: 587d7b7b367417b2b2512b13
title: 使用扩展运算符复制数组
challengeType: 1
forumTopicId: 301157
---

# --description--

`slice()`已经能让我们从一个数组中选择一些元素来复制到新数组中了，而 ES6 中又新引入了一个简洁且可读性强的语法<dfn>展开运算符（spread operator）</dfn>，它能让我们方便地复制数组中的*所有*元素。展开语法是这样的：`...`

在实践中，我们可以这样用展开运算符来复制一个数组：

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray 等于 [true, true, undefined, false, null]
// thisArray 保持不变，等于 thatArray
```

# --instructions--

我们已经定义了一个`copyMachine`函数，它接受`arr`（一个数组）和`num`（一个数字）作为输入参数。该函数应该返回一个由`num`个`arr`组成的新数组。我们已经为你写好了大部分的代码，但它还不能正确地工作。请修改这个函数，使用展开语法，使该函数正确工作（提示：我们已经学到过的一个方法很适合用在这里！）

# --hints--

`copyMachine([true, false, true], 2)`应该返回`[[true, false, true], [true, false, true]]`

```js
assert.deepEqual(copyMachine([true, false, true], 2), [
  [true, false, true],
  [true, false, true]
]);
```

`copyMachine([1, 2, 3], 5)`应该返回`[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]`

```js
assert.deepEqual(copyMachine([1, 2, 3], 5), [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]);
```

`copyMachine([true, true, null], 1)`应该返回`[[true, true, null]]`

```js
assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
```

`copyMachine(["it works"], 3)`应该返回`[["it works"], ["it works"], ["it works"]]`

```js
assert.deepEqual(copyMachine(['it works'], 3), [
  ['it works'],
  ['it works'],
  ['it works']
]);
```

`copyMachine`函数中应该对数组`arr`使用`spread operator`。

```js
assert(removeJSComments(code).match(/\.\.\.arr/));
```

# --solutions--

