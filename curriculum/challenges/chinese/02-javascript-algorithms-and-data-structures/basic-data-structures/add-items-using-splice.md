---
id: 587d78b3367417b2b2512b11
title: 使用 splice() 添加元素
challengeType: 1
forumTopicId: 301152
dashedName: add-items-using-splice
---

# --description--

还记得在上个挑战中我们提到 `splice()` 方法最多可以接收 3 个参数吗？ 第三个参数可以是一个或多个元素，这些元素会被添加到数组中。 这样，我们能够便捷地将数组中的一个或多个连续元素换成其他的元素。

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
```

第二个 `12` 已被删除，我们在同一索引处添加 `13` 和 `14`。 `numbers` 数组现在将会是 `[ 10, 11, 12, 13, 14, 15 ]`。

在上面的代码中，数组一开始包含了若干数字。 接着，我们调用 `splice()` 方法，索引为 (3) 的地方开始删除元素，删除的元素数量是 (1)。然后，(13, 14) 是在删除位置插入的元素。 可以在 `amountToDelete` 后面传入任意数量的元素（以逗号分隔），每个都会被插入到数组中。

# --instructions--

我们已经定义了一个 `htmlColorNames` 函数，它以一个 HTML 颜色的数组作为输入参数。 请修改这个函数，使用 `splice()` 来移除数组中的前两个元素，并在对应的位置上添加 `'DarkSalmon'` 和 `'BlanchedAlmond'`。

# --hints--

`htmlColorNames` 应返回 `["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]`。

```js
assert.deepEqual(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]),
  [
    'DarkSalmon',
    'BlanchedAlmond',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]
);
```

`htmlColorNames` 函数中应调用 `splice()` 方法。

```js
assert(/.splice/.test(code));
```

不应使用 `shift()` 或 `unshift()`。

```js
assert(!/shift|unshift/.test(code));
```

不应使用数组的方括号表示法。

```js
assert(!/\[\d\]\s*=/.test(code));
```

# --seed--

## --seed-contents--

```js
function htmlColorNames(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
```

# --solutions--

```js
function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
```
