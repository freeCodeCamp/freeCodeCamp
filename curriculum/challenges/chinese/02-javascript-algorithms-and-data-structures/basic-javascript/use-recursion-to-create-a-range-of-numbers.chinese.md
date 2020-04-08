---
id: 5cc0bd7a49b71cb96132e54c
title: Use Recursion to Create a Range of Numbers
challengeType: 1
forumTopicId: 301180
localeTitle: 使用递归来创建一个数字序列
---

## Description
<section id='description'>

接着上一个挑战，有另外一个机会来创建递归函数解决问题。

</section>

## Instructions
<section id='instructions'>
定义好了 <code>rangeOfNumbers</code> 函数，包含两个参数。函数应该返回一个连续数字数组，<code>startNum</code> 参数开始 <code>endNum</code> 参数截止。开始的数字小于或等于截止数字。函数必需递归调用自身，不能使用任意形式的循环。要考虑到 <code>startNum</code> 和 <code>endNum</code> 相同的情况。
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: 函数应该返回一个数组。
    testString: assert(Array.isArray(rangeOfNumbers(5, 10)));
  - text: 不能包含循环语句（<code>for</code> 或者 <code>while</code> 或者高阶函数比如 <code>forEach</code>、<code>map</code>、<code>filter</code> 或者 <code>reduce</code>）。
    testString: assert(!removeJSComments(code).match(/for|while|forEach|map|filter|reduce/g));
  - text: <code>rangeOfNumbers</code> 应该使用递归函数（调用自身）来完成这个挑战。
    testString: assert(removeJSComments(rangeOfNumbers.toString()).match(/rangeOfNumbers\s*\(.+\)/));
  - text: <code>rangeOfNumbers(1, 5)</code> 应该返回 <code>[1, 2, 3, 4, 5]</code>。
    testString: assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
  - text: <code>rangeOfNumbers(6, 9)</code> 应该返回 <code>[6, 7, 8, 9]</code>。
    testString: assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
  - text: <code>rangeOfNumbers(4, 4)</code> 应该返回 <code>[4]</code>。
    testString: assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function rangeOfNumbers(startNum, endNum) {
  return [];
};
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
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```

</section>
