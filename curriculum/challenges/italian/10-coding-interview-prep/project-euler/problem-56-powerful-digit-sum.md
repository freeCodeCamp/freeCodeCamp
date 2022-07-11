---
id: 5900f3a41000cf542c50feb7
title: 'Problema 56: Somma delle cifre della potenza'
challengeType: 1
forumTopicId: 302167
dashedName: problem-56-powerful-digit-sum
---

# --description--

Un googol ($10^{100}$) è un numero massivo: uno seguito da cento zeri; $100^{100}$ è un numero inimmaginabilmente grande: uno seguito da duecento zeri. Nonostante la loro dimensione, la somma delle cifre in ogni numero è solo 1.

Considerando numeri naturali nella forma, $a^b$, dove `a`, `b` &lt; `n`, qual è la somma massima delle cifre?

# --hints--

`powerfulDigitSum(3)` dovrebbe restituire un numero.

```js
assert(typeof powerfulDigitSum(3) === 'number');
```

`powerfulDigitSum(3)` dovrebbe restituire `4`.

```js
assert.strictEqual(powerfulDigitSum(3), 4);
```

`powerfulDigitSum(10)` dovrebbe restituire `45`.

```js
assert.strictEqual(powerfulDigitSum(10), 45);
```

`powerfulDigitSum(50)` dovrebbe restituire `406`.

```js
assert.strictEqual(powerfulDigitSum(50), 406);
```

`powerfulDigitSum(75)` dovrebbe restituire `684`.

```js
assert.strictEqual(powerfulDigitSum(75), 684);
```

`powerfulDigitSum(100)` dovrebbe restituire `972`.

```js
assert.strictEqual(powerfulDigitSum(100), 972);
```

# --seed--

## --seed-contents--

```js
function powerfulDigitSum(n) {

  return true;
}

powerfulDigitSum(3);
```

# --solutions--

```js
function powerfulDigitSum(n) {
  function sumDigitsOfPower(numA, numB) {
    let digitsSum = 0;
    let number = power(numA, numB);
    while (number > 0n) {
      const digit = number % 10n;
      digitsSum += parseInt(digit, 10);
      number = number / 10n;
    }
    return digitsSum;
  }

  function power(numA, numB) {
    let sum = 1n;
    for (let b = 0; b < numB; b++) {
      sum = sum * BigInt(numA);
    }
    return sum;
  }

  const limit = n - 1;
  let maxDigitsSum = 0;
  for (let a = limit; a > 0; a--) {
    for (let b = limit; b > 0; b--) {
      const curDigitSum = sumDigitsOfPower(a, b);
      if (curDigitSum > maxDigitsSum) {
        maxDigitsSum = curDigitSum;
      }
    }
  }
  return maxDigitsSum;
}
```
