---
id: 587d7b90367417b2b2512b65
title: Return Part of an Array Using the slice Method
challengeType: 1
---

## Description
<section id='description'>
The <code>slice</code> method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The <code>slice</code> method does not mutate the original array, but returns a new one.
Here's an example:
<blockquote>var arr = ["Cat", "Dog", "Tiger", "Zebra"];<br>var newArray = arr.slice(1, 3);<br>// Sets newArray to ["Dog", "Tiger"]</blockquote>
</section>

## Instructions
<section id='instructions'>
Use the <code>slice</code> method in the <code>sliceArray</code> function to return part of the <code>anim</code> array given the provided <code>beginSlice</code> and <code>endSlice</code> indices. The function should return an array.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>slice</code> method.
    testString: assert(code.match(/\.slice/g), 'Your code should use the <code>slice</code> method.');
  - text: The <code>inputAnim</code> variable should not change.
    testString: assert(JSON.stringify(inputAnim) === JSON.stringify(["Cat", "Dog", "Tiger", "Zebra", "Ant"]), 'The <code>inputAnim</code> variable should not change.');
  - text: <code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)</code> should return <code>["Dog", "Tiger"]</code>.
    testString: assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)) === JSON.stringify(["Dog", "Tiger"]), '<code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)</code> should return <code>["Dog", "Tiger"]</code>.');
  - text: <code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)</code> should return <code>["Cat"]</code>.
    testString: assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)) === JSON.stringify(["Cat"]), '<code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)</code> should return <code>["Cat"]</code>.');
  - text: <code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)</code> should return <code>["Dog", "Tiger", "Zebra"]</code>.
    testString: assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)) === JSON.stringify(["Dog", "Tiger", "Zebra"]), '<code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)</code> should return <code>["Dog", "Tiger", "Zebra"]</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line


  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  return anim.slice(beginSlice, endSlice)
  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```
</section>
