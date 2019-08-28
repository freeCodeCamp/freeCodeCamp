---
id: 5900f39a1000cf542c50fead
challengeType: 5
title: 'Problem 46: Goldbach''s other conjecture'
forumTopicId: 302134
localeTitle: 'Задача 46: другая гипотеза Голдбаха'
---

## Description
<section id='description'>
Христианом Гольдбахом было предложено, что каждое нечетное составное число может быть записано как сумма простого и дважды квадрата. 9 = 7 + 2 × 1 <sup>2</sup> 15 = 7 + 2 × 2 <sup>2</sup> 21 = 3 + 2 × 3 <sup>2</sup> 25 = 7 + 2 × 3 <sup>2</sup> 27 = 19 + 2 × 2 <sup>2</sup> 33 = 31 + 2 × 1 <sup>2</sup> что гипотеза была ложной. Каков самый маленький нечетный композит, который не может быть записан как сумма простого и дважды квадрата?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>goldbachsOtherConjecture()</code> should return 5777.
    testString: assert.strictEqual(goldbachsOtherConjecture(), 5777);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function goldbachsOtherConjecture() {
  // Good luck!
  return true;
}

goldbachsOtherConjecture();

```

</div>

</section>

## Solution
<section id='solution'>

```js
function goldbachsOtherConjecture() {  function isPrime(num) {
    if (num < 2) {
      return false;
    } else if (num === 2) {
      return true;
    }
    const sqrtOfNum = Math.floor(num ** 0.5);
    for (let i = 2; i <= sqrtOfNum + 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function isSquare(num) {
    return Math.sqrt(num) % 1 === 0;
  }

  // construct a list of prime numbers
  const primes = [];
  for (let i = 2; primes.length < 1000; i++) {
    if (isPrime(i)) primes.push(i);
  }

  let num = 3;
  let answer;
  while (!answer) {
    num += 2;
    if (!isPrime(num)) {
      let found = false;
      for (let primeI = 0; primeI < primes.length && !found; primeI++) {
        const square = (num - primes[primeI]) / 2;
        if (isSquare(square)) {
          found = true;
          break;
        }
      }
      if (!found) answer = num;
    }
  }
  return answer;
}
```

</section>
