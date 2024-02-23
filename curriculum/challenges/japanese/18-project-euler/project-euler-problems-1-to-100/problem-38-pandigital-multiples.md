---
id: 5900f3931000cf542c50fea5
title: '問題 38: パンデジタル倍数'
challengeType: 1
forumTopicId: 302042
dashedName: problem-38-pandigital-multiples
---

# --description--

192 に 1, 2, 3 をそれぞれ乗じます。

$$\begin{align}   192 × 1 = 192\\\\
  192 × 2 = 384\\\\   192 × 3 = 576\\\\
\end{align}$$

それぞれの積を連結すると、1 から 9 のパンデジタル数 192384576 になります。 192384576 を 192 と (1, 2, 3) の「連結積」と呼ぶことにします。

同様に、9 に 1, 2, 3, 4, 5 を乗じるとパンデジタル数 918273645 になります。これは 9 と (1, 2, 3, 4, 5) の連結積です。

`n` > 1 のとき、整数と (1, 2, ..., `n`) の連結積として成り立つ、1 から `k` が使われている `k` 桁のパンデジタル数のうち、最大のものを求めなさい。

# --hints--

`pandigitalMultiples(8)` は数値を返す必要があります。

```js
assert(typeof pandigitalMultiples(8) === 'number');
```

`pandigitalMultiples(8)` は `78156234` を返す必要があります。

```js
assert.strictEqual(pandigitalMultiples(8), 78156234);
```

`pandigitalMultiples(9)` は `932718654` を返す必要があります。

```js
assert.strictEqual(pandigitalMultiples(9), 932718654);
```

# --seed--

## --seed-contents--

```js
function pandigitalMultiples(k) {

  return true;
}

pandigitalMultiples(8);
```

# --solutions--

```js
function pandigitalMultiples(k) {
  function getKDigitConcatenatedProduct(num, k) {
    // returns false if concatenated product is not k digits
    let concatenatedProduct = num.toString();
    for (let i = 2; concatenatedProduct.length < k; i++) {
      concatenatedProduct += num * i;
    }
    return concatenatedProduct.length === k ? concatenatedProduct : false;
  }

  function is1toKPandigital(num, k) {
    const numStr = num.toString();

    // check if length is not k
    if (numStr.length !== k) {
      return false;
    }

    // check if pandigital
    for (let i = k; i > 0; i--) {
      if (numStr.indexOf(i.toString()) === -1) {
        return false;
      }
    }
    return true;
  }

  let largestNum = 0;
  for (let i = 10 ** Math.floor(k / 2) + 1; i >= 1; i--) {
    const concatenatedProduct = getKDigitConcatenatedProduct(i, k);
    if (is1toKPandigital(concatenatedProduct, k)) {
      const number = parseInt(concatenatedProduct, 10);
      if (number > largestNum) {
        largestNum = number;
      }
    }
  }
  return largestNum;
}
```
