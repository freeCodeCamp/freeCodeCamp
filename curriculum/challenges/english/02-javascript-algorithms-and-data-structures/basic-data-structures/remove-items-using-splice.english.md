---
id: 587d78b2367417b2b2512b10
title: Remove Items Using splice()
challengeType: 1
isHidden: false
forumTopicId: 301166
---

## Description
<section id='description'>
Ok, so we've learned how to remove elements from the beginning and end of arrays using <code>shift()</code> and <code>pop()</code>, but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where <code>splice()</code> comes in. <code>splice()</code> allows us to do just that: <strong>remove any number of consecutive elements</strong> from anywhere in an array.
<code>splice()</code> can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of <code>splice()</code> are integers which represent indexes, or positions, of the array that <code>splice()</code> is being called upon. And remember, arrays are <em>zero-indexed</em>, so to indicate the first element of an array, we would use <code>0</code>. <code>splice()</code>'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:

```js
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
```

<code>splice()</code> not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']
```

</section>

## Instructions
<section id='instructions'>

We've initialized an array `arr`. Use `splice()` to remove elements from `arr`, so that it only contains elements that sum to the value of <code>10</code>.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should not change the original line of <code>const arr = [2, 4, 5, 1, 7, 5, 2, 1];</code>.
    testString: assert(code.replace(/\s/g, '').match(/constarr=\[2,4,5,1,7,5,2,1\];?/));
  - text: <code>arr</code> should only contain elements that sum to <code>10</code>.
    testString: assert.strictEqual(arr.reduce((a, b) => a + b), 10);
  - text: Your code should utilize the <code>splice()</code> method on <code>arr</code>.
    testString: assert(code.replace(/\s/g, '').match(/arr\.splice\(/));
  - text: The splice should only remove elements from <code>arr</code> and not add any additional elements to <code>arr</code>.
    testString: assert(!code.replace(/\s/g, '').match(/arr\.splice\(\d+,\d+,\d+.*\)/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);
```

</div>



</section>

## Solution
<section id='solution'>

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
```

</section>
