---
id: 587d7b88367417b2b2512b44
title: Write Arrow Functions with Parameters
challengeType: 1
---

## Description
<section id='description'>
Just like a normal function, you can pass arguments into arrow functions.
<blockquote>// doubles input value and returns it<br>const doubler = (item) => item * 2;</blockquote>
You can pass more than one argument into arrow functions as well.
</section>

## Instructions
<section id='instructions'>
Rewrite the <code>myConcat</code> function which appends contents of <code>arr2</code> to <code>arr1</code> so that the function uses arrow function syntax.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: User did replace <code>var</code> keyword.
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g), "User did replace <code>var</code> keyword.");'
  - text: <code>myConcat</code> should be a constant variable (by using <code>const</code>).
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+myConcat/g), "<code>myConcat</code> should be a constant variable (by using <code>const</code>).");'
  - text: <code>myConcat</code> should be a function
    testString: 'assert(typeof myConcat === "function", "<code>myConcat</code> should be a function");'
  - text: <code>myConcat()</code> returns the correct <code>array</code>
    testString: 'assert(() => { const a = myConcat([1], [2]); return a[0] == 1 && a[1] == 2; }, "<code>myConcat()</code> returns the correct <code>array</code>");'
  - text: <code>function</code> keyword was not used.
    testString: 'getUserInput => assert(!getUserInput("index").match(/function/g), "<code>function</code> keyword was not used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
