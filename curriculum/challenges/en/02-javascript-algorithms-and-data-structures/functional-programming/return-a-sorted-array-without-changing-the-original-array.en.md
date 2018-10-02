---
id: 587d7da9367417b2b2512b6a
title: Return a Sorted Array Without Changing the Original Array
challengeType: 1
---

## Description
<section id='description'>
A side effect of the <code>sort</code> method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that <code>concat</code> returns a new array), then run the <code>sort</code> method.
</section>

## Instructions
<section id='instructions'>
Use the <code>sort</code> method in the <code>nonMutatingSort</code> function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the <code>globalArray</code> variable.
</section>

## Tests
<section id='tests'>

```yml
- text: Your code should use the <code>sort</code> method.
  testString: 'assert(code.match(/\.sort/g), ''Your code should use the <code>sort</code> method.'');'
- text: Your code should use the <code>concat</code> method.
  testString: 'assert(code.match(/\.concat/g), ''Your code should use the <code>concat</code> method.'');'
- text: The <code>globalArray</code> variable should not change.
  testString: 'assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]), ''The <code>globalArray</code> variable should not change.'');'
- text: '<code>nonMutatingSort(globalArray)</code> should return <code>[2, 3, 5, 6, 9]</code>.'
  testString: 'assert(JSON.stringify(nonMutatingSort(globalArray)) === JSON.stringify([2, 3, 5, 6, 9]), ''<code>nonMutatingSort(globalArray)</code> should return <code>[2, 3, 5, 6, 9]</code>.'');'

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
