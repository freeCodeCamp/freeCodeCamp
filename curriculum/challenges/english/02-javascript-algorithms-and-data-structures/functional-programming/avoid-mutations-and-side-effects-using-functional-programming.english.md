---
id: 587d7b8e367417b2b2512b5e
title: Avoid Mutations and Side Effects Using Functional Programming
challengeType: 1
isHidden: false
forumTopicId: 301228
---

## Description
<section id='description'>
If you haven't already figured it out, the issue in the previous challenge was with the <code>splice</code> call in the <code>tabClose()</code> function. Unfortunately, <code>splice</code> changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.
This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.
One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.
The previous example didn't have any complicated operations but the <code>splice</code> method changed the original array, and resulted in a bug.
Recall that in functional programming, changing or altering things is called <dfn>mutation</dfn>, and the outcome is called a <dfn>side effect</dfn>. A function, ideally, should be a <dfn>pure function</dfn>, meaning that it does not cause any side effects.
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
  - text: Your function <code>incrementer</code> should not change the value of <code>fixedValue</code> (which is <code>4</code>).
    testString: incrementer(); assert(fixedValue === 4);
  - text: Your <code>incrementer</code> function should return a value that is one larger than the <code>fixedValue</code> value.
    testString: const __newValue = incrementer(); assert(__newValue === 5);
  - text: Your <code>incrementer</code> function should return a value based on the global `fixedValue` variable value.
    testString: |
      (function() {
       fixedValue = 10;
       const newValue = incrementer();
       assert(fixedValue === 10 && newValue === 11);
       fixedValue = 4;
      })();

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line


  // Only change code above this line
}
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
```

</section>
