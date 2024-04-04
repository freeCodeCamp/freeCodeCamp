---
id: 5900f3c51000cf542c50fed6
title: 'Problem 88: Produkt-Summen-Zahlen'
challengeType: 1
forumTopicId: 302203
dashedName: problem-88-product-sum-numbers
---

# --description--

Eine natürliche Zahl, `N`, die sich als Summe und Produkt einer gegebenen Menge von mindestens zwei natürlichen Zahlen $\\{a_1, a_2, \ldots , a_k\\}$ schreiben lässt, heißt Produktsummenzahl: $N = a_1 + a_2 + \cdots + a_k = a_1 × a_2 × \cdots × a_k$.

Zum Beispiel 6 = 1 + 2 + 3 = 1 × 2 × 3.

Für eine gegebene Menge der Größe `k` nennen wir das kleinste N mit dieser Eigenschaft eine minimale Produktsummenzahl. Die minimalen Produktsummenzahlen für Mengen der Größe `k` = 2, 3, 4, 5 und 6 sind wie folgt.

<div style='margin-left: 4em;'>
  <var>k</var>=2: 4 = 2 × 2 = 2 + 2<br>
  <var>k</var>=3: 6 = 1 × 2 × 3 = 1 + 2 + 3<br>
  <var>k</var>=4: 8 = 1 × 1 × 2 × 4 = 1 + 1 + 2 + 4<br>
  <var>k</var>=5: 8 = 1 × 1 × 2 × 2 × 2  = 1 + 1 + 2 + 2 + 2<br>
  <var>k</var>=6: 12 = 1 × 1 × 1 × 1 × 2 × 6 = 1 + 1 + 1 + 1 + 2 + 6
</div><br>

Daher gilt für 2 ≤ `k` ≤ 6, ist also die Summe aller minimalen Produkt-Summen-Zahlen 4 + 6 + 8 + 12 = 30; beachte, dass `8` nur einmal in der Summe enthalten ist.

Da die vollständige Menge der minimalen Produkt-Summen-Zahlen für 2 ≤ `k` ≤ 12 $\\{4, 6, 8, 12, 15, 16\\}$ ist, ist die Summe tatsächlich `61`.

Was ist die Summe aller minimalen Produktsummenzahlen für 2 ≤ `k` ≤ `limit`?

# --hints--

`productSumNumbers(6)` sollte eine Zahl zurückgeben.

```js
assert(typeof productSumNumbers(6) === 'number');
```

`productSumNumbers(6)` sollte `30` zurückgeben.

```js
assert.strictEqual(productSumNumbers(6), 30);
```

`productSumNumbers(12)` sollte `61` zurückgeben.

```js
assert.strictEqual(productSumNumbers(12), 61);
```

`productSumNumbers(300)` sollte `12686` zurückgeben.

```js
assert.strictEqual(productSumNumbers(300), 12686);
```

`productSumNumbers(6000)` sollte `2125990` zurückgeben.

```js
assert.strictEqual(productSumNumbers(6000), 2125990);
```

`productSumNumbers(12000)` sollte `7587457` zurückgeben.

```js
assert.strictEqual(productSumNumbers(12000), 7587457);
```

# --seed--

## --seed-contents--

```js
function productSumNumbers(limit) {

  return true;
}

productSumNumbers(6);
```

# --solutions--

```js
function productSumNumbers(limit) {
  function getProductSums(curProduct, curSum, factorsCount, start) {
    const k = curProduct - curSum + factorsCount;
    if (k <= limit) {
      if (curProduct < minimalProductSums[k]) {
        minimalProductSums[k] = curProduct;
      }
      for (let i = start; i < Math.floor((limit / curProduct) * 2) + 1; i++) {
        getProductSums(curProduct * i, curSum + i, factorsCount + 1, i);
      }
    }
  }

  const minimalProductSums = new Array(limit + 1).fill(2 * limit);
  getProductSums(1, 1, 1, 2);

  const uniqueProductSums = [...new Set(minimalProductSums.slice(2))];

  let sum = 0;
  for (let i = 0; i < uniqueProductSums.length; i++) {
    sum += uniqueProductSums[i];
  }

  return sum;
}
```
