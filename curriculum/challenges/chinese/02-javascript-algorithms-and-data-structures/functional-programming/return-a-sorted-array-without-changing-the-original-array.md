---
id: 587d7da9367417b2b2512b6a
challengeType: 1
forumTopicId: 301237
title: 在不更改原始数组的前提下返回排序后的数组
---

## Description
<section id='description'>
<code>sort</code>方法会产生改变原始数组中元素顺序的副作用。换句话说，它会改变数组的位置。避免这种情况的一种方法是先将空数组连接到正在排序的数组上（记住<code>concat</code>返回一个新数组），再用<code>sort</code>方法。
</section>

## Instructions
<section id='instructions'>
在<code>nonMutatingSort</code>函数中使用<code>sort</code>方法对数组中的元素按升序进行排列。函数不能改变<code>globalArray</code>变量，应返回一个新数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该使用<code>sort</code>方法。
    testString: assert(nonMutatingSort.toString().match(/\.sort/g));
  - text: 应该使用<code>concat</code>方法。
    testString: assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]));
  - text: <code>globalArray</code>variable 应保持不变。
    testString: assert(JSON.stringify(nonMutatingSort(globalArray)) === JSON.stringify([2, 3, 5, 6, 9]));
  - text: <code>nonMutatingSort(globalArray)</code>应返回<code>[2, 3, 5, 6, 9]</code>。
    testString: assert(!nonMutatingSort.toString().match(/[23569]/g));    

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line


  // Add your code above this line
}
nonMutatingSort(globalArray);
```

</div>



</section>

## Solution
<section id='solution'>

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort((a,b) => a-b);
  // Add your code above this line
}
nonMutatingSort(globalArray);
```

</section>
