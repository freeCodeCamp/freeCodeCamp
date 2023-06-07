---
id: 5900f38d1000cf542c50fea0
title: 'Problem 33: Digit cancelling fractions'
challengeType: 1
forumTopicId: 301987
dashedName: problem-33-digit-cancelling-fractions
---

# --description--

Der Bruch <sup>49</sup>/<sub>98</sub> ist ein merkwürdiger Bruch, da ein unerfahrener Mathematiker bei dem Versuch ihn zu verkürzen, fälschlicherweise glauben könnte, dass <sup>49</sup>/<sub>98</sub> = <sup>4</sup>/<sub>8</sub>, was korrekt ist und durch die Kürzung der 9er herauskommt.

Wir werden Brüche wie <sup>30</sup>/<sub>50</sub> = <sup>3</sup>/<sub>5</sub>, als triviale Beispiele betrachten.

Es gibt genau vier nicht-triviale Beispiele für diese Art von Brüchen, deren Wert kleiner als eins ist und die zwei Ziffern im Zähler und im Nenner enthalten.

Wenn das Produkt dieser vier Brüche mit den kleinsten gemeinsamen Werten angegeben wird, finden Sie den Wert des Nenners.

# --hints--

`digitCancellingFractions()` sollte eine Zahl zurückgeben.

```js
assert(typeof digitCancellingFractions() === 'number');
```

`digitCancellingFractions()` sollte 100 zurückgeben.

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
