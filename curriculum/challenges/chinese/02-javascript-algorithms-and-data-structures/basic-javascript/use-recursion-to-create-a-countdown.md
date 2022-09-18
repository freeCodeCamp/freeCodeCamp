---
id: 5cd9a70215d3c4e65518328f
title: 使用递归创建一个倒计时
challengeType: 1
forumTopicId: 305925
dashedName: use-recursion-to-create-a-countdown
---

# --description--

在上一个<a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion" target="_blank" rel="noopener noreferrer nofollow">挑战</a>中，你学习了怎样用递归来代替 `for` 循环。 现在来学习一个更复杂的函数，函数返回一个从 `1` 到传递给函数的指定数字的连续数字数组。

正如上一个挑战提到的，会有一个 <dfn>base case</dfn>。 base case 告诉递归函数什么时候不再需要调用其自身。 这是简单 情况，返回得到的值。 还有 <dfn>recursive call</dfn>，继续用不同的参数调用自身。 如果函数无误，一直执行直到 base case 为止。

比如，如果想写一个递归函数，返回一个数字 `1` 到 `n` 的连续数组。 这个函数需要接收一个参数 `n` 代表最终数字。 然后会持续的调用自身，传入一个比 `n` 更小的值一直到传入的值是 `1` 为止。 函数如下：

```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

值 `[1, 2, 3, 4, 5]` 将显示在控制台中。

起初，这似乎是违反直觉的，因为 `n` 的值*递减*，但是最终数组中的值却*递增*。 之所以发生这种情况，是因为在递归调用返回之后，才调用 push。 在将 `n` pushed 进数组时，`countup(n - 1)` 已经调用赋值成功并返回了 `[1, 2, ..., n - 1]`。

# --instructions--

已经定义了一个函数 `countdown`，函数有一个参数（`n`）。 函数应该基于参数 `n` 递归调用返回 `n` 到 `1` 的连续数字的数组。 如果函数以小于 1 的参数调用，函数应该返回空数组。 比如，用 `n = 5` 调用函数应该返回数组 `[5, 4, 3, 2, 1]`。 函数必需使用递归函数调用自身，不能使用任何形式的循环。

# --hints--

`countdown(-1)` 应该返回一个空数组。

```js
assert.isEmpty(countdown(-1));
```

`countdown(10)` 应该返回 `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`。

```js
assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
```

`countdown(5)` 应该返回 `[5, 4, 3, 2, 1]`。

```js
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

代码不能包含任意形式的循环（`for`、`while` 或者高阶函数如：`forEach`、`map`、`filter` 以及 `reduce`）。

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

应该用递归解决这个问题。

```js
assert(
  countdown.toString().match(/countdown\s*\(.+\)/)
);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function countdown(n){
  return;
}
// Only change code above this line
```

# --solutions--

```js
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```
