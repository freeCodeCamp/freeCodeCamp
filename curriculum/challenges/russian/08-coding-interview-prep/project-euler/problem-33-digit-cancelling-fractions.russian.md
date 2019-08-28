---
id: 5900f38d1000cf542c50fea0
challengeType: 5
title: 'Problem 33: Digit cancelling fractions'
forumTopicId: 301987
localeTitle: 'Задача 33: Отмена фракций'
---

## Description
<section id='description'>
Фракцию <sup><sub>49/98</sub></sup> любопытная фракция, как неопытная математика в попытке упростить это может ошибочно полагает , что <sup><sub>49/98</sub></sup> = <sup><sub>4/8,</sub></sup> который является правильным, получается путем погашения 9s. Мы будем рассматривать фракции нравятся, <sup><sub>30/50</sub></sup> = <sup><sub>3/5,</sub></sup> чтобы быть тривиальными примерами. Существует ровно четыре нетривиальных примера этого типа фракции, меньше единицы по значению и содержат две цифры в числителе и знаменателе. Если произведение этих четырех фракций дано в наименьших общих терминах, найдите значение знаменателя.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>digitCancellingFractions()</code> should return 100.
    testString: assert.strictEqual(digitCancellingFractions(), 100);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function digitCancellingFractions() {
  // Good luck!
  return true;
}

digitCancellingFractions();

```

</div>

</section>

## Solution
<section id='solution'>

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

</section>
