---
id: 587d7b8e367417b2b2512b5f
title: 传递参数以避免函数中的外部依赖
challengeType: 1
forumTopicId: 301234
dashedName: pass-arguments-to-avoid-external-dependence-in-a-function
---

# --description--

上一个挑战是更接近函数式编程原则的挑战，但是仍然缺少一些东西。

虽然我们没有改变全局变量值，但在没有全局变量 `fixedValue` 的情况下，`incrementer` 函数将不起作用。

函数式编程的另一个原则是：总是显式声明依赖关系。 如果函数依赖于一个变量或对象，那么将该变量或对象作为参数直接传递到函数中。

这样做会有很多好处。 其中一点是让函数更容易测试，因为你确切地知道参数是什么，并且这个参数也不依赖于程序中的任何其他内容。

其次，这样做可以让你更加自信地更改，删除或添加新代码。 因为你很清楚哪些是可以改的，哪些是不可以改的，这样你就知道哪里可能会有潜在的陷阱。

最后，无论代码的哪一部分执行它，函数总是会为同一组输入生成相同的输出。

# --instructions--

更新 `incrementer` 函数，明确声明其依赖项。

编写 `incrementer` 函数，获取它的参数，然后将值增加 1。

# --hints--

`incrementer` 函数不能修改 `fixedValue` 的值（它的值是 `4`）。

```js
assert(fixedValue === 4);
```

`incrementer` 函数应该接收一个参数。

```js
assert(incrementer.length === 1);
```

`incrementer` 函数应返回比 `fixedValue` 更大的值。

```js
const __newValue = incrementer(fixedValue);
assert(__newValue === 5);
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer() {


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4;

function incrementer(fixedValue) {
  return fixedValue + 1;
}
```
