---
id: 56533eb9ac21ba0edf2244bf
title: 局部作用域和函数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
---

# --description--

在一个函数内声明的变量，以及该函数的参数都是局部变量，意味着它们只在该函数内可见。

这是在函数`myTest`内声明局部变量`loc`的例子：

```js
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined
```

在函数外，`loc`是未定义的。

# --instructions--

在函数`myFunction`内部声明一个局部变量`myVar`，并删除外部的 console.log。

**提示：**  
如果你遇到了问题，可以先尝试刷新页面。

# --hints--

未找到全局的`myVar`变量。

```js
assert(typeof myVar === 'undefined');
```

需要定义局部的`myVar`变量。

```js
assert(/var\s+myVar/.test(code));
```

# --solutions--

