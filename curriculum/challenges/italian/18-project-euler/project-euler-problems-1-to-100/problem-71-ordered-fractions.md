---
id: 5900f3b31000cf542c50fec6
title: 'Problema 71: frazioni ordinate'
challengeType: 1
forumTopicId: 302184
dashedName: problem-71-ordered-fractions
---

# --description--

Considera la frazione, $\frac{n}{d}$, dove `n` e `d` sono numeri interi positivi. Se `n` &lt; `d` e il fattore comune più alto, ${{HCF}(n, d)} = 1$, viene chiamata frazione ridotta propria.

Se elenchiamo la lista delle frazioni proprie ridotte per `d` ≤ 8 in ordine decrescente di dimensioni, otteniamo:

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \frac{3}{8}, \frac{\textbf2}{\textbf5}, \frac{3}{7}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

Si può vedere che $\frac{2}{5}$ è la frazione immediatamente a sinistra di $\frac{3}{7}$.

Elencando la lista di frazioni proprie ridotte per `d` ≤ `limit` in ordine crescente, trova il numeratore della frazione immediatamente a sinistra di $\frac{3}{7}$.

# --hints--

`orderedFractions(8)` dovrebbe restituire un numero.

```js
assert(typeof orderedFractions(8) === 'number');
```

`orderedFractions(8)` dovrebbe restituire `2`.

```js
assert.strictEqual(orderedFractions(8), 2);
```

`orderedFractions(10)` dovrebbe restituire `2`.

```js
assert.strictEqual(orderedFractions(10), 2);
```

`orderedFractions(9994)` dovrebbe restituire `4283`.

```js
assert.strictEqual(orderedFractions(9994), 4283);
```

`orderedFractions(500000)` dovrebbe restituire `214283`.

```js
assert.strictEqual(orderedFractions(500000), 214283);
```

`orderedFractions(1000000)` dovrebbe restituire `428570`.

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
