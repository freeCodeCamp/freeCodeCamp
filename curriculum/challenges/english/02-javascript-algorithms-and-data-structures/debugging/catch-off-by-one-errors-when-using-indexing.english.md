---
id: 587d7b86367417b2b2512b3b
title: Catch Off By One Errors When Using Indexing
challengeType: 1
---

## Description
<section id='description'>
<code>Off by one errors</code> (sometimes called OBOE) crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. JavaScript indexing starts at zero, not one, which means the last index is always one less than the length of the item. If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print <code>undefined</code>.
When you use string or array methods that take index ranges as arguments, it helps to read the documentation and understand if they are inclusive (the item at the given index is part of what's returned) or not. Here are some examples of off by one errors:
<blockquote>let alphabet = "abcdefghijklmnopqrstuvwxyz";<br>let len = alphabet.length;<br>for (let i = 0; i <= len; i++) {<br>&nbsp;&nbsp;// loops one too many times at the end<br>&nbsp;&nbsp;console.log(alphabet[i]);<br>}<br>for (let j = 1; j < len; j++) {<br>&nbsp;&nbsp;// loops one too few times and misses the first character at index 0<br>&nbsp;&nbsp;console.log(alphabet[j]);<br>}<br>for (let k = 0; k < len; k++) {<br>&nbsp;&nbsp;// Goldilocks approves - this is just right<br>&nbsp;&nbsp;console.log(alphabet[k]);<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should set the initial condition of the loop so it starts at the first index.
    testString: 'assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1, ''Your code should set the initial condition of the loop so it starts at the first index.'');'
  - text: Your code should fix the initial condition of the loop so that the index starts at 0.
    testString: 'assert(!code.match(/i\s?=\s*?1\s*?;/g), ''Your code should fix the initial condition of the loop so that the index starts at 0.'');'
  - text: Your code should set the terminal condition of the loop so it stops at the last index.
    testString: 'assert(code.match(/i\s*?<\s*?len\s*?;/g).length == 1, ''Your code should set the terminal condition of the loop so it stops at the last index.'');'
  - text: Your code should fix the terminal condition of the loop so that it stops at 1 before the length.
    testString: 'assert(!code.match(/i\s*?<=\s*?len;/g), ''Your code should fix the terminal condition of the loop so that it stops at 1 before the length.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Fix the line below
  for (let i = 1; i <= len; i++) {
  // Do not alter code below this line
    console.log(firstFive[i]);
  }
}

countToFive();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
