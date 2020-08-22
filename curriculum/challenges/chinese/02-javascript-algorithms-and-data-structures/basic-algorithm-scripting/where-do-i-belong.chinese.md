---
id: a24c1a4622e3c05097f71d67
title: Where do I Belong
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 我属于哪里？
---

## Description
<section id="description">返回一个值（第二个参数）应该在排序后插入数组（第一个参数）的最低索引。返回的值应该是一个数字。例如， <code>getIndexToIns([1,2,3,4], 1.5)</code>应返回<code>1</code>因为它大于<code>1</code> （索引0），但小于<code>2</code> （索引1）。同样， <code>getIndexToIns([20,3,5], 19)</code>应返回<code>2</code>因为一旦数组已经排序，它将看起来像<code>[3,5,20]</code> ， <code>19</code>小于<code>20</code> （索引2）并且大于<code>5</code> （指数1）。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code>应返回<code>3</code> 。'
    testString: assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3);
  - text: '<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code>应返回一个数字。'
    testString: assert(typeof(getIndexToIns([10, 20, 30, 40, 50], 35)) === "number");
  - text: '<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code>应该返回<code>2</code> 。'
    testString: assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2);
  - text: '<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code>应该返回一个数字。'
    testString: assert(typeof(getIndexToIns([10, 20, 30, 40, 50], 30)) === "number");
  - text: '<code>getIndexToIns([40, 60], 50)</code>应返回<code>1</code> 。'
    testString: assert(getIndexToIns([40, 60], 50) === 1);
  - text: '<code>getIndexToIns([40, 60], 50)</code>应返回一个数字。'
    testString: assert(typeof(getIndexToIns([40, 60], 50)) === "number");
  - text: '<code>getIndexToIns([3, 10, 5], 3)</code>应该返回<code>0</code> 。'
    testString: assert(getIndexToIns([3, 10, 5], 3) === 0);
  - text: '<code>getIndexToIns([3, 10, 5], 3)</code>应返回一个数字。'
    testString: assert(typeof(getIndexToIns([3, 10, 5], 3)) === "number");
  - text: '<code>getIndexToIns([5, 3, 20, 3], 5)</code>应返回<code>2</code> 。'
    testString: assert(getIndexToIns([5, 3, 20, 3], 5) === 2);
  - text: '<code>getIndexToIns([5, 3, 20, 3], 5)</code>应返回一个数字。'
    testString: assert(typeof(getIndexToIns([5, 3, 20, 3], 5)) === "number");
  - text: '<code>getIndexToIns([2, 20, 10], 19)</code>应该返回<code>2</code> 。'
    testString: assert(getIndexToIns([2, 20, 10], 19) === 2);
  - text: '<code>getIndexToIns([2, 20, 10], 19)</code>应返回一个数字。'
    testString: assert(typeof(getIndexToIns([2, 20, 10], 19)) === "number");
  - text: '<code>getIndexToIns([2, 5, 10], 15)</code>应该返回<code>3</code> 。'
    testString: assert(getIndexToIns([2, 5, 10], 15) === 3);
  - text: '<code>getIndexToIns([2, 5, 10], 15)</code>应返回一个数字。'
    testString: assert(typeof(getIndexToIns([2, 5, 10], 15)) === "number");
  - text: '<code>getIndexToIns([], 1)</code>应该返回<code>0</code> 。'
    testString: assert(getIndexToIns([], 1) === 0);
  - text: '<code>getIndexToIns([], 1)</code>应该返回一个数字。'
    testString: assert(typeof(getIndexToIns([], 1)) === "number");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return num;
}

getIndexToIns([40, 60], 50);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
