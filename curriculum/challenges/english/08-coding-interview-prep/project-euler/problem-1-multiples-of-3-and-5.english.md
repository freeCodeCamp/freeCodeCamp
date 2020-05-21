---
id: 5900f36e1000cf542c50fe80
challengeType: 5
isHidden: false
title: 'Problem 1: Multiples of 3 and 5'
forumTopicId: 301722
---

## Description
<section id='description'>

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value `number`.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>multiplesOf3and5(10)</code> should return a number.
    testString: assert(typeof multiplesOf3and5(10) === 'number');
  - text: <code>multiplesOf3and5(49)</code> should return 543.
    testString: assert.strictEqual(multiplesOf3and5(49), 543);
  - text: <code>multiplesOf3and5(1000)</code> should return 233168.
    testString: assert.strictEqual(multiplesOf3and5(1000), 233168);
  - text: <code>multiplesOf3and5(8456)</code> should return 16687353.
    testString: assert.strictEqual(multiplesOf3and5(8456), 16687353);
  - text: <code>multiplesOf3and5(19564)</code> should return 89301183.
    testString: assert.strictEqual(multiplesOf3and5(19564), 89301183);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function multiplesOf3and5(number) {
  // Good luck!
  return true;
}

multiplesOf3and5(1000);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const multiplesOf3and5 = (number) => {
  var total = 0;

  for(var i = 0; i < number; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
      total += i;
    }
  }
  return total;
};
```

</section>
