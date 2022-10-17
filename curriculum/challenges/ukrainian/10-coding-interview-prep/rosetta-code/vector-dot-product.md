---
id: 594810f028c0303b75339ad3
title: Скалярний добуток векторів
challengeType: 1
forumTopicId: 302343
dashedName: vector-dot-product
---

# --description--

Вектор може мати один або декілька значень, позначених впорядкованим набором чисел. Наприклад, (x), (x, y) або (x, y, z).

# --instructions--

Напишіть функцію, що приймає два вектори (представлені як одновимірні масиви) як вхідні дані та обчислює їхній скалярний добуток. Ваша функція має повернути `null` при недопустимих вхідних даних (наприклад, вектори різної довжини), або коли замість двох векторів приходять інші дані.

# --hints--

`dotProduct` має бути функцією.

```js
assert.equal(typeof dotProduct, 'function');
```

`dotProduct()` має повернути `null`.

```js
assert.equal(dotProduct(), null);
```

`dotProduct([1], [1])` має повернути `1`.

```js
assert.equal(dotProduct([1], [1]), 1);
```

`dotProduct([1], [1, 2])` має повернути `null`.

```js
assert.equal(dotProduct([1], [1, 2]), null);
```

`dotProduct([1, 3, -5], [4, -2, -1])` має повернути `3`.

```js
assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
```

`dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1])` має повернути `null`.

```js
assert.equal(dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1]), null);
```

`dotProduct([ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ])` має повернути `360`.

```js
assert.equal(dotProduct([ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ]), 360);
```

# --seed--

## --seed-contents--

```js
function dotProduct(...vectors) {

}
```

# --solutions--

```js
function dotProduct(...vectors) {
  if (!vectors || !vectors.length || vectors.length > 2 || vectors[0].length !== vectors[1].length) {
    return null;
  }
  const vectorLen = vectors[0].length;

  let prod = 0;
  let sum = 0;
  let j = vectorLen;
  let i = 2;
  // Sum terms
  while (j--) {
    i = 2;
    prod = 1;

    while (i--) {
      prod *= vectors[i][j];
    }
    sum += prod;
  }
  return sum;
}
```
