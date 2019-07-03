---
id: a5deed1811a43193f9f1c841
title: Drop it
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Drop it
---

## Description
<section id='description'>
给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。
注意，较小数不一定总是出现在数组的第一个元素。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dropElements([1, 2, 3, 4], function(n) {return n >= 3;})</code>应该返回<code>[3, 4]</code>。
    testString: assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}), [3, 4], '<code>dropElements([1, 2, 3, 4], function(n) {return n >= 3;})</code>应该返回<code>[3, 4]</code>。');
  - text: <code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code>应该返回<code>[1, 0, 1]</code>。
    testString: assert.deepEqual(dropElements([0, 1, 0, 1], function(n) {return n === 1;}), [1, 0, 1], '<code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code>应该返回<code>[1, 0, 1]</code>。');
  - text: <code>dropElements([1, 2, 3], function(n) {return n > 0;})</code>应该返回<code>[1, 2, 3]</code>。
    testString: assert.deepEqual(dropElements([1, 2, 3], function(n) {return n > 0;}), [1, 2, 3], '<code>dropElements([1, 2, 3], function(n) {return n > 0;})</code>应该返回<code>[1, 2, 3]</code>。');
  - text: <code>dropElements([1, 2, 3, 4], function(n) {return n > 5;})</code>应该返回<code>[]</code>。
    testString: assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n > 5;}), [], '<code>dropElements([1, 2, 3, 4], function(n) {return n > 5;})</code>应该返回<code>[]</code>。');
  - text: <code>dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})</code>应该返回<code>[7, 4]</code>。
    testString: assert.deepEqual(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}), [7, 4], '<code>dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})</code>应该返回<code>[7, 4]</code>。');
  - text: <code>dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})</code>应该返回<code>[3, 9, 2]</code>。
    testString: assert.deepEqual(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}), [3, 9, 2], '<code>dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})</code>应该返回<code>[3, 9, 2]</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              