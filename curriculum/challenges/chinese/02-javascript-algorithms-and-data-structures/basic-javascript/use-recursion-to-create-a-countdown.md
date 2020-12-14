---
id: 5cd9a70215d3c4e65518328f
challengeType: 1
forumTopicId: 305925
title: 使用递归创建一个倒计时
---

## Description
<section id='description'>

在上一个[挑战](/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion)，学习了怎样用递归来代替循环。现在来学习一个更复杂的函数，函数返回一个从 <code>1</code> 到传递给函数的指定数字的连续数字数组。

正如上一个挑战提到的，会有一个 <dfn>base case</dfn>。base case 告诉递归函数什么时候不在需要调用其自身。这是简单 情况，返回得到的值。还有 <dfn>recursive call</dfn>，继续用不同的参数调用自身。如果函数无误，一直执行直到 base case 为止。

比如，如果想写一个递归函数，返回一个数字 <code>1</code> 到 <code>n</code> 的连续数组。这个函数需要接收一个参数<code>n</code> 代表起始数字。然后会持续的调用自身，传入一个比 <code>n</code> 更小的值一直到传入的值是 <code>1</code> 为止。函数如下：

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
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
```

起初，这似乎是违反直觉的，因为 n 的值<em>递减</em>，但是最终数组中的值却<em>递增</em>。 之所以发生这种情况，是因为在递归调用返回之后，才调用 push。 在将 `n` pushed 进数组时，`count(n - 1)` 已经调用赋值成功并返回了 `[1, 2, ..., n - 1]`。

</section>

## Instructions
<section id='instructions'>

已经定义了一个函数 <code>countdown</code>，函数有一个参数（<code>n</code>）。函数应该基于参数 <code>n</code> 递归调用返回 <code>n</code> 到 <code>1</code> 的连续数字的数组。如果函数以小于 1 的参数调用，函数应该返回空数组。
比如，用 <code>n = 5</code> 调用函数应该返回数组 <code>[5, 4, 3, 2, 1]</code>。
函数必需使用递归函数调用自身，不能使用任何形式的循环。

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>countdown(-1)</code> 应该返回一个空数组。
    testString: assert.isEmpty(countdown(-1));
  - text: <code>countdown(10)</code> 应该返回 <code>[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]</code>。
    testString: assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  - text: <code>countdown(5)</code> 应该返回 <code>[5, 4, 3, 2, 1]</code>。
    testString: assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
  - text: 代码不能包含任意形式的循环（<code>for</code>、<code>while</code> 或者高阶函数如：<code>forEach</code>、<code>map</code>、<code>filter</code> 以及 <code>reduce</code>）。
    testString: assert(!removeJSComments(code).match(/for|while|forEach|map|filter|reduce/g));
  - text: 应该用递归解决这个问题。
    testString: assert(removeJSComments(countdown.toString()).match(/countdown\s*\(.+\)\;/));
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js


//Only change code below this line
function countdown(n){
  return;
}
console.log(countdown(5)); // [5, 4, 3, 2, 1]
```

</div>

### After Test
<div id='js-teardown'>

```js
const removeJSComments = str => str.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
```

</div>

</section>

## Solution
<section id='solution'>

```js
//Only change code below this line
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```

</section>
