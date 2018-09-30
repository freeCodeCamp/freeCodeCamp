---
id: 587d7da9367417b2b2512b69
title: Sort an Array Alphabetically using the sort Method
challengeType: 1
---

## Description
<section id='description'>
The <code>sort</code> method sorts the elements of an array according to the callback function.
For example:
<blockquote>function ascendingOrder(arr) {<br>&nbsp;&nbsp;return arr.sort(function(a, b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return a - b;<br>&nbsp;&nbsp;});<br>}<br>ascendingOrder([1, 5, 2, 3, 4]);<br>// Returns [1, 2, 3, 4, 5]<br><br>function reverseAlpha(arr) {<br>&nbsp;&nbsp;return arr.sort(function(a, b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return a < b;<br>&nbsp;&nbsp;});<br>}<br>reverseAlpha(['l', 'h', 'z', 'b', 's']);<br>// Returns ['z', 's', 'l', 'h', 'b']</blockquote>
Note: It's encouraged to provide a callback function to specify how to sort the array items. JavaScript's default sorting method is by string Unicode point value, which may return unexpected results.
</section>

## Instructions
<section id='instructions'>
Use the <code>sort</code> method in the <code>alphabeticalOrder</code> function to sort the elements of <code>arr</code> in alphabetical order.
</section>

## Tests
<section id='tests'>

```yml
- text: Your code should use the <code>sort</code> method.
  testString: 'assert(code.match(/\.sort/g), "Your code should use the <code>sort</code> method.");'
- text: '<code>alphabeticalOrder(["a", "d", "c", "a", "z", "g"])</code> should return <code>["a", "a", "c", "d", "g", "z"]</code>.'
  testString: 'assert(JSON.stringify(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])) === JSON.stringify(["a", "a", "c", "d", "g", "z"]), "<code>alphabeticalOrder(["a", "d", "c", "a", "z", "g"])</code> should return <code>["a", "a", "c", "d", "g", "z"]</code>.");'
- text: '<code>alphabeticalOrder(["x", "h", "a", "m", "n", "m"])</code> should return <code>["a", "h", "m", "m", "n", "x"]</code>.'
  testString: 'assert(JSON.stringify(alphabeticalOrder(["x", "h", "a", "m", "n", "m"])) === JSON.stringify(["a", "h", "m", "m", "n", "x"]), "<code>alphabeticalOrder(["x", "h", "a", "m", "n", "m"])</code> should return <code>["a", "h", "m", "m", "n", "x"]</code>.");'
- text: '<code>alphabeticalOrder(["a", "a", "a", "a", "x", "t"])</code> should return <code>["a", "a", "a", "a", "t", "x"]</code>.'
  testString: 'assert(JSON.stringify(alphabeticalOrder(["a", "a", "a", "a", "x", "t"])) === JSON.stringify(["a", "a", "a", "a", "t", "x"]), "<code>alphabeticalOrder(["a", "a", "a", "a", "x", "t"])</code> should return <code>["a", "a", "a", "a", "t", "x"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function alphabeticalOrder(arr) {
  // Add your code below this line


  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
