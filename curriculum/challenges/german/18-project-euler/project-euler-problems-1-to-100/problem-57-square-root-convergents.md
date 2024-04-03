---
id: 5900f3a51000cf542c50feb8
title: 'Problem 57: Square root convergents'
challengeType: 1
forumTopicId: 302168
dashedName: problem-57-square-root-convergents
---

# --description--

Es lässt sich zeigen, dass die Quadratwurzel aus zwei als unendlicher Kettenbruch ausgedrückt werden kann.

<div style='text-align: center;'>$\sqrt 2 =1+ \frac 1 {2+ \frac 1 {2 +\frac 1 {2+ \dots}}}$</div>

Erweitert man dies für die ersten vier Iterationen, erhält man:

$1 + \\frac 1 2 = \\frac 32 = 1.5$

$1 + \\frac 1 {2 + \\frac 1 2} = \\frac 7 5 = 1.4$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 2}} = \\frac {17}{12} = 1.41666 \\dots$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 {2+\\frac 1 2}}} = \\frac {41}{29} = 1.41379 \\dots$

Die nächsten drei Erweiterungen sind $\\frac {99}{70}$, $\\frac {239}{169}$ und $\\frac {577}{408}$, aber die achte Erweiterung, $\\frac {1393}{985}$, ist das erste Beispiel, bei dem die Anzahl der Ziffern im Zähler die Anzahl der Ziffern im Nenner übersteigt.

In den ersten `n`-Erweiterungen, wie viele Brüche enthalten einen Zähler mit mehr Ziffern als Nenner?

# --hints--

`squareRootConvergents(10)` sollte eine Zahl zurückgeben.

```js
assert(typeof squareRootConvergents(10) === 'number');
```

`squareRootConvergents(10)` sollte 1 zurückgeben.

```js
assert.strictEqual(squareRootConvergents(10), 1);
```

`squareRootConvergents(100)` sollte 15 zurückgeben.

```js
assert.strictEqual(squareRootConvergents(100), 15);
```

`squareRootConvergents(1000)` sollte 153 zurückgeben.

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
