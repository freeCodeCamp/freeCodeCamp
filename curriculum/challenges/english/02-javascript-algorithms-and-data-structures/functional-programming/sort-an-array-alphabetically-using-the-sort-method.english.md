---
id: 587d7da9367417b2b2512b69
title: Sort an Array Alphabetically using the sort Method
challengeType: 1
isHidden: false
forumTopicId: 18303
---

## Description
<section id='description'>
The <code>sort</code> method sorts the elements of an array according to the callback function.
For example:

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']
```

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called <code>compareFunction</code>, is supplied, the array elements are sorted according to the return value of the <code>compareFunction</code>:
If <code>compareFunction(a,b)</code> returns a value less than 0 for two elements <code>a</code> and <code>b</code>, then <code>a</code> will come before <code>b</code>.
If <code>compareFunction(a,b)</code> returns a value greater than 0 for two elements <code>a</code> and <code>b</code>, then <code>b</code> will come before <code>a</code>.
If <code>compareFunction(a,b)</code> returns a value equal to 0 for two elements <code>a</code> and <code>b</code>, then <code>a</code> and <code>b</code> will remain unchanged.

</section>

## Instructions
<section id='instructions'>
Use the <code>sort</code> method in the <code>alphabeticalOrder</code> function to sort the elements of <code>arr</code> in alphabetical order.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>sort</code> method.
    testString: assert(code.match(/\.sort/g));
  - text: <code>alphabeticalOrder(["a", "d", "c", "a", "z", "g"])</code> should return <code>["a", "a", "c", "d", "g", "z"]</code>.
    testString: assert(JSON.stringify(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])) === JSON.stringify(["a", "a", "c", "d", "g", "z"]));
  - text: <code>alphabeticalOrder(["x", "h", "a", "m", "n", "m"])</code> should return <code>["a", "h", "m", "m", "n", "x"]</code>.
    testString: assert(JSON.stringify(alphabeticalOrder(["x", "h", "a", "m", "n", "m"])) === JSON.stringify(["a", "h", "m", "m", "n", "x"]));
  - text: <code>alphabeticalOrder(["a", "a", "a", "a", "x", "t"])</code> should return <code>["a", "a", "a", "a", "t", "x"]</code>.
    testString: assert(JSON.stringify(alphabeticalOrder(["a", "a", "a", "a", "x", "t"])) === JSON.stringify(["a", "a", "a", "a", "t", "x"]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function alphabeticalOrder(arr) {
  // Only change code below this line


  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort();
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

</section>
