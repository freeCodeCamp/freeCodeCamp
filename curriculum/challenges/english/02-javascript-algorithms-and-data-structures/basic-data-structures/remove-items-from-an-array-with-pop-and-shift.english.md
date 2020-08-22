---
id: 587d78b2367417b2b2512b0f
title: Remove Items from an Array with pop() and shift()
challengeType: 1
isHidden: false
forumTopicId: 301165
---

## Description
<section id='description'>
Both <code>push()</code> and <code>unshift()</code> have corresponding methods that are nearly functional opposites: <code>pop()</code> and <code>shift()</code>. As you may have guessed by now, instead of adding, <code>pop()</code> <em>removes</em> an element from the end of an array, while <code>shift()</code> removes an element from the beginning. The key difference between <code>pop()</code> and <code>shift()</code> and their cousins <code>push()</code> and <code>unshift()</code>, is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.
Let's take a look:

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']
```

We can also return the value of the removed element with either method like this:

```js
let popped = greetings.pop();
// returns 'hello'
// greetings now equals []
```

</section>

## Instructions
<section id='instructions'>
We have defined a function, <code>popShift</code>, which takes an array as an argument and returns a new array. Modify the function, using <code>pop()</code> and <code>shift()</code>, to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>popShift(["challenge", "is", "not", "complete"])</code> should return <code>["challenge", "complete"]</code>
    testString: assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), ["challenge", "complete"]);
  - text: The <code>popShift</code> function should utilize the <code>pop()</code> method
    testString: assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
  - text: The <code>popShift</code> function should utilize the <code>shift()</code> method
    testString: assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

</div>



</section>

## Solution
<section id='solution'>

```js
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}
```

</section>
