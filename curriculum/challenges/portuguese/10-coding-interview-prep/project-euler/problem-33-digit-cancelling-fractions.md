---
id: 5900f38d1000cf542c50fea0
title: 'Problema 33: Frações com cancelamento de algarismos'
challengeType: 1
forumTopicId: 301987
dashedName: problem-33-digit-cancelling-fractions
---

# --description--

A fração <sup>49</sup>/<sub>98</sub> é uma fração curiosa, já que um matemático inexperiente, na tentativa de simplificá-la, pode acreditar, erroneamente, que <sup>49</sup>/<sub>98</sub> = <sup>4</sup>/<sub>8</sub> pelo cancelamento dos algarismos 9. Embora o resultado esteja correto, o raciocínio não está.

Devemos considerar frações como, por exemplo, <sup>30</sup>/<sub>50</sub> = <sup>3</sup>/<sub>5</sub>, como exemplos triviais.

Existem exatamente quatro exemplos não triviais desse tipo de fração, com resultado inferior a 1 e que contêm dois algarismos no numerador e no denominador.

Se o produto dessas quatro frações é dado por seus mínimos divisores comuns, encontre o valor do denominador.

# --hints--

`digitCancellingFractions()` deve retornar um número.

```js
assert(typeof digitCancellingFractions() === 'number');
```

`digitCancellingFractions()` deve retornar 100.

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
