---
id: 5900f3b41000cf542c50fec7
title: 'Problem 72: Brüche zählen'
challengeType: 1
forumTopicId: 302185
dashedName: problem-72-counting-fractions
---

# --description--

Betrachte den Bruch $\frac{n}{d}$, wobei `n` und `d` positive Integer sind. Wenn `n` &lt; `d` und der höchste gemeinsame Faktor, ${HCF}(n, d) = 1$ ist, wird es als ein reduzierter Eigenbruch bezeichnet.

Wenn wir die Menge der reduzierten Eigenbrüche für `d` ≤ 8 in aufsteigender Reihenfolge der Größe auflisten, erhalten wir:

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \frac{3}{8}, \frac{2}{5}, \frac{3}{7}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

Man kann sehen, dass `21` Elemente in dieser Menge existieren.

Wie viele Elemente würden sich in der Menge mit reduzierten echten Brüchen für `d` ≤ `limit` befinden?

# --hints--

`countingFractions(8)` sollte eine Zahl zurückgeben.

```js
assert(typeof countingFractions(8) === 'number');
```

`countingFractions(8)` sollte `21` zurückgeben.

```js
assert.strictEqual(countingFractions(8), 21);
```

`countingFractions(20000)` sollte `121590395` zurückgeben.

```js
assert.strictEqual(countingFractions(20000), 121590395);
```

`countingFractions(500000)` sollte `75991039675` zurückgeben.

```js
assert.strictEqual(countingFractions(500000), 75991039675);
```

`countingFractions(1000000)` sollte `303963552391` zurückgeben.

```js
assert.strictEqual(countingFractions(1000000), 303963552391);
```

# --seed--

## --seed-contents--

```js
function countingFractions(limit) {

  return true;
}

countingFractions(8);
```

# --solutions--

```js
function countingFractions(limit) {
  const phi = {};
  let count = 0;

  for (let i = 2; i <= limit; i++) {
    if (!phi[i]) {
      phi[i] = i;
    }
    if (phi[i] === i) {
      for (let j = i; j <= limit; j += i) {
        if (!phi[j]) {
          phi[j] = j;
        }
        phi[j] = (phi[j] / i) * (i - 1);
      }
    }
    count += phi[i];
  }

  return count;
}
```
