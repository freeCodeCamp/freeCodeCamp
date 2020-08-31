---
id: a105e963526e7de52b219be9
title: Sorted Union
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 排序联盟
---

## Description
<section id="description">编写一个带有两个或更多数组的函数，并按原始提供的数组的顺序返回一个新的唯一值数组。换句话说，所有数组中存在的所有值都应包含在它们的原始顺序中，但在最终数组中没有重复。唯一编号应按其原始顺序排序，但最终数组不应按数字顺序排序。检查断言测试以获取示例。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])</code>应该返回<code>[1, 3, 2, 5, 4]</code> <code>uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])</code> <code>[1, 3, 2, 5, 4]</code> 。'
    testString: assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
  - text: '<code>uniteUnique([1, 2, 3], [5, 2, 1])</code>应该返回<code>[1, 2, 3, 5]</code> <code>uniteUnique([1, 2, 3], [5, 2, 1])</code> <code>[1, 2, 3, 5]</code> 。'
    testString: assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
  - text: '<code>uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])</code>应该返回<code>[1, 2, 3, 5, 4, 6, 7, 8]</code> <code>uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])</code> <code>[1, 2, 3, 5, 4, 6, 7, 8]</code> 。'
    testString: assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
