---
id: 5900f3a51000cf542c50feb8
title: 'Problema 57: Radici quadrate convergenti'
challengeType: 1
forumTopicId: 302168
dashedName: problem-57-square-root-convergents
---

# --description--

È possibile dimostrare che la radice quadrata di due può essere espressa come una frazione infinita continua.

<div style='text-align: center;'>$\sqrt 2 =1+ \frac 1 {2+ \frac 1 {2 +\frac 1 {2+ \dots}}}$</div>

Espandendola per le prime quattro iterazioni, otteniamo:

$1 + \\frac 1 2 = \\frac 32 = 1.5$

$1 + \\frac 1 {2 + \\frac 1 2} = \\frac 7 5 = 1.4$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 2}} = \\frac {17}{12} = 1.41666 \\dots$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 {2+\\frac 1 2}}} = \\frac {41}{29} = 1.41379 \\dots$

Le prossime tre espansioni sono $\\frac {99}{70}$, $\\frac {239}{169}$, e $\\frac {577}{408}$, ma l'ottava espansione, $\\frac {1393}{985}$, è il primo esempio in cui il numero di cifre nel numeratore supera il numero di cifre nel denominatore.

Nelle prime espansioni `n`, quante frazioni contengono un numeratore con più cifre di denominatore?

# --hints--

`squareRootConvergents(10)` dovrebbe restituire un numero.

```js
assert(typeof squareRootConvergents(10) === 'number');
```

`squareRootConvergents(10)` dovrebbe restituire 1.

```js
assert.strictEqual(squareRootConvergents(10), 1);
```

`squareRootConvergents(100)` dovrebbe restituire 15.

```js
assert.strictEqual(squareRootConvergents(100), 15);
```

`squareRootConvergents(1000)` dovrebbe restituire 153.

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
