---
id: 587d7b8e367417b2b2512b5e
title: 使用函数式编程避免变化和副作用
challengeType: 1
forumTopicId: 301228
dashedName: avoid-mutations-and-side-effects-using-functional-programming
---

# --description--

如果你还没想通，上一个挑战的问题出在 `tabClose()` 函数里的 `splice`。 不幸的是，`splice` 修改了调用它的原始数组，所以第二次调用它时是基于修改后的数组，才给出了意料之外的结果。

这是一个小例子，还有更广义的定义——在变量，数组或对象上调用一个函数，这个函数会改变对象中的变量或其他东西。

函数式编程的核心原则之一是不改变任何东西。 变化会导致错误。 如果一个函数不改变传入的参数、全局变量等数据，那么它造成问题的可能性就会小很多。

前面的例子没有任何复杂的操作，但是 `splice` 方法改变了原始数组，导致 bug 产生。

回想一下，在函数式编程中，改变或变更叫做 <dfn>mutation</dfn>，这种改变的结果叫做“副作用”（<dfn>side effect</dfn>）。 理想情况下，函数应该是不会产生任何副作用的 <dfn>pure function</dfn>。

让我们尝试掌握这个原则：不要改变代码中的任何变量或对象。

# --instructions--

填写 `incrementer` 函数的代码，使其返回值为全局变量 `fixedValue` 增加 1 。

# --hints--

`incrementer` 函数不能改变 `fixedValue` 的值（`4`）。

```js
incrementer();
assert(fixedValue === 4);
```

`incrementer` 函数应返回比 `fixedValue` 变量更大的值。

```js
const __newValue = incrementer();
assert(__newValue === 5);
```

你的 `incrementer` 函数返回的值应该基于全局变量 `fixedValue` 的值。

```js
(function () {
  fixedValue = 10;
  const newValue = incrementer();
  assert(fixedValue === 10 && newValue === 11);
  fixedValue = 4;
})();
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4

function incrementer() {
  return fixedValue + 1
}
```
