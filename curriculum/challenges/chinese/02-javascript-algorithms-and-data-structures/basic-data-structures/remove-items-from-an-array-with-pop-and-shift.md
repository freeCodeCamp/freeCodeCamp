---
id: 587d78b2367417b2b2512b0f
title: 使用 pop() 和 shift() 从数组中删除元素
challengeType: 1
forumTopicId: 301165
---

# --description--

`push()` 和 `unshift()` 都有一个与它们作用相反的函数：`pop()` 和 `shift()`。与插入元素相反，`pop()` 会从数组的末尾*移除*一个元素，而 `shift()` 会从数组的开头移除一个元素。`pop()` 和 `shift()` 与 `push()` 和 `unshift()` 的关键区别在于，用于删除元素的方法不接收参数，而且每次只能删除数组中的一个元素。

让我们来看以下的例子：

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// 数组现在是 ['whats up?', 'hello']

greetings.shift();
// 数组现在是 ['hello']
```

这些用于删除数组元素的方法会返回被删除的元素：

```js
let popped = greetings.pop();
// 返回 'hello'，即 popped 的值为 'hello'
// greetings 数组现在为 []
```

# --instructions--

我们已经定义了一个 `popShift` 函数，它接收一个数组作为输入参数并返回一个新的数组。请修改这个函数，使用 `pop()` 和 `shift()` 来移除输入的数组中的第一个元素和最后一个元素，并将这两个被移除的元素分别赋值给对应的变量，使得最终返回的数组里包含这两个值。

# --hints--

`popShift(["challenge", "is", "not", "complete"])` 应返回 `["challenge", "complete"]`。

```js
assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), [
  'challenge',
  'complete'
]);
```

`popShift` 函数中应使用 `pop()` 方法。

```js
assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
```

`popShift` 函数中应使用 `shift()` 方法。

```js
assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);
```

# --solutions--

