---
id: 5900f3971000cf542c50feaa
title: 'Завдання 43: подільність підрядків'
challengeType: 1
forumTopicId: 302100
dashedName: problem-43-sub-string-divisibility
---

# --description--

Число 1406357289 є панцифровим від 0 до 9, оскільки складається з цифр від 0 до 9 у певному порядку, а також воно має цікаву властивість подільності підрядків.

Нехай $d_1$ буде першою цифрою, $d_2$ буде другою цифрою і так далі. Таким чином можна помітити наступне:

- ${d_2}{d_3}{d_4} = 406$ ділиться на 2 без остачі
- ${d_3}{d_4}{d_5} = 063$ ділиться на 3 без остачі
- ${d_4}{d_5}{d_6} = 635$ ділиться на 5 без остачі
- ${d_5}{d_6}{d_7} = 357$ ділиться на 7 без остачі
- ${d_6}{d_7}{d_8} = 572$ ділиться на 11 без остачі
- ${d_7}{d_8}{d_9} = 728$ ділиться на 13 без остачі
- ${d_8}{d_9}{d_{10}} = 289$ ділиться на 17 без остачі

Знайдіть суму всіх панцифрових чисел від 0 до `n` з підрядками, які б відповідали особливостям подільності `n - 2`.

**Примітка:** у результаті потрібно врахувати панцифрові числа, які починаються з `0`.

# --hints--

`substringDivisibility(5)` має повернути число.

```js
assert(typeof substringDivisibility(5) === 'number');
```

`substringDivisibility(5)` має повернути `12444480`.

```js
assert.strictEqual(substringDivisibility(5), 12444480)
```

`substringDivisibility(7)` має повернути `1099210170`.

```js
assert.strictEqual(substringDivisibility(7), 1099210170)
```

`substringDivisibility(8)` має повернути `1113342912`.

```js
assert.strictEqual(substringDivisibility(8), 1113342912)
```

`substringDivisibility(9)` має повернути `16695334890`.

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
