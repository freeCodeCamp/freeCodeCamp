---
id: 587d7b7e367417b2b2512b21
title: Use Multiple Conditional (Ternary) Operators
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJBT4'
---

## Description
<section id='description'>
In the previous challenge, you used a single <code>conditional operator</code>. You can also chain them together to check for multiple conditions.
The following function uses if, else if, and else statements to check multiple conditions:
<blockquote>function findGreaterOrEqual(a, b) {<br>&nbsp;&nbsp;if (a === b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "a and b are equal";<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;else if (a > b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "a is greater";<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "b is greater";<br>&nbsp;&nbsp;}<br>}</blockquote>
The above function can be re-written using multiple <code>conditional operators</code>:
<blockquote>function findGreaterOrEqual(a, b) {<br>&nbsp;&nbsp;return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Use multiple <code>conditional operators</code> in the <code>checkSign</code> function to check if a number is positive, negative or zero.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkSign</code> should use multiple <code>conditional operators</code>
    testString: assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code), '<code>checkSign</code> should use multiple <code>conditional operators</code>');
  - text: <code>checkSign(10)</code> should return "positive". Note that capitalization matters
    testString: assert(checkSign(10) === 'positive', '<code>checkSign(10)</code> should return "positive". Note that capitalization matters');
  - text: <code>checkSign(-12)</code> should return "negative". Note that capitalization matters
    testString: assert(checkSign(-12) === 'negative', '<code>checkSign(-12)</code> should return "negative". Note that capitalization matters');
  - text: <code>checkSign(0)</code> should return "zero". Note that capitalization matters
    testString: assert(checkSign(0) === 'zero', '<code>checkSign(0)</code> should return "zero". Note that capitalization matters');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSign(num) {

}

checkSign(10);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function checkSign(num) {
  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}
```
</section>
