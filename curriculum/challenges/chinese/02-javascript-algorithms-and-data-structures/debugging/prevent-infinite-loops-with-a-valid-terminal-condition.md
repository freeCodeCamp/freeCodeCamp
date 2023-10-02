---
id: 587d7b86367417b2b2512b3d
title: 使用有效的终止条件防止无限循环
challengeType: 1
forumTopicId: 301192
dashedName: prevent-infinite-loops-with-a-valid-terminal-condition
---

# --description--

最后一个话题是可怕的无限循环。 当需要程序运行代码块一定次数或满足条件时，循环是很好的工具，但是它们需要终止条件来结束循环。 无限循环可能会使浏览器冻结或崩溃，并导致程序执行混乱，没有人想要这样的结果。

在本节的介绍中有一个无限循环的例子——它没有终止条件来摆脱`loopy()`内的`while`循环。 不要调用这个函数！

```js
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
```

程序员的工作是确保最终达到终止条件，该条件告诉程序何时跳出循环。 有一种错误是从终端条件向错误方向递增或递减计数器变量。 另一种是在循环代码中意外重置计数器或索引变量，而不是递增或递减它。

# --instructions--

`myFunc()`函数包含一个无限循环，因为终止条件`i != 4`永远不会为`false`(并中断循环) -`i`将每次递增 2，然后跳过 4，因为`i`是从奇数开始递增。 在终端条件中输入比较运算符，使循环仅在`i`小于或等于 4 的情况下运行。

# --hints--

你应该在`for`循环的终止条件（中间部分）中更改比较运算符。

```js
assert(code.match(/i\s*?<=\s*?4;/g).length == 1);
```

你应该修改比较运算符来避免出现死循环。

```js
assert(!code.match(/i\s*?!=\s*?4;/g));
```

# --seed--

## --seed-contents--

```js
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
```

# --solutions--

```js
function myFunc() {
 for (let i = 1; i <= 4; i += 2) {
   console.log("Still going!");
 }
}
```
