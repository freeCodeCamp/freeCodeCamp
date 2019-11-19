---
id: 5dd3e7f8b11794886cad0602
title: Reverse an Integer
isRequired: true
challengeType: 5
forumTopicId: 326821
---

## Description
<section id='description'>
Provided an integer, return the ordering of its number in reverse. 

Negative integers should remain negative.

Remember to use <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>reverseInt(234)</code> should return <code>432</code>.
    testString: assert(reverseInt(234) === 432);
  - text: <code>reverseInt(56)</code> should return <code>65</code>.
    testString: assert(reverseInt(56) === 65);
  - text: The <code>reverseInt(-4)</code> should remain the same <code>-4</code>.
    testString: assert(reverseInt(-4) === -4);
  - text: <code>reverseInt(23423543)</code> should return <code>34532432</code>.
    testString: assert(reverseInt(23423543) === 34532432);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function reverseInt(n) {
  return n;
}

reverseInt(12345);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function reverseInt(n) {
  const rev = n
  .toString()
  .split('')
  .reverse()
  .join('')
  return parseInt(rev) * Math.sign(n)
}

```

</section>
