---
id: 579e2a2c335b9d72dd32e05c
title: Slice and Splice
isRequired: true
isBeta: true
challengeType: 5
---

## Description
<section id='description'>
You are given two arrays and an index.
Use the array methods <code>slice</code> and <code>splice</code> to copy each element of the first array into the second array, in order.
Begin inserting elements at index <code>n</code> of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
Remember to use <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: '<code>frankenSplice([1, 2, 3], [4, 5], 1)</code> should return <code>[4, 1, 2, 3, 5]</code>.'
  testString: 'assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5], "<code>frankenSplice([1, 2, 3], [4, 5], 1)</code> should return <code>[4, 1, 2, 3, 5]</code>.");'
- text: '<code>frankenSplice([1, 2], ["a", "b"], 1)</code> should return <code>["a", 1, 2, "b"]</code>.'
  testString: 'assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ["a", 1, 2, "b"], "<code>frankenSplice([1, 2], ["a", "b"], 1)</code> should return <code>["a", 1, 2, "b"]</code>.");'
- text: '<code>frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)</code> should return <code>["head", "shoulders", "claw", "tentacle", "knees", "toes"]</code>.'
  testString: 'assert.deepEqual(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2), ["head", "shoulders", "claw", "tentacle", "knees", "toes"], "<code>frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)</code> should return <code>["head", "shoulders", "claw", "tentacle", "knees", "toes"]</code>.");'
- text: All elements from the first array should be added to the second array in their original order.
  testString: 'assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4], "All elements from the first array should be added to the second array in their original order.");'
- text: The first array should remain the same after the function runs.
  testString: 'assert(testArr1[0] === 1 && testArr1[1] === 2, "The first array should remain the same after the function runs.");'
- text: The second array should remain the same after the function runs.
  testString: 'assert(testArr2[0] === "a" && testArr2[1] === "b", "The second array should remain the same after the function runs.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n+i, 0, arr1[i]);
  }
  return result;
}

frankenSplice([1, 2, 3], [4, 5], 1);

```

</section>
