---
id: 5900f39d1000cf542c50feb0
title: 'Problema 49: permutazioni di numeri primi'
challengeType: 1
forumTopicId: 302159
dashedName: problem-49-prime-permutations
---

# --description--

La sequenza aritmetica, 1487, 4817, 8147, in cui ognuno dei termini cresce di 3330, è inusuale in due modi: (i) i tre termini sono primi, e, (ii) i tre numeri sono permutazioni.

Non ci sono sequenze aritmetiche fatte di numeri primi a 1, 2 o 3 cifre che esibiscono questa proprietà, ma ce ne è un'altra sequenza crescente a 4 cifre.

Quale numero a 12 cifre ottieni concatenando i tre termini di questa sequenza?

# --hints--

`primePermutations()` dovrebbe restituire un numero.

```js
assert(typeof primePermutations() === 'number');
```

`primePermutations()` dovrebbe restituire 296962999629.

```js
assert.strictEqual(primePermutations(), 296962999629);
```

# --seed--

## --seed-contents--

```js
function primePermutations() {

  return true;
}

primePermutations();
```

# --solutions--

```js
function primePermutations() {
  function arePermutations(num1, num2) {
    const numStr1 = num1.toString();
    let numStr2 = num2.toString();
    if (numStr1.length !== numStr2.length) {
      return false;
    }

    for (let i = 0; i < numStr1.length; i++) {
      const index = numStr2.indexOf(numStr1[i]);
      if (index === -1) {
        return false;
      }
      numStr2 = numStr2.slice(0, index) + numStr2.slice(index + 1);
    }
    return true;
  }

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

  for (let num1 = 1000; num1 <= 9999; num1++) {
    const num2 = num1 + 3330;
    const num3 = num2 + 3330;
    if (isPrime(num1) && isPrime(num2) && isPrime(num3)) {
      if (arePermutations(num1, num2) && arePermutations(num1, num3)
        && num1 !== 1487) {
        // concatenate and return numbers
        return (num1 * 100000000) + (num2 * 10000) + num3;
      }
    }
  }
  return 0;
}
```
