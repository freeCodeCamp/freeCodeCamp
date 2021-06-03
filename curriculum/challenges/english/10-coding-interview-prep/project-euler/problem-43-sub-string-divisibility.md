---
id: 5900f3971000cf542c50feaa
title: 'Problem 43: Sub-string divisibility'
challengeType: 5
forumTopicId: 302100
dashedName: problem-43-sub-string-divisibility
---

# --description--

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d<sub>1</sub> be the 1<sup>st</sup> digit, d<sub>2</sub> be the 2<sup>nd</sup> digit, and so on. In this way, we note the following:

<ul>
  <li>d<sub>2</sub>d<sub>3</sub>d<sub>4</sub> = 406 is divisible by 2</li>
  <li>d<sub>3</sub>d<sub>4</sub>d<sub>5</sub> = 063 is divisible by 3</li>
  <li>d<sub>4</sub>d<sub>5</sub>d<sub>6</sub> = 635 is divisible by 5</li>
  <li>d<sub>5</sub>d<sub>6</sub>d<sub>7</sub> = 357 is divisible by 7</li>
  <li>d<sub>6</sub>d<sub>7</sub>d<sub>8</sub> = 572 is divisible by 11</li>
  <li>d<sub>7</sub>d<sub>8</sub>d<sub>9</sub> = 728 is divisible by 13</li>
  <li>d<sub>8</sub>d<sub>9</sub>d<sub>10</sub> = 289 is divisible by 17</li>
</ul>

Find sum of the all 0 to `n` pandigital numbers with sub-strings fulfilling `n - 2` of these divisibility properties.

**Note:** Pandigital numbers starting with `0` are to be considered in the result.

# --hints--

`substringDivisibility(5)` should return a number.

```js
assert(typeof substringDivisibility(5) === 'number');
```

`substringDivisibility(5)` should return `12444480`.

```js
assert.strictEqual(substringDivisibility(5), 12444480)
```

`substringDivisibility(7)` should return `1099210170`.

```js
assert.strictEqual(substringDivisibility(7), 1099210170)
```

`substringDivisibility(8)` should return `1113342912`.

```js
assert.strictEqual(substringDivisibility(8), 1113342912)
```

`substringDivisibility(9)` should return `16695334890`.

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
  function isSubDivisable(digits) {
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
  const divisablePandigitals = [];
  heapsPermutations(
    allowedDigits.length,
    allowedDigits,
    isSubDivisable,
    divisablePandigitals
  );

  let sum = 0;
  for (let i = 0; i < divisablePandigitals.length; i++) {
    sum += divisablePandigitals[i];
  }

  return sum;
}
```
