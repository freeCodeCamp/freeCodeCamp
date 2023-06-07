---
id: 5900f3b61000cf542c50fec8
title: 'Problema 73: contare frazioni in un range'
challengeType: 1
forumTopicId: 302186
dashedName: problem-73-counting-fractions-in-a-range
---

# --description--

Considera la frazione, $\frac{n}{d}$, dove `n` e `d` sono numeri interi positivi. Se `n` &lt; `d` e il fattore commune più alto, ${HCF}(n, d) = 1$, viene chiamata frazione ridotta propria.

Se elenchiamo la lista delle frazioni proprie ridotte per `d` ≤ 8 in ordine decrescente di dimensioni, otteniamo:

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \mathbf{\frac{3}{8}, \frac{2}{5}, \frac{3}{7}}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

Si vede che ci sono `3` frazioni tra $\frac{1}{3}$ e $\frac{1}{2}$.

Quante frazioni ci sono tra $\frac{1}{3}$ e $\frac{1}{2}$ nel set ordinato di frazioni proprie semplificate per `d` ≤ `limit`?

# --hints--

`countingFractionsInARange(8)` dovrebbe restituire un numero.

```js
assert(typeof countingFractionsInARange(8) === 'number');
```

`countingFractionsInARange(8)` dovrebbe restituire `3`.

```js
assert.strictEqual(countingFractionsInARange(8), 3);
```

`countingFractionsInARange(1000)` dovrebbe restituire `50695`.

```js
assert.strictEqual(countingFractionsInARange(1000), 50695);
```

`countingFractionsInARange(6000)` dovrebbe restituire `1823861`.

```js
assert.strictEqual(countingFractionsInARange(6000), 1823861);
```

`countingFractionsInARange(12000)` dovrebbe restituire `7295372`.

```js
assert.strictEqual(countingFractionsInARange(12000), 7295372);
```

# --seed--

## --seed-contents--

```js
function countingFractionsInARange(limit) {

  return true;
}

countingFractionsInARange(8);
```

# --solutions--

```js
function countingFractionsInARange(limit) {
  let result = 0;
  const stack = [[3, 2]];
  while (stack.length > 0) {
    const [startDenominator, endDenominator] = stack.pop();
    const curDenominator = startDenominator + endDenominator;
    if (curDenominator <= limit) {
      result++;
      stack.push([startDenominator, curDenominator]);
      stack.push([curDenominator, endDenominator]);
    }
  }
  return result;
}
```
