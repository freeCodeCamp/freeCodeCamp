---
id: 587d7b7b367417b2b2512b14
title: 使用 indexOf() 检查元素是否存在
challengeType: 1
forumTopicId: 301154
dashedName: check-for-the-presence-of-an-element-with-indexof
---

# --description--

由于数组随时都可以修改或发生“突变”（*mutated*），我们很难保证某个数据始终处于数组中的特定位置，甚至不能保证该元素是否还存在于该数组中。好消息是，JavaScript 为我们提供了内置方法 `indexOf()`。这个方法让我们可以方便地检查某个元素是否存在于数组中。`indexOf()` 方法接受一个元素作为输入参数，并返回该元素在数组中的位置（索引）；若该元素不存在于数组中则返回 `-1`。

例如：

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // 返回 -1
fruits.indexOf('oranges'); // 返回 2
fruits.indexOf('pears'); // 返回 1，因为第一个出现在数组中的 'pears' 元素索引为 1
```

# --instructions--

`indexOf()` 在快速检查一个数组中是否存在某个元素时非常有用。我们已经定义了一个 `quickCheck` 函数，它接受一个数组和一个元素作为输入参数。请修改这个函数，通过 `indexOf()` 方法，使得当参数数组中包含第二个参数的元素时返回 `true`，不包含时返回 `false`。

# --hints--

`quickCheck(["squash", "onions", "shallots"], "mushrooms")` 应返回 `false`。

```js
assert.strictEqual(
  quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'),
  false
);
```

`quickCheck(["squash", "onions", "shallots"], "onions")` 应返回 `true`。

```js
assert.strictEqual(
  quickCheck(['onions', 'squash', 'shallots'], 'onions'),
  true
);
```

`quickCheck([3, 5, 9, 125, 45, 2], 125)` 应返回 `true`。

```js
assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
```

`quickCheck([true, false, false], undefined)` 应返回 `false`。

```js
assert.strictEqual(quickCheck([true, false, false], undefined), false);
```

`quickCheck` 函数中应使用 `indexOf()` 方法。

```js
assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1);
```

# --seed--

## --seed-contents--

```js
function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

# --solutions--

```js
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0; 
}
```
