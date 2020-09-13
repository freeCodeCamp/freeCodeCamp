---
id: 587d7b7e367417b2b2512b24
title: Use the Conditional (Ternary) Operator
challengeType: 1
forumTopicId: 301181
---

## Description
<section id='description'>
The <dfn>conditional operator</dfn>, also called the <dfn>ternary operator</dfn>, can be used as a one line if-else expression.
The syntax is:
<code>condition ? expression-if-true : expression-if-false;</code>
The following function uses an if-else statement to check a condition:

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

This can be re-written using the <code>conditional operator</code>:

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
```

</section>

## Instructions
<section id='instructions'>
Use the <code>conditional operator</code> in the <code>checkEqual</code> function to check if two numbers are equal or not. The function should return either "Equal" or "Not Equal".
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkEqual</code> should use the <code>conditional operator</code>
    testString: assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
  - text: <code>checkEqual(1, 2)</code> should return "Not Equal"
    testString: assert(checkEqual(1, 2) === "Not Equal");
  - text: <code>checkEqual(1, 1)</code> should return "Equal"
    testString: assert(checkEqual(1, 1) === "Equal");
  - text: <code>checkEqual(1, -1)</code> should return "Not Equal"
    testString: assert(checkEqual(1, -1) === "Not Equal");
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
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```

</section>
