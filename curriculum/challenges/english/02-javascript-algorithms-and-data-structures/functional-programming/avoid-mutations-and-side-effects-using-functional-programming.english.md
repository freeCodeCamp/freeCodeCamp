---
id: 587d7b8e367417b2b2512b5e
title: Avoid Mutations and Side Effects Using Functional Programming
challengeType: 1
---

## Description
<section id='description'>
If you haven't already figured it out, the issue in the previous challenge was with the <code>splice</code> call in the <code>tabClose()</code> function. Unfortunately, <code>splice</code> changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.
This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.
One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.
The previous example didn't have any complicated operations but the <code>splice</code> method changed the original array, and resulted in a bug.
Recall that in functional programming, changing or altering things is called <code>mutation</code>, and the outcome is called a <code>side effect</code>. A function, ideally, should be a <code>pure function</code>, meaning that it does not cause any side effects.
Let's try to master this discipline and not alter any variable or object in our code.
</section>

## Instructions
<section id='instructions'>
Fill in the code for the function <code>incrementer</code> so it returns the value of the global variable <code>fixedValue</code> increased by one.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your function <code>incrementer</code> should not change the value of <code>fixedValue</code>.
    testString: assert(fixedValue === 4, 'Your function <code>incrementer</code> should not change the value of <code>fixedValue</code>.');
  - text: Your <code>incrementer</code> function should return a value that is one larger than the <code>fixedValue</code> value.
    testString: assert(newValue === 5, 'Your <code>incrementer</code> function should return a value that is one larger than the <code>fixedValue</code> value.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line


  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
```

</div>



</section>

## Solution
<section id='solution'>

```js
var fixedValue = 4

function incrementer() {
  return fixedValue + 1
}

var newValue = incrementer(); // Should equal 5
```
</section>
