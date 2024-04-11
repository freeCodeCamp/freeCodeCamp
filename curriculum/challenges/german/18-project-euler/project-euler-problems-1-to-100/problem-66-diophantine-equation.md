---
id: 5900f3ae1000cf542c50fec1
title: 'Problem 66: Diophantische Gleichung'
challengeType: 1
forumTopicId: 302178
dashedName: problem-66-diophantine-equation
---

# --description--

Betrachte quadratische diophantische Gleichungen der folgenden Form:

<div style='text-align: center;'>x<sup>2</sup> – Dy<sup>2</sup> = 1</div>

Zum Beispiel, wenn D=13 ist, liegt die minimale Lösung in x bei 649<sup>2</sup> – 13×180<sup>2</sup> = 1.

Es kann davon ausgegangen werden, dass es keine Lösungen mit positiven ganzen Zahlen gibt, wenn D quadratisch ist.

Durch das Finden von minimalen Lösungen in x für D = {2, 3, 5, 6, 7} erhalten wir das Folgende:

<div style='margin-left: 2em;'>
  3<sup>2</sup> – 2×2<sup>2</sup> = 1<br>
  2<sup>2</sup> – 3×1<sup>2</sup> = 1<br>
  <strong><span style='color: red;'>9</span></strong><sup>2</sup> – 5×4<sup>2</sup> = 1<br>
  5<sup>2</sup> – 6×2<sup>2</sup> = 1<br>
  8<sup>2</sup> – 7×3<sup>2</sup> = 1<br>
</div>

Daher wird durch die Berücksichtigung von Minimallösungen in `x` für D ≤ 7 das größte `x` erreicht, während D = 5 gilt.

Finde den Wert von D ≤ `n` in minimalen Lösungen von `x`, für den der größte Wert von `x` erreicht wird.

# --hints--

`diophantineEquation(7)` sollte eine Zahl zurückgeben.

```js
assert(typeof diophantineEquation(7) === 'number');
```

`diophantineEquation(7)` sollte `5` zurückgeben.

```js
assert.strictEqual(diophantineEquation(7), 5);
```

`diophantineEquation(100)` sollte `61` zurückgeben.

```js
assert.strictEqual(diophantineEquation(100), 61);
```

`diophantineEquation(409)` sollte `409` zurückgeben.

```js
assert.strictEqual(diophantineEquation(409), 409);
```

`diophantineEquation(500)` sollte `421` zurückgeben.

```js
assert.strictEqual(diophantineEquation(500), 421);
```

`diophantineEquation(1000)` sollte `661` zurückgeben.

```js
assert.strictEqual(diophantineEquation(1000), 661);
```

# --seed--

## --seed-contents--

```js
function diophantineEquation(n) {

  return true;
}

diophantineEquation(7);
```

# --solutions--

```js
function diophantineEquation(n) {
  // Based on https://www.mathblog.dk/project-euler-66-diophantine-equation/
  function isSolution(D, numerator, denominator) {
    return numerator * numerator - BigInt(D) * denominator * denominator === 1n;
  }

  let result = 0;
  let biggestX = 0;

  for (let D = 2; D <= n; D++) {
    let boundary = Math.floor(Math.sqrt(D));
    if (boundary ** 2 === D) {
      continue;
    }

    let m = 0n;
    let d = 1n;
    let a = BigInt(boundary);

    let [numerator, prevNumerator] = [a, 1n];

    let [denominator, prevDenominator] = [1n, 0n];

    while (!isSolution(D, numerator, denominator)) {
      m = d * a - m;
      d = (BigInt(D) - m * m) / d;
      a = (BigInt(boundary) + m) / d;

      [numerator, prevNumerator] = [a * numerator + prevNumerator, numerator];
      [denominator, prevDenominator] = [
        a * denominator + prevDenominator,
        denominator
      ];
    }

    if (numerator > biggestX) {
      biggestX = numerator;
      result = D;
    }
  }
  return result;
}
```
