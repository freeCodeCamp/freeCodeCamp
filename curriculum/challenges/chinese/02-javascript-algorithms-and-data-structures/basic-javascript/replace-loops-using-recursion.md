---
id: 5cfa3679138e7d9595b9d9d4
challengeType: 1
videoUrl: 'https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/'
forumTopicId: 301175
title: 使用递归代替循环
---

## Description
<section id='description'>
函数调用自身的编程技巧称为递归。为了便于理解，有如下任务：计算数组内元素第 <code>0</code> 到第 <code>n</code> 的元素乘积，使用 <code>for</code> 循环， 可以这样做：

```js
  function multiply(arr, n) {
    var product = arr[0];
    for (var i = 1; i <= n; i++) {
        product *= arr[i];
    }
    return product;
  }
```

下面是递归写法，注意代码里的  <code>multiply(arr, n) == multiply(arr, n - 1) * arr[n]</code>。这意味着可以重写 <code>multiply</code> 以调用自身而无需依赖循环。

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return arr[0];
    } else {
      return multiply(arr, n - 1) * arr[n];
    }
  }
```

递归版本的 <code>multiply</code> 详述如下。在 <dfn>base case</dfn> 里，也就是 <code>n <= 0</code> 时，返回结果，也就是 <code>arr[0]</code>。在 <code>n</code> 比 0 大的情况里，函数会调用自身，参数 n 的值为 <code>n - 1</code>。函数以相同的方式持续调用 <code>multiply</code>，直到 <code>n = 0</code> 为止。所以，所有函数都可以返回，原始的 <code>multiply</code> 返回结果。

<strong>注意：</strong> 递归函数在没有函数调用时（在这个例子是，是当  <code>n <= 0</code> 时）必需有一个跳出结构，否则永远不会执行完毕。

</section>

## Instructions
<section id='instructions'>

写一个递归函数，<code>sum(arr, n)</code>，返回递归调用数组 <code>arr</code> 从第 <code>0</code> 个到第 <code>n</code> 个元素和。

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>sum([1], 0)</code> 应该返回 1 。
    testString: assert.equal(sum([1], 0), 1);
  - text: <code>sum([2, 3, 4], 1)</code> 应该返回 5 。
    testString: assert.equal(sum([2, 3, 4], 1), 5);
  - text: 代码不应该包含任何形式的循环（<code>for</code> 或者 <code>while</code> 或者高阶函数比如 <code>forEach</code>，<code>map</code>，<code>filter</code>，或者 <code>reduce</code>)。
    testString: assert(!removeJSComments(code).match(/for|while|forEach|map|filter|reduce/g));
  - text: 应该使用递归来解决这个问题。
    testString: assert(removeJSComments(sum.toString()).match(/sum\(.*\)/g).length > 1);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}

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
function sum(arr, n) {
  // Only change code below this line
  if(n <= 0) {
    return arr[0];
  } else {
    return sum(arr, n - 1) + arr[n];
  }
  // Only change code above this line
}

```

</section>
