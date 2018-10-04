---
id: 587d7b7e367417b2b2512b24
title: Use the Conditional (Ternary) Operator
challengeType: 1
---

## Description
<section id='description'>
The <dfn>conditional operator</dfn>, also called the <dfn>ternary operator</dfn>, can be used as a one line if-else expression.
The syntax is:
<code>condition ? statement-if-true : statement-if-false;</code>
The following function uses an if-else statement to check a condition:
<blockquote>function findGreater(a, b) {<br>&nbsp;&nbsp;if(a > b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "a is greater";<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "b is greater";<br>&nbsp;&nbsp;}<br>}</blockquote>
This can be re-written using the <code>conditional operator</code>:
<blockquote>function findGreater(a, b) {<br>&nbsp;&nbsp;return a > b ? "a is greater" : "b is greater";<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Use the <code>conditional operator</code> in the <code>checkEqual</code> function to check if two numbers are equal or not. The function should return either true or false.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkEqual</code> should use the <code>conditional operator</code>
    testString: 'assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code), ''<code>checkEqual</code> should use the <code>conditional operator</code>'');'
  - text: '<code>checkEqual(1, 2)</code> should return false'
    testString: 'assert(checkEqual(1, 2) === false, ''<code>checkEqual(1, 2)</code> should return false'');'
  - text: '<code>checkEqual(1, 1)</code> should return true'
    testString: 'assert(checkEqual(1, 1) === true, ''<code>checkEqual(1, 1)</code> should return true'');'
  - text: '<code>checkEqual(1, -1)</code> should return false'
    testString: 'assert(checkEqual(1, -1) === false, ''<code>checkEqual(1, -1)</code> should return false'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkEqual(a, b) {
  
}

checkEqual(1, 2);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
