---
id: a5deed1811a43193f9f1c841
title: Drop it
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 算了吧
---

## Description
<section id="description">给定数组<code>arr</code> ，迭代并从第一个元素（0索引）开始删除每个元素，直到函数<code>func</code>在迭代元素通过它时返回<code>true</code> 。然后在条件满足后返回数组的其余部分，否则， <code>arr</code>应作为空数组返回。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>dropElements([1, 2, 3, 4], function(n) {return n &gt;= 3;})</code>应该返回<code>[3, 4]</code> 。'
    testString: assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}), [3, 4]);
  - text: '<code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code>应该返回<code>[1, 0, 1]</code> <code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code> <code>[1, 0, 1]</code> 。'
    testString: assert.deepEqual(dropElements([0, 1, 0, 1], function(n) {return n === 1;}), [1, 0, 1]);
  - text: '<code>dropElements([1, 2, 3], function(n) {return n &gt; 0;})</code>应该返回<code>[1, 2, 3]</code> 。'
    testString: assert.deepEqual(dropElements([1, 2, 3], function(n) {return n > 0;}), [1, 2, 3]);
  - text: '<code>dropElements([1, 2, 3, 4], function(n) {return n &gt; 5;})</code>应返回<code>[]</code> 。'
    testString: assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n > 5;}), []);
  - text: '<code>dropElements([1, 2, 3, 7, 4], function(n) {return n &gt; 3;})</code>应该返回<code>[7, 4]</code> <code>dropElements([1, 2, 3, 7, 4], function(n) {return n &gt; 3;})</code> <code>[7, 4]</code> 。'
    testString: assert.deepEqual(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}), [7, 4]);
  - text: '<code>dropElements([1, 2, 3, 9, 2], function(n) {return n &gt; 2;})</code>应该返回<code>[3, 9, 2]</code> <code>dropElements([1, 2, 3, 9, 2], function(n) {return n &gt; 2;})</code> <code>[3, 9, 2]</code> 。'
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
// solution required
```

/section>
