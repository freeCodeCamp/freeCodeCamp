---
id: 5
localeTitle: 5900f39e1000cf542c50feb1
challengeType: 5
title: 'Problem 50: Consecutive prime sum'
---

## Description
<section id='description'> 
El primer 41, puede escribirse como la suma de seis primos consecutivos: 
41 = 2 + 3 + 5 + 7 + 11 + 13 
Esta es la suma más larga de primos consecutivos que se suma a un primo por debajo de cien. 
La suma más larga de números primos consecutivos por debajo de mil que se suma a un número primo, contiene 21 términos y es igual a 953. 
¿Qué número primo, por debajo de un millón, se puede escribir como la suma de los números primos más consecutivos? 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>consecutivePrimeSum(1000)</code> debe devolver 953.
    testString: 'assert.strictEqual(consecutivePrimeSum(1000), 953, "<code>consecutivePrimeSum(1000)</code> should return 953.");'
  - text: PrimeSum <code>consecutivePrimeSum(1000000)</code> debe devolver 997651.
    testString: 'assert.strictEqual(consecutivePrimeSum(1000000), 997651, "<code>consecutivePrimeSum(1000000)</code> should return 997651.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function consecutivePrimeSum(limit) {
  // Good luck!
  return true;
}

consecutivePrimeSum(1000000);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function consecutivePrimeSum(limit) {
  function isPrime(num) {
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
  function getPrimes(limit) {
    const primes = [];
    for (let i = 0; i <= limit; i++) {
      if (isPrime(i)) primes.push(i);
    }
    return primes;
  }

  const primes = getPrimes(limit);
  let primeSum = [...primes];
  primeSum.reduce((acc, n, i) => {
    primeSum[i] += acc;
    return acc += n;
  }, 0);

  for (let j = primeSum.length - 1; j >= 0; j--) {
    for (let i = 0; i < j; i++) {
      const sum = primeSum[j] - primeSum[i];
      if (sum > limit) break;
      if (isPrime(sum) && primes.indexOf(sum) > -1) return sum;
    }
  }
}
```

</section>
