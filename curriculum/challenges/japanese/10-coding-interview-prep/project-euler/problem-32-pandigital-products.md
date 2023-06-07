---
id: 5900f38c1000cf542c50fe9f
title: '問題 32: パンデジタル積'
challengeType: 1
forumTopicId: 301976
dashedName: problem-32-pandigital-products
---

# --description--

1 から `n` までのすべての数字がちょうど 1 回ずつ使われている `n` 桁の数を、「パンデジタルである」と表現することにします。例えば、5 桁の数 15234 は 1 から 5 のパンデジタルです。

積 7254 は珍しい数です。なぜなら等式 39 × 186 = 7254 で表すことができ、その被乗数、乗数、積が 1 から 9 のパンデジタルだからです。

被乗数、乗数、積の等式を 1 から `n` までのパンデジタルとして表せる、すべての積の和を求めなさい。

**ヒント:** 一部の積は複数の等式で得られますが、それを和に一度だけ含めるようにしてください。

# --hints--

`pandigitalProducts(4)` は数値を返す必要があります。

```js
assert(typeof pandigitalProducts(4) === 'number');
```

`pandigitalProducts(4)` は `12` を返す必要があります。

```js
assert.strictEqual(pandigitalProducts(4), 12);
```

`pandigitalProducts(6)` は `162` を返す必要があります。

```js
assert.strictEqual(pandigitalProducts(6), 162);
```

`pandigitalProducts(7)` は `0` を返す必要があります。

```js
assert.strictEqual(pandigitalProducts(7), 0);
```

`pandigitalProducts(8)` は `13458` を返す必要があります。

```js
assert.strictEqual(pandigitalProducts(8), 13458);
```

`pandigitalProducts(9)` は `45228` を返す必要があります。

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
