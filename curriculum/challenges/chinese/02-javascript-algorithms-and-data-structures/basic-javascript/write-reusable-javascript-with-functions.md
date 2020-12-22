---
id: 56bbb991ad1ed5201cd392cf
title: 用函数编写可重用代码
challengeType: 1
videoUrl: 'https://scrimba.com/c/cL6dqfy'
forumTopicId: 18378
---

# --description--

在 JavaScript 中，我们可以把代码的重复部分抽取出来，放到一个<dfn>函数</dfn>中。

举个例子：

```js
function functionName() {
  console.log("Hello World");
}
```

你可以通过函数名`functionName`加上后面的小括号来调用这个函数，就像这样： `functionName();` 每次调用函数时，它都会在控制台上打印消息`"Hello World"`。每次调用函数时，大括号之间的所有代码都将被执行。

# --instructions--

<ol><li>先创建一个名为<code>reusableFunction</code>的函数，这个函数可以打印<code>"Hi World"</code>到控制台上。</li><li>然后调用这个函数。</li></ol>

# --hints--

`reusableFunction`应该是一个函数。

```js
assert(typeof reusableFunction === 'function');
```

`reusableFunction`应该在控制台中输出 "Hi World"。

```js
assert(hiWorldWasLogged);
```

在你定义`reusableFunction`之后记得调用它。

```js
assert(/^\s*reusableFunction\(\)\s*/m.test(code));
```

# --solutions--

