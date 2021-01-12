---
id: 587d78b2367417b2b2512b0e
title: 使用 push() 和 unshift() 为数组添加元素
challengeType: 1
forumTopicId: 301151
---

# --description--

数组的长度与数组能包含的数据类型一样，都是不固定的。数组可以包含任意数量的元素，可以不限次数地往数组中添加元素或者从中移除元素。总之，数组是<dfn>可变的</dfn>（<dfn>mutable</dfn>）。在本挑战中，我们要学习两种修改数组的方法：`Array.push()` 和 `Array.unshift()`。

这两个方法都接收一个或多个元素作为参数，并会将参数中的元素添加到该数组中。`push()` 方法会将元素插入到数组的末尾，而 `unshift()` 方法会将元素插入到数组的开头。请看以下例子：

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// 数组现在为 ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// 数组现在为 ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
```

**注意：**我们甚至可以传入变量，这在动态改变数组数据的场景下十分有用。

# --instructions--

我们已经定义了一个 `mixedNumbers` 函数，它接收一个数组作为参数。请你修改这个函数，使用 `push()` 和 `unshift()` 来将 `'I', 2, 'three'` 插入到数组开头，将 `7, 'VIII', 9` 插入到数组的末尾，使得这个函数返回一个依次包含 1 至 9。

# --hints--

`mixedNumbers(["IV", 5, "six"])` 应返回 `["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]`。

```js
assert.deepEqual(mixedNumbers(['IV', 5, 'six']), [
  'I',
  2,
  'three',
  'IV',
  5,
  'six',
  7,
  'VIII',
  9
]);
```

`mixedNumbers` 函数中应调用 `push()` 方法。

```js
assert(mixedNumbers.toString().match(/\.push/));
```

`mixedNumbers` 函数中应调用 `unshift()` 方法。

```js
assert(mixedNumbers.toString().match(/\.unshift/));
```

# --solutions--

