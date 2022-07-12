---
id: 5900f3c51000cf542c50fed6
title: 'Problema 88: numeri prodotto-somma'
challengeType: 1
forumTopicId: 302203
dashedName: problem-88-product-sum-numbers
---

# --description--

Un numero naturale, `N`, che può essere scritto come somma e prodotto di un dato set di almeno due numeri naturali, $\\{a_1, a_2, \ldots , a_k\\}$, è chiamato numero prodotto-somma: $N = a_1 + a_2 + \cdots + a_k = a_1 × a_2 × \cdots × a_k$.

Per esempio, 6 = 1 + 2 + 3 = 1 × 2 × 3.

Per una data dimensione del set, `k`, chiamiamo il numero N più piccolo con questa proprietà un numero prodotto-somma minimo. I numeri prodotto-somma minimi per set di dimensione `k` = 2, 3, 4, 5, e 6 sono come segue.

<div style='margin-left: 4em;'>
  <var>k</var>=2: 4 = 2 × 2 = 2 + 2<br>
  <var>k</var>=3: 6 = 1 × 2 × 3 = 1 + 2 + 3<br>
  <var>k</var>=4: 8 = 1 × 1 × 2 × 4 = 1 + 1 + 2 + 4<br>
  <var>k</var>=5: 8 = 1 × 1 × 2 × 2 × 2  = 1 + 1 + 2 + 2 + 2<br>
  <var>k</var>=6: 12 = 1 × 1 × 1 × 1 × 2 × 6 = 1 + 1 + 1 + 1 + 2 + 6
</div><br>

Quindi per 2 ≤ `k` ≤ 6, la somma di tutti i numeri prodotto-somma minimi è 4 + 6 + 8 + 12 = 30; nota che `8` è contato una volta sola nella somma.

Infatti, vìsto che il set completo di numeri prodotto-somma minimi per 2 ≤ `k` ≤ 12 è $\\{4, 6, 8, 12, 15, 16\\}$. la somma è `61`.

Quale è la somma di tutti i numeri prodotto-somma minimi per 2 ≤ `k` ≤ `limit`?

# --hints--

`productSumNumbers(6)` dovrebbe restituire un numero.

```js
assert(typeof productSumNumbers(6) === 'number');
```

`productSumNumbers(6)` dovrebbe restituire `30`.

```js
assert.strictEqual(productSumNumbers(6), 30);
```

`productSumNumbers(12)` dovrebbe restituire `61`.

```js
assert.strictEqual(productSumNumbers(12), 61);
```

`productSumNumbers(300)` should return `12686`.

```js
assert.strictEqual(productSumNumbers(300), 12686);
```

`productSumNumbers(6000)` dovrebbe restituire `2125990`.

```js
assert.strictEqual(productSumNumbers(6000), 2125990);
```

`productSumNumbers(12000)` dovrebbe restituire `7587457`.

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
