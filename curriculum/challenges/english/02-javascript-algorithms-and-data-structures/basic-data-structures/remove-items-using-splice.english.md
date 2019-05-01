---
id: 587d78b2367417b2b2512b10
title: Remove Items Using splice()
challengeType: 1
---

## Description
<section id='description'>
Ok, so we've learned how to remove elements from the beginning and end of arrays using <code>shift()</code> and <code>pop()</code>, but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where <code>splice()</code> comes in. <code>splice()</code> allows us to do just that: <strong>remove any number of consecutive elements</strong> from anywhere in an array.
<code>splice()</code> can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of <code>splice()</code> are integers which represent indexes, or positions, of the array that <code>splice()</code> is being called upon. And remember, arrays are <em>zero-indexed</em>, so to indicate the first element of an array, we would use <code>0</code>. <code>splice()</code>'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:
<blockquote>let array = ['today', 'was', 'not', 'so', 'great'];<br><br>array.splice(2, 2);<br>// remove 2 elements beginning with the 3rd element<br>// array now equals ['today', 'was', 'great']</blockquote>
<code>splice()</code> not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:
<blockquote>let array = ['I', 'am', 'feeling', 'really', 'happy'];<br><br>let newArray = array.splice(3, 2);<br>// newArray equals ['really', 'happy']</blockquote>
</section>

## Instructions
<section id='instructions'>
We've defined a function, <code>sumOfTen</code>, which takes an array as an argument and returns the sum of that array's elements. Modify the function, using <code>splice()</code>, so that it returns a value of <code>10</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumOfTen</code> should return 10
    testString: assert.strictEqual(sumOfTen([2, 5, 1, 5, 2, 1]), 10, '<code>sumOfTen</code> should return 10');
  - text: The <code>sumOfTen</code> function should utilize the <code>splice()</code> method
    testString: assert.notStrictEqual(sumOfTen.toString().search(/\.splice\(/), -1, 'The <code>sumOfTen</code> function should utilize the <code>splice()</code> method');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumOfTen(arr) {
  // change code below this line

  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
```

</div>



</section>

## Solution
<section id='solution'>

```js
function sumOfTen(arr) {
  arr.splice(2,2);
  return arr.reduce((a, b) => a + b);
}
```
</section>
