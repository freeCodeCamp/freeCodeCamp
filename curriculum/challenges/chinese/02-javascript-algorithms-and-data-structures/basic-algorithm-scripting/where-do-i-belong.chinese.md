---
id: a24c1a4622e3c05097f71d67
title: Where do I Belong
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Where do I Belong
---

## Description
<section id='description'>
将摄氏度转换为华氏度的算法为：摄氏度 × <code>9/5 + 32</code>
输入参数 <code>celsius</code> 代表一个摄氏温度值。请你根据上述转换公式，将已定义好的 <code>fahrenheit</code> 变量赋值为对应的华氏温度的值。
你不需要顾虑 function 和 return 语句，它们会在之后的挑战中予以介绍。现在，你只需要使用你已学过的运算符。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> 应该返回 <code>3</code>。
    testString: assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3, '<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> 应该返回 <code>3</code>。');
  - text: <code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> 应该返回一个数字。
    testString: assert(typeof(getIndexToIns([10, 20, 30, 40, 50], 35)) === "number", '<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> 应该返回一个数字。');
  - text: <code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> 应该返回 <code>2</code>。
    testString: assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2, '<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> 应该返回 <code>2</code>。');
  - text: <code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> 应该返回一个数字。
    testString: assert(typeof(getIndexToIns([10, 20, 30, 40, 50], 30)) === "number", '<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> 应该返回一个数字。');
  - text: <code>getIndexToIns([40, 60], 50)</code> 应该返回 <code>1</code>。
    testString: assert(getIndexToIns([40, 60], 50) === 1, '<code>getIndexToIns([40, 60], 50)</code> 应该返回 <code>1</code>。');
  - text: <code>getIndexToIns([40, 60], 50)</code> 应该返回一个数字。
    testString: assert(typeof(getIndexToIns([40, 60], 50)) === "number", '<code>getIndexToIns([40, 60], 50)</code> 应该返回一个数字。');
  - text: <code>getIndexToIns([3, 10, 5], 3)</code> 应该返回 <code>0</code>。
    testString: assert(getIndexToIns([3, 10, 5], 3) === 0, '<code>getIndexToIns([3, 10, 5], 3)</code> 应该返回 <code>0</code>。');
  - text: <code>getIndexToIns([3, 10, 5], 3)</code> 应该返回一个数字。
    testString: assert(typeof(getIndexToIns([3, 10, 5], 3)) === "number", '<code>getIndexToIns([3, 10, 5], 3)</code> 应该返回一个数字。');
  - text: <code>getIndexToIns([5, 3, 20, 3], 5)</code> 应该返回 <code>2</code>。
    testString: assert(getIndexToIns([5, 3, 20, 3], 5) === 2, '<code>getIndexToIns([5, 3, 20, 3], 5)</code> 应该返回 <code>2</code>。');
  - text: <code>getIndexToIns([5, 3, 20, 3], 5)</code> 应该返回一个数字。
    testString: assert(typeof(getIndexToIns([5, 3, 20, 3], 5)) === "number", '<code>getIndexToIns([5, 3, 20, 3], 5)</code> 应该返回一个数字。');
  - text: <code>getIndexToIns([2, 20, 10], 19)</code> 应该返回 <code>2</code>。
    testString: assert(getIndexToIns([2, 20, 10], 19) === 2, '<code>getIndexToIns([2, 20, 10], 19)</code> 应该返回 <code>2</code>。');
  - text: <code>getIndexToIns([2, 20, 10], 19)</code> 应该返回一个数字。
    testString: assert(typeof(getIndexToIns([2, 20, 10], 19)) === "number", '<code>getIndexToIns([2, 20, 10], 19)</code> 应该返回一个数字。');
  - text: <code>getIndexToIns([2, 5, 10], 15)</code> 应该返回 <code>3</code>。
    testString: assert(getIndexToIns([2, 5, 10], 15) === 3, '<code>getIndexToIns([2, 5, 10], 15)</code> 应该返回 <code>3</code>。');
  - text: <code>getIndexToIns([2, 5, 10], 15)</code> 应该返回一个数字。
    testString: assert(typeof(getIndexToIns([2, 5, 10], 15)) === "number", '<code>getIndexToIns([2, 5, 10], 15)</code> 应该返回一个数字。');
  - text: <code>getIndexToIns([], 1)</code> 应该返回 <code>0</code>。
    testString: assert(getIndexToIns([], 1) === 0, '<code>getIndexToIns([], 1)</code> 应该返回 <code>0</code>。');
  - text: <code>getIndexToIns([], 1)</code> 应该返回一个数字。
    testString: assert(typeof(getIndexToIns([], 1)) === "number", '<code>getIndexToIns([], 1)</code> 应该返回一个数字。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);

```

</section>
              