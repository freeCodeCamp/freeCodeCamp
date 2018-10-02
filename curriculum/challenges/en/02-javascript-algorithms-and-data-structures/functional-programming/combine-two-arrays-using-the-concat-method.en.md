---
id: 587d7da9367417b2b2512b66
title: Combine Two Arrays Using the concat Method
challengeType: 1
---

## Description
<section id='description'>
<code>Concatenation</code> means to join items end to end. JavaScript offers the <code>concat</code> method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to <code>concat</code>, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:
<blockquote>[1, 2, 3].concat([4, 5, 6]);<br>// Returns a new array [1, 2, 3, 4, 5, 6]</blockquote>
</section>

## Instructions
<section id='instructions'>
Use the <code>concat</code> method in the <code>nonMutatingConcat</code> function to concatenate <code>attach</code> to the end of <code>original</code>. The function should return the concatenated array.
</section>

## Tests
<section id='tests'>

```yml
- text: Your code should use the <code>concat</code> method.
  testString: 'assert(code.match(/\.concat/g), ''Your code should use the <code>concat</code> method.'');'
- text: The <code>first</code> array should not change.
  testString: 'assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]), ''The <code>first</code> array should not change.'');'
- text: The <code>second</code> array should not change.
  testString: 'assert(JSON.stringify(second) === JSON.stringify([4, 5]), ''The <code>second</code> array should not change.'');'
- text: '<code>nonMutatingConcat([1, 2, 3], [4, 5])</code> should return <code>[1, 2, 3, 4, 5]</code>.'
  testString: 'assert(JSON.stringify(nonMutatingConcat([1, 2, 3], [4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), ''<code>nonMutatingConcat([1, 2, 3], [4, 5])</code> should return <code>[1, 2, 3, 4, 5]</code>.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingConcat(original, attach) {
  // Add your code below this line
  
  
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
