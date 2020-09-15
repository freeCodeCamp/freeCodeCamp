---
id: 5900f3711000cf542c50fe84
challengeType: 5
title: 'Problem 5: Smallest multiple'
forumTopicId: 302160
---

## Description
<section id='description'>

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to `n`?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>smallestMult(5)</code> should return a number.
    testString: assert(typeof smallestMult(5) === 'number');
  - text: <code>smallestMult(5)</code> should return 60.
    testString: assert.strictEqual(smallestMult(5), 60);
  - text: <code>smallestMult(7)</code> should return 420.
    testString: assert.strictEqual(smallestMult(7), 420);
  - text: <code>smallestMult(10)</code> should return 2520.
    testString: assert.strictEqual(smallestMult(10), 2520);
  - text: <code>smallestMult(13)</code> should return 360360.
    testString: assert.strictEqual(smallestMult(13), 360360);
  - text: <code>smallestMult(20)</code> should return 232792560.
    testString: assert.strictEqual(smallestMult(20), 232792560);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function smallestMult(n) {

  return true;
}

smallestMult(20);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function smallestMult(n){
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a%b); // Euclidean algorithm
  }

  function lcm(a, b) {
    return a * b / gcd(a, b);
  }
  var result = 1;
  for(var i = 2; i <= n; i++) {
    result = lcm(result, i);
  }
  return result;
}
```

</section>
