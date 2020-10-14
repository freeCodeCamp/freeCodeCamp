---
id: 587d7b87367417b2b2512b42
title: Mutate an Array Declared with const
challengeType: 1
forumTopicId: 301206
---

## Description
<section id='description'>
The <code>const</code> declaration has many use cases in modern JavaScript.
Some developers prefer to assign all their variables using <code>const</code> by default, unless they know they will need to reassign the value. Only in that case, they use <code>let</code>.
However, it is important to understand that objects (including arrays and functions) assigned to a variable using <code>const</code> are still mutable. Using the <code>const</code> declaration only prevents reassignment of the variable identifier.

```js
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```

As you can see, you can mutate the object <code>[5, 6, 7]</code> itself and the variable <code>s</code> will still point to the altered array <code>[5, 6, 45]</code>. Like all arrays, the array elements in <code>s</code> are mutable, but because <code>const</code> was used, you cannot use the variable identifier <code>s</code> to point to a different array using the assignment operator.
</section>

## Instructions
<section id='instructions'>
An array is declared as <code>const s = [5, 7, 2]</code>. Change the array to <code>[2, 5, 7]</code> using various element assignments.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should not replace <code>const</code> keyword.
    testString: getUserInput => assert(getUserInput('index').match(/const/g));
  - text: <code>s</code> should be a constant variable (by using <code>const</code>).
    testString: getUserInput => assert(getUserInput('index').match(/const\s+s/g));
  - text: You should not change the original array declaration.
    testString: getUserInput => assert(getUserInput('index').match(/const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g));
  - text: <code>s</code> should be equal to <code>[2, 5, 7]</code>.
    testString: assert.deepEqual(s, [2, 5, 7]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
```

</div>



</section>

## Solution
<section id='solution'>

```js
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```

</section>
