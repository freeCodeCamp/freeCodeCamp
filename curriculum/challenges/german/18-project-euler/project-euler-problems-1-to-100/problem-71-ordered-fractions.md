---
id: 5900f3b31000cf542c50fec6
title: 'Problem 71: Geordnete Brüche'
challengeType: 1
forumTopicId: 302184
dashedName: problem-71-ordered-fractions
---

# --description--

Betrachte den Bruch $\frac{n}{d}$, wobei `n` und `d` positive Integer sind. Wenn `n` &lt; `d` gilt und der höchste gemeinsame Nenner ${{HCF}(n, d)} = 1$ ist, wird es als reduzierter echter Bruch bezeichnet.

If we list the set of reduced proper fractions for `d` ≤ 8 in ascending order of size, we get:

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \frac{3}{8}, \frac{\textbf2}{\textbf5}, \frac{3}{7}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

Man kann sehen, dass $\frac{2}{5}$ der Bruch direkt links von $\frac{3}{7}$ ist.

Finde den Zähler des Bruchs direkt links von $\frac{3}{7}$, indem du die Menge an reduzierten echten Brüchen für `d` ≤ `limit` in aufsteigender Reihenfolge auf Basis der Größe auflistest.

# --hints--

`orderedFractions(8)` sollte eine Zahl zurückgeben.

```js
assert(typeof orderedFractions(8) === 'number');
```

`orderedFractions(8)` sollte `2` zurückgeben.

```js
assert.strictEqual(orderedFractions(8), 2);
```

`orderedFractions(10)` sollte `2` zurückgeben.

```js
assert.strictEqual(orderedFractions(10), 2);
```

`orderedFractions(9994)` sollte `4283` zurückgeben.

```js
assert.strictEqual(orderedFractions(9994), 4283);
```

`orderedFractions(500000)` sollte `214283` zurückgeben.

```js
assert.strictEqual(orderedFractions(500000), 214283);
```

`orderedFractions(1000000)` sollte `428570` zurückgeben.

```js
assert.strictEqual(orderedFractions(1000000), 428570);
```

# --seed--

## --seed-contents--

```js
function orderedFractions(limit) {

  return true;
}

orderedFractions(8);
```

# --solutions--

```js
function orderedFractions(limit) {
  const fractions = [];
  const fractionValues = {};
  const highBoundary = 3 / 7;
  let lowBoundary = 2 / 7;

  for (let denominator = limit; denominator > 2; denominator--) {
    let numerator = Math.floor((3 * denominator - 1) / 7);
    let value = numerator / denominator;
    if (value > highBoundary || value < lowBoundary) {
      continue;
    }
    fractionValues[value] = [numerator, denominator];
    fractions.push(value);
    lowBoundary = value;
  }

  fractions.sort();
  return fractionValues[fractions[fractions.length - 1]][0];
}
```
