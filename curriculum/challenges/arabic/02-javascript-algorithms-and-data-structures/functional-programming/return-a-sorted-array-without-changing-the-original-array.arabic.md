---
id: 587d7da9367417b2b2512b6a
title: Return a Sorted Array Without Changing the Original Array
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
<section id="instructions"> استخدم طريقة <code>sort</code> في الدالة <code>nonMutatingSort</code> لفرز عناصر صفيف بترتيب تصاعدي. يجب أن ترجع الدالة صفيفًا جديدًا ولا يتم <code>globalArray</code> متغير <code>globalArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/\.sort/g), "Your code should use the <code>sort</code> method.");'
  - text: ''
    testString: 'assert(code.match(/\.concat/g), "Your code should use the <code>concat</code> method.");'
  - text: يجب ألا يتغير متغير <code>globalArray</code> .
    testString: 'assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]), "The <code>globalArray</code> variable should not change.");'
  - text: ''
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
