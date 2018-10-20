---
id: 587d7b87367417b2b2512b41
title: Declare a Read-Only Variable with the const Keyword
challengeType: 1
---

## Description
<section id='description'>
<code>let</code> is not the only new way to declare variables. In ES6, you can also declare variables using the <code>const</code> keyword.
<code>const</code> has all the awesome features that <code>let</code> has, with the added bonus that variables declared using <code>const</code> are read-only. They are a constant value, which means that once a variable is assigned with <code>const</code>, it cannot be reassigned.
<blockquote>"use strict"<br>const FAV_PET = "Cats";<br>FAV_PET = "Dogs"; // returns error</blockquote>
As you can see, trying to reassign a variable declared with <code>const</code> will throw an error. You should always name variables you don't want to reassign using the <code>const</code> keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.
</section>

## Instructions
<section id='instructions'>
Change the code so that all variables are declared using <code>let</code> or <code>const</code>. Use <code>let</code> when you want the variable to change, and <code>const</code> when you want the variable to remain constant. Also, rename variables declared with <code>const</code> to conform to common practices, meaning constants should be in all caps.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code> does not exist in your code.
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g),"<code>var</code> does not exist in your code.");'
  - text: <code>SENTENCE</code> should be a constant variable declared with <code>const</code>.
    testString: 'getUserInput => assert(getUserInput("index").match(/(const SENTENCE)/g), "<code>SENTENCE</code> should be a constant variable declared with <code>const</code>.");'
  - text: <code>i</code> should be declared with <code>let</code>.
    testString: 'getUserInput => assert(getUserInput("index").match(/(let i)/g), "<code>i</code> should be declared with <code>let</code>.");'
  - text: <code>console.log</code> should be changed to print the <code>SENTENCE</code> variable.
    testString: 'getUserInput => assert(getUserInput("index").match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g), "<code>console.log</code> should be adjusted to print the variable <code>SENTENCE</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function printManyTimes(str) {
  "use strict";

  // change code below this line

  var sentence = str + " is cool!";
  for(var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
```

</div>



</section>

## Solution
<section id='solution'>

```js
function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
```
</section>
