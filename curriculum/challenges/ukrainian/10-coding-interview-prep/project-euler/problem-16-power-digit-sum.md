---
id: 5900f37d1000cf542c50fe8f
title: 'Завдання 16: Сума цифр степеня'
challengeType: 1
forumTopicId: 301791
dashedName: problem-16-power-digit-sum
---

# --description--

2<sup>15</sup> = 32768, а сума цифр цього числа дорівнює 3 + 2 + 7 + 6 + 8 = 26.

Яка сума цифр числа 2<sup><code>exponent</code></sup>?

# --hints--

`powerDigitSum(15)` має повернути число.

```js
assert(typeof powerDigitSum(15) === 'number');
```

`powerDigitSum(15)` має повернути число 26.

```js
assert.strictEqual(powerDigitSum(15), 26);
```

`powerDigitSum(128)` має повернути число 166.

```js
assert.strictEqual(powerDigitSum(128), 166);
```

`powerDigitSum(1000)` має повернути число 1366.

```js
assert.strictEqual(powerDigitSum(1000), 1366);
```

# --seed--

## --seed-contents--

```js
function powerDigitSum(exponent) {

  return true;
}

powerDigitSum(15);
```

# --solutions--

```js
function powerDigitSum(exponent) {
  const bigNum = [1];
  let sum = 0;

  for (let i = 1; i <= exponent; i++) {
    let count = bigNum.length + 1;
    let overflow = 0;
    for (let j = 0; j < count; j++) {
      let digit = bigNum[j] || 0;
      digit = 2 * digit + overflow;

      if (digit > 9) {
        digit -= 10;
        overflow = 1;
      } else {
        overflow = 0;
      }

      bigNum[j] = digit;
    }
  }

  bigNum.forEach(function(num) {
    return sum += num;
  });

  return sum;
}
```
