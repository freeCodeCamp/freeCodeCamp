---
id: 5900f38c1000cf542c50fe9f
title: 问题32：Pandigital产品
challengeType: 5
videoUrl: ''
dashedName: problem-32-pandigital-products
---

# --description--

我们可以说，如果n位数字恰好一次使用了1到n的所有数字，那么它就是pandigital。 例如，5位数字15234是1到5泛数字。

乘积7254是不寻常的，因为其标识为39×186 = 7254，包含被乘数，乘数，乘积是1到9泛数。

找出所有被乘数/乘数/产品标识可以写成1到9泛数字的所有产品的总和。

提示：某些产品可以通过多种方式获得，因此请确保只在其总和中包括一次。

# --hints--

`pandigitalProducts()`是一个函数。

```js
assert(typeof pandigitalProducts === 'function');
```

`pandigitalProducts()`应该返回45228。

```js
assert.strictEqual(pandigitalProducts(), 45228);
```

# --seed--

## --seed-contents--

```js
function pandigitalProducts() {

  return true;
}

pandigitalProducts();
```

# --solutions--

```js
function pandigitalProducts() {
  function is1to9Pandigital(...numbers) {
    const digitStr = concatenateNums(...numbers);
    // check if length is 9
    if (digitStr.length !== 9) {
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
  let sum = 0;
  for (let mult1 = 2; mult1 < 9876; mult1++) {
    let mult2 = 123;
    while (concatenateNums(mult1, mult2, mult1 * mult2).length < 10) {
      if (is1to9Pandigital(mult1, mult2, mult1 * mult2) && !pandigitalNums.includes(mult1 * mult2)) {
        pandigitalNums.push(mult1 * mult2);
        sum += mult1 * mult2;
      }
      mult2++;
    }
  }
  return sum;
}
```
