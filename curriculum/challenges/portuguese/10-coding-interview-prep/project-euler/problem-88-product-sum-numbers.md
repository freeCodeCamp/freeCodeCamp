---
id: 5900f3c51000cf542c50fed6
title: 'Problema 88: Números de somas e produtos'
challengeType: 1
forumTopicId: 302203
dashedName: problem-88-product-sum-numbers
---

# --description--

Um número natural, `N`, que pode ser escrito como a soma e o produto de um determinado conjunto de, pelo menos, dois números naturais, $\\{a_1, a_2, \ldots , a_k\\}$, é chamado de um número de soma e produto: $N = a_1 + a_2 + \cdots + a_k = a_1 × a_2 × \cdots × a_k$.

Por exemplo: 6 = 1 + 2 + 3 = 1 x 2 x 3.

Para um determinado conjunto de tamanho `k`, vamos chamar o menor número N com essa propriedade de número mínimo de soma e produto. Os números mínimos de soma e produto para conjuntos de tamanho `k` = 2, 3, 4, 5 e 6 são os seguintes.

<div style='margin-left: 4em;'>
  <var>k</var>=2: 4 = 2 × 2 = 2 + 2<br>
  <var>k</var>=3: 6 = 1 × 2 × 3 = 1 + 2 + 3<br>
  <var>k</var>=4: 8 = 1 × 1 × 2 × 4 = 1 + 1 + 2 + 4<br>
  <var>k</var>=5: 8 = 1 × 1 × 2 × 2 × 2  = 1 + 1 + 2 + 2 + 2<br>
  <var>k</var>=6: 12 = 1 × 1 × 1 × 1 × 2 × 6 = 1 + 1 + 1 + 1 + 2 + 6
</div><br>

Assim, para 2 ≤ `k` ≤ 6, a soma de todos os números mínimos de soma e produto é 4 + 6 + 8 + 12 = 30. Observe que `8` é contado apenas uma vez na soma.

De fato, como o conjunto completo de números mínimos de soma e produto para 2 ≤ `k` ≤ 12 é $\\{4, 6, 8, 12, 15, 16\\}$, a soma é `61`.

Qual é a soma de todos os números mínimos de soma e produto para 2 ≤ `k` ≤ `limit`?

# --hints--

`productSumNumbers(6)` deve retornar um número.

```js
assert(typeof productSumNumbers(6) === 'number');
```

`productSumNumbers(6)` deve retornar `30`.

```js
assert.strictEqual(productSumNumbers(6), 30);
```

`productSumNumbers(12)` deve retornar `61`.

```js
assert.strictEqual(productSumNumbers(12), 61);
```

`productSumNumbers(300)` deve retornar `12686`.

```js
assert.strictEqual(productSumNumbers(300), 12686);
```

`productSumNumbers(6000)` deve retornar `2125990`.

```js
assert.strictEqual(productSumNumbers(6000), 2125990);
```

`productSumNumbers(12000)` deve retornar `7587457`.

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
