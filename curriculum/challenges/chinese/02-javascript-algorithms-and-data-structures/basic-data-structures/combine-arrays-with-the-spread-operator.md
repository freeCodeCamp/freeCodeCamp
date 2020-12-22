---
id: 587d7b7b367417b2b2512b17
title: 组合使用数组和扩展运算符
challengeType: 1
forumTopicId: 301156
---

# --description--

<dfn>展开运算符</dfn>的另一个大用处是合并数组，或者将某个数组的所有元素插入到另一个数组的任意位置。用传统的语法我们也可以连接两个数组，但只能两个数组首尾相接。而展开语法能使下面的操作变得极其简单：

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray 现在是 ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
```

使用展开语法，我们这样就实现了一个用传统方法要写得很复杂冗长的操作。

# --instructions--

我们已经定义了一个返回`sentence`变量的`spreadOut`函数，请修改该函数，利用<dfn>展开运算符</dfn>使该函数返回数组`['learning', 'to', 'code', 'is', 'fun']`。

# --hints--

`spreadOut`应该返回`["learning", "to", "code", "is", "fun"]`

```js
assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun']);
```

`spreadOut`函数里应该用到展开语法

```js
assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1);
```

# --solutions--

