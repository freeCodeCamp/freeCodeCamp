---
id: 587d78b3367417b2b2512b11
title: 使用 splice() 增加项目
challengeType: 1
forumTopicId: 301152
---

# --description--

你还记得在上个挑战中我们提到`splice()`方法可以接受最多 3 个参数吗？我们现在可以进一步了解`splice()`。除了移除元素，我们还可以利用它的第三个参数来向数组中*添加*元素。第三个参数可以是一个或多个元素，这些元素会被添加到数组中。这使我们能够便捷地将数组中的一个或一系列元素换成其他的元素。例如：

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// 第二个 12 被移除，在第二个 12 的索引处添加 13、14。
console.log(numbers);
// 返回 [ 10, 11, 12, 13, 14, 15 ]
```

以一个数字数组开始。接着调用 `splice()` 方法，在 (3) 的索引位置开始删除元素，删除的元素数量是 (1)，(13, 14) 是在删除位置插入的元素，可以在 `amountToDelete` 后面插入任意数量的元素（以逗号分隔），每个都会被插入。

# --instructions--

我们已经定义了一个`htmlColorNames`函数，它以一个 HTML 颜色的数组作为输入参数。请修改这个函数，利用`splice()`来移除数组中的前两个元素，并在对应的位置上添加`'DarkSalmon'`和`'BlanchedAlmond'`。

# --hints--

`htmlColorNames`应该返回`["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"]`

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

`htmlColorNames`函数应该使用`splice()`方法

```js
assert(/.splice/.test(code));
```

你不应该使用`shift()`或`unshift()` 。

```js
assert(!/shift|unshift/.test(code));
```

您不应该使用数组括号表示法。

```js
assert(!/\[\d\]\s*=/.test(code));
```

# --solutions--

