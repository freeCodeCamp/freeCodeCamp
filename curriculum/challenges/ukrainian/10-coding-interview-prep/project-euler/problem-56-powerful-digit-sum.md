---
id: 5900f3a41000cf542c50feb7
title: 'Завдання 56: Максимальна сума цифр'
challengeType: 1
forumTopicId: 302167
dashedName: problem-56-powerful-digit-sum
---

# --description--

Гугол ($10^{100}$) - гігантське число: сто нулів після одиниці; 100^{100}$ є майже неймовірно великим числом: двісті нулів після одиниці. Незважаючи на їхній розмір, сума цих цифр у кожному числі дорівнює лише 1.

Беручи до уваги натуральні числа виду $a^b$, де `a`, `b` &lt; `n`, якою буде максимальна сума чисел?

# --hints--

`powerfulDigitSum(3)` має повернути число.

```js
assert(typeof powerfulDigitSum(3) === 'number');
```

`powerfulDigitSum(3)` має повернути `4`.

```js
assert.strictEqual(powerfulDigitSum(3), 4);
```

`powerfulDigitSum(10)` має повернути `45`.

```js
assert.strictEqual(powerfulDigitSum(10), 45);
```

`powerfulDigitSum(50)` має повернути `406`.

```js
assert.strictEqual(powerfulDigitSum(50), 406);
```

`powerfulDigitSum(75)` має повернути `684`.

```js
assert.strictEqual(powerfulDigitSum(75), 684);
```

`powerfulDigitSum(100)` має повернути `972`.

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
