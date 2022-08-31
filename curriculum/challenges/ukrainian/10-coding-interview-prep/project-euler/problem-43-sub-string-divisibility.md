---
id: 5900f3971000cf542c50feaa
title: 'Завдання 43: Подільність підрядків'
challengeType: 1
forumTopicId: 302100
dashedName: problem-43-sub-string-divisibility
---

# --description--

Число 1406357289 є панцифровим у проміжку від 1 до 9, оскільки складається із цифр від 1 до 9 у певному порядку, а також воно має цікаву властивість подільності підрядків.

Нехай $d_1$ буде цифрою $1^{st}$, $d_2$ буде цифрою $2^{nd}$ і т. д. Таким чином можна помітити наступне:

- ${d_2}{d_3}{d_4} = 406$ ділиться на 2
- ${d_3}{d_4}{d_5} = 063$ ділиться на 3
- ${d_4}{d_5}{d_6} = 635$ ділиться на 5
- ${d_5}{d_6}{d_7} = 357$ ділиться на 7
- ${d_6}{d_7}{d_8} = 572$ ділиться на 11
- ${d_7}{d_8}{d_9} = 728$ ділиться на 13
- ${d_8}{d_9}{d_{10}} = 289$ ділиться на 17

Знайдіть суму всіх панцифрових чисел від 0 до `n` з підрядками, які б відповідали особливостям подільності `n - 2`.

**Note:** Панцифрові числа, починаючи від `0`, повинні враховуватись у результаті.

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
