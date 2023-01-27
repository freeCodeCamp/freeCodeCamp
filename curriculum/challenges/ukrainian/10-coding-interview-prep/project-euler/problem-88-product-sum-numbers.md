---
id: 5900f3c51000cf542c50fed6
title: 'Проблема 88: Сума похідних чисел'
challengeType: 1
forumTopicId: 302203
dashedName: problem-88-product-sum-numbers
---

# --description--

Натуральне число, `N`, яке можна записати як суму і добуток даної множини, щонайменше двох натуральних чисел, $\\{a_1, a_2, \ldots , a_k\\}$, називається чисельною сумою: $N = a_1 + a_2 + \cdots + a_k = a_1 × a_2 × \cdots × a_k$.

Наприклад, 6 = 1 + 2 + 3 = 1 × 2 × 3.

Для заданої величини, `k`, необхідно назвати найменше N за допомогою цієї властивості мінімального числа похідних. Таким чином, мінімальними похідними для множин розміру - `k` = 2, 3, 4, 5, і 6.

<div style='margin-left: 4em;'>
  <var>k</var>=2: 4 = 2 × 2 = 2 + 2<br>
  <var>k</var>=3: 6 = 1 × 2 × 3 = 1 + 2 + 3<br>
  <var>k</var>=4: 8 = 1 × 1 × 2 × 4 = 1 + 1 + 2 + 4<br>
  <var>k</var>=5: 8 = 1 × 1 × 2 × 2 × 2  = 1 + 1 + 2 + 2 + 2<br>
  <var>k</var>=6: 12 = 1 × 1 × 1 × 1 × 2 × 6 = 1 + 1 + 1 + 1 + 2 + 6
</div><br>

Звідси, для 2 ≤ `k` ≤ 6, мінімальною сумою похідних є 4 + 6 + 8 + 12 = 30; зверніть увагу, що `8` в сумі додається лише раз.

Фактично, як і повним значенням мінімального числа похідних для 2 ≤ `k` ≤ 12 є $\\{4, 6, 8, 12, 15, 16\\}$, а сумою є `61`.

Яка сума мінімальних похідних чисел для 2 ≤ `k` ≤ `limit`?

# --hints--

`productSumNumbers(6)` має вивести число.

```js
assert(typeof productSumNumbers(6) === 'number');
```

`productSumNumbers(6)` має видати `30`.

```js
assert.strictEqual(productSumNumbers(6), 30);
```

`productSumNumbers(12)` має видати `61`.

```js
assert.strictEqual(productSumNumbers(12), 61);
```

`productSumNumbers(300)` має видати `12686`.

```js
assert.strictEqual(productSumNumbers(300), 12686);
```

`productSumNumbers(6000)` має видати `2125990`.

```js
assert.strictEqual(productSumNumbers(6000), 2125990);
```

`productSumNumbers(12000)` має видати `7587457`.

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
