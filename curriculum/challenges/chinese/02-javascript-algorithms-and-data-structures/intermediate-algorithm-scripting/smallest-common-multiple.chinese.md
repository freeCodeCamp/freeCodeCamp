---
id: ae9defd7acaf69703ab432ea
title: Smallest Common Multiple
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 最小的共同多重
---

## Description
<section id="description">找到所提供参数的最小公倍数，可以均匀地除以这些参数，以及这些参数之间范围内的所有序号。范围将是两个数字的数组，不一定按数字顺序排列。例如，如果给定1和3，找到1和3的最小公倍数，它们也可以被1到3 <em>之间</em>的所有数字整除。这里的答案是6.记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a>如果你得到卡住。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>smallestCommons([1, 5])</code>应返回一个数字。'
    testString: assert.deepEqual(typeof smallestCommons([1, 5]), 'number');
  - text: '<code>smallestCommons([1, 5])</code>应该返回60。'
    testString: assert.deepEqual(smallestCommons([1, 5]), 60);
  - text: '<code>smallestCommons([5, 1])</code>应该返回60。'
    testString: assert.deepEqual(smallestCommons([5, 1]), 60);
  - text: '<code>smallestCommons([2, 10])</code> 2,10 <code>smallestCommons([2, 10])</code>应返回2520。'
    testString: assert.deepEqual(smallestCommons([2, 10]), 2520);
  - text: '<code>smallestCommons([1, 13])</code> 1,13 <code>smallestCommons([1, 13])</code>应返回360360。'
    testString: assert.deepEqual(smallestCommons([1, 13]), 360360);
  - text: '<code>smallestCommons([23, 18])</code> 23,18 <code>smallestCommons([23, 18])</code>应返回6056820。'
    testString: assert.deepEqual(smallestCommons([23, 18]), 6056820);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
