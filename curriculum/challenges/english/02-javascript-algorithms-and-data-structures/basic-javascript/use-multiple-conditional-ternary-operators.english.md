---
id: 587d7b7e367417b2b2512b21
title: Use Multiple Conditional (Ternary) Operators
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cyWJBT4'
forumTopicId: 301179
---

## Description
<section id='description'>
In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.
The following function uses if, else if, and else statements to check multiple conditions:

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

The above function can be re-written using multiple conditional operators:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

</section>

## Instructions
<section id='instructions'>
In the <code>checkSign</code> function, use multiple conditional operators - following the recommended format used in <code>findGreaterOrEqual</code> - to check if a number is positive, negative or zero. The function should return <code>"positive"</code>, <code>"negative"</code> or <code>"zero"</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkSign</code> should use multiple conditional operators
    testString: assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code));
  - text: <code>checkSign(10)</code> should return "positive". Note that capitalization matters
    testString: assert(checkSign(10) === 'positive');
  - text: <code>checkSign(-12)</code> should return "negative". Note that capitalization matters
    testString: assert(checkSign(-12) === 'negative');
  - text: <code>checkSign(0)</code> should return "zero". Note that capitalization matters
    testString: assert(checkSign(0) === 'zero');

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
