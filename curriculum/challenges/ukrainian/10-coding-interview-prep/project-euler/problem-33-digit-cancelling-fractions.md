---
id: 5900f38d1000cf542c50fea0
title: 'Завдання 33: Числове скорочення дробів'
challengeType: 1
forumTopicId: 301987
dashedName: problem-33-digit-cancelling-fractions
---

# --description--

Дріб <sup>49</sup>/<sub>98</sub> - це цікавий дріб, оскільки недосвідчений математик, намагаючись скоротити його, може помилково подумати, що <sup>49</sup>/<sub>98</sub> = <sup>4</sup>/<sub>8</sub>, що є істиною, отримано за рахунок викреслення числа 9.

Ми будемо вважати такі дроби як <sup>30</sup>/<sub>50</sub> = <sup>3</sup>/<sub>5</sub> тривіальними прикладами.

Існує рівно чотири нетривіальні приклади дробу цього типу, які за значенням дорівнюють менше одиниці, і містять два числа в чисельнику і знаменнику.

Знайдіть значення знаменника, якщо добуток цих чотирьох дробів подано у вигляді найменшого спільного знаменника.

# --hints--

`digitCancellingFractions()` має повернути число.

```js
assert(typeof digitCancellingFractions() === 'number');
```

`digitCancellingFractions()` має повернути число 100.

```js
assert.strictEqual(digitCancellingFractions(), 100);
```

# --seed--

## --seed-contents--

```js
function digitCancellingFractions() {

  return true;
}

digitCancellingFractions();
```

# --solutions--

```js
function digitCancellingFractions() {
  function isCurious(numerator, denominator) {
    const fraction = numerator / denominator;
    const numString = numerator.toString();
    const denString = denominator.toString();

    if (numString[1] === '0' && denString[1] === '0') {
      // trivial
      return false;
    }
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        if (numString[i] === denString[j]) {
          const newNum = parseInt(numString[1 - i], 10);
          const newDen = parseInt(denString[1 - j], 10);
          if (newNum / newDen === fraction) {
            return true;
          }
        }
      }
    }
    return false;
  }
  function findLargestDivisor(a, b) {
    let gcd = a > b ? b : a;
    while (gcd > 1) {
      if (a % gcd === 0 && b % gcd === 0) {
        return gcd;
      }
      gcd--;
    }
    return gcd;
  }

  function simplifyFraction(numerator, denominator) {
    const divisor = findLargestDivisor(numerator, denominator);
    return [numerator / divisor, denominator / divisor];
  }

  let multipleNumerator = 1;
  let multipleDenominator = 1;

  for (let denominator = 11; denominator < 100; denominator++) {
    for (let numerator = 10; numerator < denominator; numerator++) {
      if (isCurious(numerator, denominator)) {
        multipleNumerator *= numerator;
        multipleDenominator *= denominator;
      }
    }
  }

  return simplifyFraction(multipleNumerator, multipleDenominator)[1];
}
```
