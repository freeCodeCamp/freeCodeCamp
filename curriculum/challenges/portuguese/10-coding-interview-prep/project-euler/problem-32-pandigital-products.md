---
id: 5900f38c1000cf542c50fe9f
title: 'Problema 32: Produtos pandigitais'
challengeType: 1
forumTopicId: 301976
dashedName: problem-32-pandigital-products
---

# --description--

Dizemos que um número de `n` algarismos é pandigital se ele usar todos os algarismos de 1 a `n` uma única vez. Por exemplo, o número 15234 é pandigital pois possui 5 algarismos e utiliza todos os algarismos entre 1 e 5.

Considere o produto 39 x 186 = 7254. O multiplicando (39), multiplicador (186) e o produto (7254) possuem, no total, nove algarismos e nenhum deles se repetem.

Calcule a soma de todos os produtos cujo multiplicando, multiplicador e produto formam um número pandigital (entre 1 e `n`).

**Dica:** alguns produtos podem ser obtidos de mais de uma forma, portanto, certifique-se de incluí-lo apenas uma vez na sua soma.

# --hints--

`pandigitalProducts(4)` deve retornar um número.

```js
assert(typeof pandigitalProducts(4) === 'number');
```

`pandigitalProducts(4)` deve retornar `12`.

```js
assert.strictEqual(pandigitalProducts(4), 12);
```

`pandigitalProducts(6)` deve retornar `162`.

```js
assert.strictEqual(pandigitalProducts(6), 162);
```

`pandigitalProducts(7)` deve retornar `0`.

```js
assert.strictEqual(pandigitalProducts(7), 0);
```

`pandigitalProducts(8)` deve retornar `13458`.

```js
assert.strictEqual(pandigitalProducts(8), 13458);
```

`pandigitalProducts(9)` deve retornar `45228`.

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
