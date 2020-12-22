---
id: 587d78b2367417b2b2512b0e
title: 使用 push() 和 unshift() 添加项目到数组中
challengeType: 1
forumTopicId: 301151
---

# --description--

一个数组的长度与其包含的数据类型一样，是不固定的。数组可以包含任意数量的元素，可以不限次数地往数组中添加元素或者从中移除元素，或者说数组是<dfn>可变的</dfn>（<dfn>mutable</dfn>）。在本挑战中，我们要学习两个以编程方式修改数组的方法：`Array.push()`和`Array.unshift()`。

这两个方法都接收一个或多个元素作为参数；对一个数组调用这两个方法都可以将输入的元素插入到该数组中；`push()`方法将元素插入到一个数组的末尾，而`unshift()`方法将元素插入到一个数组的开头。请看以下例子：

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// 数组现在为 ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// 数组现在为 ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
```

注意，我们还可以输入变量，这允许我们很灵活地动态改变我们数组中的数据。

# --instructions--

我们已经定义了一个`mixedNumbers`函数，它会接受一个数组作为参数。请你修改这个函数，使用`push()`和`unshift()`来将`'I', 2, 'three'`插入到数组的开头，将`7, 'VIII', 9`插入到数组的末尾，使得这个函数返回一个依次包含 1-9 的数组。

# --hints--

`mixedNumbers(["IV", 5, "six"])`现在应该返回`["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]`

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

`mixedNumbers`函数应该使用`push()`方法

```js
assert(mixedNumbers.toString().match(/\.push/));
```

`mixedNumbers`函数应该使用`unshift()`方法

```js
assert(mixedNumbers.toString().match(/\.unshift/));
```

# --solutions--

