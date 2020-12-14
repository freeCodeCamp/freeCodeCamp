---
id: a5deed1811a43193f9f1c841
challengeType: 5
forumTopicId: 16010
title: 筛选出数组中满足条件的元素
---

## Description
<section id='description'>
给定数组<code>arr</code>，从数组的第一个元素开始，用函数<code>func</code>来检查数组的每个元素并删除，直到某个元素传入函数<code>func</code>时返回<code>true</code>。函数最终的返回值也是一个数组，它由原数组中第一个使得<code>func</code>为<code>true</code>的元素及其之后的所有元素组成。
如果数组中的所有元素都不能让<code>func</code>为<code>true</code>，则返回空数组<code>[]</code>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dropElements([1, 2, 3, 4], function(n) {return n >= 3;})</code>应该返回<code>[3, 4]</code>。
    testString: assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}), [3, 4]);
  - text: <code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code>应该返回<code>[1, 0, 1]</code>。
    testString: assert.deepEqual(dropElements([0, 1, 0, 1], function(n) {return n === 1;}), [1, 0, 1]);
  - text: <code>dropElements([1, 2, 3], function(n) {return n > 0;})</code>应该返回<code>[1, 2, 3]</code>。
    testString: assert.deepEqual(dropElements([1, 2, 3], function(n) {return n > 0;}), [1, 2, 3]);
  - text: <code>dropElements([1, 2, 3, 4], function(n) {return n > 5;})</code>应该返回<code>[]</code>。
    testString: assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n > 5;}), []);
  - text: <code>dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})</code>应该返回<code>[7, 4]</code>。
    testString: assert.deepEqual(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}), [7, 4]);
  - text: <code>dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})</code>应该返回<code>[3, 9, 2]</code>。
    testString: assert.deepEqual(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}), [3, 9, 2]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dropElements(arr, func) {
  // Drop them elements.
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

</div>



</section>

## Solution
<section id='solution'>


```js
function dropElements(arr, func) {
  // Drop them elements.
  while (arr.length && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
```

</section>
