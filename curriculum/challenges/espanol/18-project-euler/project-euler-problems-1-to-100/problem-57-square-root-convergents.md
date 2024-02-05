---
id: 5900f3a51000cf542c50feb8
title: 'Problem 57: Square root convergents'
challengeType: 1
forumTopicId: 302168
dashedName: problem-57-square-root-convergents
---

# --description--

It is possible to show that the square root of two can be expressed as an infinite continued fraction.

<div style='text-align: center;'>$\sqrt 2 =1+ \frac 1 {2+ \frac 1 {2 +\frac 1 {2+ \dots}}}$</div>

Al expandir esto para las primeras cuatro iteraciones, obtenemos:

$1 + \\frac 1 2 = \\frac 32 = 1.5$

$1 + \\frac 1 {2 + \\frac 1 2} = \\frac 7 5 = 1.4$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 2}} = \\frac {17}{12} = 1.41666 \\dots$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 {2+\\frac 1 2}}} = \\frac {41}{29} = 1.41379 \\dots$

Las siguientes expansiones son $\\frac {99}{70}$, $\\frac {239}{169}$, y $\\frac {577}{408}$, pero la octava expansión, $\\frac {1393}{985}$, es el primer ejemplo dónde el número de dígitos en el numerador excede el número de dígitos en el denominador.

En la primera expansión `n`, ¿cuántas fraciones contienen un numerador con más dígitos que el denominador?

# --hints--

`squareRootConvergents(10)` debería devolver un número.

```js
assert(typeof squareRootConvergents(10) === 'number');
```

`squareRootConvergents(10)` debería devolver 1.

```js
assert.strictEqual(squareRootConvergents(10), 1);
```

`squareRootConvergents(100)` debería devolver 15.

```js
assert.strictEqual(squareRootConvergents(100), 15);
```

`squareRootConvergents(1000)` debería devolver 153.

```js
assert.strictEqual(squareRootConvergents(1000), 153);
```

# --seed--

## --seed-contents--

```js
function squareRootConvergents(n) {

  return true;
}

squareRootConvergents(1000);
```

# --solutions--

```js
function squareRootConvergents(n) {
  function countDigits(number) {
    let counter = 0;
    while (number > 0) {
      counter++;
      number = number / 10n;
    }
    return counter;
  }

  // Use BigInt as integer won't handle all cases
  let numerator = 3n;
  let denominator = 2n;
  let moreDigitsInNumerator = 0;

  for (let i = 2; i <= n; i++) {
    [numerator, denominator] = [
      numerator + 2n * denominator,
      denominator + numerator
    ];

    if (countDigits(numerator) > countDigits(denominator)) {
      moreDigitsInNumerator++;
    }
  }
  return moreDigitsInNumerator;
}
```
