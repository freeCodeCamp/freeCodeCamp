---
id: 587d7da9367417b2b2512b6a
title: Return a Sorted Array Without Changing the Original Array
challengeType: 1
videoUrl: ''
localeTitle: 返回排序数组而不更改原始数组
---

## Description
<section id="description"> <code>sort</code>方法的一个副作用是它改变了原始数组中元素的顺序。换句话说，它将阵列变异。避免这种情况的一种方法是首先将空数组连接到正在排序的数组（记住<code>concat</code>返回一个新数组），然后运行<code>sort</code>方法。 </section>

## Instructions
<section id="instructions">使用<code>nonMutatingSort</code>函数中的<code>sort</code>方法按升序对数组元素进行排序。该函数应该返回一个新数组，而不是改变<code>globalArray</code>变量。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该使用<code>sort</code>方法。
    testString: 'assert(code.match(/\.sort/g), "Your code should use the <code>sort</code> method.");'
  - text: 您的代码应使用<code>concat</code>方法。
    testString: 'assert(code.match(/\.concat/g), "Your code should use the <code>concat</code> method.");'
  - text: <code>globalArray</code>变量不应该更改。
    testString: 'assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]), "The <code>globalArray</code> variable should not change.");'
  - text: '<code>nonMutatingSort(globalArray)</code>应该返回<code>[2, 3, 5, 6, 9]</code> <code>nonMutatingSort(globalArray)</code> <code>[2, 3, 5, 6, 9]</code> 。'
    testString: 'assert(JSON.stringify(nonMutatingSort(globalArray)) === JSON.stringify([2, 3, 5, 6, 9]), "<code>nonMutatingSort(globalArray)</code> should return <code>[2, 3, 5, 6, 9]</code>.");'

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
// solution required
```
</section>
