---
id: 5900f39c1000cf542c50feae
title: 'Problema 47: Fatores primos distintos'
challengeType: 5
forumTopicId: 302145
dashedName: problem-47-distinct-primes-factors
---

# --description--

Os dois primeiros números consecutivos a terem dois fatores primos distintos são:

<div style='padding-left: 4em;'>
  14 = 2 × 7<br>
  15 = 3 × 5
</div>

Os três primeiros números consecutivos a ter três fatores primos distintos são:

<div style='padding-left: 4em;'>
  644 = 2<sup>2</sup> × 7 × 23<br>
  645 = 3 × 5 × 43<br>
  646 = 2 × 17 × 19
</div>

Encontre os primeiros quatro números inteiros consecutivos que têm quatro fatores primos distintos. Qual é o primeiro desses números?

# --hints--

`distinctPrimeFactors(2, 2)` deve retornar um número.

```js
assert(typeof distinctPrimeFactors(2, 2) === 'number');
```

`distinctPrimeFactors(2, 2)` deve retornar 14.

```js
assert.strictEqual(distinctPrimeFactors(2, 2), 14);
```

`distinctPrimeFactors(3, 3)` deve retornar 644.

```js
assert.strictEqual(distinctPrimeFactors(3, 3), 644);
```

`distinctPrimeFactors(4, 4)` deve retornar 134043.

```js
assert.strictEqual(distinctPrimeFactors(4, 4), 134043);
```

# --seed--

## --seed-contents--

```js
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {

  return true;
}

distinctPrimeFactors(4, 4);
```

# --solutions--

```js
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  function numberOfPrimeFactors(n) {
    let factors = 0;

    //  Considering 2 as a special case
    let firstFactor = true;
    while (n % 2 == 0) {
      n = n / 2;
      if (firstFactor) {
        factors++;
        firstFactor = false;
      }
    }
    // Adding other factors
    for (let i = 3; i < Math.sqrt(n); i += 2) {
      firstFactor = true;
      while (n % i == 0) {
        n = n / i;
        if (firstFactor) {
          factors++;
          firstFactor = false;
        }
      }
    }

    if (n > 1) { factors++; }

    return factors;
  }

  let number = 0;
  let consecutive = 0;

  while (consecutive < targetConsecutive) {
    number++;
    if (numberOfPrimeFactors(number) >= targetNumPrimes) {
      consecutive++;
    } else {
      consecutive = 0;
    }
  }
  return number - targetConsecutive + 1;
}
```
