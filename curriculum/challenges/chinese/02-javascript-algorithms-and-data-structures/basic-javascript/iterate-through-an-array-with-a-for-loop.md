---
id: 5675e877dbd60be8ad28edc6
title: 使用 For 循环遍历数组
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
forumTopicId: 18216
dashedName: iterate-through-an-array-with-a-for-loop
---

# --description--

JavaScript 中的一个常见任务是遍历数组的内容。 一种方法是使用 `for` 循环。 下面的代码将输出数组 `arr` 的每个元素到控制台：

```js
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

记住数组的索引从零开始的，这意味着数组的最后一个元素的下标是：`length - 1`（数组的长度 -1）。 我们这个循环的条件是 `i < arr.length`，当 `i` 的值为 `length` 的时候循环就停止了。 在这个例子中，最后一个循环是 `i === 4`，也就是说，当 `i` 的值等于 `arr.length - 1` 时，结果输出 `6`。 然后 `i` 增加到 `5`，循环会终止，因为 `i < arr.length` 是 `false`。

# --instructions--

声明并初始化一个变量 `total` 值为 `0`。 使用 `for` 循环，使得 `total` 的值为 `myArr` 的数组中的每个元素的值的总和。

# --hints--

`total` 应该被声明, 并且初始化值为 0。

```js
assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
```

`total` 应该等于 20。

```js
assert(total === 20);
```

你应该使用 `for` 循环在 `myArr` 中遍历。

```js
assert(/for\s*\(/g.test(code) && /myArr\s*\[/g.test(code));
```

不能直接把 `total` 设置成 20。

```js
assert(!__helpers.removeWhiteSpace(code).match(/total[=+-]0*[1-9]+/gm));
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()
```

## --seed-contents--

```js
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

```

# --solutions--

```js
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```
