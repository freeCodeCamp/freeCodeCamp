---
id: 5900f38c1000cf542c50fe9f
title: 'Завдання 32: Панцифрові добутки'
challengeType: 1
forumTopicId: 301976
dashedName: problem-32-pandigital-products
---

# --description--

Допустимо, що `n`--цифрове число є панцифровим, якщо у ньому використовуються всі цифри від 1 до `n` лише один раз; наприклад, 5-цифрове число 15234 є панцифровим в проміжку від 1 до 5.

Добуток 7254 є незвичайним, оскільки рівність 39 × 186 = 7254, яка складається з 1-го множника, 2-го множника та добутку, є панцифровою у проміжку від 1 до 9.

Знайдіть суму всіх добутків, рівність 1-го множника / 2-го множника / добутку яких можна представити як панцифрове число в проміжку від 1 до `n`.

**Hint:** Деякі добутки можна отримати більше, ніж одним способом, тому переконайтесь, що ви включили цей добуток в суму лише один раз.

# --hints--

`pandigitalProducts(4)` має повернути число.

```js
assert(typeof pandigitalProducts(4) === 'number');
```

`pandigitalProducts(4)` має повернути `12`.

```js
assert.strictEqual(pandigitalProducts(4), 12);
```

`pandigitalProducts(6)` має повернути `162`.

```js
assert.strictEqual(pandigitalProducts(6), 162);
```

`pandigitalProducts(7)` має повернути `0`.

```js
assert.strictEqual(pandigitalProducts(7), 0);
```

`pandigitalProducts(8)` має повернути `13458`.

```js
assert.strictEqual(pandigitalProducts(8), 13458);
```

`pandigitalProducts(9)` має повернути `45228`.

```js
assert.strictEqual(pandigitalProducts(9), 45228);
```

# --seed--

## --seed-contents--

```js
function pandigitalProducts(n) {

  return true;
}

pandigitalProducts(4);
```

# --solutions--

```js
function pandigitalProducts(n) {
  function is1toNPandigital(n, digitStr) {
    // check if length is n
    if (digitStr.length !== n) {
      return false;
    }
    // check if pandigital
    for (let i = digitStr.length; i > 0; i--) {
      if (digitStr.indexOf(i.toString()) === -1) {
        return false;
      }
    }
    return true;
  }
  function concatenateNums(...numbers) {
    let digitStr = '';
    for (let i = 0; i < numbers.length; i++) {
      digitStr += numbers[i].toString();
    }
    return digitStr;
  }

  const pandigitalNums = [];
  const limit = 10 ** Math.floor(n / 2) - 1;
  let sum = 0;
  for (let mult1 = 2; mult1 < limit; mult1++) {
    for (let mult2 = 2; mult2 < limit; mult2++) {
      const product = mult1 * mult2;
      const concatenated = concatenateNums(mult1, mult2, product);
      if (concatenated.length > n) {
        break;
      } else if (concatenated.length < n) {
        continue;
      }
      if (
        is1toNPandigital(n, concatenated) &&
        !pandigitalNums.includes(product)
      ) {
        pandigitalNums.push(product);
        sum += product;
      }
    }
  }
  return sum;
}
```
