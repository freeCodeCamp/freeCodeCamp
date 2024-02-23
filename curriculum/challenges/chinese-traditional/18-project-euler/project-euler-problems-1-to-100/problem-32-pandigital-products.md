---
id: 5900f38c1000cf542c50fe9f
title: '問題 32：泛數字'
challengeType: 1
forumTopicId: 301976
dashedName: problem-32-pandigital-products
---

# --description--

We shall say that an `n`-digit number is pandigital if it makes use of all the digits 1 to `n` exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

乘法的總數7254是不尋常的，因爲其身份39×186 = 7254，含有乘法、除法和乘法的總數爲1到9個磅。

找出所有被乘數/乘數/產品標識可以寫成1到`n`的泛數字的所有產品的總和。

提示：某些產品可以通過多種方式獲得，因此請確保只在其總和中包括一次。

# --hints--

`pandigitalProducts(4)` 應該返回個整數

```js
assert(typeof pandigitalProducts(4) === 'number');
```

`pandigitalProducts(4)` 應該返回 `12`.

```js
assert.strictEqual(pandigitalProducts(4), 12);
```

`pandigitalProducts(6)` 應該返回 `162`.

```js
assert.strictEqual(pandigitalProducts(6), 162);
```

`pandigitalProducts(7)` 應該返回 `0`.

```js
assert.strictEqual(pandigitalProducts(7), 0);
```

`pandigitalProducts(8)` 應該返回 `13458`.

```js
assert.strictEqual(pandigitalProducts(8), 13458);
```

`pandigitalProducts(9)` 應該返回 `45228`.

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
