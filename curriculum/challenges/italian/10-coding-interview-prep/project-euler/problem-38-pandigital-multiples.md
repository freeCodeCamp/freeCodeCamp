---
id: 5900f3931000cf542c50fea5
title: 'Problema 38: Multipli pandigitali'
challengeType: 1
forumTopicId: 302042
dashedName: problem-38-pandigital-multiples
---

# --description--

Prendi il numero 192 e moltiplicalo separatemente per 1, 2, e 3:

$$\begin{align}   192 × 1 = 192\\\\
  192 × 2 = 384\\\\   192 × 3 = 576\\\\
\end{align}$$

Concatenando ogni prodotto otteniamo il pandigitale di cifre da 1 a 9, 192384576. Chiamiamo 192384576 il prodotto concatenato di 192 e (1, 2, 3).

Lo stesso può essere ottenuto iniziando con 9 e moltiplicandolo con 1, 2, 3, 4, e 5, dando il numero pandigitale 918273645, che è il prodotto concatenato di 9 e (1, 2, 3, 4, 5).

Quale è il pandigitale con cifre da 1 a `k` lungo `k` cifre che può essere formato come prodotto concatenato di un numeri intero (1, 2, ..., `n`) dove `n` > 1?

# --hints--

`pandigitalMultiples(8)` dovrebbe restituire un numero.

```js
assert(typeof pandigitalMultiples(8) === 'number');
```

`pandigitalMultiples(8)` dovrebbe restituire `78156234`.

```js
assert.strictEqual(pandigitalMultiples(8), 78156234);
```

`pandigitalMultiples(9)` dovrebbe restituire `932718654`.

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
