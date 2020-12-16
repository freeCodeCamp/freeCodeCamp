---
id: 56533eb9ac21ba0edf2244bd
title: 将值传递给带有参数的函数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy8rahW'
forumTopicId: 18254
---

# --description--

函数的参数`parameters`在函数中充当占位符(也叫形参)的作用，参数可以为一个或多个。调用一个函数时所传入的参数为实参，实参决定着形参真正的值。简单理解：形参即形式、实参即内容。

这是带有两个参数的函数，`param1`和`param2`：

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

接着我们调用`testFun`： `testFun("Hello", "World");` 我们传递了两个参数，`"Hello"`和`"World"`。在函数内部，`param1`等于“Hello”，`param2`等于“World”。请注意，`testFun`函数可以多次调用，每次调用时传递的参数会决定形参的实际值。

# --instructions--

<ol><li>创建一个名为<code>functionWithArgs</code>的函数，它可以接收两个参数，计算参数的和，将结果输出到控制台。</li><li>调用这个函数。</li></ol>

# --hints--

`functionWithArgs`应该是一个函数。

```js
assert(typeof functionWithArgs === 'function');
```

`functionWithArgs(1,2)`应该输出`3`。

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(1, 2);
  uncapture();
}
assert(logOutput == 3);
```

`functionWithArgs(7,9)`应该输出`16`。

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(7, 9);
  uncapture();
}
assert(logOutput == 16);
```

在你定义`functionWithArgs`之后记得调用它。

```js
assert(/^\s*functionWithArgs\s*\(\s*\d+\s*,\s*\d+\s*\)\s*;?/m.test(code));
```

# --solutions--

