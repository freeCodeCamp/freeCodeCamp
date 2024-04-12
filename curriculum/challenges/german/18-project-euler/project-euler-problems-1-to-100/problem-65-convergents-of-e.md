---
id: 5900f3ad1000cf542c50fec0
title: 'Problem 65: Konvergenzen von e'
challengeType: 1
forumTopicId: 302177
dashedName: problem-65-convergents-of-e
---

# --description--

Die Quadratwurzel aus 2 kann als unendlicher Kettenbruch geschrieben werden.

$\\sqrt{2} = 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + ...}}}}$

Der unendliche Kettenbruch kann geschrieben werden: $\\sqrt{2} = \[1; (2)]$ bedeutet, dass sich 2 *ad infinitum* wiederholt. Ähnlich verhält sich $\\sqrt{23} = \[4; (1, 3, 1, 8)]$. Es stellt sich heraus, dass die Abfolge von Teilwerten fortgesetzter Brüche für Quadratwurzeln die besten rationalen Annäherungswerte liefert. Betrachten wir die Konvergenzen für $\\sqrt{2}$.

$1 + \\dfrac{1}{2} = \\dfrac{3}{2}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2}} = \\dfrac{7}{5}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2}}} = \\dfrac{17}{12}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2}}}} = \\dfrac{41}{29}$

Die Folge der ersten zehn Konvergenzen für $\\sqrt{2}$ sind also:

$1, \\dfrac{3}{2}, \\dfrac{7}{5}, \\dfrac{17}{12}, \\dfrac{41}{29}, \\dfrac{99}{70}, \\dfrac{239}{169}, \\dfrac{577}{408}, \\dfrac{1393}{985}, \\dfrac{3363}{2378}, ...$

Am überraschendsten ist die wichtige mathematische Konstante $e = \[2; 1, 2, 1, 1, 4, 1, 1, 6, 1, ... , 1, 2k, 1, ...]$. Die ersten zehn Begriffe in der Abfolge der Konvergenzen für `e` sind:

$2, 3, \\dfrac{8}{3}, \\dfrac{11}{4}, \\dfrac{19}{7}, \\dfrac{87}{32}, \\dfrac{106}{39}, \\dfrac{193}{71}, \\dfrac{1264}{465}, \\dfrac{1457}{536}, ...$

Die Summe der Ziffern im Zähler der 10<sup>th</sup>-Konvergenz ist $1 + 4 + 5 + 7 = 17$.

Finde die Summe der Ziffern im Zähler der `n`<sup>th</sup>-Konvergenz des fortgesetzten Bruchs für `e`.

# --hints--

`convergentsOfE(10)` sollte eine Zahl zurückgeben.

```js
assert(typeof convergentsOfE(10) === 'number');
```

`convergentsOfE(10)` sollte `17` zurückgeben.

```js
assert.strictEqual(convergentsOfE(10), 17);
```

`convergentsOfE(30)` sollte `53` zurückgeben.

```js
assert.strictEqual(convergentsOfE(30), 53);
```

`convergentsOfE(50)` sollte `91` zurückgeben.

```js
assert.strictEqual(convergentsOfE(50), 91);
```

`convergentsOfE(70)` sollte `169` zurückgeben.

```js
assert.strictEqual(convergentsOfE(70), 169);
```

`convergentsOfE(100)` sollte `272` zurückgeben.

```js
assert.strictEqual(convergentsOfE(100), 272);
```

# --seed--

## --seed-contents--

```js
function convergentsOfE(n) {

  return true;
}

convergentsOfE(10);
```

# --solutions--

```js
function convergentsOfE(n) {
  function sumDigits(num) {
    let sum = 0n;
    while (num > 0) {
      sum += num % 10n;
      num = num / 10n;
    }
    return parseInt(sum);
  }

  // BigInt is needed for high convergents
  let convergents = [
    [2n, 1n],
    [3n, 1n]
  ];
  const multipliers = [1n, 1n, 2n];
  for (let i = 2; i < n; i++) {
    const [secondLastConvergent, lastConvergent] = convergents;
    const [secondLastNumerator, secondLastDenominator] = secondLastConvergent;
    const [lastNumerator, lastDenominator] = lastConvergent;
    const curMultiplier = multipliers[i % 3];

    const numerator = secondLastNumerator + curMultiplier * lastNumerator;
    const denominator = secondLastDenominator + curMultiplier * lastDenominator;

    convergents = [lastConvergent, [numerator, denominator]]
    if (i % 3 === 2) {
      multipliers[2] += 2n;
    }
  }
  return sumDigits(convergents[1][0]);
}
```
