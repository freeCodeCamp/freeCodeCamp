---
id: 5900f3c81000cf542c50fedb
challengeType: 5
isHidden: false
title: 'Problem 92: Square digit chains'
forumTopicId: 302209
---

## Description
<section id='description'>

A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.

For example,

<div style='margin-left: 4em;'>
  44 → 32 → 13 → 10 → <strong>1</strong> → <strong>1</strong><br>
  85 → <strong>89</strong> → 145 → 42 → 20 → 4 → 16 → 37 → 58 → <strong>89</strong>
</div>

Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

How many starting numbers below ten million will arrive at 89?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>squareDigitChains()</code> should return a number.
    testString: assert(typeof squareDigitChains() === 'number');
  - text: <code>squareDigitChains()</code> should return 8581146.
    testString: assert.strictEqual(squareDigitChains(), 8581146);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function squareDigitChains() {
  // Good luck!
  return true;
}

squareDigitChains();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
