---
id: 587d7b7b367417b2b2512b17
title: 使用展开运算符合并数组
challengeType: 1
forumTopicId: 301156
dashedName: combine-arrays-with-the-spread-operator
---

# --description--

展开语法（<dfn>spread</dfn>）的另一个重要用途是合并数组，或者将某个数组的所有元素插入到另一个数组的任意位置。 我们也可以使用 ES5 的语法连接两个数组，但只能让它们首尾相接。 而展开语法可以让这样的操作变得极其简单：

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
```

`thatArray` 会有值 `['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']`

使用展开语法，我们就可以很方便的实现一个用传统方法会写得很复杂且冗长的操作。

# --instructions--

我们已经定义了一个返回 `sentence` 变量的 `spreadOut` 函数。 请修改这个函数，利用 <dfn>spread</dfn> 使该函数返回数组 `['learning', 'to', 'code', 'is', 'fun']`。

# --hints--

`spreadOut` 应返回 `["learning", "to", "code", "is", "fun"]`。

```js
assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun']);
```

`spreadOut` 函数里应用到展开语法。

```js
assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1);
```

# --seed--

## --seed-contents--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());
```

# --solutions--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
```
