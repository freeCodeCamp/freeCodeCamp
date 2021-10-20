---
id: 5a661e0f1068aca922b3ef17
title: 使用方括号访问数组的元素
challengeType: 1
forumTopicId: 301149
dashedName: access-an-arrays-contents-using-bracket-notation
---

# --description--

所有数据结构的基本特性是，它们不仅可以存储数据，还可以让我们按需访问存放在其中的数据。 我们已经学习了如何创建数组，现在让我们来学习如何访问数组中的数据。

我们先定义一个包含 3 个元素的数组：

```js
let ourArray = ["a", "b", "c"];
```

在数组中，内部的每个元素都有一个与之对应的索引（<dfn>index</dfn>）。 索引既是该元素在数组中的位置，也是我们访问该元素的引用。 需要注意的是，JavaScript 数组的索引是从 0 开始的（这种从 0 开始的规则叫做 <dfn>zero-indexed</dfn>），即数组的第一个元素是在数组中的***第 0 个***位置，而不是第 1 个位置。 要从数组中获取一个元素，我们可以在数组字面量后面加一个用方括号括起来的索引。不过习惯上，我们会通过表示数组的变量名来访问，而不是直接通过字面量。 这种从数组中读取元素的方式叫做方括号表示法（<dfn>bracket notation</dfn>）。 如果我们要从数组 `ourArray` 中取出数据 `a` 并将其赋值给另一个变量，可以这样写：

```js
let ourVariable = ourArray[0];
```

现在，变量 `ourVariable` 的值也为 `a`。

通过索引，我们不仅可以获取某个元素值，还可以用类似的写法来*设置*一个索引位置的元素值：

```js
ourArray[1] = "not b anymore";
```

在上面的代码中，我们用方括号表示法把索引为 1 的元素从 `b` 改成了 `not b anymore`。 现在 `ourArray` 的值是 `["a", "not b anymore", "c"]`。

# --instructions--

在本挑战中，请将 `myArray` 中的第二个元素（索引为 `1`）设置为除了 `b` 以外的任意值。

# --hints--

`myArray[0]` 应为 `a`。

```js
assert.strictEqual(myArray[0], 'a');
```

`myArray[1]` 不应为 `b`。

```js
assert.notStrictEqual(myArray[1], 'b');
```

`myArray[2]` 应为 `c`。

```js
assert.strictEqual(myArray[2], 'c');
```

`myArray[3]` 应为 `d`。

```js
assert.strictEqual(myArray[3], 'd');
```

# --seed--

## --seed-contents--

```js
let myArray = ["a", "b", "c", "d"];
// Only change code below this line

// Only change code above this line
console.log(myArray);
```

# --solutions--

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
```
