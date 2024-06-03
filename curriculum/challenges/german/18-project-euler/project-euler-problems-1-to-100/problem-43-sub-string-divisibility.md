---
id: 5900f3971000cf542c50feaa
title: 'Problem 43: Sub-string divisibility'
challengeType: 1
forumTopicId: 302100
dashedName: problem-43-sub-string-divisibility
---

# --description--

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Sei $d_1$ die $1^{st}$-Ziffer, $d_2$ die $2^{nd}$-Ziffer, und so weiter. Auf diese Weise können wir Folgendes feststellen:

- ${d_2}{d_3}{d_4} = 406$ ist durch 2 teilbar
- ${d_3}{d_4}{d_5} = 063$ ist durch 3 teilbar
- ${d_4}{d_5}{d_6} = 635$ ist durch 5 teilbar
- ${d_5}{d_6}{d_7} = 357$ ist durch 7 teilbar
- ${d_6}{d_7}{d_8} = 572$ ist durch 11 teilbar
- ${d_7}{d_8}{d_9} = 728$ ist durch 13 teilbar
- ${d_8}{d_9}{d_{10}} = 289$ ist durch 17 teilbar

Finde die Summe aller 0 bis `n` pandigitalen Zahlen, deren Sub-Strings `n - 2` dieser Teilbarkeitseigenschaften erfüllen.

**Hinweis:** Pandigitale Zahlen, die mit `0` beginnen, sind im Ergebnis zu berücksichtigen.

# --hints--

`substringDivisibility(5)` sollte eine Zahl zurückgeben.

```js
assert(typeof substringDivisibility(5) === 'number');
```

`substringDivisibility(5)` sollte `12444480` zurückgeben.

```js
assert.strictEqual(substringDivisibility(5), 12444480)
```

`substringDivisibility(7)` sollte `1099210170` zurückgeben.

```js
assert.strictEqual(substringDivisibility(7), 1099210170)
```

`substringDivisibility(8)` sollte `1113342912` zurückgeben.

```js
assert.strictEqual(substringDivisibility(8), 1113342912)
```

`substringDivisibility(9)` sollte `16695334890` zurückgeben.

```js
assert.strictEqual(substringDivisibility(9), 16695334890)
```

# --seed--

## --seed-contents--

```js
function substringDivisibility(n) {

  return true;
}

substringDivisibility(5);
```

# --solutions--

```js
function substringDivisibility(n) {
  function isSubDivisible(digits) {
    const factors = [2, 3, 5, 7, 11, 13, 17];

    for (let i = 1; i < digits.length - 2; i++) {
      const subNumber = digits[i] * 100 + digits[i + 1] * 10 + digits[i + 2];
      if (subNumber % factors[i - 1] !== 0) {
        return false;
      }
    }
    return true;
  }

  function heapsPermutations(k, digits, conditionCheck, results) {
    if (k === 1) {
      if (conditionCheck(digits)) {
        const number = parseInt(digits.join(''), 10);
        results.push(number);
      }
      return;
    }

    heapsPermutations(k - 1, digits, conditionCheck, results);

    for (let i = 0; i < k - 1; i++) {
      if (k % 2 === 0) {
        [digits[i], digits[k - 1]] = [digits[k - 1], digits[i]];
      } else {
        [digits[0], digits[k - 1]] = [digits[k - 1], digits[0]];
      }
      heapsPermutations(k - 1, digits, conditionCheck, results);
    }
    return;
  }

  const allowedDigits = [...new Array(n + 1).keys()];
  const divisiblePandigitals = [];
  heapsPermutations(
    allowedDigits.length,
    allowedDigits,
    isSubDivisible,
    divisiblePandigitals
  );

  let sum = 0;
  for (let i = 0; i < divisiblePandigitals.length; i++) {
    sum += divisiblePandigitals[i];
  }

  return sum;
}
```
