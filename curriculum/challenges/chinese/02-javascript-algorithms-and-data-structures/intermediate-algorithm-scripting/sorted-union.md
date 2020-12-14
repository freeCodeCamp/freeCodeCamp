---
id: a105e963526e7de52b219be9
challengeType: 5
forumTopicId: 16077
title: 集合排序
---

## Description
<section id='description'>
在这道题目中，我们需要写一个函数，它接收两个或多个数组为参数。我们需要对这些数组中所有元素进行去除重复元素的处理，并以数组的形式返回去重结果。
换句话说，所有数组中出现的所有值都应按其原始顺序包括在内，但最终数组中不得重复。
唯一数字应按其原始顺序排序，但最终数组不应按数字顺序排序。
如有疑问，请先浏览下方的测试用例。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])</code>应该返回<code>[1, 3, 2, 5, 4]</code>。
    testString: assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
  - text: <code>uniteUnique([1, 2, 3], [5, 2, 1])</code>应该返回<code>[1, 2, 3, 5]</code>。
    testString: assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
  - text: <code>uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])</code>应该返回<code>[1, 2, 3, 5, 4, 6, 7, 8]</code>。
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
function uniteUnique(arr) {
  return [].slice.call(arguments).reduce(function(a, b) {
    return [].concat(a, b.filter(function(e) {return a.indexOf(e) === -1;}));
  }, []);
}
```

</section>