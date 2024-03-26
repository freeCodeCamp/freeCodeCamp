---
id: 5900f3931000cf542c50fea5
title: 'Problem 38: Pandigitale Vielfache'
challengeType: 1
forumTopicId: 302042
dashedName: problem-38-pandigital-multiples
---

# --description--

Nimm die Zahl 192 und multipliziere sie jeweils mit 1, 2 und 3:

$$\begin{align}   192 × 1 = 192\\\\
  192 × 2 = 384\\\\   192 × 3 = 576\\\\
\end{align}$$

Durch Verkettung der einzelnen Produkte erhalten wir die 1 bis 9 pandigital, 192384576. Wir nennen 192384576 das verkettete Produkt von 192 und (1, 2, 3).

Dasselbe kann erreicht werden, indem man mit 9 beginnt und mit 1, 2, 3, 4 und 5 multipliziert, was das Pandigital 918273645 ergibt, das das verkettete Produkt von 9 und (1, 2, 3, 4, 5) ist.

Was ist die größte 1 bis `k` pandigitale `k`-stellige Zahl, die als verkettetes Produkt einer ganzen Zahl mit (1, 2, ..., `n`) gebildet werden kann, wobei `n` > 1?

# --hints--

`pandigitalMultiples(8)` sollte eine Zahl zurückgeben.

```js
assert(typeof pandigitalMultiples(8) === 'number');
```

`pandigitalMultiples(8)` sollte `78156234` zurückgeben.

```js
assert.strictEqual(pandigitalMultiples(8), 78156234);
```

`pandigitalMultiples(9)` sollte `932718654` zurückgeben.

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
