---
id: 587d7b87367417b2b2512b43
title: Use Arrow Functions to Write Concise Anonymous Functions
challengeType: 1
---

## Description
<section id='description'>
In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.
To achieve this, we often use the following syntax:
<blockquote>const myFunc = function() {<br>&nbsp;&nbsp;const myVar = "value";<br>&nbsp;&nbsp;return myVar;<br>}</blockquote>
ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use <strong>arrow function syntax</strong>:
<blockquote>const myFunc = () => {<br>&nbsp;&nbsp;const myVar = "value";<br>&nbsp;&nbsp;return myVar;<br>}</blockquote>
When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword <code>return</code> as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:
<blockquote>const myFunc = () => "value"</blockquote>
This code will still return <code>value</code> by default.
</section>

## Instructions
<section id='instructions'>
Rewrite the function assigned to the variable <code>magic</code> which returns a new <code>Date()</code> to use arrow function syntax. Also make sure nothing is defined using the keyword <code>var</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: User did replace <code>var</code> keyword.
    testString: 'getUserInput => assert(!getUserInput(''index'').match(/var/g), ''User did replace <code>var</code> keyword.'');'
  - text: <code>magic</code> should be a constant variable (by using <code>const</code>).
    testString: 'getUserInput => assert(getUserInput(''index'').match(/const\s+magic/g), ''<code>magic</code> should be a constant variable (by using <code>const</code>).'');'
  - text: <code>magic</code> is a <code>function</code>.
    testString: 'assert(typeof magic === ''function'', ''<code>magic</code> is a <code>function</code>.'');'
  - text: <code>magic()</code> returns correct date.
    testString: 'assert(magic().getDate() == new Date().getDate(), ''<code>magic()</code> returns correct date.'');'
  - text: <code>function</code> keyword was not used.
    testString: 'getUserInput => assert(!getUserInput(''index'').match(/function/g), ''<code>function</code> keyword was not used.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var magic = function() {
  "use strict";
  return new Date();
};
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
