---
id: 587d78b2367417b2b2512b0f
title: 使用 pop() 和 shift() 从数组中删除项目
challengeType: 1
forumTopicId: 301165
---

# --description--

`push()`和`unshift()`都分别有一个作用基本与之相反的函数：`pop()`和`shift()`。你现在或许已经猜到，与插入元素相反，`pop()`从数组的末尾*移除*一个元素，而`shift()`从数组的开头移除一个元素。`pop()`和`shift()`与对应的`push()`和`unshift()`的关键区别在于，前者不能接受输入参数，而且每次只能修改数组中的一个元素。

让我们来看以下的例子：

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']
```

还可以用这些方法返回移除的元素，像这样：

```js
let popped = greetings.pop();
// returns 'hello'
// greetings now equals []
```

# --instructions--

我们已经定义了一个`popShift`函数，它会接收一个数组作为输入参数并返回一个新的数组。请你修改这个函数，使用`pop()`和`shift()`来移除输入的数组的第一个元素和最后一个元素，并将这两个被移除的元素赋值给对应的变量，使得返回的数组包含它们的值。

# --hints--

`popShift(["challenge", "is", "not", "complete"])`应返回`["challenge", "complete"]`

```js
assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), [
  'challenge',
  'complete'
]);
```

`popShift`函数应该使用`pop()`方法

```js
assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
```

`popShift`函数应该使用`shift()`方法

```js
assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);
```

# --solutions--

