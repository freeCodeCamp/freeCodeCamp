---
id: 56533eb9ac21ba0edf2244bf
title: 局部作用域和函数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
dashedName: local-scope-and-functions
---

# --description--

在一个函数内声明的变量，以及该函数的参数都具有局部（<dfn>local</dfn>）作用域。 这意味着它们只在该函数内可见。

这是在函数 `myTest` 内声明局部变量 `loc` 的例子：

```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```

`myTest()` 函数调用将在控制台中显示字符串 `foo`。 `console.log(loc)` 行（在 `myTest` 函数之外）将抛出错误，因为 `loc` 未在函数之外定义。

# --instructions--

编辑器有两个 `console.log` 来帮助您了解正在发生的事情。 检查控制台的代码输出以查看它是如何改变的。 在 `myLocalScope` 中声明一个本地变量 `myVar` 并运行测试。

**注意：** 控制台仍将显示 `ReferenceError: myVar is not defined`，但这不会导致测试失败。

# --hints--

不应该包含全局的 `myVar` 变量。

```js
function declared() {
  myVar;
}

assert.throws(declared, ReferenceError);
```

需要定义局部的 `myVar` 变量。

```js
assert(
  /functionmyLocalScope\(\)\{.*(var|let|const)myVar[\s\S]*}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

# --seed--

## --seed-contents--

```js
function myLocalScope() {
  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```

# --solutions--

```js
function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
