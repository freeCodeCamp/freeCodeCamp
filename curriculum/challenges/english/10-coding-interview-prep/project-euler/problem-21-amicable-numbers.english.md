---
id: 5900f3811000cf542c50fe94
challengeType: 5
isHidden: false
title: 'Problem 21: Amicable numbers'
forumTopicId: 301851
---

## Description
<section id='description'>

Let d(<var>n</var>) be defined as the sum of proper divisors of <var>n</var> (numbers less than <var>n</var> which divide evenly into <var>n</var>).

If d(<var>a</var>) = <var>b</var> and d(<var>b</var>) = <var>a</var>, where <var>a</var> ≠ <var>b</var>, then <var>a</var> and <var>b</var> are an amicable pair and each of <var>a</var> and <var>b</var> are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under `n`.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumAmicableNum(1000)</code> should return a number.
    testString: assert(typeof sumAmicableNum(1000) === 'number');
  - text: <code>sumAmicableNum(1000)</code> should return 504.
    testString: assert.strictEqual(sumAmicableNum(1000), 504);
  - text: <code>sumAmicableNum(2000)</code> should return 2898.
    testString: assert.strictEqual(sumAmicableNum(2000), 2898);
  - text: <code>sumAmicableNum(5000)</code> should return 8442.
    testString: assert.strictEqual(sumAmicableNum(5000), 8442);
  - text: <code>sumAmicableNum(10000)</code> should return 31626.
    testString: assert.strictEqual(sumAmicableNum(10000), 31626);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumAmicableNum(n) {
  // Good luck!
  return n;
}

sumAmicableNum(10000);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const sumAmicableNum = (n) => {
  const fsum = (n) => {
    let sum = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
      if (Math.floor(n % i) === 0)
        sum += i + Math.floor(n / i);
    return sum;
  };
  let d = [];
  let amicableSum = 0;
  for (let i=2; i<n; i++) d[i] = fsum(i);
  for (let i=2; i<n; i++) {
    let dsum = d[i];
    if (d[dsum]===i && i!==dsum) amicableSum += i+dsum;
  }
  return amicableSum/2;
};
```

</section>
