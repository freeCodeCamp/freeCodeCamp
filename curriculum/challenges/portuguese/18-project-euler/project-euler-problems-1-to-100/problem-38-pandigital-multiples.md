---
id: 5900f3931000cf542c50fea5
title: 'Problema 38: Múltiplos pandigitais'
challengeType: 1
forumTopicId: 302042
dashedName: problem-38-pandigital-multiples
---

# --description--

Pegue o número 192 e multiplique-o por cada um entre 1, 2 e 3:

$$\begin{align}   192 × 1 = 192\\\\
  192 × 2 = 384\\\\   192 × 3 = 576\\\\
\end{align}$$

Ao concatenar cada produto, chegamos ao total 192384576. Esse resultado possui 9 algarismos e usa todos os números de 1 a 9 pelo menos uma vez. Chamaremos 192384576 o produto concatenado de 192 e (1, 2, 3).

O mesmo pode ser alcançado começando por 9 e multiplicando por 1, 2, 3, 4 e 5. O resultado é o pandigital 918273645, que é o produto concatenado de 9 e (1, 2, 3, 4, 5).

Qual é o maior número pandigital de 1 a `k` com `k` algarismos que pode ser formado como o produto concatenado de um inteiro com (1, 2, ..., `n`) onde `n` > 1?

# --hints--

`pandigitalMultiples(8)` deve retornar um número.

```js
assert(typeof pandigitalMultiples(8) === 'number');
```

`pandigitalMultiples(8)` deve retornar `78156234`.

```js
assert.strictEqual(pandigitalMultiples(8), 78156234);
```

`pandigitalMultiples(9)` deve retornar `932718654`.

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
