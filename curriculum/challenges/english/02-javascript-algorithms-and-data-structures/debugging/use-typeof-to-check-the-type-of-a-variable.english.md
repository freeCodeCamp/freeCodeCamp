---
id: 587d7b84367417b2b2512b34
title: Use typeof to Check the Type of a Variable
challengeType: 1
forumTopicId: 18374
---

## Description
<section id='description'>
You can use <code>typeof</code> to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.
Here are some examples using <code>typeof</code>:

```js
console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object"
```

JavaScript recognizes six primitive (immutable) data types: <code>Boolean</code>, <code>Null</code>, <code>Undefined</code>, <code>Number</code>, <code>String</code>, and <code>Symbol</code> (new with ES6) and one type for mutable items: <code>Object</code>. Note that in JavaScript, arrays are technically a type of object.
</section>

## Instructions
<section id='instructions'>
Add two <code>console.log()</code> statements to check the <code>typeof</code> each of the two variables <code>seven</code> and <code>three</code> in the code.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use <code>typeof</code> in two <code>console.log()</code> statements to check the type of the variables.
    testString: assert(code.match(/console\.log\(typeof[\( ].*\)?\)/g).length == 2);
  - text: Your code should use <code>typeof</code> to check the type of the variable <code>seven</code>.
    testString: assert(code.match(/typeof[\( ]seven\)?/g));
  - text: Your code should use <code>typeof</code> to check the type of the variable <code>three</code>.
    testString: assert(code.match(/typeof[\( ]three\)?/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line

```

</div>



</section>

## Solution
<section id='solution'>


```js
let seven = 7;let three = "3";console.log(typeof seven);
console.log(typeof three);
```

</section>
