---
id: 587d7da9367417b2b2512b6a
title: Return a Sorted Array Without Changing the Original Array
challengeType: 1

videoUrl: ''
localeTitle: Return a Sorted Array Without Changing the Original Array
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
    testString: assert(code.match(/\.sort/g), '应该使用<code>sort</code>方法。');
  - text: 应该使用<code>concat</code>方法。
    testString: assert(code.match(/\.concat/g), '应该使用<code>concat</code>方法。');
  - text: <code>globalArray</code>variable 应保持不变。
    testString: assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]), '<code>globalArray</code>variable 应保持不变。');
  - text: <code>nonMutatingSort(globalArray)</code>应返回<code>[2, 3, 5, 6, 9]</code>。
    testString: assert(JSON.stringify(nonMutatingSort(globalArray)) === JSON.stringify([2, 3, 5, 6, 9]), '<code>nonMutatingSort(globalArray)</code>应返回<code>[2, 3, 5, 6, 9]</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              