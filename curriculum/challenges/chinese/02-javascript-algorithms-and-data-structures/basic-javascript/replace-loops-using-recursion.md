---
id: 5cfa3679138e7d9595b9d9d4
title: 使用递归代替循环
challengeType: 1
videoUrl: >-
  https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/
forumTopicId: 301175
---

# --description--

函数调用自身的编程技巧称为递归。为了便于理解，有如下任务：计算数组内元素第 `0` 到第 `n` 的元素乘积，使用 `for` 循环， 可以这样做：

```js
  function multiply(arr, n) {
    var product = arr[0];
    for (var i = 1; i <= n; i++) {
        product *= arr[i];
    }
    return product;
  }
```

下面是递归写法，注意代码里的 `multiply(arr, n) == multiply(arr, n - 1) * arr[n]`。这意味着可以重写 `multiply` 以调用自身而无需依赖循环。

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return arr[0];
    } else {
      return multiply(arr, n - 1) * arr[n];
    }
  }
```

递归版本的 `multiply` 详述如下。在 <dfn>base case</dfn> 里，也就是 `n <= 0` 时，返回结果，也就是 `arr[0]`。在 `n` 比 0 大的情况里，函数会调用自身，参数 n 的值为 `n - 1`。函数以相同的方式持续调用 `multiply`，直到 `n = 0` 为止。所以，所有函数都可以返回，原始的 `multiply` 返回结果。

**注意：** 递归函数在没有函数调用时（在这个例子是，是当 `n <= 0` 时）必需有一个跳出结构，否则永远不会执行完毕。

# --instructions--

写一个递归函数，`sum(arr, n)`，返回递归调用数组 `arr` 从第 `0` 个到第 `n` 个元素和。

# --hints--

`sum([1], 0)` 应该返回 1 。

```js
assert.equal(sum([1], 0), 1);
```

`sum([2, 3, 4], 1)` 应该返回 5 。

```js
assert.equal(sum([2, 3, 4], 1), 5);
```

代码不应该包含任何形式的循环（`for` 或者 `while` 或者高阶函数比如 `forEach`，`map`，`filter`，或者 `reduce`)。

```js
assert(!removeJSComments(code).match(/for|while|forEach|map|filter|reduce/g));
```

应该使用递归来解决这个问题。

```js
assert(removeJSComments(sum.toString()).match(/sum\(.*\)/g).length > 1);
```

# --solutions--

